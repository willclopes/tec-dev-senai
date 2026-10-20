import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--gradient-midnight);
  color: #f8fafc;
  font-family: 'Inter', sans-serif;
  border-radius: 10px;
  border: var(--neon-ciano) solid 3px;
  margin-top: 3px;
  margin-bottom: 3px;
`;


export const MainContainer = styled.main`
  flex: 1;
  padding: 50px 8%;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
`;