import styled from 'styled-components';

export const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const LoginContainer = styled.div`
    width: 350px;
    padding: 40px; 
    background-color: white;
    border-radius: 16px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15); 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 24px;
`;

export const Title = styled.h1`
    margin: 0;
    font-size: 28px;
    color: #333333;
    font-weight: 700;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;

    div {
        display: flex;
        flex-direction: column; 
        gap: 8px;
        width: 100%;
    } 

    input {
        width: 100%;
        height: 45px;
        padding: 0 16px;
        border: 1px solid #e0e0e0;
        outline: none;
        background-color: #f9f9fa; 
        border-radius: 8px;
        font-size: 15px;
        box-sizing: border-box; 
        transition: border-color 0.3s, box-shadow 0.3s;

        &:focus {
            border-color: #66c7f4;
            box-shadow: 0 0 0 3px rgba(102, 199, 244, 0.3);
        }
    }
    
    label {
        font-size: 14px;
        color: #555555;
        font-weight: 600;
    }

    button {
        height: 48px;
        width: 100%;
        margin-top: 10px;
        border: none;
        border-radius: 8px;
        background-color: #6c6ea0;
        color: white;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.2s ease-out, transform 0.1s;

        &:hover {
            background-color: #585a85; 
        }

        &:active {
            transform: scale(0.98);
        }
    }
`;


export const LoginSuccess = styled.div`
    height: 50px;
    width: 300px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    
    border: 8px;

    color: white;
    
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    


`
export const LoginFail = styled.div`
    height: 50px;
    width: 300px;
    background: linear-gradient(135deg, #f59b95 0%, #eb3528 100%);
    
    border: 8px;

    color: white;
    
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    


`
