import * as crypto from "node:crypto";
import {Transform} from "node:stream";
import {fileURLToPath} from "node:url";
import {dirname, resolve} from "node:path";
import {createReadStream} from "node:fs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = () => {
  const dataStream = createReadStream(resolve(__dirname, "files", "fileToCalculateHashFor.txt"));
  const hashSum = crypto.createHash("sha256");

  const hashStream = new Transform({
    transform(chunk, encoding, callback) {
      hashSum.update(chunk);
      callback(null);
    },
    flush(callback) {
      const hex = hashSum.digest("hex");
      callback(null, hex);
    }
  });

  dataStream.pipe(hashStream).pipe(process.stdout);
};

calculateHash();
