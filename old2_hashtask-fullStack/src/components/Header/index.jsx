import { Logo } from "../Logo";
import { HeaderContainer, HeaderContent, LoginButton, Menu } from "./styled";



export function Header () {
    return (

        <HeaderContainer>
            <HeaderContent>
                    <Logo />

            
            <Menu>
                <a href="#inicio">Início</a>
                <a href="#tarefas">Tarefas</a>
                <a href="#cripto">Criptomoedas</a>
                <a href="#assinatura">Assinatura</a>

            </Menu>

                <LoginButton type="button">
                    Entrar
                </LoginButton>

            </HeaderContent>

        </HeaderContainer>
    );
}