import Header from "../../components/Header/Header";
import "./Chat3.css";

const Chat3 = () => {
    return (
        <>
        <Header/>
        <section className="container-mchat">
            <article>
                <h2>Se você aponta um brinquedo do outro lado do cômodo, o seu filho olha para ele?</h2>
                <div className="container-buttons">
                    <button className="simm">Sim</button>
                    <button className="naoo">Não</button>
                </div>
            </article>
            <img src="homem-com-bebe.png" alt="BB no colo do pai" />
        </section>
        </>
    )
}

export default Chat3
