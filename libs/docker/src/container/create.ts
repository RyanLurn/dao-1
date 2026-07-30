import type { DockerClient } from "@/client";

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
    path: `/${dockerClient.apiVersion}/container/create`,
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
