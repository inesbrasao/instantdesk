import { useRouter } from "next/router";

import React, { useEffect, useState } from 'react';
import styles from '../../styles/reservationForm.module.css'



export default function ReservationForm({date, hour, type}) {
  const router = useRouter()
  const [formData, setFormData] = useState()
  
  

 

  const optionsArtist = {
    method: 'POST',
    headers: { 'Content-Type': "application/json" },
    body: JSON.stringify(formData)
  }

  async function updateProfile() {

    const res = await fetch(`/api/profile`, optionsArtist);

    if(res.status === 412){
      setErrorMessage("É obrigatório escolher um nome.")

    }


    if (res.status === 200) {
      return true
    }

    return false
  }


  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setFormData(pForm => {
      if (name === "path") {
        return { ...pForm, [name]: files[0] }
      }
      return {...pForm, [name]: value}
    });
  };
  

 


  const handleSubmit = async (event) => {
    event.preventDefault()
    const formDat = new FormData()
    
    formDat.append("path", formData.path)

    
    if(formData.path !== undefined) {
      const res = await fetch(`/api/addProfilePhoto/${formData._id}`, {
        method: 'POST',
        body: formDat
      })
    }
    
    const updatedProfile = await updateProfile()

    if(updatedProfile){
      router.push(`/myprofile/${formData._id}`)
    }
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
      
      <button className={styles.button} type="submit" >Alterar</button>
    </form>
  

  </div>
  </div>

}
