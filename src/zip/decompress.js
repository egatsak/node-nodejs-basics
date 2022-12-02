import { fileURLToPath } from "url";
import { dirname } from "path";
import * as fsPromises from "fs/promises";
import * as fs from "fs";
import * as zlib from "zlib";

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const filePath = `${__dirname}/files/`;

  fs.createReadStream(filePath + "archive.gz")
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream(filePath + "fileToCompress.txt"))
    .on("finish", async () => {
      await fsPromises.rm(filePath + `archive.gz`);
      console.log("Decompression done!");
    });
};

await decompress();
