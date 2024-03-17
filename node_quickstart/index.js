// Code  for mongoose config in backend
// Filename - backend/index.js
 
// To connect with your mongoDB database
const mongoose = require('mongoose');
mongoose.set("strictQuery", false)
mongoose.
connect("mongodb+srv://hxf5155:zMcATSrkZkr5rQAc@hungryvalley.8k7huj4.mongodb.net/?retryWrites=true&w=majority&appName=HungryValley", {
    dbName: 'HungryValley',
    useNewUrlParser: true,
    useUnifiedTopology: true
},).then(() =>
    console.log("Connected to MongoDB!"))
    .catch((error) => {    
    console.log(error)
})
 
// Schema for users of app
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
const User = mongoose.model('users', UserSchema);
User.createIndexes();
 
// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.listen(5000);
app.get("/", (req, resp) => {
 
    resp.send("App is Working");
});
 
app.post("/register", async (req, resp) => {
    try {
        const user = new User(req.body);
        let result = await user.save();
        result = result.toObject();
        if (result) {
            delete result.password;
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("User already register");
        }
 
    } catch (e) {
        resp.send("Something Went Wrong");
    }
});