// BOTÃO reutilizável. Em vez de estilizar um botão em cada página,
// usamos este em todo lugar e só mudamos a "variante" (a cor).
//
// Exemplos de uso:
//   <Botao>Salvar</Botao>
//   <Botao variante="perigo" onClick={apagar}>Excluir</Botao>
//   <Botao variante="secundario" pequeno>Cancelar</Botao>

import { BotaoEstilizado } from "./styled";

// variante: "primario" | "secundario" | "sucesso" | "perigo" | "fantasma"
// pequeno: deixa o botão menor
// cheio: faz o botão ocupar 100% da largura
// ...resto: pega todo o resto (type, onClick, disabled...) e repassa para o <button>



export function Botao({ children, variante = "primario", pequeno = false, cheio = false, ...resto }) {
  return (
    <BotaoEstilizado $variante={variante} $pequeno={pequeno} $cheio={cheio} {...resto}>
      {children}
    </BotaoEstilizado>
  );
}


/* explicação

    (variante = "primario", pequeno = false, cheio = false)
        Isso é desestruturação com valores padrão. Cada prop tem um valor que entra se ninguém passar nada:
        
        Então <Botao>Salvar</Botao> sem nenhuma prop já funciona — o botão assume primário, tamanho normal, largura automática.


O ...resto

    Captura tudo que você não listou e guarda num objeto chamado resto. 
    Se você passar onClick, type, disabled — eles vão parar no resto.


        As props de estilo ganham o $ e vão pro styled-components
        O {...resto} espalha o objeto resto de volta — é como se você escrevesse cada prop na mão:
            
            {onClick={resto.onClick} type={resto.type}}

        Assim o <button> de verdade recebe o onClick, 
        type="submit", disabled e tudo mais que você passar, sem precisar listar cada um no componente.
    
Por que isso é útil

    Sem o ...resto, você teria que listar toda prop possível do botão:
    
        // ❌ tedioso e incompleto
            function Botao({ children, variante, onClick, type, disabled, onMouseEnter, ... })

            Com ...resto, o componente aceita qualquer prop do HTML automaticamente, e você só lista as que precisa tratar de forma especial.



*/


/* Explicação Children

O children é a prop que representa o que você escreve entre as tags do componente.


    <Botao>Salvar</Botao>
            ↑ isso aqui é o children

        O React captura automaticamente o que está entre as tags e entrega como children. 
        Você não precisa passar explicitamente — ele já chega.

-> O que acontece se não colocar no componente

    Se você não desestruturar e não usar o children, o conteúdo simplesmente some:


        // ❌ sem children
            function Botao({ variante }) {
            return <BotaoEstilizado $variante={variante} />;
            // o texto "Salvar" foi ignorado, botão aparece vazio
        }

        // ✅ com children
            function Botao({ children, variante }) {
            return <BotaoEstilizado $variante={variante}>{children}</BotaoEstilizado>;
            // o texto "Salvar" aparece dentro do botão
        }


É obrigatório?

Não. Depende do componente.

Componentes que envolvem conteúdo precisam de children — 
    botões, cards, modais, layouts. 
    
Componentes que mostram dados próprios não precisam — 
    um avatar que recebe só uma URL, um ícone, um input.

O Botao precisa porque o texto dentro dele muda a cada uso: “Salvar”, “Cancelar”, “Excluir”, “Entrar”. 
    Sem children, você teria que inventar uma prop texto e ficaria <Botao texto="Salvar"> — mais trabalhoso sem motivo.


*/