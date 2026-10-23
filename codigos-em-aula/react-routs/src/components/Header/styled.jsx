import styled from 'styled-components';

export const HeaderContainer = styled.header`
    height: 80px;
    width: 100%;
    padding: 0 40px;
    box-sizing: border-box;
    background: linear-gradient(90deg, #0f172a 0%, #1e293b 100%);
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    position: sticky;
    top: 0;
    z-index: 100;

    h1 {
        font-size: 2rem;
        font-weight: 800;
        margin: 0;
        letter-spacing: -0.5px;
        color: white;
    }

    button {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.05);
        padding: 12px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    }

    button:hover {
        background-color: rgba(255, 255, 255, 0.15);
        border-color: #38bdf8;
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(56, 189, 248, 0.25);
    }

    button:hover svg {
        fill: #38bdf8;
    }

    button:active {
        transform: translateY(1px);
        box-shadow: 0 2px 10px rgba(56, 189, 248, 0.15);
    }
`;