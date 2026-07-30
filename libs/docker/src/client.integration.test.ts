import { expect, onTestFinished, test } from "vitest";

import { DockerClient } from "@/client";

const TEST_PATH = "/_ping";
const TEST_METHOD = "GET";

test(`An instance of the DockerClient class should be able to reach the Docker Engine API's ${TEST_METHOD} ${TEST_PATH} endpoint`, async () => {
  const dockerClient = new DockerClient({});

  onTestFinished(async () => {
    await dockerClient.close();
  });

  const { statusCode } = await dockerClient.request({
    path: TEST_PATH,
    method: TEST_METHOD,
  });
  expect(statusCode).toBe(200);
});
