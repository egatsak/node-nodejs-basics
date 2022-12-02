import * as crypto from "crypto";
import * as fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

const calculateHash = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  try {
    const data = await fs.readFile(
      `${__dirname}/files/fileToCalculateHashFor.txt`
    );
    const hashSum = crypto.createHash("sha256");
    hashSum.update(data);
    const hex = hashSum.digest("hex");
    console.log(hex);
  } catch (e) {
    console.log(e);
  }
};

await calculateHash();
