import { z } from "zod";

import type { DockerClient } from "@/client";

import { DockerErrorResponseBodySchema } from "@/utils/schemas";

const SuccessResponseBodySchema = z.object({
  Id: z.string(),
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
    path: `/${dockerClient.apiVersion}/containers/create`,
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

  return {
    statusCode,
    statusText,
    parsedBody:
      statusCode === 201
        ? SuccessResponseBodySchema.parse(jsonBody)
        : DockerErrorResponseBodySchema.parse(jsonBody),
  };
}
