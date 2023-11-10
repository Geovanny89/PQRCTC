const express = require('express');
const  sequelize  = require('./src/database/db');
const cors = require('cors');

require('dotenv').config();

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.static("storage"))
app.use(express.static('assets'));

const PORT = process.env.PORT || 3000
app.use('/api', require('./src/routes'))


async function main() {
  try {
    await sequelize.sync({ force: false });
    console.log('Connection has been established successfully.');
    app.listen(PORT)
    console.log(`Server listening on port ${PORT}`)
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();