import { z } from "zod";

import type { DockerClient } from "@/client";

import { DOCKER_ENGINE_API_RESOURCES } from "@/utils/constants";
import {
  DockerContainerIdSchema,
  DockerErrorResponseBodySchema,
} from "@/utils/schemas";

const SuccessResponseBodySchema = z.object({
  Id: DockerContainerIdSchema,
  Warnings: z.array(z.string()),
});

export async function createDockerContainer({
  dockerClient,
  containerName,
  imageName,
  autoRemove = true,
}: {
  dockerClient: DockerClient;
  containerName: string;
  imageName: string;
  autoRemove?: boolean;
}) {
  const { statusCode, statusText, body } = await dockerClient.request({
    path: `/${dockerClient.apiVersion}/${DOCKER_ENGINE_API_RESOURCES.CONTAINERS}/create`,
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
  const jsonBody = await body.json();

  if (statusCode === 201) {
    return {
      statusCode,
      statusText,
      parsedBody: SuccessResponseBodySchema.parse(jsonBody),
    };
  }

  return {
    statusCode,
    statusText,
    parsedBody: DockerErrorResponseBodySchema.parse(jsonBody),
  };
}
