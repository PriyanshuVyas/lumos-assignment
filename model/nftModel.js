import mongoose from "mongoose";

const nftSchema = mongoose.Schema({
    title: String,
    creator: String,
    selectedFile: String, 
    createdAt: {
        type: Date, 
        default: new Date()
    }
});

const nftModel = mongoose.model('nftModel',nftSchema); 

export default nftModel;
