import express from 'express';
import nftModel from '../model/nftModel.js';

export const viewNfts = async (req,res) => { 
   
    try {
        const nfts = await nftModel.find(); 
        res.status(200).json(nfts);

   } catch (error) {
        res.status(404).json({message: error.message});
   }
}

export const viewNft = async (req,res) => { 
   
    
    try {
        const {id:_id} = req.params;
        if( !mongoose.Types.ObjectId.isValid(_id) ){
            console.log("ID is not valid");
            return res.status(404).send("Nft Id invalid"); 
        } 
        const nft = await nftModel.findById(_id); 
        res.status(200).json(nft);

   } catch (error) {
        res.status(404).json({message: error.message});
   }
}


export const createNft = async (req,res) => {
    
    const newNft = new nftModel(req.body); 
    
    try {
        await newNft.save(); 
        res.status(201).json(newNft);
    } catch (error) {
        res.status(409).json({message: error.message});
        
    }
}


export const updateNft = async (req,res) =>{
    
    try {
        const { id: _id } = req.params; 
        const gettingNft = req.body; 
        const NftChanges = {...gettingNft, _id}; 
    
        if( !mongoose.Types.ObjectId.isValid(_id) ){
            console.log("ID is not valid");
            return res.status(404).send("Nft Id invalid"); 
        } 
     
        const updatedNft = await nftModel.findByIdAndUpdate(_id, NftChanges, {new: true}); 

        res.status(202).json(updatedNft); 
    } catch (error) {
        res.status(409).json("Error occured");
        console.log('---backnd ErRoR---'+error);
    }
} 

export const deleteNft = async( req,res )=>{ 
    
    try {
        const {id:_id} = req.params;
    
        if(mongoose.Types.ObjectId.isValid(_id)){
            console.log("ID is not valid");
            res.status(404).send("No Nft exist by this ID");
        }

        await nftModel.findByIdAndRemove(_id); 
        res.status(200).json({message:"Nft Deleted"});
    
    } catch (error) {
        console.log('---bcknd ErRoR---'+error);
    }
}