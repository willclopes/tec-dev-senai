import styled from 'styled-components'

export const MainContainer = styled.div`
    min-height: 100vh; 
    width: 100vw;
    background: #f0f2f5; 
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px 20px; 
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

`

export const SplitCard = styled.div`
    display: flex;
    width: 100%;
    max-width: 1000px; 
    background-color: white;
    border-radius: 16px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    overflow: hidden; 
    
`;

export const FormSection = styled.div`
    flex: 1; 
    padding: 40px;
    background-color: white;
`;

export const ResultSection = styled.div`
    flex: 1; 
    padding: 40px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`;



export const FormCard = styled.div`
    width: 100%;
    max-width: 500px;
    background-color: white;
    padding: 40px;
    border-radius: 16px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08); 
`;

export const Title = styled.h1`
    margin: 0 0 30px 0;
    font-size: 26px;
    color: #333;
    text-align: center;
    font-weight: 700;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
        font-size: 14px;
        color: #444;
        font-weight: 600;
    }

    input, select, textarea {
        width: 100%;
        padding: 12px 16px;
        border: 1px solid #d1d5db;
        border-radius: 8px;
        background-color: #f9fafb;
        font-size: 15px;
        outline: none;
        box-sizing: border-box;
        font-family: inherit;
        transition: all 0.2s;

        &:focus {
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);
            background-color: #ffffff;
        }
    }

    textarea {
        resize: vertical; 
    }
`;

export const Button = styled.button`
    height: 50px;
    margin-top: 16px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: opacity 0.2s, transform 0.1s;

    &:hover {
        opacity: 0.9; 
    }

    &:active {
        transform: scale(0.98); 
    }
`;

export const ResultItem = styled.div`
    margin-bottom: 16px;
    background: rgba(255, 255, 255, 0.1); 
    padding: 12px 16px;
    border-radius: 8px;
    border-left: 4px solid #faf8f8;

    span {
        display: block;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
        opacity: 0.8;
        margin-bottom: 4px;
    }

    p {
        margin: 0;
        font-size: 16px;
        font-weight: 500;
    }
`;

export const EmptyState = styled.div`
    text-align: center;
    opacity: 0.8;

    h2 {
        font-size: 24px;
        margin-bottom: 12px;
    }

    p {
        font-size: 16px;
        line-height: 1.5;
    }
`;


export const ClearButton = styled.button`
    height: 50px;
    width: 100%;
    margin-top: 24px;
    background-color: transparent; 
    color: white;
    border: 2px solid white; 
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: white; 
        color: #764ba2; 
    }

    &:active {
        transform: scale(0.98);
    }
`;