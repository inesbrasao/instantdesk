import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../styles/index.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className='logo'> 
      logo 
    </div>
    <div>
      <p>Venha trabalhar no melhor cowork de lisboa! Reserve em dois clicks seu horário!</p>
    </div>
    <div>
      <button>reservar</button>  
    </div>
    </>
  )
}
