import styled from "styled-components";

export const CreateUserContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background-color: #f8fafc;
    font-family: sans-serif;
`;

export const FormBox = styled.form`
    background: #ffffff;
    padding: 40px;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    width: 100%;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 80px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 14px 16px;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    font-size: 1rem;
    color: #1e293b;
    background-color: #fdfdfd;
    box-sizing: border-box;
    transition: all 0.2s ease;

    &:focus {
        outline: none;
        border-color: #38bdf8;
        box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.15);
    }
`;

export const Button = styled.button`
    padding: 14px;
    background: linear-gradient(90deg, #0f172a 0%, #1e293b 100%);
    color: #ffffff;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(15, 23, 42, 0.2);
    }

    &:active {
        transform: translateY(0);
    }
`;

export const Message = styled.p`
    text-align: center;
    font-weight: 600;
    padding: 12px;
    border-radius: 8px;
    margin: 0;
    background-color: ${props => props.$isSuccess ? '#dcfce7' : '#fee2e2'};
    color: ${props => props.$isSuccess ? '#166534' : '#991b1b'};
`;