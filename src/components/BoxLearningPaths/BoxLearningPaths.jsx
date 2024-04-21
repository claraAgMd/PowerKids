import'./BoxLearningPaths.css'

function BoxLearningPaths({props_img_box_path, props_alt_box, props_p_box }){
    return(
        <section className='box-path'>
            <img src={props_img_box_path} alt={props_alt_box} />
            <p>{props_p_box}</p>
            <button className='button-box'>Ver mais</button>
        </section>
    )
}

export default BoxLearningPaths