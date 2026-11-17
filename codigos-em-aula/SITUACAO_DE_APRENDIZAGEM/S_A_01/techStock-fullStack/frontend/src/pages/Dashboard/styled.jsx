import styled from "styled-components";

export const ContainerPrincipal = styled.main`
  max-width: 1300px;
  margin: 25px auto 40px;
  padding: 0 30px;
  box-sizing: border-box;
`;

export const IndicadoresCards = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  margin-bottom: 25px;
`;

export const Painel = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 25px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 20px;
  box-shadow: var(--shadow);
  margin-bottom: 25px;
  border-top: 10px solid var(--dash-border-manutencao);
  border-bottom: 10px solid var(--dash-border-manutencao);
`;

export const TituloPainel = styled.h2`
  margin: 0 0 8px;
  font-size: 21px;
  font-weight: 800;
  color: var(--text);
`;

export const DescricaoPainel = styled.p`
  margin: 0 0 25px;
  font-size: 13px;
  color: var(--muted);
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LinhaCampos = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 15px;
`;

export const CampoFormulario = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;

  label {
    font-size: 13px;
    font-weight: 600;
    color: var(--text);
  }

  input {
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
    border: 1px solid var(--line);
    border-radius: 8px;
    background: var(--surface);
    color: var(--text);
    font-size: 14px;
    font-family: inherit;
  }

  input:focus {
    outline: 2px solid var(--dash-focus);
    outline-offset: 1px;
  }
`;

export const LinhaOpcoes = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.2fr 1fr;
  gap: 15px;
  align-items: end;
`;

export const GrupoRadio = styled.fieldset`
  margin: 0;
  min-width: 0;
  padding: 10px 30px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--surface);

  legend {
    padding: 0 6px;
    font-size: 13px;
    font-weight: 700;
    color: var(--text);
  }

  label {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 13px;
    color: var(--text);
    cursor: pointer;
  }

  input {
    margin: 0;
    accent-color: var(--dash-focus);
  }
`;

export const OpcoesCategoria = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const OpcoesSituacao = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const BotaoCadastro = styled.button`
  width: 100%;
  min-height: 44px;
  align-items: center;
  align-content: center;
  align-self: center;
  padding: 12px 15px;
  border: none;
  border-radius: 10px;
  background: var(--gradient-logo);
  color: var(--surface);
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.08);
  }

  &:active {
    transform: scale(0.80);
  }
`;