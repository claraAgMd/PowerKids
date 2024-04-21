import './LearningPaths.css' 
import BoxLearningPaths from '../../components/BoxLearningPaths/BoxLearningPaths'
import Header from '../../components/Header/Header'

function LearningPaths() {
    return (
        <section className='learning-path-bg'>
            <Header/>
            <h2 className='h2-learning-path'>TRILHAS DE APRENDIZAGEM</h2>
            <div className="images-box">
                <BoxLearningPaths props_img_box_path={'public/img1-box.png'} props_p_box={'Atividades para desenvolvimento '}/>
                <BoxLearningPaths props_img_box_path={'public/img2-box.png'} props_p_box={'Seletividade Alimentar'}/>
                <BoxLearningPaths props_img_box_path={'public/img3-box.png'} props_p_box={'Depressão pós diagnóstico'}/>
                <BoxLearningPaths props_img_box_path={'public/img4-box.png'} props_p_box={'Vacinas e autismo'}/>
            </div>
        </section>
    )
}

export default LearningPaths
