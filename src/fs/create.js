import * as fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

const create = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  try {
    await fs.appendFile(
      `${__dirname}/files/fresh.txt`,
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
