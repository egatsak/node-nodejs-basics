import * as fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

const remove = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  try {
    await fs.rm(`${__dirname}/files/fileToRemove.txt`);
    console.log("File successfully deleted");
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await remove();
