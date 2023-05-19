import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Servicos from './pages/Servicos';
import Modelos from './pages/Modelos';
import FaleConosco from './pages/FaleConosco';
import Login from './pages/Login';
import Sobre from './pages/Sobre';
import Cadastro from './pages/Cadastro';

function RouterApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/Servicos" element={<Servicos />} />
                <Route path="/Modelos" element={<Modelos />} />
                <Route path="/FaleConosco" element={<FaleConosco />} />
                <Route path="/Sobre" element={<Sobre />} />
                <Route path="/Login" element={<Login />} />
                <Route path='/Cadastro' element={<Cadastro/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp;