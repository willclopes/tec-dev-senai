# TechStock — Manual de instalação do MySQL no Windows

**Do zero até a rotina do dia seguinte | VS Code + MySQL local, sem Docker**  
**Ambiente usado neste guia:** Windows, PowerShell, MySQL Community Server **26.10**, serviço **MySQL2610**.  
**Objetivo:** instalar, configurar, criar o banco do TechStock, conectar a API e saber como retomar o projeto após reiniciar o computador.

> **Importante:** no computador pessoal você pode usar o MySQL instalado diretamente. **Mantenha o Docker Compose no projeto** para atender à exigência do SENAI. Os bancos de casa e do SENAI são instalações separadas e não compartilham automaticamente os registros.

## Guia rápido: o que fazer todo dia

1. Abra o **VS Code** na pasta do projeto `techstock`.
2. No terminal PowerShell, verifique: `Get-Service MySQL2610`.
3. Se estiver `Running`, não precisa iniciar nem digitar senha do MySQL. Se estiver `Stopped`, abra o PowerShell **como administrador** e execute `Start-Service MySQL2610`.
4. **Se a API já estiver pronta:** abra um terminal em `backend` e rode `npm run dev`.
5. Abra outro terminal em `frontend` e rode `npm run dev`.
6. Abra a URL mostrada pelo Vite, geralmente **http://localhost:5173**.
7. Para parar a API e o React, pressione **Ctrl+C** em cada terminal. **Não** exclua o banco e **não** recrie tabelas a cada inicialização.

> Se estiver estudando apenas o **visual do Dashboard**, você pode executar só o Front-end. A API e o MySQL serão necessários quando começar a conectar o CRUD.

---

## Parte A — Instalação inicial (uma única vez)

### 1. Verificar se o MySQL já existe

No VS Code, abra **Terminal → Novo Terminal** e confirme que é um terminal **PowerShell**. Execute:

```powershell
mysql --version
Get-Service *mysql*
Get-ChildItem "C:\Program Files\MySQL"
```

- Se `mysql --version` funcionar, o cliente é encontrado no PATH.
- Se aparecer **"mysql não é reconhecido"**, o cliente pode estar instalado, mas fora do PATH.
- Se `Get-Service` mostrar um serviço `Running`, o servidor já está em execução.
- No caso que configuramos, a pasta encontrada foi `C:\Program Files\MySQL\MySQL Server 26.10` e o serviço, `MySQL2610`.

### 2. Instalar pelo terminal com Winget

Verifique o gerenciador de pacotes:

```powershell
winget --version
winget search --id Oracle.MySQL --exact
```

Se o pacote estiver disponível, instale:

```powershell
winget install --id Oracle.MySQL --exact
```

O instalador pode solicitar permissão de administrador. Se não encontrar o pacote, use o **MSI oficial** do MySQL: https://dev.mysql.com/downloads/mysql/ . A versão instalada no seu PC foi **26.10**; em outros computadores o número pode ser diferente.

### 3. Configurar o servidor (MySQL Configurator)

Após instalar, abra **MySQL Configurator** pelo menu Iniciar. Se preferir, verifique se o executável existe:

```powershell
Test-Path "C:\Program Files\MySQL\MySQL Server 26.10\bin\mysql-configurator.exe"
```

Se retornar `True`, é possível abrir:

```powershell
& "C:\Program Files\MySQL\MySQL Server 26.10\bin\mysql-configurator.exe"
```

No assistente, configure **MySQL Server**, a **porta TCP** (geralmente `3306`), uma **senha do usuário root** e o funcionamento como **serviço do Windows**. Prefira inicialização **Automática**. O configurador pode inicializar os arquivos de dados e criar o serviço.

> Instalar os arquivos do programa e configurar o servidor são etapas diferentes. O cliente `mysql.exe` pode existir mesmo quando o servidor ainda não aceita conexões.

