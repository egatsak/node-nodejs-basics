import * as fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  try {
    const files = await fs.readdir(resolve(__dirname, "files"));
    await fs.mkdir(resolve(__dirname, "files_copy"), {
      recursive: false
    });
    for (let file of files) {
      await fs.copyFile(
        resolve(__dirname, "files", `${file}`),
        resolve(__dirname, "files_copy", `${file}`),
        fs.constants.COPYFILE_EXCL
      );
    }
    console.log("Files successfully copied");
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await copy();
