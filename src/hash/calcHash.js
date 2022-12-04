import * as crypto from "crypto";
import * as fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
  try {
    const data = await fs.readFile(
      resolve(__dirname, "files", "fileToCalculateHashFor.txt")
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
