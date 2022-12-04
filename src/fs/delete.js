import * as fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  try {
    await fs.rm(resolve(__dirname, "files", "fileToRemove.txt"));
    console.log("File successfully deleted");
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await remove();
