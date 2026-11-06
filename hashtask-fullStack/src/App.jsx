import './App.css'
import { Banner } from './components/Banner'
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';
import { GlobalStyles } from "./styles/GlobalStyles";
export function App() {
  
  return (
    <>
     <GlobalStyles />
     <Logo />
     <Banner />
     <Footer/> 
    </>
  )
}