### 4. Confirmar a instalação sem precisar do PATH

O comando com caminho completo funciona mesmo que o Windows ainda não encontre `mysql` sozinho:

```powershell
& "C:\Program Files\MySQL\MySQL Server 26.10\bin\mysql.exe" --version
```

Na configuração realizada, a saída foi semelhante a:

```text
C:\Program Files\MySQL\MySQL Server 26.10\bin\mysql.exe  Ver 26.10.0 for Win64 on x86_64
```

### 5. Adicionar o MySQL ao PATH (problema que encontramos)

**Sintoma:** `mysql : O termo 'mysql' não é reconhecido...`.

O PATH é a lista de pastas em que o Windows procura programas. Para incluir o diretório `bin` **sem apagar as entradas existentes**, execute todo o bloco abaixo no PowerShell:

```powershell
# Pasta com mysql.exe — altere a versão se for diferente.
$mysqlBin = "C:\Program Files\MySQL\MySQL Server 26.10\bin"

# Só continua se o executável realmente existir.
if (Test-Path "$mysqlBin\mysql.exe") {

    # Lê o PATH do usuário, sem sobrescrevê-lo.
    $pathAtual = [Environment]::GetEnvironmentVariable("Path", "User")

    # Evita inserir o mesmo caminho duas vezes.
    if (($pathAtual -split ";") -notcontains $mysqlBin) {
        $novoPath = if ([string]::IsNullOrWhiteSpace($pathAtual)) {
            $mysqlBin
        } else {
            "$pathAtual;$mysqlBin"
        }
        [Environment]::SetEnvironmentVariable("Path", $novoPath, "User")
    }

    # Também disponibiliza mysql neste terminal aberto.
    if (($env:Path -split ";") -notcontains $mysqlBin) {
        $env:Path += ";$mysqlBin"
    }

    Write-Host "MySQL adicionado ao PATH."
} else {
    Write-Host "mysql.exe não encontrado; confira o nome da pasta."
}
```

Teste:

```powershell
mysql --version
```

Feche **completamente** o VS Code e abra novamente para que os novos terminais recebam o PATH atualizado.

**Alternativa gráfica:** `Win+R` → `sysdm.cpl` → **Avançado** → **Variáveis de Ambiente** → selecione **Path** nas variáveis do usuário → **Editar** → **Novo** → adicione `C:\Program Files\MySQL\MySQL Server 26.10\bin`. Não apague as demais entradas.

### 6. Verificar e iniciar o serviço MySQL2610

```powershell
Get-Service MySQL2610
```

Se o status for `Running`, o serviço está ligado. Se for `Stopped`, abra um PowerShell **como administrador** e execute:

```powershell
Start-Service MySQL2610
```

Para consultar a configuração de inicialização:

```powershell
Get-CimInstance Win32_Service -Filter "Name='MySQL2610'" |
    Select-Object Name, State, StartMode
```

Se precisar deixá-lo automático, execute em PowerShell **administrador**:

```powershell
Set-Service -Name MySQL2610 -StartupType Automatic
```

### 7. Conectar ao MySQL e resolver o erro 2003

Se o MySQL estiver escutando na porta **3306**:

```powershell
mysql -h 127.0.0.1 -P 3306 -u root -p
```

- `-h 127.0.0.1`: conecta ao servidor do próprio computador.
- `-P 3306`: escolhe a porta (**P maiúsculo**).
- `-u root`: usuário administrador do MySQL.
- `-p`: solicita a senha sem exibi-la na tela.

Quando aparecer `mysql>`, a conexão funcionou. Digite `EXIT;` para sair.

**Erro que apareceu durante a instalação:**

```text
ERROR 2003 (HY000): Can't connect to MySQL server on 'localhost:3306' (10061)
```

Esse erro não confirma senha incorreta. Indica que a conexão TCP foi recusada ou que não há servidor acessível naquela porta. Verifique o serviço e **a porta real**:

```powershell
# Identifica o processo do serviço MySQL.
$serverProcessId = (Get-CimInstance Win32_Service -Filter "Name='MySQL2610'").ProcessId

# Descobre quais portas TCP o processo está escutando.
Get-NetTCPConnection -State Listen -ErrorAction SilentlyContinue |
    Where-Object { $_.OwningProcess -eq $serverProcessId } |
    Select-Object LocalAddress, LocalPort
```

Se a porta encontrada for, por exemplo, **3307**, conecte com `-P 3307` e use **essa mesma porta** no `.env` da API. Se não aparecer porta nenhuma, confira as configurações do serviço e do MySQL Configurator antes de reinstalar. Uma mensagem `ERROR 1045 (Access denied)` é diferente: nesse caso a conexão chegou ao servidor, mas as credenciais foram rejeitadas.

---

## Parte B — Criar e conferir o banco TechStock (uma única vez)

### 8. Abrir o arquivo SQL do projeto

Mantenha, por exemplo:

```text
techstock/
├── frontend/
├── backend/
├── database/
│   ├── 01_tabelas.sql
│   └── comandos.md
└── compose.yaml         # Mantido para o SENAI, NÃO usado em casa
```

**Prefira o arquivo SQL que já acompanha a sua versão do TechStock**, para manter os nomes de colunas iguais aos que a API utiliza. Se ainda não existir um SQL, o exemplo mínimo abaixo cria a estrutura discutida no projeto:

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

Não crie uma segunda tabela com nomes diferentes sem antes verificar o que a API espera.

### 9. Executar o SQL pelo cliente MySQL

Conecte como administrador:

```powershell
mysql -h 127.0.0.1 -P 3306 -u root -p
```

**Dentro do prompt `mysql>`**, execute o SQL do projeto. Exemplo com caminho absoluto usando barras `/`:

```sql
SOURCE C:/CAMINHO/DO/SEU/techstock/database/01_tabelas.sql;
```

Troque `C:/CAMINHO/DO/SEU/` pelo caminho real. O comando `SOURCE` **é do cliente MySQL**, não do PowerShell.

Confira:

```sql
SHOW DATABASES;
USE techstock;
SHOW TABLES;
DESCRIBE equipamentos;
SELECT * FROM equipamentos;
```

Uma tabela vazia é normal numa instalação nova. O banco **fica gravado**; não é necessário repetir `CREATE TABLE` no dia seguinte.

### 10. Criar usuário próprio para a aplicação (recomendado)

Em vez de usar `root` no Back-end, crie um usuário local com permissões para o CRUD. Execute **uma vez**, conectado como `root`:

```sql
CREATE USER IF NOT EXISTS 'techstock_user'@'127.0.0.1'
    IDENTIFIED BY 'TROQUE_POR_SENHA_FORTE';

GRANT SELECT, INSERT, UPDATE, DELETE
    ON techstock.*
    TO 'techstock_user'@'127.0.0.1';
```

Teste **fora** do prompt MySQL (PowerShell):

```powershell
mysql -h 127.0.0.1 -P 3306 -u techstock_user -p techstock
```

Se já existe um usuário com esse nome, `CREATE USER IF NOT EXISTS` **não troca sua senha**. Use `ALTER USER` apenas se você realmente quiser alterá-la. Guarde a senha em local seguro.

---

## Parte C — Conectar o projeto sem Docker

### 11. Ajustar o arquivo `backend/.env`

O exemplo abaixo usa nomes `DB_*`. **Confira como `backend/database` lê essas variáveis no seu projeto**: se estiver usando `MYSQL_HOST`, `MYSQL_USER` etc., mantenha exatamente os nomes utilizados pelo código.

```dotenv
DB_HOST=127.0.0.1
DB_PORT=3306
DB_NAME=techstock
DB_USER=techstock_user
DB_PASSWORD=SENHA_QUE_VOCE_CONFIGUROU
```

