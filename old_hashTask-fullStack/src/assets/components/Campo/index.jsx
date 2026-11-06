// CAMPO de formulário: rótulo (label) + input + mensagem de erro.
// O input fica "dentro" do Campo (children), assim o react-hook-form
// continua funcionando normalmente na página.
//
// Exemplo:
//   <Campo label="E-mail" erro={errors.email?.message}>
//     <input type="email" {...register("email")} />
//   </Campo>
import { Wrapper, Rotulo, MensagemErro } from "./styled";

export function Campo({ label, erro, children }) {
  return (
    // $temErro pinta a borda de vermelho quando existe erro
    <Wrapper $temErro={Boolean(erro)}>
      <Rotulo>{label}</Rotulo>
      {children}
      {erro && <MensagemErro>{erro}</MensagemErro>}
    </Wrapper>
  );
}

