import { fileURLToPath } from "url";
import { dirname } from "path";
import { createReadStream } from "fs";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const stream = createReadStream(
    `${__dirname}/files/fileToRead.txt`
  );
  stream.pipe(process.stdout);
};

await read();
