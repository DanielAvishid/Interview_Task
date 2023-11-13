import express from 'express'
import { addComment, getComments } from '../../backend/comment/comment.controller'

export const commentRoutes = express.Router()

commentRoutes.get('/', getComments)
commentRoutes.post('/', addComment)