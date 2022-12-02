import * as fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  try {
    await fs.mkdir(`${__dirname}/files_copy/`, { recursive: false });
    const files = await fs.readdir(`${__dirname}/files`);
    for await (let file of files) {
      await fs.copyFile(
        `${__dirname}/files/${file}`,
        `${__dirname}/files_copy/${file}`,
        fs.constants.COPYFILE_EXCL
      );
    }
    console.log("Files successfully copied");
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await copy();
