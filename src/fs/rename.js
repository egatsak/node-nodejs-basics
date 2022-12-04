import * as fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  try {
    const data = await fs.readdir(resolve(__dirname, "files"));

    if (data.includes("properFilename.md")) {
      throw new Error("FS operation failed");
    }

    await fs.rename(
      resolve(__dirname, "files", "wrongFilename.txt"),
      resolve(__dirname, "files", "properFilename.md")
    );

    console.log("File successfully renamed");
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await rename();
