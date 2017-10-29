//set up dependencies
require('dotenv').load();
const PORT = process.env.PORT || 8000;
const express = require('express');
const app = express();

//set up ejs
app.set('view engine', 'ejs');

//set up static files
app.use(express.static('public'));

//set up routes
const index = require('./routes/index');
app.use('/', index);

//set up port
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})

module.exports = app;
