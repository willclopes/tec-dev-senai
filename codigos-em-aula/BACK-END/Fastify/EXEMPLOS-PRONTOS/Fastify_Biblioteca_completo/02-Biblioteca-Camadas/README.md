# 02 — Biblioteca completa em camadas (sem repositories)

API Fastify feita para estudar o **mesmo estilo do exercício de tarefas**: arrays, Fastify, UUID e métodos GET, POST, PUT, PATCH e DELETE. Sem MySQL e sem validações avançadas.

## Executar

```bash
npm install
npm run dev
```

Porta: **3005**.

## Dados dos livros

`id`, `titulo`, `autor`, `disponivel`, `emprestadoPara` e `dataEmprestimo`.

## Rotas

| Método | Caminho | Função |
|---|---|---|
| GET | `/livros` | Listar tudo |
| GET | `/livros?disponivel=true` | Filtrar disponibilidade |
| GET | `/livros/1` | Buscar pelo ID |
| POST | `/livros` | Cadastrar |
| PUT | `/livros` | Editar título e autor |
| DELETE | `/livros/1` | Excluir livro disponível |
| PATCH | `/livros/1/emprestar` | Registrar empréstimo |
| PATCH | `/livros/2/devolver` | Registrar devolução |

## JSON para testes (Thunder Client)

**Cadastrar — POST /livros**
```json
{ "titulo": "1984", "autor": "George Orwell" }
```

**Editar — PUT /livros**
```json
{ "id": "1", "titulo": "Dom Casmurro", "autor": "Machado de Assis" }
```

**Emprestar — PATCH /livros/1/emprestar**
```json
{ "pessoa": "Ana" }
```

**Devolver — PATCH /livros/2/devolver**

Não precisa enviar Body. O nome e a data são limpos na devolução.

Um livro já emprestado não pode ser emprestado novamente nem excluído.


**Importante:** os dados ficam apenas no array. Reiniciar o servidor restaura os livros de exemplo.
