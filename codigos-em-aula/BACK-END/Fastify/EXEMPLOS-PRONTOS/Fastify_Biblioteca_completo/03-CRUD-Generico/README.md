# 03 — CRUD genérico em server.js

API Fastify feita para estudar o **mesmo estilo do exercício de tarefas**: arrays, Fastify, UUID e métodos GET, POST, PUT, PATCH e DELETE. Sem MySQL e sem validações avançadas.

## Executar

```bash
npm install
npm run dev
```

Porta: **3006**.

## Dados dos livros

`id`, `titulo`, `autor`, `disponivel`, `emprestadoPara` e `dataEmprestimo`.

## Rotas

| Método | Caminho | Função |
|---|---|---|
| GET | `/livros` | Listar tudo |
| GET | `/livros/1` | Consultar |
| POST | `/livros` | Cadastrar com os campos enviados |
| PUT | `/livros` | Atualizar registro completo/parcial |
| DELETE | `/livros/1` | Remover |
| PATCH | `/livros/1` | Alterar apenas campos enviados |

## JSON para testes (Thunder Client)

**Cadastrar — POST /livros**
```json
{ "titulo": "1984", "autor": "George Orwell" }
```

**Editar — PUT /livros**
```json
{ "id": "1", "titulo": "Dom Casmurro", "autor": "Machado de Assis" }
```

**PATCH /livros/1**
```json
{ "disponivel": false, "emprestadoPara": "Ana", "dataEmprestimo": "25/11/2026" }
```

**Atenção:** aqui não há regras de empréstimo. É um CRUD genérico: você informa exatamente quais campos deseja alterar. Troque o nome do recurso e os exemplos para adaptar a outro assunto.


**Importante:** os dados ficam apenas no array. Reiniciar o servidor restaura os livros de exemplo.
