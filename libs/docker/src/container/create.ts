import type { Client } from "undici";

import { DEFAULT_DOCKER_ENGINE_API_VERSION } from "@/utils/constants";

export async function createDockerContainer({
  dockerClient,
  containerName,
  imageName,
  autoRemove = true,
}: {
  dockerClient: Client;
  containerName: string;
  imageName: string;
  autoRemove?: boolean;
}) {
  const { statusCode, statusText, body } = await dockerClient.request({
    path: `/${DEFAULT_DOCKER_ENGINE_API_VERSION}/container/create`,
    method: "POST",
    query: {
      name: containerName,
    },
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Image: imageName,
      HostConfig: {
        AutoRemove: autoRemove,
      },
    }),
  });
  return { statusCode, statusText, body };
}
