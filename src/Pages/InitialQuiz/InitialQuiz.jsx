import './InitialQuiz.css'
import '../../components/Header/Header'
import Header from '../../components/Header/Header'

function InitialQuiz() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <section className='initial-quiz'>
                <div className='quiz'>
                    <h2>Para começar, me conte qual sua relação com o autismo? </h2>
                    <label className='initial-input' class="radio">
                        <input name="radio" type="radio" checked />
                        <span>Sou cuidador de uma criança de até 6 anos </span>
                    </label>
                    <label className='initial-input' class="radio">
                        <input name="radio" type="radio" checked />
                        <span>Sou cuidador de uma criança de 7 anos ou mais</span>
                    </label>
                    <label className='initial-input' class="radio">
                        <input name="radio" type="radio" checked />
                        <span>Sou uma pessoa autista</span>
                    </label>
                    <label className='initial-input' class="radio">
                        <input name="radio" type="radio" checked />
                        <span>Sou terapeuta ocupacional, psicólogo(a) ou fonoaudiólogo</span>
                    </label>
                    <label className='initial-input' class="radio">
                        <input name="radio" type="radio" checked />
                        <span>Sou médico e trabalho com autismo </span>
                    </label>
                    <label className='initial-input' class="radio">
                        <input name="radio" type="radio" checked />
                        <span>Outro </span>
                    </label>
                    <input className='input-initial' type="submit" value="OK" />
                    </div>
                <div>
                    <img className='img-initial-quiz' src="../../../public/initial-quiz.png" alt="" />
                </div>

            </section>
        </div>
    )
}

export default InitialQuiz