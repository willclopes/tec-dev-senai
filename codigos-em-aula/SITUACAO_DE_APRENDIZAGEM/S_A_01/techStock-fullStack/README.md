# DOCUMENTAÇÃO — SITUAÇÃO DE APRENDIZAGEM I — TECHSTOCK

**TechStock** é um sistema de controle de inventário de equipamentos desenvolvido como atividade da **Situação de Aprendizagem I — SENAI**.

**Tecnologias:** React, Vite, Styled Components, Node.js, Fastify e MySQL.

---

## 1. CRIAÇÃO E MODELAGEM DO BANCO DE DADOS — SEM DOCKER

### 1.1. Queries utilizadas na criação

O arquivo [`banco_sql/01_techstock.sql`](./banco_sql/01_techstock.sql) contém a criação do banco e da tabela, além de **18 registros fictícios** para teste.

```sql
CREATE DATABASE IF NOT EXISTS techstock_db;
USE techstock_db;

CREATE TABLE IF NOT EXISTS equipamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    categoria VARCHAR(60) NOT NULL,
    numero_serie VARCHAR(100) NOT NULL UNIQUE,
    status VARCHAR(50) NOT NULL,
    data_aquisicao VARCHAR(100) NOT NULL
);
```

## 2. INSTALAÇÃO E PREPARAÇÃO DO MYSQL COM DOCKER

> O nome do banco de dados é **`techstock_db`**, tanto na instalação local quanto no Docker. São instalações alternativas: cada uma mantém seus próprios dados.

### 2.1. Criar o container

```bash
docker run -d --name techstock -e MYSQL_ROOT_PASSWORD=123 -e MYSQL_DATABASE=techstock_db -p 3307:3306 mysql:8
```

Se o container **já tiver sido criado** com o nome `techstock`, basta iniciá-lo, sem executar `docker run` novamente:

```bash
docker start techstock
```

> `techstock` no parâmetro `--name` é o **nome do container**; `techstock_db` em `MYSQL_DATABASE` é o **nome do banco**. A senha `123` é apenas um exemplo didático para ambiente local.

### 2.2. Acessar o container e o banco

```bash
# Ver containers em execução
docker ps

# Entrar no MySQL do container
docker exec -it techstock mysql -u root -p
```

No terminal do MySQL:

```sql
USE techstock_db;
```

### 2.3. Criar a tabela

```sql
USE techstock_db;

CREATE TABLE IF NOT EXISTS equipamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    categoria VARCHAR(60) NOT NULL,
    numero_serie VARCHAR(100) NOT NULL UNIQUE,
    status VARCHAR(50) NOT NULL,
    data_aquisicao VARCHAR(100) NOT NULL
);
```

### 2.4. Inserir dados fictícios para teste

Selecione o banco `techstock_db` antes de inserir os registros fictícios.

```sql
-- Banco utilizado em ambas as instalações (local e Docker).
USE techstock_db;

INSERT INTO equipamentos (nome, categoria, numero_serie, status, data_aquisicao) VALUES
('MacBook Air M2', 'Notebook', 'TS-NB-001', 'Emprestado', '2026-02-10'),
('Dell Latitude 5440', 'Notebook', 'TS-NB-002', 'Disponivel', '2026-01-15'),
('Lenovo ThinkPad E14', 'Notebook', 'TS-NB-003', 'Manutenção', '2025-11-20'),
('Acer Aspire 5', 'Notebook', 'TS-NB-004', 'Disponivel', '2026-03-06'),
('Monitor LG UltraWide 29', 'Monitor', 'TS-MN-005', 'Disponivel', '2025-09-14'),
('Monitor Dell 24', 'Monitor', 'TS-MN-006', 'Emprestado', '2026-04-04'),
('Monitor Samsung 27', 'Monitor', 'TS-MN-007', 'Disponivel', '2026-03-18'),
('Monitor AOC 24', 'Monitor', 'TS-MN-008', 'Manutenção', '2025-08-07'),
('Mouse Logitech MX Master', 'Mouse', 'TS-MS-009', 'Emprestado', '2026-01-21'),
('Mouse Microsoft Bluetooth', 'Mouse', 'TS-MS-010', 'Disponivel', '2026-02-11'),
('Mouse Logitech M720', 'Mouse', 'TS-MS-011', 'Disponivel', '2025-12-03'),
('Teclado Logitech K380', 'Teclado', 'TS-TC-012', 'Emprestado', '2025-09-29'),
('Teclado Keychron K2', 'Teclado', 'TS-TC-013', 'Disponivel', '2026-04-13'),
('Headset HyperX Cloud', 'Headset', 'TS-HD-014', 'Disponivel', '2026-05-06'),
('Headset Jabra Evolve2', 'Headset', 'TS-HD-015', 'Manutenção', '2026-02-19'),
('Dock Station Dell WD19', 'Acessório', 'TS-AC-016', 'Emprestado', '2026-01-12'),
('Webcam Logitech C920', 'Acessório', 'TS-AC-017', 'Disponivel', '2025-10-23'),
('Hub USB-C Anker', 'Acessório', 'TS-AC-018', 'Disponivel', '2026-03-30');
```

