import express from 'express'
import { log } from '../services/logger.service.js'
import { addComment, getComments } from '../comment/comment.controller.js'

export const commentRoutes = express.Router()

commentRoutes.get('/', getComments)
commentRoutes.post('/', addComment)