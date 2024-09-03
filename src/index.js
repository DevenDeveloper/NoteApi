const express = require("express");
const app = express();
const quotes = require("./quote.json");
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const mongoose = require("mongoose");

app.use(express.json());

app.use(cors());

app.use("/users", userRouter);
app.use("/note", noteRouter);


app.get("/", (req, res)=>{
    res.send("Hello from DEVEN's Project");
});

const PORT = process.env.PORT || 500;

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server Started on port no. "+ PORT);
    });
    
})
.catch((error)=>{
    console.log(error);
});



// app.get("/random", (req, res)=>{
//     let index = Math.floor(Math.random() * quotes.length);
//     let quote = quotes[index];
//     res.status(200).json(quote);
// });
