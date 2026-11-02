import Logo from "../Logo";
import { Interno, Rodape, Texto } from "./styled";


export function Footer() {
    // new Date().getFullYear() devolve o ano atual (assim nunca fica desatualizado)
    
    const ano = new Date().getFullYear()
        
    return(

        <Rodape>
            <Interno>
                <Logo />
                    <Texto>© {ano} HashTasks — projeto de estudo feito com React+JS</Texto>
                    <Texto>Cotações por API CoinGecko</Texto>
            </Interno>
        </Rodape>




    )
}