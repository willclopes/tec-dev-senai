import { Container, Simbolo, Nome } from "./styled";

export default function Logo() {
  return (
    <Container>
      <Simbolo>#HT.</Simbolo> { /* LOGO "HT" feita só com CSS (sem imagem). */}
      <Nome>
        ♯Hash<span>Task.</span>
      </Nome> 
    </Container>
  );
}