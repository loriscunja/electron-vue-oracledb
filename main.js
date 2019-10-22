/* eslint-disable */
const isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
  require('./config/dev.js');
} else {
  require('./config/prod.js');
}
/* eslint-enable */
