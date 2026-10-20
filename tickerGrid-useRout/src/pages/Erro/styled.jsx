import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--bg-error);
  font-family: sans-serif;
  text-align: center;
  padding: 20px;
`;

export const ErrorImage = styled.img`
  width: 250px;
  margin-bottom: 10px;
  border: none;
  border-radius: 30px;
  mix-blend-mode: multiply;
 `;

export const Title = styled.h1`
  font-size: 4rem;
  color: #333;
  margin: 0;
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 10px;
`;

export const Message = styled.p`
  color: #777;
  margin-bottom: 30px;
  max-width: 400px;
`;

export const HomeLink = styled.button`
  text-decoration: none;
  background-color: #007bff;
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: bold;
  transition: background-color 0.2s;
  border: none;

  &:hover {
    background-color: #0056b3;
  }
`;