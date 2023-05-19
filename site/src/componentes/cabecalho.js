import './cabecalho.css'
import { Link } from 'react-router-dom';

function Cabecalho() {
  return (
    <div className="cabecalho">
      <div> <Link to="/" className="logo"> AlphaSnake </Link></div>
      <div className="menu">
          <div> <Link to="/Servicos" className="item"> Serviços </Link> </div>
          <div> <Link to="/Sobre" className="item"> Sobre </Link> </div>
          <div> <Link to="/Modelos" className="item"> Modelos </Link> </div>
          <div> <Link to="/FaleConosco" className="item"> Fale Conosco </Link> </div>
      </div>
      <div className="botoes"> 
        <div className="botao-Evento"><Link to="/Cadastro"> <button> Cadastrar-se </button> </Link> </div>
        <div className="botao-login"> <Link to="/Login"> <button> Login </button> </Link> </div>
      </div>
    </div>
  );
}

export default Cabecalho;
