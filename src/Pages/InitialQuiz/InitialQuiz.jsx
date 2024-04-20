import './InitialQuiz.css'
import '../../components/Header/Header'
import Header from '../../components/Header/Header'

function InitialQuiz (){
    return(
        <div> 
            <div>
                <Header/>
            </div>
            <section>
                <h2>Para começar, me conte qual sua relação com o autismo? </h2>
            </section>
        </div>
    )
}

export default InitialQuiz