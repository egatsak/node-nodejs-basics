import * as fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  try {
    await fs.cp(`${__dirname}/files1/`, `${__dirname}/files_copy/`, {
      force: false,
      errorOnExist: true,
      recursive: true,
      flag: "ax"
    });
    console.log("Files successfully copied");
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await copy();
