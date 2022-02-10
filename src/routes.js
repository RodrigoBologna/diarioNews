import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../src/pages/home'
import Negocios from '../src/pages/negocios'
import Entretenimento from '../src/pages/entretenimento'
import Saude from '../src/pages/saude'
import Ciencia from '../src/pages/ciencia'
import Esportes from '../src/pages/esportes'
import Tecnologia from '../src/pages/tecnologia'

function RouterApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/negocios' element={<Negocios/>}/>
                <Route path='/entretenimento' element={<Entretenimento/>}/>
                <Route path='/saude' element={<Saude/>}/>
                <Route path='/ciencia' element={<Ciencia/>}/>
                <Route path='/esportes' element={<Esportes/>}/>
                <Route path='/tecnologia' element={<Tecnologia/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RouterApp;