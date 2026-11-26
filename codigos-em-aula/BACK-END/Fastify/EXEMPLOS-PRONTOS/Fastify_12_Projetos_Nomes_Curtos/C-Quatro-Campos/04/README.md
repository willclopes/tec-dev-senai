# CRUD genérico - em camadas

Projeto simples, inspirado no exemplo de tarefas do professor.

## Iniciar

```bash
npm install
npm run dev
```

A API abre em `http://127.0.0.1:3007`.

## Rotas

| Método | Caminho | Uso |
|---|---|---|
| GET | `/livros` | Listar |
| GET | `/livros/1` | Buscar pelo ID |
| GET | `/livros-filtro?campo=disponivel&valor=true` | Filtrar qualquer campo |
| POST | `/livros` | Cadastrar |
| PUT | `/livros` | Editar (ID no Body) |
| PATCH | `/livros/1` | Alterar alguns campos |
| DELETE | `/livros/1` | Excluir |

Exemplo POST:

```json
{"titulo":"Meu Livro","autor":"Minha Autora","disponivel":true}
```

Exemplo PUT:

```json
{"id":"1","titulo":"Dom Casmurro - edição 2"}
```

Exemplo PATCH:

```json
{"disponivel":false}
```

**Para mudar o tipo de cadastro:** edite `recurso` e a lista de exemplos no `database/connection.js`. O CRUD funciona com campos diferentes.

## Observações

- Não usa MySQL: os dados ficam na memória e reiniciam com o servidor.
- Os IDs de exemplo são strings (`'1'`, `'2'`); isso evita problemas com `request.params.id`.
- Sem `typeof`, `.trim()` ou validações avançadas: envie os dados corretos nos testes.
- Este projeto segue **controller, database, routes, services, app.js e server.js**; sem Repository.
