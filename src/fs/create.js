import * as fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  try {
    await fs.appendFile(
      resolve(__dirname, "files", "fresh.txt"),
      "I am fresh and young",
      {
        flag: "ax"
      }
    );
    console.log("File successfully created");
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await create();
