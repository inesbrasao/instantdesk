
import { useEffect, useState } from "react"
import NavBar from "../app/components/NavBar"
import styles from '../styles/homepage.module.css'
import { useRouter } from "next/router"

export default function Home() {
  const [date, setDate] = useState()
  const [type, setType] = useState("public")
  const [bookedHours, setBookedHours] = useState()
  const [hour, setHour] = useState()
  const [errorMessage, setErrorMessage] = useState()
  const router = useRouter()
  const arrayHours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00","19:00"]

  useEffect(() => {

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ "date": date, "type": type })
    }

    async function fetchData() {

      const res = await fetch(`/api/fetchByDate`, options);
      if (res.status === 200) {
        const body = await res.json();
        setBookedHours(body)
      }

    }

    fetchData();


  }, [date, type])




  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const handleSelectChange = (e) => {
    setType(e.target.value)
  }

  const handleClick = (e) => {
    setHour(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`"date": ${date}, "hour": ${hour}, "type": ${type}`)
    const bookingOptions = {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ "date": date, "hour": hour, "type": type })
    }

    async function newBooking() {

      const res = await fetch(`/api/newBooking`, bookingOptions);
      if (res.status === 200) {
        const body = await res.json();
        router.push(`/reservation/${body}`)
      } else if (res.status === 412) {
        const body = await res.json();
        setErrorMessage(body.message)

      }
    }
    newBooking()
  }

  return (
    <>
      <div className={styles.homeContainer}>
      <div className={styles.formContainer}>
        <div>
          <label className={styles.label}><h3>Que tipo de espaço necessita?</h3></label>
          <select name="type" className={styles.type} onChange={handleSelectChange}>
            <option className={styles.options} value="public">Lugar Público</option>
            <option className={styles.options} value="private">Lugar Privado</option>
          </select>
        </div>
        <div><h3>Que dia?</h3> </div>
        
        <input
          type="date"
          onChange={handleChange}
          className={styles.customDateInput}
        />
        {date ? (<div>
        <div><h3>Qual horário?</h3></div>
          <div className={styles.hourWrapper}>
            {arrayHours.map(e => (
              bookedHours.some(hour => hour[0] === e && hour[1] >= 2) ?
                <button disabled className={styles.disableHour} key={e}>{e}</button> : <button onClick={handleClick} className={styles.availableHour} value={e} key={e}>{e}</button>
            ))}
          </div>
        </div>
        ) : null}
      </div>
      {errorMessage ? <p className={styles.errorMessage}>{errorMessage}</p> : null}
      <button className={styles.submit} onClick={handleSubmit}>Confirmar</button>
      </div>
      {/* <NavBar/> */}
    </>
  );
};
