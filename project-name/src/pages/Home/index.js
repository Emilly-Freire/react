import './style.css';
import Titulo from '../../componets/Titulo'
import Formulario from '../../componets/Formulario'
import Tabela from '../../componets/Tabela'

function Home() {
  return (
    <div className="App">
      <Titulo />
      <Formulario />
      <Tabela />
    </div>
  );
}

export default Home;
