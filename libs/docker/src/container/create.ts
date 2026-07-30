import { z } from "zod";

import { ContainerNameSchema } from "@/utils/schemas";

export const DockerContainerCreateQueryParamsSchema = z
  .object({
    name: ContainerNameSchema,
    platform: z.templateLiteral([
      z.string(),
      z
        .templateLiteral([
          "/",
          z.string(),
          z.templateLiteral(["/", z.string()]).optional(),
        ])
        .optional(),
    ]),
  })
  .partial();
export type DockerContainerCreateQueryParams = z.infer<
  typeof DockerContainerCreateQueryParamsSchema
>;
