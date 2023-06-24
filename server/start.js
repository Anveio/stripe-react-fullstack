const mongoose = require('mongoose');
const errorHandlers = require('./handlers/errorHandlers');
const { initializeDatabase } = require('./data/initializeDatabase')

require('dotenv').config({ path: 'variables.env' });

// Models must be registered BEFORE importing app.
require('./models/User');
require('./models/Course');

const app = require('./app');

// Try and handle as much configuration based on environment in one place.
switch (process.env.NODE_ENV) {
  case 'development':
    console.log('App starting in development');
    app.use(errorHandlers.developmentErrors);

    const db = mongoose.connect(process.env.DEV_DATABASE)

    mongoose.connection
      .on('error', err => {
        console.error(`Error connecting to dev database ${err.message}`)
      })
      .on('open', () => {
        Promise.all([db]).then(() => {
          initializeDatabase(mongoose.connection);
        })
      })
    break;
  case 'production':
    console.log('App starting in production');
    mongoose.connect(process.env.PROD_DATABASE);
    mongoose.connection.on('error', err => {
      console.error(`Error connecting to production database ${err.message}`);
    });
    break;
  default:
    return console.log('Invalid environment setting');
}

const server = app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${server.address().port}.`);
});
