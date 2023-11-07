import { useRouter } from "next/router"
import ReservationForm from "../../app/components/ReservationForm"
import styles from '../../styles/reservationForm.module.css'



export default function Reservation() {
  const router = useRouter()
  const id = router.query.idBooking
  console.log(id)
  


  return <div className={styles.reservationContainer}>
   <div> <h2>Informações da reserva</h2>
   </div>
   <div>
    <ReservationForm id={id}/>
    </div>
    </div>
}