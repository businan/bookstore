const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

const connectDB = require("./models/connectDB");
connectDB();

const router = require('./routes/router');

app.use("/api", router)


// production
if (process.env.NODE_ENV === "production") {
   app.use(express.static("client/build"));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname,"client","build","index.html"))
}) 
};


app.listen(process.env.port || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });