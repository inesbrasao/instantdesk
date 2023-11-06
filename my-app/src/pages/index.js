import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/index.module.css'
import NavBar from '../app/components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className={styles.indexMain}>
   
    <div className={styles.logo}> 
    <img src='public/icons/logo.png' /> 
    </div>

    <div className={styles.p}>
      <p>Venha trabalhar no melhor cowork de lisboa! Reserve em dois clicks seu horário!</p>
    </div>

    <div className={styles.button}>
      <button>reservar</button>  
    </div>

    </div>

    <NavBar/>
    </>
  )
}
