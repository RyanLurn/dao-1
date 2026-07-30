import { x } from "tinyexec";
import {
  beforeAll,
  afterAll,
  test,
  describe,
  expect,
  onTestFailed,
} from "vitest";

import { DockerClient } from "@/client";
import { removeDockerContainer } from "@/container/remove";
import { DockerContainerIdSchema } from "@/utils/schemas";

let dockerClient: DockerClient;

beforeAll(() => {
  dockerClient = new DockerClient({});
});

afterAll(async () => {
  await dockerClient.close();
});

// Success cases
describe("removeDockerContainer function should remove", async () => {
  test("an existing container by id", async () => {
    const { stdout } = await x(
      "docker",
      ["container", "create", "hello-world:latest"],
      { throwOnError: true },
    );
    const containerId = DockerContainerIdSchema.parse(stdout.trim());

    onTestFailed(async () => {
      await x("docker", ["container", "remove", containerId], {
        throwOnError: true,
      });
    });

    const { statusCode } = await removeDockerContainer({
      dockerClient,
      containerReference: containerId,
    });
    expect(statusCode).toBe(204);
  });
});
