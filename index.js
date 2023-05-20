import express from "express";
import mongoose from "mongoose";
import * as dotenv from 'dotenv';
import router from "./routes/nft.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use('/api',router);
app.get('/',(req,res) => res.send("Hello welcome to NFT marketplace"));

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})   
    .then(() => app.listen(PORT, ()=> { 
        console.log(`Server listening on port ${PORT}`)
    })) 
    .catch((error) => console.log(error.message));