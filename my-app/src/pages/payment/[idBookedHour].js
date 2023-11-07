import { useRouter } from "next/router"
import ReservationForm from "../../app/components/ReservationForm"
import { useState } from "react"



export default function Payment() {
  const [bookingInfo, setBookingInfo] = useState()
  const router = useRouter()
  const id = router.query.idBookedHour

  const options = {
    method: 'POST',
    headers: {
        'Content-Type': "application/json"
    },
    body: JSON.stringify({
        "id": id
    })

  }

  async function fetchData() {
    const res = await fetch(`/api/getInfoById`, options);

    if(res.status === 200){
      const body = await res.json();
      setBookingInfo(body)
    }
  }

  fetchData()

  const changeURL = () => {
    router.push(`/reserveConfirmation`)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTimeout(() => {
        changeURL();
      }, 5000); 
  }

  


  return <div>
    {bookingInfo && <div>
        <h3>Dados da Marcação:</h3>
        <div>{bookingInfo.name}</div>
        <div>{bookingInfo.email}</div>
        <div>{bookingInfo.phone}</div>
        <div>{bookingInfo.date}</div>
        {bookingInfo.hour.map(e => <div key={e}>{e}</div>)}
        {bookingInfo.type === "public" ? `${bookingInfo.hour.length * 5}€` : `${bookingInfo.hour.length * 8}€`}
        </div>}
        <div>Pagamento por MbWay</div>
        <form onSubmit={handleSubmit}>
            <label>Telemóvel:</label>
            <input type="text"/>
            <input type="submit" value="Pagar"/>
        </form>
  </div>
}