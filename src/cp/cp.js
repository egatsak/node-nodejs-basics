import { fork } from "child_process";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
  const child = fork(resolve(__dirname, "files", "script.js"), [
    ...args.slice(2)
  ]);

  child.on("message", (message) => {
    console.log("Message from child:", message.toString());
  });
};

spawnChildProcess(process.argv);
