const fs = require('fs');

const saveBuffer = (buffer, nameFile) => {
    fs.writeFileSync("./docs/temp/"+nameFile,buffer)
}
module.exports={saveBuffer}