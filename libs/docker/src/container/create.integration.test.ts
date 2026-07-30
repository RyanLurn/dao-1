import { afterAll, beforeAll, describe, expect, test } from "vitest";

import { DockerClient } from "@/client";
import { createDockerContainer } from "@/container/create";

let dockerClient: DockerClient;

beforeAll(() => {
  dockerClient = new DockerClient({});
});

afterAll(async () => {
  await dockerClient.close();
});

// Success case
test("createDockerContainer function should create a Docker container", async () => {
  const { statusCode, parsedBody } = await createDockerContainer({
    dockerClient,
    containerName: "createDockerContainer-integration-test-success-case",
    imageName: "hello-world:latest",
  });

  expect(statusCode).toBe(201);
  expect(parsedBody).toHaveProperty("Id");
  expect(parsedBody).toHaveProperty("Warnings", []);
});

// Failure cases
describe("createDockerContainer function should return", async () => {
  test("a 400 status code for a name that doesn't match the pattern of /?[a-zA-Z0-9][a-zA-Z0-9_.-]+", async () => {
    const { statusCode, parsedBody } = await createDockerContainer({
      dockerClient,
      containerName: "!",
      imageName: "hello-world:latest",
    });

    expect(statusCode).toBe(400);
    expect(parsedBody).toMatchObject({
      message: expect.stringContaining("Invalid container name"),
    });
  });

  test("a 404 status code for an image that doesn't exist", async () => {
    const nonExistentImageName = "no-such-image:latest";

    const { statusCode, parsedBody } = await createDockerContainer({
      dockerClient,
      containerName: "createDockerContainer-integration-test-404-case",
      imageName: nonExistentImageName,
    });

    expect(statusCode).toBe(404);
    expect(parsedBody).toHaveProperty(
      "message",
      `No such image: ${nonExistentImageName}`,
    );
  });
});
