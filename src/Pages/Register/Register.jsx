import "./Register.css";

const Register = () => {
    return (
        <section className="container-login">
            <div className="left-side">
                <img src="ft-menino-sorrindo.jpg" alt="Menino negro com o cabelo crespo sorrindo" />
            </div>

            <div className="right-side">
                <img src="logo.png" alt="Logo da marca" />
                <p>Já é um membro? <a href="/login">Conecte-se</a></p>
                <h1>Registre sua conta</h1>
                <form action="">
                    <div className="inputs-login">
                        <label htmlFor="nome">Nome completo:</label>
                        <input type="text" required placeholder="Digite seu nome" />
                    </div>
                    <div className="inputs-login">
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" required placeholder="Digite seu e-mail" />
                    </div>
                    <div className="inputs-login">
                        <label htmlFor="senha">Senha:</label>
                        <input type="senha" required placeholder="Digite sua senha" />
                    </div>
                    <div className="inputs-login">
                        <label htmlFor="data_de_nascimento">Data de nascimento:</label>
                        <input required type="date" />
                    </div>
                    <button type="submit">Registro</button>
                </form>
            </div>
        </section>
    )
}

export default Register
