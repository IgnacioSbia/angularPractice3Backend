const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");



const app = express();


//middleware
app.use(bodyParser.json());
app.use(cors());