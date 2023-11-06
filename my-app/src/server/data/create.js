import { GetCollection } from "./mongo"

// Params {
//     data: object
// }
// Function that creates a new document in the DB.
async function createDocument(data) {
    const collection = await GetCollection("cowork")
    const result = await collection.insertOne(data)
    return result
  }

module.exports = {
    createDocument
}