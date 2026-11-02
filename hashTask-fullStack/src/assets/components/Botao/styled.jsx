import styled, { css } from "styled-components";

/* Explicação {css}

A função css serve para escrever um bloco de CSS dentro de uma variável JavaScript e depois reutilizá-lo. 
Sem ela, o styled-components não interpola corretamente quando você monta CSS dinâmico fora de um styled.div.

Por que precisa dela

Imagine que você quer guardar um estilo em uma variável para reusar:

// ❌ Sem css — parece funcionar, mas perde autocomplete,
//    syntax highlight e pode dar bug com props interpoladas
const estiloPerigo = `
  background: var(--cor-perigo);
  color: var(--cor-texto-claro);
`;

// ✅ Com css — o styled-components entende que é CSS de verdade
const estiloPerigo = css`
  background: var(--cor-perigo);
  color: var(--cor-texto-claro);
`;


*/



// Um "css``" guarda um pedaço de estilo para usarmos depois.
// Cada variante é um pedaço diferente.
const variantes = {
  primario: css`
    background: var(--gradiente-primario);
    color: var(--cor-texto-claro);
    box-shadow: var(--sombra-botao);

    &:hover:not(:disabled) {
      background: var(--gradiente-primario-hover);
      transform: translateY(-2px);
    }
  `,
  secundario: css`
    background: var(--cor-superficie);
    color: var(--cor-primaria);
    border: 1.5px solid var(--cor-borda-forte);

    &:hover:not(:disabled) {
      background: var(--cor-primaria-clara);
    }
  `,
  sucesso: css`
    background: var(--gradiente-sucesso);
    color: var(--cor-texto-claro);

    &:hover:not(:disabled) {
      transform: translateY(-2px);
    }
  `,
  perigo: css`
    background: var(--gradiente-perigo);
    color: var(--cor-texto-claro);
    box-shadow: var(--sombra-perigo);

    &:hover:not(:disabled) {
      transform: translateY(-2px);
    }
  `,
  fantasma: css`
    background: transparent;
    color: var(--cor-texto-suave);

    &:hover:not(:disabled) {
      background: var(--cor-primaria-clara);
      color: var(--cor-primaria);
    }
  `,
};

export const BotaoEstilizado = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: ${({ $pequeno }) => ($pequeno ? "8px 14px" : "12px 22px")};
  font-size: ${({ $pequeno }) => ($pequeno ? "0.875rem" : "1rem")};
  width: ${({ $cheio }) => ($cheio ? "100%" : "auto")};
  border-radius: var(--raio-medio);
  font-weight: 600;
  transition: all 0.2s ease;

  /* Aplica o pedaço de estilo da variante escolhida */
  ${({ $variante }) => variantes[$variante]}

  /* Botão desabilitado fica apagado e sem efeitos */
  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    box-shadow: none;
  }
`;


/* explicação props


  Props (abreviação de properties) são informações que você passa de um componente pai para um filho. 
  É a forma do React de personalizar um componente sem criar vários componentes diferentes.
  São como os parâmetros de uma função:

    // função normal
        function saudacao(nome) {
            return "Olá, " + nome;
        }
        saudacao("Ana"); // passa o valor aqui

    // componente com prop
        function Saudacao({ nome }) {
            return <p>Olá, {nome}</p>;
        }
    <Saudacao nome="Ana" /> // passa o valor aqui


  -> Quando usar

     Quando o componente precisa se comportar ou parecer diferente dependendo de quem o usa.
     O Botao é um bom exemplo: em vez de criar BotaoPrimario, BotaoPerigo, BotaoPequeno, você cria um só e muda o visual com props:



  -> Como o componente recebe

    As props chegam como um objeto. Você pode pegar o objeto inteiro ou desestruturar direto:


    // objeto inteiro
        function Botao(props) {
        console.log(props); // { variante: "perigo", children: "Excluir" }
        }

    // desestruturado — mais comum
        function Botao({ $variante, $pequeno, children }) {
        usa cada um pelo nome
    }


  -> O children é uma prop especial

    O que você escreve entre as tags vira a prop children automaticamente:

        <Botao>Salvar</Botao>
            // children = "Salvar"

        <Botao>
            <span>💾</span> Salvar
        </Botao>
            // children = tudo isso aqui dentro


    padding: ${({ $pequeno }) => ($pequeno ? "8px 14px" : "12px 22px")};
        Lendo em partes:

        $pequeno — pega essa prop das props do componente
        condição ? "A" : "B" — operador ternário: se verdadeiro retorna A, senão retorna B
        se $pequeno existir → padding pequeno 8px 14px
        se não existir → padding normal 12px 22px

    Na prática:

    <Botao>Normal</Botao>            padding: 12px 22px 
    <Botao $pequeno>Pequeno</Botao>  padding: 8px 14px 



  O $pequeno é uma prop booleana — você passa ela sem valor nenhum, só o nome:
            
            <Botao $pequeno>Cancelar</Botao>
        
        Quando você escreve só o nome assim, o React entende que o valor é true. É o mesmo que escrever:
            <Botao $pequeno={true}>Cancelar</Botao>
    ---

    Linha 2 — escolha de um bloco inteiro
        
        ${({ $variante }) => variantes[$variante]}
            
            Aqui não retorna um valor simples, retorna um bloco inteiro de CSS do objeto variantes:
            const variantes = {
                primario:   css`background: var(--gradiente-primario); ...`,
                secundario: css`background: transparent; border: ...`,
                perigo:     css`background: var(--gradiente-perigo); ...`,
}

    Funciona como um array, mas com nome em vez de número. variantes["primario"] retorna aquele bloco de CSS inteiro.

    <Botao $variante="primario">  cola o css do primario  
    <Botao $variante="perigo">    cola o css do perigo    


    O padrão é sempre o mesmo
        ${  (props) => alguma coisa baseada nas props  }
          
        Pode retornar um valor simples, uma string, ou um bloco css inteiro. 
        O styled-components só pega o que a função devolver e cola no CSS final.

    

    A única regra

    O $ na frente não é opcional no styled-components 6. 
    Sem ele, a prop vaza para o HTML e o React mostra um aviso no console. 
    Com o $, o styled-components intercepta e não deixa chegar na <button> de verdade.

    Props normais do React e do HTML, como onClick, type, disabled, não levam $ porque essas sim precisam chegar no elemento HTML.      







    */