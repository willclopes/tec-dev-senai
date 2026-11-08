import styled from "styled-components";


/* ======================================
   CONTAINER PRINCIPAL DO HEADER
====================================== */

export const HeaderContainer = styled.header`

    width: 100%;

    background: var(--glass-header);

    border-bottom: 1px solid var(--line);

    box-shadow: var(--shadow);

    padding: 18px 30px;

    position: sticky;
    top: 0;
    z-index: 100;

`;


/* ======================================
   CONTEÚDO INTERNO DO HEADER
====================================== */

export const HeaderContent = styled.div`

    max-width: 1280px;
    margin: 0 auto;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 30px;

`;


/* ======================================
   MENU DE NAVEGAÇÃO
====================================== */

export const Menu = styled.nav`

    display: flex;

    align-items: center;

    gap: 30px;


    /* ESTILO DOS LINKS */

    a {
        color: var(--ink);

        font-size: 14px;

        font-weight: 600;

        text-decoration: none;

        transition: 0.2s;
    }


    /* EFEITO QUANDO PASSAR O MOUSE */

    a:hover {
        color: var(--coral);
    }


    /* AJUSTE PARA TELAS MENORES */

    @media (max-width: 850px) {
        display: none;
    }

`;


/* ======================================
   BOTÃO DE LOGIN
====================================== */

export const LoginButton = styled.button`

    background: var(--gradient-brand);

    color: var(--ink);

    padding: 12px 26px;

    border: none;

    border-radius: 12px;

    font-size: 14px;

    font-weight: 700;

    cursor: pointer;

    box-shadow: var(--shadow);

    transition: 0.2s;


    /* EFEITO HOVER */

    &:hover {
        transform: translateY(-2px);

        box-shadow: var(--shadow-hover);
    }

`;