const program = require("commander");
const { downloadFromGithub } = require("./action");

function createProject() {
  program
    .command("create <project>")
    .description("create project with eleven-cli")
    .action(downloadFromGithub);
}

module.exports = {
  createProject,
};
