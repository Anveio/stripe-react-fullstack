require('dotenv').config({ path: __dirname + '/../variables.env' });
const fs = require('fs');

const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE);

// import all of our models - they need to be imported only once
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
    console.log('PATH:', __dirname + '/Product.json');
    // const products = JSON.parse(
    //   fs.readFileSync(__dirname + '/Product.json', 'utf-8')
    // );
    const products = [];

    await Product.insertMany(products);
    console.log('👍👍👍👍👍👍👍👍 Done!');
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
