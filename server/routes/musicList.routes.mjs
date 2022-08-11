import { getMusicList } from "../controllers/musicList.controllers.mjs";
import express from "express";

const router = express.Router();

router.get('/getAll', getMusicList);

const musicListRoutes = router

export default musicListRoutes;
