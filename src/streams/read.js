import * as fs from "node:fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

const read = async () => {
  // Write your code here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  /*   const fd = await open(`${__dirname}/files/fileToRead.txt`); */
  const stream = new ReadableStream(
    `${__dirname}/files/fileToRead.txt`
  );
  stream.pipe(process.stdout);
};

await read();
