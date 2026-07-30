import { z } from "zod";

import { CONTAINER_NAME_FORMAT, CONTAINER_NAME_REGEX } from "@/utils/constants";

export const ContainerNameSchema = z
  .stringFormat(CONTAINER_NAME_FORMAT, CONTAINER_NAME_REGEX)
  .brand<"ContainerName">();
export type ContainerName = z.infer<typeof ContainerNameSchema>;
