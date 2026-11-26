# Fastify — exemplos completos e simples

Este pacote segue a estrutura e a linguagem do seu código de tarefas.

## Projetos

1. **01-biblioteca-server-unico** — cadastro, empréstimo e devolução (porta 3004)
2. **02-biblioteca-arquivos-separados** — a mesma biblioteca com `controller`, `database`, `routes`, `services`, `app.js`, `server.js` (porta 3005)
3. **03-crud-generico-server-unico** — CRUD adaptável para outros assuntos (porta 3006)
4. **04-crud-generico-arquivos-separados** — CRUD adaptável em camadas, sem `repositories` (porta 3007)

## Campos da biblioteca

- `id`: identificador do livro.
- `titulo`: nome do livro.
- `autor`: quem escreveu.
- `disponivel`: `true` para disponível, `false` para emprestado.
- `emprestadoPara`: nome da pessoa que pegou o livro.
- `dataEmprestimo`: data em que foi emprestado.

## Como executar

Entre em UMA das pastas pelo VS Code e rode:

```bash
npm install
npm run dev
```

Os dados ficam em memória. Não é necessário MySQL e ao reiniciar os dados voltam aos exemplos.

### Diferença entre biblioteca e CRUD genérico

As versões da biblioteca **impedem empréstimo duplicado**, registram quem pegou o livro e limpam os dados ao devolver. As versões genéricas só fazem GET/POST/PUT/PATCH/DELETE e não implementam essas regras específicas.

### Por que IDs são textos?

O Fastify recebe `request.params.id` como texto, por exemplo `'1'`. Por isso os livros de exemplo usam `id: '1'`. Os novos registros usam `v4()` do `uuid`.
