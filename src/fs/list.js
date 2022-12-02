import * as fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

export const list = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  try {
    const data = await fs.readdir(`${__dirname}/files`);
    console.log(data);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await list();
