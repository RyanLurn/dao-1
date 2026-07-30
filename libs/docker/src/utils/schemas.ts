import { z } from "zod";

import {
  DOCKER_CONTAINER_NAME_FORMAT,
  DOCKER_CONTAINER_NAME_REGEX,
} from "@/utils/constants";

export const DockerContainerIdSchema = z
  .hash("sha256", { enc: "hex" })
  .brand<"DockerContainerId">();
export type DockerContainerId = z.infer<typeof DockerContainerIdSchema>;

export const DockerContainerNameSchema = z
  .stringFormat(DOCKER_CONTAINER_NAME_FORMAT, DOCKER_CONTAINER_NAME_REGEX)
  .brand<"DockerContainerName">();
export type DockerContainerName = z.infer<typeof DockerContainerNameSchema>;

export const DockerErrorResponseBodySchema = z.object({
  message: z.string(),
});
