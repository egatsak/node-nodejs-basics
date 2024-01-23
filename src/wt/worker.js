import { workerData, parentPort } from "worker_threads";

const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  console.log(process.pid);
  setTimeout(() => {
    parentPort.postMessage(nthFibonacci(workerData));
  }, 10000);
};

sendResult();
