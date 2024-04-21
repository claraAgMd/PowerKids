import "./Login.css";

const Login = () => {
    return (
        <section className="container-login">
            <div className="left-side">
                <img src="ft-menino-cacheado.jpg" alt="Menino branco com o cabelo cacheado sorrindo" />
            </div>

            <div className="right-side">
                <img src="logo.png" alt="Logo da marca" />
                <p>Não é um membro? <a href="">Registre-se</a></p>
                <h1>Faça login na sua conta</h1>
                <form action="">

                    <div className="inputs-login">
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" required placeholder="Digite seu e-mail" />
                    </div>
                    <div className="inputs-login">
                        <label htmlFor="senha">Senha:</label>
                        <input type="senha" required placeholder="Digite sua senha" />
                    </div>
                    <button type="submit">Conecte-se</button>
                </form>
            </div>
        </section>
    )
}

export default Login
