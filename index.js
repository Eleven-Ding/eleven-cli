#!/usr/bin/env node
const program = require("commander");
const { commanderHelpOptions } = require("./lib/core/help");
const { createProject } = require("./lib/core/create");
program.version(require("./package.json").version);

// help commands
commanderHelpOptions();

// use <create> create a project
createProject();

program.parse(process.argv);
