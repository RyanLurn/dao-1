import { afterAll, beforeAll, expect, test } from "vitest";

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
  expect(parsedBody).toHaveProperty("Warnings");
});