> Os números de série são únicos: execute o `INSERT` apenas uma vez em cada banco, para evitar registros duplicados.

### 2.5. Consultas úteis

```sql
-- Listar todos os equipamentos
SELECT * FROM equipamentos;

-- Contar o total cadastrado
SELECT COUNT(*) AS total FROM equipamentos;
```

## 3. CRIAÇÃO E PREPARAÇÃO DO BACKEND

### 3.1. Iniciar o projeto e instalar dependências

No terminal, dentro da pasta `backend`:

```bash
npm init -y
npm install fastify uuid dotenv mysql2
```

No `backend/package.json`, configurar o tipo de módulo e o script de desenvolvimento:

```json
{
  "type": "module",
  "scripts": {
    "dev": "node --watch src/server.js"
  }
}
```

> O trecho acima mostra apenas as propriedades que devem estar no `package.json`; **mantenha as demais propriedades e dependências** que o npm criou.

### 3.2. Arquivos do backend

- 📁`src/controller/equipamentos-controller.js`
- 📁`src/services/equipamentos-services.js`
- 📁`src/repositories/equipamentos-repository.js`
- 📁`src/routes/equipamentos-routes.js`
- 📁`src/database/connection.js`
- 📁`src/app.js` e `src/server.js`

### 3.3. Rodar o backend

Na pasta `backend`:

```bash
npm run dev
```

Ou, sem o modo de observação de arquivos:

```bash
node src/server.js
```

## 4. FRONTEND

### 4.1. Instalar dependências

Na pasta `frontend`:

```bash
npm install styled-components
npm install react-router-dom
npm install axios
npm install react-hook-form
npm install sweetalert2
```

### 4.2. Rodar o frontend

```bash
npm run dev
```

## 5. ESTRUTURA DE PASTAS E ARQUIVOS

```text
📁 TechStock/
│
├── 📁 frontend/
│   │
│   ├── 📁 public/
│   │
│   ├── 📁 src/
│   │   │
│   │   ├── 📁 components/
│   │   │   │
│   │   │   ├── 📁 Header/
│   │   │   │   ├── index.jsx
│   │   │   │   └── styled.jsx
│   │   │   │
│   │   │   ├── 📁 Footer/
│   │   │   │   ├── index.jsx
│   │   │   │   └── styled.jsx
│   │   │   │
│   │   │   ├── 📁 Logo/
│   │   │   │   ├── index.jsx
│   │   │   │   └── styled.jsx
│   │   │   │
│   │   │   ├── 📁 Banner/
│   │   │   │   ├── index.jsx
│   │   │   │   └── styled.jsx
│   │   │   │
│   │   │   ├── 📁 Cards/
│   │   │   │   ├── index.jsx
│   │   │   │   └── styled.jsx
│   │   │   │
│   │   │   ├── 📁 Catalogo/
│   │   │   │   ├── index.jsx   ← Tabela e paginação
│   │   │   │   └── styled.jsx
│   │   │   │
│   │   │   └── 📁 Layout/         
│   │   │       └── index.jsx   ← arquivo para "montar" os componentes da "rota" 
│   │   │
│   │   ├── 📁 pages/
│   │   │   │
│   │   │   ├── 📁 PrimeiraVersao/
│   │   │   │   ├── index.jsx
│   │   │   │   └── styled.jsx
│   │   │   │
│   │   │   ├── 📁 Dashboard/
│   │   │   │   ├── index.jsx
│   │   │   │   └── styled.jsx
│   │   │   │
│   │   │   ├── 📁 Relatorio/
│   │   │   │   ├── index.jsx
│   │   │   │   └── styled.jsx
│   │   │   │
│   │   │   ├── 📁 Consultas/
│   │   │   │   ├── index.jsx
│   │   │   │   └── styled.jsx
│   │   │   │
│   │   │   └── 📁 NotFound/
│   │   │       ├── index.jsx
│   │   │       └── styled.jsx
│   │   │
│   │   ├── router.jsx
│   │   │
│   │   ├── 📁 data/
│   │   │   └── equipamentos.js   ← arquivo para teste do frontend
│   │   │
│   │   ├── 📁 styles/
│   │   │   └── palette-azul.css  ← decoração visual de todo projeto
│   │   │
│   │   ├── App.jsx               ← chama o RouterProvider router={router}
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx              ← importação do "palette-azul.css"
│   │
│   ├── index.html
│   └── package.json
│
└── 📁backend/
│   │
│   ├── 📁 src/
│   │   │
│   │   ├── 📁controller/
│   │   │   └── equipamentos-controller.js
│   │   │
│   │   ├── 📁services/
│   │   │   └── equipamentos-services.js
│   │   │
│   │   ├── 📁repositories/
│   │   │   └── equipamentos-repository.js
│   │   │
│   │   ├── 📁routes/
│   │   │   └── equipamentos-routes.js
│   │   │
│   │   └── 📁database/
│   │   │   └── connection.js
│   │   │
│   │   ├── server.js
|   │   ├── app.js    
│   │   ├── package.json
│   │   └── .env
```



---

**Projeto — Situação de Aprendizagem I | SENAI**
