const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/ecommerce", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const informationSchema = {
  fname: String,
  lname: String,
  email: String,
  contact: String,
  address: String
};

const information = mongoose.model("information", informationSchema);


app.get("/", (req, res) => {
  res.send("Hello");
});

app.post("/api", (req, res) => {
  res.send("/");
  const firstname = req.body.firstName;
  const lastname = req.body.lastName;
  const contactNumber = req.body.contact;
  const emailId = req.body.email;
  const addressBook = req.body.address;
  
  const Information = new information({
    fname: firstname,
    lname: lastname,
    email:emailId,
    contact:contactNumber,
    address:addressBook
  });
  
  Information.save();
  
});

app.listen(port, () => console.log(`Listening on port ${port}`));
