import styles from '../styles/infopage.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
    return (
        <div class="sqs-html-content">
            <div className={styles.indexMain}>
            <div className={styles.logoWrapper}><img className={styles.logo} src="/icons/3.png" /></div>
                <div>
                    <h2>Sobre Nós</h2>
                    <p class="sqsrte-small preFade fadeIn">Bem-vindo ao nosso site, o destino definitivo para profissionais, empreendedores e empresas que buscam uma nova abordagem para o local de trabalho. O objetivo é proporcionar um espaço de trabalho que inspire, conecte e capacite indivíduos e empresas a alcançar seu pleno potencial. Acreditamos que o ambiente de trabalho pode contribuir para o sucesso, e estamos comprometidos em fornecer as ferramentas necessárias para que isso aconteça.
                    </p></div>
                <div>
                    <h2>Serviços</h2>
                    <p class="sqsrte-small preFade fadeIn">
                        Oferecemos uma variedade de salas de coworking totalmente equipadas. Quer seja um freelancer em busca de um local tranquilo para trabalhar, uma startup em crescimento ou uma empresa estabelecida que busca flexibilidade, temos a solução certa para ti.
                    </p></div>
                <h2>Galéria</h2>
                <div>
                    <img src="/icons/INK-BIZ.jpg"/>
                    <img src="/USE-1.jpg"></img>
                    <img src="/benefits-of-shared.jpg"></img>
                </div>
            </div>
        </div>
    )
}