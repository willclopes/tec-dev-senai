import styled from 'styled-components';

export const MainContainer = styled.div`
    min-height: 100vh;
    width: 100vw;
    
    background-color: #f6fbf7;
    background-image: 
    radial-gradient(at 10% 10%, rgba(134, 239, 172, 0.3) 0px, transparent 50%), /* Verde Claro */
    radial-gradient(at 90% 20%, rgba(14, 165, 233, 0.15) 0px, transparent 50%),  /* Azul/Ciano */
    radial-gradient(at 50% 80%, rgba(234, 179, 8, 0.1) 0px, transparent 60%);    /* Dourado Sutil */
    
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 40px;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border-radius: 10px;

    
`;

export const CardContainer = styled.div`
    width: 420px;
    background-color: #ffffff;
    padding: 32px;
    border-radius: 16px;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.25);

    display: flex;
    flex-direction: column;
    gap: 20px;

    h2 {
        margin: 0;
        color: #1e293b;
        font-family: sans-serif;
        font-size: 24px;
        text-align: center;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 18px;

    div {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    label {
        font-size: 14px;
        font-weight: 600;
        color: #475569;
    }

    input[type="text"],
    input[type="number"] {
        height: 42px;
        padding: 0 12px;
        border: 2px solid #e2e8f0;
        outline: none;
        background-color: #f8fafc;
        border-radius: 8px;
        font-size: 15px;
        color: #0f172a;
        font-weight: 500;
        transition: 0.2s;

        &:focus {
            border-color: #10b981;
            background-color: #ffffff;
        }
    }

    input[type="range"] {
        cursor: pointer;
        accent-color: #10b981;
        height: 30px;
        
    }

    .botoes-taxa {
        display: flex;
        flex-direction: row;
        gap: 8px;

        button {
            flex: 1;
            padding: 10px 6px;
            border: 2px solid #e2e8f0;
            background-color: #f8fafc;
            color: #475569;
            border-radius: 8px;
            font-size: 12px;
            font-weight: bold;
            cursor: pointer;
            transition: 0.2s;

            &:hover {
                border-color: #10b981;
            }

            &.ativo {
                background-color: #10b981;
                color: white;
                border-color: #10b981;
            }
        }
    }
`;


export const PreviewContainer = styled.div`
    width: 440px;
    background-color: #ffffff;
    padding: 32px;
    border-radius: 16px;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.3);

    display: flex;
    flex-direction: column;
    gap: 20px;

    .cabecalho-preview {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid #f1f5f9;
        padding-bottom: 12px;

        h2 {
            margin: 0;
            color: #1e293b;
            font-size: 22px;
        }
    }

    .dica-box {
        background-color: #eff6ff;
        border: 1px solid #bfdbfe;
        color: #1e40af;
        padding: 12px 16px;
        border-radius: 8px;
        font-size: 14px;
        line-height: 1.4;
    }
`;

export const StatusBadge = styled.span`
    background-color: #dcfce7;
    color: #15803d;
    font-size: 12px;
    font-weight: bold;
    padding: 6px 10px;
    border-radius: 20px;
`;

export const HighlightBox = styled.div`
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    color: white;
    padding: 24px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);

    span {
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 1px;
        opacity: 0.9;
    }

    h3 {
        font-size: 36px;
        margin: 8px 0;
        font-weight: 800;
    }

    small {
        font-size: 13px;
        opacity: 0.85;
    }
`;

export const ResultCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;

    .item {
        background-color: #f8fafc;
        padding: 14px 16px;
        border-radius: 8px;
        border-left: 4px solid #64748b;
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
            font-size: 14px;
            color: #475569;
            font-weight: 600;
        }

        p {
            margin: 0;
            font-size: 18px;
            font-weight: bold;
            color: #1e293b;
        }
    }

    .item.lucro {
        border-left-color: #10b981;
        background-color: #f0fdf4;

        p {
            color: #15803d;
        }
    }
`;