// BANNER: faixa de boas-vindas que aparece ANTES dos containers de Login e Cadastro.
// Todo o visual (gradiente, bolhas flutuantes) é feito só com CSS, sem imagens.
import { Faixa, Bolha, Conteudo, Etiqueta, Titulo, Destaque, Texto, Chips, Chip } from "./styled";

export default function Banner() {
  return (
    <Faixa>
      {/* Bolhas decorativas no fundo (cada uma tem posição e cor próprias) */}
      <Bolha $posicao="topo-esquerda" />
      <Bolha $posicao="meio-direita" />
      <Bolha $posicao="baixo-esquerda" />

      <Conteudo>
        <Etiqueta>✨ Tarefas + Cotação Crypto</Etiqueta>

        <Titulo>
          Organize suas tarefas e acompanhe suas <Destaque>criptomoedas</Destaque>
        </Titulo>

        <Texto>
          Um lugar simples para planejar seus dias e, no plano Premium, ver cotações em tempo real,
          favoritar seus ativos e converter valores.
        </Texto>

        <Chips>
          <Chip>✅ Tarefas fáceis</Chip>
          <Chip>📈 Cotações ao vivo</Chip>
          <Chip>⭐ Favoritos</Chip>
          <Chip>🔄 Conversor</Chip>
        </Chips>
      </Conteudo>
    </Faixa>
  );
}