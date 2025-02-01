const { parentPort } = require("worker_threads");

if (parentPort) {
    let j = 0;
    for (let i = 0; i < 30000000000; i++) {
        j++;
    }

    parentPort.postMessage(j);
} else {
    console.error("This script is not running as a worker thread.");
}
