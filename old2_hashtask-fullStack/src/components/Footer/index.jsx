import { FooterBar, FooterInner } from "./styled";
import { Logo } from '../Logo';

export function Footer() {

    return (
        <FooterBar>
            <FooterInner>
                <Logo $compact/>
                <span>Feito com React + JS · Projeto educacional · Senai · 2026</span>
            </FooterInner>
        </FooterBar>


    )

}