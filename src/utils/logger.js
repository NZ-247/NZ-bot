const { version } = require("../../package.json");
const cfonts = require('cfonts');

exports.sayLog = (message) => {
  console.log("\x1b[36m[NZ BOT | TALK]\x1b[0m", message);
};

exports.inputLog = (message) => {
  console.log("\x1b[30m[NZ BOT | INPUT]\x1b[0m", message);
};

exports.infoLog = (message) => {
  console.log("\x1b[34m[NZ BOT | INFO]\x1b[0m", message);
};

exports.successLog = (message) => {
  console.log("\x1b[32m[NZ BOT | SUCCESS]\x1b[0m", message);
};

exports.errorLog = (message) => {
  console.log("\x1b[31m[NZ BOT | ERROR]\x1b[0m", message);
};

exports.warningLog = (message) => {
  console.log("\x1b[33m[NZ BOT | WARNING]\x1b[0m", message);
};

exports.bannerLog = () => {
  const banner = cfonts.render(("Bot_NZ°©"), {
      font: "block",
      align: "center",
      colors: [`cyan`,`white`,`cyan`],
  });
  console.log(banner.string);
};
