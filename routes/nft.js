import express from 'express';
import { viewNft,viewNfts, createNft, updateNft, deleteNft } from '../controller/nftRoutes.js';
const router = express.Router();

router.get('/nfts',viewNfts);
router.get('/nfts/:id',viewNft);
router.post('/nfts',createNft);
router.patch('/nfts/:id',updateNft);
router.delete('/nfts/:id',deleteNft);

export default router;