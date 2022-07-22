import React from 'react'
import { BrowserRouter, Routes, Route , Navigate} from 'react-router-dom'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import ListarEst from '../containers/ListarEst'
import RegistroEst from '../containers/RegistroEst'

const AppRouter = ()=> {
return (
    <BrowserRouter>
    <NavBar/>
        <Routes>
         <Route path="/" element={<RegistroEst/>}/>
         <Route path="/list" element={<ListarEst/>}/>

         <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  
)

}


export default AppRouter