const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const angularRoutes = require('./Routes/angularRoutes')



const app = express();


//middleware
app.use(bodyParser.json());
app.use(cors());

//Routes
app.use('/api', angularRoutes);


//Sv
//Launch Server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Server successfully launched at PORT:8000");
});