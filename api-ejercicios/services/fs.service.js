const fs = require("fs");

const saveFile = (path, data) => {
  return fs.writeFileSync(path, data);
};

module.exports = { saveFile };
