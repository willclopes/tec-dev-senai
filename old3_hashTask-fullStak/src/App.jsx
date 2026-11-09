import './App.css'
import {GlobalStyles} from '../src/frontend/styles/GlobalStyles.jsx'
import { Logo } from './frontend/components/Logo'
import { Banner } from './frontend/components/Banner'

export function App() {
  
  return (
    <>
    <GlobalStyles />
    <Logo />
    <Banner />
     </>
  )
}


