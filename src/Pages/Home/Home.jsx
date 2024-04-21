import { Link } from "react-router-dom";
import './Home.css'
import Header from '../../components/Header/Header'

function Home() {
    return (
        <body>
            <Header />
            <article className='ContainerMain'>
                <div className="FeaturedImage"><h1>O que é Transtorno do Espectro Autista?</h1></div>
            </article>
            <h2>Características do TEA</h2>

            <article className='Characteristics'>
                <div className='CardInfo'>
                    <span>1</span>
                    <section className='flexText'>
                        <h4>Desafios na Comunicação</h4>
                        <p>Dificuldade em compreender e expressar a linguagem verbal e não verbal.</p>
                    </section>
                </div>
                <div className='CardInfo'>
                    <span>2</span>
                    <section className='flexText'>
                        <h4>Interação Social Limitada</h4>
                        <p>Dificuldade em entender e responder a pistas sociais.</p>
                    </section>
                </div>
                <div className='CardInfo'>
                    <span>3</span>
                    <section className='flexText'>
                        <h4>Desafios na Comunicação</h4>
                        <p>Interesses restritos e comportamentos repetitivos.</p>
                    </section>
                </div>
            </article>
            <div className="Featured">
                <h1>O que é Transtorno do Espectro Autista?</h1>
                <p className='description'>O TEA (Transtorno do espectro autista) é um distúrbio que afeta o  neurodesenvolvimento, causando dificuldades na comunicação, interação social e comportamento.
                    Dentro do espectro, há diferentes níveis, desde leves, onde a pessoa pode ser totalmente independente, apenas com algumas dificuldades de adaptação, até graves, onde há total dependência para atividades diárias ao longo da vida.</p>
            </div>
            <div className='Session'>
                <img src="img_layout_1.jpg" alt="criança sorrindo para uma mulher" />
                <section className='flexText'>
                    <h4>Desenvolvimento Cognitivo</h4>
                    <p>Iniciar a intervenção o mais cedo possível é essencial para maximizar o potencial de desenvolvimento da criança.   </p>
                    <button>Clique para conhecer</button>
                </section>
            </div>
            <div className="Sessionn">
                <img src="img_layout_2.jpg" alt="criança sorrindo para uma mulher" />
                <section className='flexText'>
                    <h4>Comunidade</h4>
                    <p>Conte-nos sua história e como o desenvolvimento cognitivo infantil impactou a vida do seu filho. Seus insights valiosos podem ajudar outras famílias.</p>
                    <button>Clique para conhecer</button>
                </section>
            </div>

            <article className='LineYellow' />
            <article className='ContainerInformation'>
                <div className="LogoFooter">
                    <img src="logo.png" alt="Logo " />
                </div>
                <article className='ContainerLinksFooter'>
                    <article className='LinksFooter'>
                        <h3>Navegação</h3>
                        <p>Quem somos</p>
                        <Link to="/oficinaDeArtes">
                            <p>Atividades</p>
                        </Link>
                    </article>
                    <div className="LinksFooter">
                        <h3>Fale Conosco</h3>
                        <a href="tel:1126452469">
                            <p>(11) 0000-0000</p>
                        </a>
                        <a href="tel:11963584568">
                            <p>(11) 9999-9999 | (11) 1111-1111</p>
                        </a>
                        <a href="mailto:projeto@cisarte.org.br">
                            <p>nossoprograma@gmail.com</p>
                        </a>
                        <section className='IconsFooter'>
                            <a href="#" target="_blank">
                                <img src="logo-facebook.svg" alt="Ícone do Facebook preto" />
                            </a>
                            <a href="#" target="_blank">
                                <img src="logo-linkedin.svg" alt="Ícone do Linkedin preto" />
                            </a>
                            <a href="#" target="_blank">
                                <img src="logo-instagram.svg" alt="Ícone do Instagram preto" />
                            </a>
                        </section>
                    </div>
                </article>
            </article>
            <div className='SpanFooter'></div>
            <article className='FinalFooter'>
                <p>PTEA© 2024.</p>
            </article>
        </body>
    )
}
export default Home