import express from 'express'
import { log } from '../../backend/middlewares/logger.middleware.js'
import { addComment, getComments } from '../../backend/comment/comment.controller.js'

export const commentRoutes = express.Router()

commentRoutes.get('/', getComments)
commentRoutes.post('/', addComment)