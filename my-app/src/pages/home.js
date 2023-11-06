import NavBar from "@/app/components/NavBar";
import { useState } from "react"

export default function Home() {
    const [date, setDate] = useState()

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
          
        </div>
        <NavBar/>
        </>
      );
};
