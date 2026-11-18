# TechStock — Manual de instalação do MySQL no Linux

**Do zero até a rotina do dia seguinte | VS Code + MySQL local, sem Docker**  
**Foco:** Ubuntu e Linux Mint baseados no Ubuntu, usando `apt` e `systemd`. Em Debian ou outras distribuições, pacotes e nomes de serviços podem variar.  
**Objetivo:** instalar, criar a tabela de equipamentos, conectar o Back-end e retomar o TechStock após reiniciar o computador.

> **Importante:** este manual usa MySQL local, sem Docker. **Mantenha o Docker Compose no repositório** para executar o projeto no SENAI. Não é obrigatório que a versão do MySQL instalada no Linux seja `26.10`; ela depende do repositório da sua distribuição.

## Guia rápido: o que fazer todo dia

1. Ligue o Linux e abra o VS Code na pasta do projeto `techstock`.
2. Confira o serviço: `systemctl is-active mysql`.
3. Se a saída for `active`, o banco está em execução. Se estiver parado: `sudo systemctl start mysql`.
4. **Se a API já estiver integrada:** abra um terminal em `backend` e execute `npm run dev`.
5. Abra outro terminal em `frontend` e execute `npm run dev`.
6. Abra a URL do Vite, geralmente **http://localhost:5173**.
7. Pare os servidores Node.js com **Ctrl+C**. Não precisa refazer a instalação, o banco ou as tabelas.

> Enquanto o Dashboard for apenas visual, basta iniciar o Front-end. Só será necessário executar a API e o banco quando chegar à integração real.

---

## Parte A — Instalação inicial (uma única vez)

### 1. Identificar a distribuição

Abra um terminal no VS Code (**Terminal → Novo Terminal**) e execute:

```bash
cat /etc/os-release
```

Este procedimento foi escrito para **Ubuntu e Linux Mint compatível com pacotes Ubuntu**. Outras distribuições, como Fedora e Arch, utilizam outros gerenciadores de pacotes. Em **Debian**, confirme a disponibilidade do pacote `mysql-server`: alguns repositórios oferecem MariaDB em vez do MySQL Oracle. Não substitua por MariaDB sem verificar os requisitos do curso.

### 2. Verificar se o MySQL já está instalado

```bash
mysql --version
systemctl status mysql --no-pager
```

- Se `mysql --version` mostrar uma versão, o **cliente MySQL** está disponível.
- Se o `systemctl` mostrar `active (running)`, o **servidor** está rodando.
- Ter o cliente instalado **não garante** que o servidor esteja instalado ou iniciado.

Para verificar se o pacote existe no Ubuntu:

```bash
apt-cache policy mysql-server
```

### 3. Instalar MySQL pelo terminal (Ubuntu)

```bash
# Atualiza a lista de pacotes.
sudo apt update

# Instala o servidor MySQL e seus componentes necessários.
sudo apt install mysql-server
```

O sistema poderá pedir a senha do **seu usuário Linux** para autorizar o comando `sudo`. Esta senha não é necessariamente uma senha do MySQL.

Se o pacote não existir, **não force a instalação de outro banco**: consulte a documentação da distribuição e, quando for indispensável o MySQL da Oracle, a documentação do repositório oficial MySQL APT.

### 4. Verificar e iniciar o servidor

```bash
# Verifica se o serviço está ligado.
sudo systemctl status mysql --no-pager

# Inicia caso esteja parado.
sudo systemctl start mysql

# Faz o serviço iniciar automaticamente com o Linux.
sudo systemctl enable mysql
```

Para confirmar que a porta **3306** está escutando:

```bash
sudo ss -ltnp | grep 3306
```

Se não aparecer a porta, não significa obrigatoriamente que a instalação falhou: confira o status do serviço, os logs e a configuração da porta.

### 5. Conectar como administrador (diferença importante em relação ao Windows)

Nas instalações padrão do Ubuntu, o usuário `root` do MySQL costuma autenticar por **socket**, associado ao administrador do Linux. Por isso, use:

```bash
sudo mysql
```

Quando aparecer `mysql>`, você está dentro do cliente MySQL. Para sair:

```sql
EXIT;
```

**Não estranhe se `mysql -u root -p` falhar no Ubuntu**: não significa necessariamente que a instalação está quebrada. É comum o root estar configurado para `auth_socket` e funcionar por `sudo mysql`.

