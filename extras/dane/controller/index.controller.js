
const csvtojson = require('csvtojson');

const csvToJson =async (csv_string) => {
    let info= await csvtojson({delimiter:";"}).fromString(csv_string)
    console.log(info);
    return info
}

module.exports ={csvToJson}