import { TemaProvider, useTema } from '../contexts/ThemeContext';
import { Container, Card, Titulo, Texto, Botao } from './styled';

function PainelControle() {
  const { tema, alternarTema, cliques } = useTema();

  return (
    <Card>
      <Titulo>Context + ThemeProvider</Titulo>
      <Texto>
        O tema atual é <strong>{tema}</strong>.
        <br />
        Você já trocou o tema <strong>{cliques}</strong> vezes.
      </Texto>
      <Botao onClick={alternarTema}>
        Alternar para {tema === 'light' ? 'Dark' : 'Light'}
      </Botao>
    </Card>
  );
}

export function Main() {
  return (
    <TemaProvider>
      <Container>
        <PainelControle />
      </Container>
    </TemaProvider>
  );
}