### 6. Precisa configurar o PATH no Linux?

Em instalações feitas com `apt`, o comando `mysql` normalmente já fica no PATH (por exemplo, `/usr/bin/mysql`). Confira:

```bash
command -v mysql
mysql --version
```

Se `command -v mysql` mostrar um caminho, **não precisa fazer nada**. Se o comando não existir, confirme a instalação do cliente:

```bash
sudo apt install mysql-client
```

Isso é diferente do problema encontrado no Windows, onde foi necessário adicionar manualmente `C:\Program Files\MySQL\MySQL Server 26.10\bin` ao PATH. **Não use esse caminho do Windows no Linux.**

---

## Parte B — Criar e conferir o banco TechStock (uma única vez)

### 7. Separar os arquivos do projeto

```text
techstock/
├── frontend/
├── backend/
├── database/
│   ├── 01_tabelas.sql
│   └── comandos.md
└── compose.yaml         # Necessário no SENAI; não usado no Linux local
```

Use preferencialmente o arquivo `database/01_tabelas.sql` já entregue no TechStock, para que os nomes das colunas sejam **exatamente os usados pela API**. Se estiver começando do zero, um exemplo compatível com a estrutura estudada é:

```sql
CREATE DATABASE IF NOT EXISTS techstock
    CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE techstock;

CREATE TABLE IF NOT EXISTS equipamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(150) NOT NULL,
    categoria VARCHAR(80) NOT NULL,
    numero_serie VARCHAR(100) NOT NULL UNIQUE,
    status ENUM('disponivel', 'emprestado', 'manutencao')
        NOT NULL DEFAULT 'disponivel',
    data_aquisicao DATE NOT NULL
);
```

### 8. Executar o SQL no MySQL local

**Método mais simples no terminal do Linux:** vá até a raiz do projeto `techstock` e execute:

```bash
# Executa o SQL usando o administrador local do MySQL.
sudo mysql < database/01_tabelas.sql
```

Isso executa o arquivo inteiro **sem abrir o prompt interativo**. Também é possível entrar em `sudo mysql` e executar:

```sql
SOURCE /CAMINHO/COMPLETO/techstock/database/01_tabelas.sql;
```

Confira o resultado:

```bash
sudo mysql
```

Dentro do prompt `mysql>`:

```sql
SHOW DATABASES;
USE techstock;
SHOW TABLES;
DESCRIBE equipamentos;
SELECT * FROM equipamentos;
EXIT;
```

Se a tabela estiver vazia, está correto: o banco ainda não recebeu cadastros. Não repita o script de criação todos os dias.

### 9. Criar usuário próprio para a API (recomendado)

Não é necessário que a API utilize o usuário `root`. Crie um usuário com senha, limitado ao CRUD do banco `techstock`:

```bash
sudo mysql
```

Dentro do MySQL:

```sql
CREATE USER IF NOT EXISTS 'techstock_user'@'127.0.0.1'
    IDENTIFIED BY 'TROQUE_POR_SENHA_FORTE';

GRANT SELECT, INSERT, UPDATE, DELETE
    ON techstock.*
    TO 'techstock_user'@'127.0.0.1';

EXIT;
```

Teste a conexão por **TCP** (igual à utilizada pelo Back-end com `DB_HOST=127.0.0.1`):

```bash
mysql -h 127.0.0.1 -P 3306 -u techstock_user -p techstock
```

Se aparecer `mysql>`, deu certo. `EXIT;` encerra a sessão. Se o usuário já existia, `CREATE USER IF NOT EXISTS` **não altera a senha existente**.

---

## Parte C — Integrar com o projeto TechStock

### 10. Configurar `backend/.env`

Crie ou ajuste o arquivo `.env` no Back-end. O exemplo utiliza nomes `DB_*`, mas **verifique os nomes que o arquivo `backend/database` lê** no seu código: se ele utiliza `MYSQL_HOST` ou outras variáveis, mantenha esses nomes.

```dotenv
DB_HOST=127.0.0.1
DB_PORT=3306
DB_NAME=techstock
DB_USER=techstock_user
DB_PASSWORD=SENHA_QUE_VOCE_CONFIGUROU
```

