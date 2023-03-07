const { exec, spawn } = require("child_process");

const commandSpwan = (...args) => {
  return new Promise((resolve, reject) => {
    const childProcess = spawn(...args);
    // 输出流
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stderr);

    childProcess.on("close", () => {
      resolve();
    });
  });
};

module.exports = {
  commandSpwan,
};
