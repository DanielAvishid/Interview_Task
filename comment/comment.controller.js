import { logger } from '../../backend/services/logger.service.js'
import { commentService } from './comment.service.js'
import gravatar from 'gravatar'

export async function getComments(req, res) {
    try {
        const filterBy = req.query
        const comments = await commentService.query(filterBy)
        res.json(comments)
    } catch (err) {
        logger.error('Failed to get comments', err)
        res.status(500).send({ err: 'Failed to get comments' })
    }
}

export async function addComment(req, res) {
    try {
        const comment = req.body
        const httpsUrl = gravatar.url(comment.from, { protocol: 'https', s: '100' });
        comment.imgUrl = httpsUrl
        const addedComment = await commentService.add(comment)
        res.json(addedComment)
    } catch (err) {
        logger.error('Failed to add comment', err)
        res.status(500).send({ err: 'Failed to add comment' })
    }
}