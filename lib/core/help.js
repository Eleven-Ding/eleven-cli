#!/usr/bin/env node
const program = require("commander");

/**
 * 命令行 help
 */
function commanderHelpOptions() {
  program.option("create <project>", "create a project with eleven-cli names <project>");
}

module.exports = {
  commanderHelpOptions,
};
