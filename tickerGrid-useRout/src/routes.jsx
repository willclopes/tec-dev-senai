import { createBrowserRouter, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { Erro } from './pages/Erro'
import { Footer } from "../src/components/Footer"


export const router = createBrowserRouter([
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/.footer',
        element: <Footer/>
    },
     {
        path: '*',
        element: <Erro/>
    }

])
