const pg = require("pg");

const execute = async (sql) => {
  const client = new pg.Client();
  await client.connect();
  const res = await client.query(sql);
  await client.end();
  return res;
};

module.exports = { execute };
