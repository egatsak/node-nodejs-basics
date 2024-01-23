import * as fs from "node:fs/promises";
import {fileURLToPath} from "node:url";
import {dirname, resolve} from "node:path";

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  try {
    const files = await fs.readdir(resolve(__dirname, "files"));
    await fs.mkdir(resolve(__dirname, "files_copy"), {
      recursive: false
    });

    const copyPromises = files.map(file =>
      fs.copyFile(
        resolve(__dirname, "files", `${file}`),
        resolve(__dirname, "files_copy", `${file}`),
        fs.constants.COPYFILE_EXCL
      )
    );

    await Promise.all(copyPromises);

    console.log("Files successfully copied");
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await copy();
