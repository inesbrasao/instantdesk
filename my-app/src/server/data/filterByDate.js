import { GetCollection } from "./mongo"

// Params {
//     date: string
// }
// Function that returns all the bookings in the date
async function filterByDate(date) {
    const collection = await GetCollection("cowork", "bookings")
    const result = await collection.find({date: date}).toArray()
    return result
  } 

module.exports = {
    filterByDate
}