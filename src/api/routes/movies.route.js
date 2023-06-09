import express from 'express';
import asyncHandler from 'express-async-handler';
import { getMovies, getMovie } from '../controllers/movies.controller.js';

const router = express.Router();

// Here come your routes
router.get('/', asyncHandler(getMovies));
router.get('/:id', asyncHandler(getMovie));

export default router;
