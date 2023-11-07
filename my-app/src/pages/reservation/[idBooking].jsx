import { useRouter } from "next/router"
import ReservationForm from "../../app/components/ReservationForm"



export default function Reservation() {
  const router = useRouter()
  const id = router.query.idBooking
  console.log(id)
  


  return <div><ReservationForm id={id}/></div>
}