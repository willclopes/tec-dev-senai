# DOCUMENTAÇÃO - SITUAÇÃO DE APRENDIZAGEM I - TECHSTOCK


## 1. CRIAÇÃO E MODELAGEM DO BANCO DE DANDOS

### 1.1 - Queries utilizadas na criação

O arquivo [`./banco_sql`/`01_techstock.sql`](01_techstock.sql) contém o `CREATE TABLE` e  `INSERT` de exemplo.

```sql
CREATE DATABASE IF NOT EXISTS techstock;
USE techstock;

CREATE TABLE IF NOT EXISTS equipamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(120) NOT NULL,
    categoria VARCHAR(60) NOT NULL,
    numero_serie VARCHAR(100) NOT NULL UNIQUE,
    status VARCHAR(50) NOT NULL,
    data_aquisicao VARCHAR(100) NOT NULL
);
```
## 2. INSTAÇÃO/PREPARAÇÃO DO DOCKER


### 2.1 - Criar o contêiner

```bash
docker run -d --name techstock -e MYSQL_ROOT_PASSWORD=123 -e MYSQL_DATABASE=techstock_db -p 3307:3306 mysql:8

```

### 2.2 - Acessar contêiner e banco de dados

```bash
docker ps (lista os containers)
docker exec -it (ID DO CONTANINER) mysql -u root -p
use techstock
```




### 2.3 - Criação da Tabela

Usar script modelado em 1.1 para criar a tabela.


### 2.4 - Inserir informações no Banco para teste

```sql

--Selecionar a tablela
use equipamentos;

-- Inserção de registros fictícios para teste
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

## 2.5 - Comandos de consulta úteis

```sql
-- Todos os registros cadastrados.
SELECT * FROM equipamentos;

-- Quantos registros existem no inventário.
SELECT COUNT(*) AS total FROM equipamentos;
```


## 3. Criacão dos Arquivos do BACKEND

1. Iniciar no termial

```npm init -y```

2. Alterar o .json

```"dev": "node -- wah```

3. Trocar o Type

```type: "module"```

4. criar o arquivo "server.js"

### 3.1 Instalação das Bibliotecas/dependências

```
npm init -y
npm install fastify
nmp install uuid
npm install dotenv

```


# 4. FRONTEND



## 4.1 - Instalação das Bibliotecas/dependências


```
npm i styled-components
npm i react-router-dom   
npm i axios
npm install react-hook-form

npm install sweetalert2 --no-bin-links (para exibir alertas)

```