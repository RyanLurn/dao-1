import { z } from "zod";

import { DockerContainerNameSchema } from "@/utils/schemas";

export const DockerContainerCreateQueryParamsSchema = z
  .object({
    name: DockerContainerNameSchema,
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
