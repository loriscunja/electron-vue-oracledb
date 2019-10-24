const bcrypt = require('bcryptjs');

const getHash = password => {
  return bcrypt.hash(password, 8);
};

getHash('test').then(hash => {
  console.log(hash);
});
