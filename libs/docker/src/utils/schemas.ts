import { z } from "zod";

import {
  DOCKER_CONTAINER_NAME_FORMAT,
  DOCKER_CONTAINER_NAME_REGEX,
} from "@/utils/constants";

export const DockerContainerNameSchema = z
  .stringFormat(DOCKER_CONTAINER_NAME_FORMAT, DOCKER_CONTAINER_NAME_REGEX)
  .brand<"DockerContainerName">();
export type DockerContainerName = z.infer<typeof DockerContainerNameSchema>;
