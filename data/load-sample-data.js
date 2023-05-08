const fs = require('fs');
const mongoose = require('mongoose');
require('dotenv').config({ path: __dirname + '/../variables.env' });

mongoose.connect(process.env.DEV_DATABASE);

const Product = require('../models/Product');
const User = require('../models/User');

async function deleteData() {
  console.log('Deleting data...');
  await Product.remove();
  await User.remove();
  console.log(
    'Data Deleted. To load sample data, run\n\n\t npm run sample\n\n'
  );
  process.exit();
}

async function loadData() {
  try {
    const products = JSON.parse(
      fs.readFileSync(__dirname + '/Product.json', 'utf-8')
    );
    await Product.insertMany(products);
    console.log('Finished importing sample data.');
    process.exit();
  } catch (e) {
    console.log(e);
    process.exit();
  }
}

if (process.argv.includes('--delete')) {
  deleteData();
} else {
  loadData();
}
