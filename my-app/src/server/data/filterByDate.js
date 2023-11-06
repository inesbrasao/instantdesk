import { GetCollection } from "./mongo"

// Params {
//     date: string
// }
// Function that returns all the bookings in the date
async function filterByDate(date) {
    const collection = await GetCollection("cowork", "bookings")
    const hours = await collection.find({ date: date }).toArray();
    const bookedHours = new Map()

    for(let i = 0; i < hours.length; i++){
        if(bookedHours.has(hours[i].hour)){
            let value = bookedHours.get(hours[i].hour)
            bookedHours.set(hours[i].hour, value + 1)
        } else {
            bookedHours.set(hours[i].hour, 1)
        }
    }
    
    const bh = Array.from(bookedHours)

    return bh
  } 

module.exports = {
    filterByDate
}