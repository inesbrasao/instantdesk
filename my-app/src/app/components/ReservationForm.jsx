import { useRouter } from "next/router";
import React, { useState } from 'react';
import styles from '../../styles/reservationForm.module.css'



export default function ReservationForm({id}) {
  const router = useRouter()
  const [formData, setFormData] = useState()
  const [errorMessage, setErrorMessage] = useState()
  
  const options = {
    method: 'POST',
    headers: {
        'Content-Type': "application/json"
    },
    body: JSON.stringify({
        "id": id,
        "data": formData
    })

  }

  async function updateBooking() {

    const res = await fetch(`/api/updateBooking`, options);

    if(res.status === 412){
      const body = await res.json();
      setErrorMessage(body.message)
    } else if (res.status === 200){
      router.push(`/payment/${id}`)
    }
  }


  const handleChange = (event) => {
    const { name, value} = event.target;
    setFormData(pForm => {
        return { ...pForm, [name]: value }
    });
  };
  


  const handleSubmit = async (event) => {
    event.preventDefault()
    updateBooking()
  };




  return <div>
  <div className={styles.ProfileControlContainer}>
    
    <form  className={styles.form} onSubmit={handleSubmit} id="profileControl">
        
    <div className={styles.containerInputText} >
      <label htmlFor="name" className={styles.labelInputText}>Nome</label> 
      <input className={styles.inputText} type="text" id="name" name="name"  onChange={handleChange}/>
    </div>
    <div className={styles.containerInputText} >
      <label htmlFor="email" className={styles.labelInputText}>Email</label> 
      <input className={styles.inputText} type="text" id="email" name="email"  onChange={handleChange}/>
    </div>
    <div className={styles.containerInputText} >
      <label htmlFor="phone" className={styles.labelInputText}>Telemóvel</label> 
      <input className={styles.inputText} type="text" id="phone" name="phone"  onChange={handleChange}/>
    </div>
      {errorMessage ? <p>{errorMessage}</p> : null}
      <button className={styles.button} type="submit" >Alterar</button>
    </form>
  </div>
  </div>

}
