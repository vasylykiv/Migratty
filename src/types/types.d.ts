export interface Config {
  init?: InitConfig;
}

interface InitConfig {
  baseDir?: string;
  outDir?: string;
}
