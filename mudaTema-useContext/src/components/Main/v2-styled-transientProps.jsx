import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  font-family: Arial, sans-serif;
  transition: all 0.3s ease;

  background-color: ${(props) => (props.$tema === 'dark' ? '#121214' : '#cddcf4')};
  color: ${(props) => (props.$tema === 'dark' ? '#ffffff' : '#1f2937')};
`;

export const Card = styled.div`
  background-color: ${(props) => (props.$tema === 'dark' ? '#202024' : '#ffffff')};
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  text-align: center;
  max-width: 400px;
  width: 100%;
  border: 1px solid ${(props) => (props.$tema === 'dark' ? '#323238' : '#e5e7eb')};
`;

export const Titulo = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;

export const Texto = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
  line-height: 1.5;

  strong {
    color: #8257e5;
    text-transform: uppercase;
  }
`;

export const Botao = styled.button`
  background-color: #8257e5;
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;