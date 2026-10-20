import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Footer } from './components/Footer'
import { Main } from './components/Main'

export function App() {
  

  return (
    <>
     <RouterProvider router={router}/>
     <Main/>
     <Footer/>
    </>
  )
}


