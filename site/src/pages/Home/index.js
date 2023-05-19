import Cabecalho from "../../componentes/cabecalho";
import './index.css';

function Home () {
    return (
        <div> 
            <Cabecalho/>
            <div className="container">
                <h1> Home </h1>
                <h1>Estamos em construção</h1>
                <img src="https://portalpadrao.ufma.br/dted/imagens/construcao.png/@@images/bcc9ff4c-be5a-428f-9f34-54fb8e3b3d35.png" alt="Cone de trânsito" className="cone" />
                <p>Desculpe pelo transtorno, estamos trabalhando duro para trazer um ótimo conteúdo em breve!</p>
            </div>
        </div>
    );
} 

export default Home;