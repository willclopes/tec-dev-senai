import styled from 'styled-components'

export const MainContainer = styled.div`
    background-color: #a9a9ff;

    padding: 36px;

    min-height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
`

export const ListSection = styled.div`
    background-color: white;
    padding: 8px;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 8px;
    border-top: 6px solid black ;
`

export const RegisterSection = styled.div`
    background-color: transparent;
    padding: 8px;
    border-radius: 8px;

    border: 2px solid black;
    border-top: 6px solid black ;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;

    input {
        border: none;
        gap: 20px;
    }

       

`