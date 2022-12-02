import { open } from "node:fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { createWriteStream } from "node:fs";

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const writable = createWriteStream(
    `${__dirname}/files/fileToWrite.txt`
  );
  process.stdout.write("Enter data:\n");
  process.stdin.on("data", (data) => {
    writable.write(data);
    process.stdout.write(
      "Data saved to filetowrite.txt\nYou can enter some more data:\n"
    );
  });

  /* try {
    const fd = await open(`${__dirname}/files/fileToWrite.txt`, "a+");
    const stream = fd.createWriteStream();

    process.stdout.write("Please enter data: \n");
    process.stdin.pipe(stream);
  } catch (e) {
    console.log(e);
  } */
};

await write();
