import './style.css'

function Tabela() {

    return (
        <section id="grafico">
            <div className='barras'>
                <h3 className='azul'>4</h3>
                <h3 className='vermelho'>7</h3>
                <h3 className='amarelo'>2</h3>
            </div>

            <div className='titulos'>
                <h3 className='aluno'>Aluno</h3>
                <h3 className='prof'>Professor</h3>
                <h3 className='tec'>Técnico</h3>
            </div>
        </section>
        
    )
}

export default Tabela;