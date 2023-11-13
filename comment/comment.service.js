import { dbService } from '../../backend/services/db.service.js'
import { logger } from '../../backend/services/logger.service.js'

async function query(filterBy) {
    let criteria = {}

    try {
        if (filterBy.txt) {
            // criteria.from = { $regex: filterBy.txt, $options: 'i' }
            criteria.msg = { $regex: filterBy.txt, $options: 'i' }
        }
        const collection = await dbService.getCollection('comment')
        const comments = await collection.find(criteria).toArray()
        return comments
    } catch (err) {
        logger.error('cannot find comments', err)
        throw err
    }
}

async function add(comment) {
    try {
        const collection = await dbService.getCollection('comment')
        await collection.insertOne(comment)
        return comment
    } catch (err) {
        logger.error('cannot insert comment', err)
        throw err
    }
}

export const commentService = {
    query,
    add
}
