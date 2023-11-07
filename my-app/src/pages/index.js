import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/index.module.css'
import NavBar from '../app/components/NavBar'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/home`)
  }
  
  return (
    <>
    <div className={styles.indexMain}>
   
    <div className={styles.logo}> 
    <img src='/icons/logo.png' width={300} height={300}/> 
    </div>

    <div className={styles.p}>
      <p>Cowork Simplificado</p>
      <p>Reserve com dois clicks o seu horário!</p>
    </div>

    <div className={styles.button}>
      <button className={styles.button1} onClick={handleClick}>reservar</button>  
    </div>

    </div>

    <NavBar/>
    </>
  )
}
