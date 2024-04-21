import Header from "../../components/Header/Header";
import "./MChat.css";

const MChat = () => {
    return (
        <>
        <Header/>
        <section className="container-mchat">
            <article>
                <h2>Seu filho consegue brincar de forma correta com brinquedos pequenos (ex. carros ou blocos), sem apenas colocar na boca, remexer no brinquedo ou deixar o brinquedo cair?</h2>
                <div className="container-buttons">
                    <button className="simm">Sim</button>
                    <button className="naoo">Não</button>
                </div>
            </article>
            <img src="menina-pensativa.png" alt="Menina negra cabelo cacheado brincando pensativa" />
        </section>
        </>
    )
}

export default MChat
