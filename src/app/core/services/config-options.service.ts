import { ConfigModel } from '../models/config.model';

export class ConfigOptionsService {
  private config: ConfigModel;

  getConfig() {
    return this.config;
  }

  setConfig(config: Partial<ConfigModel>) {
    this.config = { ...this.config, ...config };
  }
}
