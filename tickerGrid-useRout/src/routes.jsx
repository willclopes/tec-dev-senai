import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home'
import { Erro } from './pages/Erro'


export const router = createBrowserRouter([
    {
        path: '/home',
        element: <Home/>
    },
     {
        path: '*',
        element: <Erro/>
    }

])
