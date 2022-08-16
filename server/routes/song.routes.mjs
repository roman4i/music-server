import { getSong, uploadSong } from "../controllers/song.controllers.mjs";
import express from "express";

const router = express.Router();

router.get('/getSong/:id', getSong);
router.post('/upload', uploadSong);

const songsRoutes = router;

export default songsRoutes;
