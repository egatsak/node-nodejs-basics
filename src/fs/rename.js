import * as fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

const rename = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  try {
    const data = await fs.readdir(`${__dirname}/files`);

    if (data.includes("properFilename.md")) {
      throw new Error("FS operation failed");
    }

    await fs.rename(
      `${__dirname}/files/wrongFilename.txt`,
      `${__dirname}/files/properFilename.md`
    );

    console.log("File successfully renamed");
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await rename();
