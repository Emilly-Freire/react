import './style.css'

function Formulario() {

    return (
        <form>
            <table>
                <tr>
                    <td><label >ID: </label></td>
                    <td><input type="text"></input></td>
                </tr>

                <tr>
                    <td><label>Nome: </label></td>
                    <td><input type="text"></input></td>
                </tr>

                <tr>
                    <td><label>Ocupação: </label></td>
                    <td>
                        <select>
                            <option value="aluno">Aluno</option>
                            <option value="professor">Professor</option>
                            <option value="tecnico">Técnico</option>
                        </select>
                    </td>
                </tr>

                <tr>
                    <td><label>Horario: </label></td>
                    <td><label>00:00:00</label></td>
                </tr>
            </table>

            <button>Salvar</button>
        </form>
    )
}

export default Formulario;