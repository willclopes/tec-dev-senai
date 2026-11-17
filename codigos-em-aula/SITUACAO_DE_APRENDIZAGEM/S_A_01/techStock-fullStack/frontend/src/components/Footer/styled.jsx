import styled from "styled-components";



export const ContainerFlutuante = styled.footer`
  max-width: 1300px;
  height: 85px;
  width: calc(100% - 60px);
  margin: 25px auto 24px;
  padding: 15px 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 16px;
  box-shadow: var(--shadow);


      
`;

export const RodapeAntigo = styled.footer`
  border-top: 1px solid var(--line);
  background: var(--surface);
`;

export const Conteudo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  padding: 25px 30px;
  width: 100%;
  //max-width: 1300px;


  
`;

export const Texto = styled.p`
  color: var(--muted);
  font-size: 12px;
`;
