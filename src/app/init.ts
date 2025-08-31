import path from "path";
import fs from "fs";

import { findConfigFile } from "../utils/findConfigFile";
import { defaultConfig } from "../config/default-config";

import type { Config } from "../types/types";

const config: Config = findConfigFile();

export function createDirectories() {
  try {
    const def = defaultConfig.init!;
    const { baseDir = def.baseDir, outDir = def.outDir } = config.init ?? {};

    const parentFolderPath = path.join(process.cwd(), baseDir!, outDir!);
    fs.mkdirSync(parentFolderPath, { recursive: true });
  } catch (error) {
    console.log(error);
  }
}

createDirectories();
