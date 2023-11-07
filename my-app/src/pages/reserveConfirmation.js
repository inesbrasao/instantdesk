
import styles from '../styles/chek.module.css'

export default function Confirmation () {
    return (
        <>
        <div className={styles.cp}> 
        <div className={styles.logo}>
        <img src="icons/check.png" /> 
        </div>
        <p>sua reserva foi feita com sucesso!</p>
        <p>você receberá em seu e-mail com </p> 
        <p>todos os dados da reserva.</p>
        </div>
        </>
    )

}