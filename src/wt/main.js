import { Worker } from "worker_threads";
import os from "os";
import { fileURLToPath } from "url";
import { dirname, resolve as pathResolve } from "path";

const FIRST_ARG = 10;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const runService = async (workerData) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker(pathResolve(__dirname, "worker.js"), {
      workerData
    });

    worker.on("message", resolve);

    worker.on("error", reject);

    worker.on("exit", (code) => {
      if (code !== 0) {
        reject(new Error(`stopped with ${code} exit code`));
      }
    });
  });
};

const performCalculations = async () => {
  const promises = [];

  for (let i = 0; i < os.cpus().length; i++) {
    const promise = runService(FIRST_ARG + i);
    promises.push(promise);
  }

  Promise.allSettled(promises)
    .then((result) => {
      return result.map((item) => {
        if (item.status === "fulfilled") {
          return { status: "resolved", data: item.value };
        } else {
          return { status: "error", data: null };
        }
      });
    })
    .then((res) => console.log(res));
};

await performCalculations();
