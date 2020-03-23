const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const middleware = require('./middleware');
require('dotenv').config();

const app = express();
app.listen(process.env.PORT || 5000);

app.use(cors());
app.use(bodyParser.json());
app.use('/', middleware.logRequests);


