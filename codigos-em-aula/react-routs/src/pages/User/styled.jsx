import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', system-ui, sans-serif;
    min-height: 100vh;
    background: linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%);
    padding: 20px;
`;

export const Card = styled.div`
    background-color: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(12px);
    border-radius: 24px;
    padding: 50px 40px;
    text-align: center;
    width: 100%;
    max-width: 650px;
    margin-top: 10px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.05), 0 5px 15px rgba(0, 0, 0, 0.03);
    transition: transform 0.4s ease;

    &:hover {
        transform: translateY(-8px);
    }

    img {
        border: 4px solid #4f46e5;
        border-radius: 50%;
        width: 130px;
        height: 130px;
        object-fit: cover;
        box-shadow: 0 12px 24px rgba(79, 70, 229, 0.25);
        margin-bottom: 25px;
    }
`;

export const Avatar = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 50%;
    margin-bottom: 25px;
    object-fit: cover;
    border: 4px solid #4f46e5;
    box-shadow: 0 12px 24px rgba(79, 70, 229, 0.25);
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 30px;
    width: 100%;
`;

export const Button = styled.button`
    padding: 14px 28px;
    background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
    color: #ffffff;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
    letter-spacing: 0.5px;
    box-shadow: 0 8px 16px rgba(79, 70, 229, 0.3);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    flex: 1;

    &:hover {
        background: linear-gradient(135deg, #4338ca 0%, #4f46e5 100%);
        transform: translateY(-3px);
        box-shadow: 0 12px 20px rgba(79, 70, 229, 0.4);
    }

    &:active {
        transform: translateY(1px);
        box-shadow: 0 4px 8px rgba(79, 70, 229, 0.3);
    }

    &:disabled {
        background: #cbd5e1;
        box-shadow: none;
        cursor: not-allowed;
        transform: none;
    }
`;