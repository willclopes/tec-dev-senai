# DOCUMENTAÇÃO - SITUAÇÃO DE APRENDIZAGEM I - TECHSTOCK


## 1. CRIAÇÃO E MODELAGEM DO BANCO DE DANDOS

### Queries utilizadas na criação

O arquivo [`01_techstock.sql`](01_techstock.sql) contém o `CREATE TABLE` e 18 `INSERT` de exemplo.

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


### Criar o contêiner

```bash
docker run -d --name techstock -e MYSQL_ROOT_PASSWORD=123 -e MYSQL_DATABASE=techstock_db -p 3307:3306 mysql:8
```

### Entrar no MySQL pelo contêiner

```bash
docker exec -it [id container] mysql -u techstock -p techstock
```


### 



## Comandos de consulta úteis

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

## 3.1 Instalação das Bibliotecas