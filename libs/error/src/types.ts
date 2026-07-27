import type { Options, ErrorObject } from "serialize-error";

export type { ErrorObject };

export interface AppError<Code extends string> extends Error {
  code: Code;
}

export interface FlatError<Code extends string> {
  name: string;
  message: string;
  code: Code;
}

export interface FlatSerializeOptions {
  mode: "flat";
}

export interface NestedSerializeOptions extends Options {
  mode: "nested";
}

export type SerializeErrorOptions =
  | FlatSerializeOptions
  | NestedSerializeOptions;
