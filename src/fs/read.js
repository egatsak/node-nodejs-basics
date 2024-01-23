import * as fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  try {
    const data = await fs.readFile(
      resolve(__dirname, "files", "fileToRead.txt"),
      {
        encoding: "utf8"
      }
    );
    console.log(data);
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await read();
