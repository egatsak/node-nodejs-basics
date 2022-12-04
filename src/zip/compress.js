import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import * as fs from "fs";
import * as zlib from "zlib";
import * as fsPromises from "fs/promises";

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = resolve(__dirname, "files");

  fs.createReadStream(resolve(filePath, "fileToCompress.txt"))
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream(resolve(filePath, "archive.gz")))
    .on("finish", async () => {
      await fsPromises.rm(resolve(filePath, `fileToCompress.txt`));
      console.log("Compression done!");
    });
};

await compress();
