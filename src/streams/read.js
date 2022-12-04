import { createReadStream } from "fs";
import { fileURLToPath } from "url";
import { resolve, dirname } from "path";

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const stream = createReadStream(
    resolve(__dirname, "files", "fileToRead.txt")
  );
  stream.pipe(process.stdout);
};

await read();
