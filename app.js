import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes";
import router from "./routes/user-routes";
import cors from "cors";
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
     process.env.DATABASE || "mongodb+srv://umang:umang@cluster0.cmvflrb.mongodb.net/?retryWrites=true&w=majority"
  )

  
  // .then(() => app.listen(port))
  // .then(() =>
  //   console.log(`Connected TO Database and Listening TO Localhost ${port}`)
  // )
  // .catch((err) => console.log(err));

  if(process.env.NODE_ENV === "production"){
      app.use(express.static("client/build"));
  }

  app.listen(port,()=>{
    console.log(`Connected TO Database and Listening TO Localhost ${port}`)
  })