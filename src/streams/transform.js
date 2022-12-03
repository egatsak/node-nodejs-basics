import { Transform } from "stream";
import { pipeline } from "stream/promises";

const transform = async () => {
  const reverseStream = new Transform({
    transform(data, encoding, callback) {
      const reversedData = data
        .toString()
        .split("")
        .reverse()
        .join("");
      this.push(reversedData + "\n");
      callback();
    }
  });
  try {
    await pipeline(process.stdin, reverseStream, process.stdout);
  } catch (e) {
    console.log(e);
  }
};

await transform();
