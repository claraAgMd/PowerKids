import Header from "../../components/Header/Header";
import "./MChat.css";

const MChat = () => {
    return (
        <>
        <Header/>
        <section className="container-mchat">
            <article>
                <h2>Seu filho gosta de se balançar, de pular no seu joelho, etc.?</h2>
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