Se a porta identificada na etapa 7 não for 3306, altere `DB_PORT` para a porta real. **Não envie nem publique o arquivo `.env` no GitHub**; inclua `.env` no `.gitignore`.

### 12. Iniciar o Back-end e o Front-end pelo VS Code

Certifique-se de ter Node.js e npm:

```powershell
node --version
npm --version
```

**Terminal 1 (API):**

```powershell
cd backend
npm install      # Necessário na primeira instalação ou após mudanças de dependências
npm run dev
```

**Terminal 2 (React):** abra um terminal novo **a partir da raiz `techstock`**:

```powershell
cd frontend
npm install      # Necessário na primeira instalação ou após mudanças de dependências
npm run dev
```

Abra a URL indicada pelo Vite, normalmente **http://localhost:5173**. Mantenha os dois terminais abertos enquanto estiver usando a aplicação integrada. O React pode aparecer mesmo que a API esteja desligada, mas os dados reais do banco não funcionarão.

> Se você ainda está construindo **somente o visual do Dashboard**, pode iniciar apenas o Front-end. A conexão com MySQL só será necessária quando integrar o CRUD.

### 13. Usar o VS Code para consultar SQL (opcional)

Instale as extensões **SQLTools** e **SQLTools MySQL/MariaDB/TiDB Driver**. Configure a conexão com `127.0.0.1`, porta real (geralmente 3306), banco `techstock`, usuário `techstock_user` e sua senha. O SQLTools facilita executar `SELECT * FROM equipamentos;` sem abrir o cliente de terminal.

---

## Parte D — Dia seguinte: reiniciei o computador; e agora?

**Não é necessário reinstalar MySQL, repetir o PATH, recriar o banco ou refazer as tabelas.**

```text
1. Ligar o Windows.
2. Abrir a pasta techstock no VS Code.
3. Executar: Get-Service MySQL2610
4. Se Stopped: iniciar o serviço com PowerShell administrador.
5. (Opcional) Testar: mysql --version
6. Se a API já estiver integrada: backend → npm run dev
7. Em outro terminal: frontend → npm run dev
8. Abrir http://localhost:5173 (ou a URL exibida pelo Vite).
9. Ao encerrar: Ctrl+C nos servidores Node e fechar o VS Code.
```

Para abrir o banco manualmente, **apenas quando quiser consultar SQL**:

```powershell
mysql -h 127.0.0.1 -P 3306 -u root -p
```

A API conecta sozinha usando o `.env`; você **não precisa executar `mysql -u root -p` toda manhã**.

---

## Diagnóstico rápido

| Problema | Como verificar ou resolver |
|---|---|
| `mysql` não reconhecido | Confira `mysql.exe`, refaça PATH e reinicie VS Code. |
| `ERROR 2003 (10061)` | `Get-Service MySQL2610`; descubra a porta real com `Get-NetTCPConnection`. |
| `ERROR 1045` | Revise usuário/senha e permissões, sem reinstalar. |
| `Unknown database 'techstock'` | Execute o SQL da etapa 9. |
| `Table 'techstock.equipamentos' doesn't exist` | Veja `SHOW TABLES;`; execute o SQL correto. |
| React carrega, mas sem dados | Confira serviço MySQL, `.env`, API e mensagens nos terminais. |
| `npm` não reconhecido | Instale/configure Node.js e reabra o terminal. |
| Porta `3306` ocupada | Verifique qual processo utiliza a porta antes de alterá-la. |

### Referências oficiais

- MySQL 26.10 no Windows: https://dev.mysql.com/doc/refman/26.10/en/windows-postinstallation.html
- MySQL Configurator: https://dev.mysql.com/doc/refman/26.10/en/mysql-configurator.html
- MySQL downloads: https://dev.mysql.com/downloads/mysql/

**Fim do manual Windows.**
