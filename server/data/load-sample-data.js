const fs = require('fs');
const mongoose = require('mongoose');
require('dotenv').config({ path: __dirname + '/../variables.env' });

mongoose.connect(process.env.DEV_DATABASE);

const Course = require('../models/Course');
const User = require('../models/User');

async function deleteData() {
  console.log('Deleting data...');
  await Course.remove();
  await User.remove();
  console.log(
    'Data Deleted. To load sample data, run\n\n\t npm run sample\n\n'
  );
  process.exit();
}

async function loadData() {
  try {
    const courses = JSON.parse(
      fs.readFileSync(__dirname + '/Course.json', 'utf-8')
    );
    await Course.insertMany(courses);
    console.log('Finished importing sample data.');
    process.exit();
  } catch (e) {
    console.log(e);
    process.exit();
  }
}


module.exports.loadData = loadData;
module.exports.deleteData = deleteData;