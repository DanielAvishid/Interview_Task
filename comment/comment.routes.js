import express from 'express'
import { log } from '../middlewares/logger.middleware.js'
import { addComment, getComments } from './comment.controller.js'

export const commentRoutes = express.Router()

commentRoutes.get('/', log, getComments)
commentRoutes.post('/', addComment)