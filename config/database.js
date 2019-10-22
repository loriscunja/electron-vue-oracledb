/* eslint-disable */
let connection;
const oracledb = require('oracledb');

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

require('dotenv').config();

window.db = {};
window.db.connect = async () => {
  try {
    connection = await oracledb.getConnection({
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      connectString: `${process.env.DB_HOST}/${process.env.DB_NAME}`,
    });
    return connection;
  } catch (err) {
    return err;
  }
};

window.db.close = async () => {
  try {
    if (connection) {
      await connection.close();
    }
    return true;
  } catch (err) {
    return err;
  }
};
/* eslint-enable */
