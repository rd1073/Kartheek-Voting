require('dotenv').config();

const express = require("express");
const conn=require("./config/db")
const app = express();
const cors = require('cors');
const authRoutes=require("./routes/authRoute")
 



app.use(express.json());
app.use(express.static('public'))

app.use(
    cors({
      origin: "http://localhost:3000",
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      // <-- location of the react app were connecting to
      credentials: true,
    }) 
  );
app.use(cors());

//app.use(cookieParser())


app.use("/auth", authRoutes);
 



 







app.listen(process.env.PORT,console.log(`Server running on 5000`));