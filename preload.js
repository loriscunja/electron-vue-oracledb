/* eslint-disable */
let connection;
const oracledb = require('oracledb');
require('dotenv').config();

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

window.db = {};
window.db.connect = async () => {
  console.log(process.env.DB_USER);
  try {
    connection = await oracledb.getConnection({
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      connectString: `${process.env.DB_HOST}/${process.env.DB_NAME}`,
    });
    console.log('Successfully connected to Oracle!');
    return connection;
  } catch (err) {
    console.log('Error: ', err);
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
    console.log('Error when closing the database connection: ', err);
    return err;
  }
};
/* eslint-enable */
