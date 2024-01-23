import * as fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const list = async () => {
  try {
    const data = await fs.readdir(resolve(__dirname, "files"));
    console.log(data);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await list();
