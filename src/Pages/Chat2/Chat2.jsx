import Header from "../../components/Header/Header";
import "./Chat2.css";

const Chat2 = () => {
    return (
        <>
        <Header/>
        <section className="container-mchat">
            <article>
                <h2>Seu filho olha para você no olho por mais de um segundo ou dois?</h2>
                <div className="container-buttons">
                    <button className="simm">Sim</button>
                    <button className="naoo">Não</button>
                </div>
            </article>
            <img src="mae-com-crianca.png" alt="Mãe com criança no colo" />
        </section>
        </>
    )
}

export default Chat2
