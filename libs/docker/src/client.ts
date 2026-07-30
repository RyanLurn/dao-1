import { Client } from "undici";

import {
  DEFAULT_DOCKER_ENGINE_API_SOCKET_PATH,
  DEFAULT_DOCKER_ENGINE_API_URL,
  DEFAULT_DOCKER_ENGINE_API_VERSION,
} from "@/utils/constants";

export class DockerClient extends Client {
  readonly apiVersion: string;

  constructor({
    socketPath = DEFAULT_DOCKER_ENGINE_API_SOCKET_PATH,
    apiUrl = DEFAULT_DOCKER_ENGINE_API_URL,
    apiVersion = DEFAULT_DOCKER_ENGINE_API_VERSION,
  }: {
    socketPath?: string;
    apiUrl?: string;
    apiVersion?: string;
  }) {
    super(apiUrl, {
      socketPath,
    });
    this.apiVersion = apiVersion;
  }
}
