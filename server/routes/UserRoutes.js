import { Router } from "express";
import {addToLikedMovies, getLikedMovies, removeFromLikedMovies, } from "../controllers/UserController.js";

const router = Router();

router.post('/add', addToLikedMovies);
router.get("/liked/:email", getLikedMovies);
router.delete("/delete", removeFromLikedMovies);

export default router;