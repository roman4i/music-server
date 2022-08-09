import { getSong } from "../controllers/song.controllers.js";
import express from "express";

const router = express.Router();

router.get('/getSong/:id', getSong);

const songsRoutes = router;

export default songsRoutes;
