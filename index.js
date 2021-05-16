const express = require('express');
const app = express();

require('dotenv').config();

// Mongo Connection
const connection = require('./config/db.config');
connection.once('open', () => console.log('DB Connected'));
connection.on('error', () => console.log('Error'));

app.use(
  express.json({
    extended: false,
  })
); //parse data to JSON

app.use('/', require('./routes/redirect'));
app.use('/api/url', require('./routes/url'));
app.use('/api/list', require('./routes/list'));

const PORT = process.env.PORT || 5050;
app.listen(PORT, console.log(`server started, listening PORT ${PORT}`));
