import { createDocument } from '../../server/data/create'

export default async function bookHour(req, res) {
    try{
        const {} = req.body
        const result = await fetchById(id, collection)
        res.status(200).json(result)
    }
    catch {
        res.status(400).end()
    }
    
}