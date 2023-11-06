import NavBar from "./app/components/NavBar";
import { useEffect, useState } from "react"

export default function Home() {
    const [date, setDate] = useState()
    const [hours, setHours] = useState()
    const arrayHours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]

    useEffect(() => {
      const options = {
          method: 'POST',
          headers: {
              'Content-Type': "application/json"
          },
          body: date
      }

      async function fetchData() {

         const res = await fetch(`/api/fetchByDate`, options);
         if (res.status === 200) {
            const body = await res.json();
            setHours(body)
         }

      }

      fetchData();


  }, [date])

    const handleChange = (e) => {
        setDate(e.target.value);
      };
    
      return (
        <>
        <div>
          <input
            type="date"
            onChange={handleChange}
          />
          <p>Selected Date: {date}</p>
          {date ? arrayHours.map(e => <button>{e}</button>) : null}
        </div>
        <NavBar/>
        </>
      );
};
