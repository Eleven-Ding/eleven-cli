const { promisify } = require("util");
const download = promisify(require("download-git-repo"));
const fs = require("fs");
const path = require("path");
const { exec, exit } = require("shelljs");
const { commandSpwan } = require("../utils/terminal");
const open = require("open");
const { REACT_REPOR_PATH } = require("../config/repo-config");

// 需要区分 mac 和 window

async function downloadFromGithub(project) {
  // 1. clone 项目
  const destPath = path.resolve(path.resolve(), project);
  if (fs.existsSync(destPath)) {
    exec(`echo 'destination "${project}" is already exsit' \n`);
    exit(-1);
  }
  await download(REACT_REPOR_PATH, project, {
    clone: true,
  });
  // 2. npm run install
  const command = process.platform === "win32" ? "npm.cmd" : "npm";
  await commandSpwan(command, ["install"], {
    cwd: `./${project}`,
  });
  // 3. npm run serve
  commandSpwan(command, ["run", "serve"], {
    cwd: `./${project}`,
  });
  // 4. open 8080
  open("http://localhost:8080/");
}

module.exports = {
  downloadFromGithub,
};
