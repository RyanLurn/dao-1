import { BaseError } from "@/classes/base";

export class UnexpectedError extends BaseError<"UNEXPECTED_ERROR"> {
  readonly name = "UnexpectedError";
  readonly code = "UNEXPECTED_ERROR";
  readonly context?: Record<string, unknown>;

  constructor({
    action,
    cause,
    context,
  }: {
    action: string;
    cause: unknown;
    context?: Record<string, unknown>;
  }) {
    super({
      message: `Failed to ${action} because of an unexpected ${cause instanceof Error ? cause.name : "non-Error exception"}.`,
      cause,
    });
    this.context = context;
  }
}
