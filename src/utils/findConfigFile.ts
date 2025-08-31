import fs from "fs";
import path from "path";

export function findConfigFile(filename: string = "migratty-config.json") {
  try {
    const targetFilePath = recursiveSearch(filename);

    if (targetFilePath == null) {
      return undefined;
    }

    const targetFile = JSON.parse(fs.readFileSync(targetFilePath, "utf-8"));
    return targetFile;
  } catch (error) {
    console.error("Error reading directory:", error);
  }
}

function recursiveSearch(filename: string, startingPoint: string = process.cwd()) {
  const ignore = ["node_modules", ".git", ".vscode"];
  const entries = fs.readdirSync(startingPoint, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(startingPoint, entry.name);

    if (entry.isFile() && entry.name === filename) {
      return entryPath;
    }

    if (entry.isDirectory() && !ignore.includes(entry.name)) {
      const res = recursiveSearch(filename, entryPath);

      if (res) return res;
    }
  }

  return null;
}