- `127.0.0.1` significa **este próprio computador**.
- `3306` é a porta comum do MySQL, **desde que seja a porta configurada no servidor**.
- `techstock_user` tem permissão para inserir, consultar, editar e excluir equipamentos.
- **Não publique `.env` no GitHub.** Adicione `.env` ao `.gitignore`.

### 11. Conferir Node.js e npm

```bash
node --version
npm --version
```

Se não estiverem instalados, instale a versão LTS do Node.js usando um método compatível com sua distribuição (por exemplo, um gerenciador de versões de Node ou o instalador recomendado em https://nodejs.org/). Depois, reabra o terminal e repita os testes.

### 12. Executar o Back-end e o Front-end no VS Code

**Terminal 1:** entre no Back-end:

```bash
cd backend
npm install      # Uma vez ou após mudança de dependências
npm run dev
```

**Terminal 2:** abra outro terminal partindo da **raiz do projeto**:

```bash
cd frontend
npm install      # Uma vez ou após mudança de dependências
npm run dev
```

Acesse a URL que o Vite informar (normalmente **http://localhost:5173**). Os comandos `npm run dev` pressupõem que os scripts de desenvolvimento existam nos `package.json`, como na estrutura do TechStock.

> Se o objetivo, por enquanto, é **somente construir o visual do Dashboard**, rode apenas o Front-end. O Back-end e MySQL serão necessários quando começar a consumir a API.

### 13. Consultar SQL dentro do VS Code (opcional)

Você pode instalar as extensões **SQLTools** e **SQLTools MySQL/MariaDB/TiDB Driver** e criar conexão usando `127.0.0.1`, porta do servidor, banco `techstock`, usuário `techstock_user` e sua senha. Para aprender SQL, o terminal continua sendo suficiente.

---

## Parte D — Dia seguinte: reiniciei o Linux; e agora?

**Não reinstale pacotes, não altere o PATH e não recrie a tabela.** O MySQL costuma iniciar automaticamente se o serviço estiver habilitado.

```bash
# 1. Verifica se o MySQL foi iniciado.
systemctl is-active mysql

# 2. Se não estiver ativo, inicia.
sudo systemctl start mysql

# 3. Opcional: confirma a versão do cliente.
mysql --version
```

Depois:

```text
4. Abrir o VS Code na pasta techstock.
5. Se a API estiver integrada: terminal 1 → cd backend → npm run dev
6. Terminal 2 → cd frontend → npm run dev
7. Abrir http://localhost:5173 (ou a URL mostrada no terminal).
8. Ao terminar: Ctrl+C nos dois terminais e fechar o VS Code.
```

**Não precisa entrar em `sudo mysql` todos os dias.** A API conecta automaticamente com seu usuário próprio e as credenciais do `.env`.

---

## Diagnóstico rápido

| Problema | Como verificar ou resolver |
|---|---|
| `mysql: command not found` | `command -v mysql`; confira `sudo apt install mysql-client`. |
| Serviço parado | `sudo systemctl start mysql` e `sudo systemctl status mysql --no-pager`. |
| Falha de conexão na porta 3306 | `sudo ss -ltnp \| grep 3306` e consulte `sudo journalctl -u mysql -n 50 --no-pager`. |
| `Access denied` com root | Em Ubuntu, teste `sudo mysql` (autenticação por socket). |
| `Access denied` com usuário da API | Confira usuário `techstock_user`, senha e acesso a `127.0.0.1`. |
| Banco inexistente | Execute o SQL da etapa 8 e confira `SHOW DATABASES;`. |
| Tabela inexistente | Confira `SHOW TABLES;` e os comandos `CREATE TABLE` do projeto. |
| React abre, mas não mostra dados | Confira API em execução, serviço MySQL, `.env` e logs. |
| `npm: command not found` | Instale/configure Node.js e npm; abra novo terminal. |

> Em outras distribuições, os comandos `systemctl` só funcionarão se houver `systemd`, e o nome do serviço pode variar. Este guia é voltado a Ubuntu/Linux Mint compatíveis.

### Referências oficiais

- Ubuntu — instalar e configurar MySQL: https://ubuntu.com/server/docs/how-to/databases/install-mysql/
- MySQL APT (Oracle): https://dev.mysql.com/doc/mysql-apt-repo-quick-guide/en/
- Node.js: https://nodejs.org/

**Fim do manual Linux.**
