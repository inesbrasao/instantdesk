import styles from '../styles/infopage.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Page() {
    return (
            <div class="sqs-html-content">
                <div className={styles.indexMain}>
                    <div className={styles.logo}>
                        <img src='/icons/logo.png' width={300} height={300} />
                    </div>
                    <div>
                    <h2>About Us</h2>
                    <p class="sqsrte-small preFade fadeIn">Bem-vindo ao nosso site, o destino definitivo para profissionais, empreendedores e empresas que buscam uma nova abordagem para o local de trabalho. Nós somos mais do que apenas um espaço de coworking; somos uma comunidade dinâmica, um centro de inovação e colaboração. Nossa missão é proporcionar um espaço de trabalho que inspire, conecte e capacite indivíduos e empresas a alcançar seu pleno potencial. Acreditamos que o ambiente de trabalho pode ser um catalisador para o sucesso, e estamos comprometidos em fornecer as ferramentas e a comunidade necessárias para que isso aconteça.
                        Nossas instalações de última geração foram projetadas para criar um ambiente de trabalho inspirador e funcional. Oferecemos espaços de trabalho flexíveis, salas de reunião equipadas, áreas de descanso, café de qualidade e uma infraestrutura de alta velocidade para atender a todas as suas necessidades.
                    </p></div>
                    <div>
                    <h2>Services</h2>
                    <p class="sqsrte-small preFade fadeIn">
                        Oferecemos uma variedade de salas de coworking totalmente equipadas e espaços de escritório compartilhados. Seja você um freelancer em busca de um local tranquilo para trabalhar, uma startup em crescimento ou uma empresa estabelecida que busca flexibilidade, temos a solução certa para você. Nossos espaços são modernos, confortáveis e projetados para promover a produtividade.
                    </p></div>
                    <h2>Gallery</h2>
                    <img src="/INK-BIZ.jpg"></img>
                    <img src="/USE-1.jpg"></img>
                    <img src="/benefits-of-shared.jpg"></img>
                </div>
            </div>
        )
}