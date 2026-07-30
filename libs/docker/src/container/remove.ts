import type { DockerClient } from "@/client";
import type { DockerContainerId, DockerContainerName } from "@/utils/schemas";

import { DOCKER_ENGINE_API_RESOURCES } from "@/utils/constants";
import { DockerErrorResponseBodySchema } from "@/utils/schemas";

export async function removeDockerContainer({
  dockerClient,
  containerReference,
  willRemoveAnonymousVolumes = false,
  willRemoveLink = false,
  willForce = false,
}: {
  dockerClient: DockerClient;
  containerReference: DockerContainerName | DockerContainerId;
  willRemoveAnonymousVolumes?: boolean;
  willRemoveLink?: boolean;
  willForce?: boolean;
}) {
  const { statusCode, statusText, body } = await dockerClient.request({
    path: `/${dockerClient.apiVersion}/${DOCKER_ENGINE_API_RESOURCES.CONTAINERS}/${containerReference}`,
    method: "DELETE",
    query: {
      v: willRemoveAnonymousVolumes,
      force: willForce,
      link: willRemoveLink,
    },
  });

  if (statusCode === 204) {
    return { statusCode, statusText, parsedBody: null };
  }

  const jsonBody = await body.json();
  return {
    statusCode,
    statusText,
    parsedBody: DockerErrorResponseBodySchema.parse(jsonBody),
  };
}
