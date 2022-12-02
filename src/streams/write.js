import { open } from "node:fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  try {
    const fd = await open(`${__dirname}/files/fileToWrite.txt`, "a+");
    const stream1 = fd.createWriteStream();

    process.stdout.write("Please enter data: \n");
    process.stdin.pipe(stream1);
    process.stdin.on("data", () => {
      process.stdout.write(
        "Data successfully appended to fileToWrite.txt"
      );
      process.exit();
    });
  } catch (e) {
    console.log(e);
  }
};

await write();
