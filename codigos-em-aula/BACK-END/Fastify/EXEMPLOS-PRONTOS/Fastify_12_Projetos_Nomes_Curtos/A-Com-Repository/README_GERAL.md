# 4 projetos Fastify - versão simplificada

Primeira coleção: com a camada Repository nos projetos em camadas.

Todos os projetos seguem o estilo do código de tarefas usado nas aulas:
`Fastify`, `uuid`, `find`, `findIndex`, `filter`, `push`, `request` e `response`.

## As quatro versões

| Pasta | Projeto | Porta |
|---|---|---|
| `01-biblioteca-arquivo-unico` | Biblioteca em um server.js | 3004 |
| `02-biblioteca-em-camadas` | Biblioteca separada em arquivos | 3005 |
| `03-crud-generico-arquivo-unico` | CRUD genérico em server.js | 3006 |
| `04-crud-generico-em-camadas` | CRUD genérico separado | 3007 |

## Instalação

Abra **a pasta de um projeto** no VS Code e execute:

```bash
npm install
npm run dev
```

Teste pelo Thunder Client ou Postman. Veja o README de cada projeto para as rotas e os Bodies JSON.

## Regras

- Livros possuem somente `id`, `titulo`, `autor` e `disponivel`.
- `disponivel: true` = disponível; `false` = emprestado.
- No projeto Biblioteca, o PATCH alterna automaticamente `true` e `false`.
- No CRUD genérico, o PATCH altera os campos enviados no Body.
- O CRUD genérico aceita outros tipos de cadastro; os livros são apenas exemplos.
- Os dados ficam em arrays, **sem MySQL**, e reiniciam ao parar o servidor.
- Nenhum código usa `typeof`, `.trim()`, `Object.assign()` ou funções de validação avançadas.

## Observação sobre as estruturas

Este pacote contém a pasta `repositories/` somente nos projetos 02 e 04, para estudar a versão com essa camada.
