import './App.css'
import { Card } from './components/Cards/styled'
import Footer from './components/Footer'
import Header from './components/Header'
import Consultas from './pages/Consultas'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import PrimeiraVersao from './pages/PrimeiraVersao'
import Relatorio from './pages/Relatorio'

export function App() {


  return (
    <>

      <Header />
   
      <PrimeiraVersao />  
    
    {/*
     
      <Header />
      <Dashboard /> 
      <Footer /> 
    */}
    
    {/*
     <Relatorio />
      <Consultas />

      <NotFound /> 
      
    */}
    <Footer /> 
    
    </>
  )
}


