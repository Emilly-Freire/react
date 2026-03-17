import './style.css'

function Formulario() {

    return (
        <form id="formulario">
            <table className='itens'>
                <tr>
                    <td><label >ID: </label></td>
                    <td><input type="text" className='caixa'></input></td>
                </tr>

                <tr>
                    <td><label>Nome: </label></td>
                    <td><input type="text" className='caixa'></input></td>
                </tr>

                <tr>
                    <td><label>Ocupação: </label></td>
                    <td>
                        <select className='caixa1'>
                            <option value="aluno">Aluno</option>
                            <option value="professor">Professor</option>
                            <option value="tecnico">Técnico</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td><label>Horario: </label></td>
                    <td><label className='caixaHora'>00:00:00</label></td>
                </tr>
            </table>

            <button type='save'>Salvar</button>
        </form>
    )
}

export default Formulario;