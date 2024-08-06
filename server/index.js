const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const UserModel = require('./models/users');

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/curd", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/',(req,res)=>{
    UserModel.find({})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})


app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err));
});

app.listen(3001, () => {
  console.log('Server running');
});
