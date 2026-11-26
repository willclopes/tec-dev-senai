# Biblioteca - em camadas

Projeto simples, inspirado no exemplo de tarefas do professor.

## Iniciar

```bash
npm install
npm run dev
```

A API abre em `http://127.0.0.1:3005`.

## Rotas

| Método | Caminho | Uso |
|---|---|---|
| GET | `/livros` | Listar |
| GET | `/livros?disponivel=true` | Filtrar |
| GET | `/livros/1` | Buscar pelo ID |
| POST | `/livros` | Cadastrar |
| PUT | `/livros` | Editar (ID no Body) |
| PATCH | `/livros/1` | Alternar disponível/emprestado |
| DELETE | `/livros/1` | Excluir |

Novo livro (POST):

```json
{"titulo":"Meu Livro","autor":"Minha Autora"}
```

Editar livro (PUT):

```json
{"id":"1","titulo":"Dom Casmurro - edição 2","autor":"Machado de Assis"}
```

PATCH e DELETE não precisam de Body.

## Observações

- Não usa MySQL: os dados ficam na memória e reiniciam com o servidor.
- Os IDs de exemplo são strings (`'1'`, `'2'`); isso evita problemas com `request.params.id`.
- Sem `typeof`, `.trim()` ou validações avançadas: envie os dados corretos nos testes.
- Este projeto segue **controller, database, routes, services, app.js e server.js**; sem Repository.
