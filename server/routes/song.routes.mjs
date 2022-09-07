import { deleteSong, getSong, updateSong, uploadSong } from "../controllers/song.controllers.mjs";
import express from "express";

const router = express.Router();

router.get('/getSong/:id', getSong);
router.post('/upload', uploadSong);
router.delete('/delete', deleteSong);
router.put('/update', updateSong);

const songsRoutes = router;

export default songsRoutes;
