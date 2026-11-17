# TechStock — Estrutura de pastas e arquivos

Este é o esquema de **árvore de pastas e arquivos do TechStock**, incluindo o **Frontend (React)**, o **Backend (Node.js)** e os arquivos relacionados à **paginação**.

> **Observação:** esta é uma estrutura *sugerida*, baseada nos arquivos e componentes trabalhados no projeto. Os nomes de alguns arquivos de backend e da camada de serviços do frontend podem ser adaptados aos que você já utiliza.

## 1. Árvore de pastas

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
│   │   │   │   ├── index.jsx      ← Tabela e paginação
│   │   │   │   └── styled.jsx
│   │   │   │
│   │   │   └── 📁 Layout/
│   │   │       └── index.jsx
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
│   │   ├── 📁 routes/
│   │   │   └── router.jsx
│   │   │
│   │   ├── 📁 services/
│   │   │   └── equipamentos.js   ← Axios / API
│   │   │
│   │   ├── 📁 styles/
│   │   │   └── palette-azul.css
│   │   │
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── index.html
│   └── package.json
│
│
├── 📁 backend/
│   │
│   ├── 📁 controllers/
│   │   └── equipamentos-controller.js
│   │
│   ├── 📁 services/
│   │   └── equipamentos-services.js
│   │
│   ├── 📁 repositories/
│   │   └── equipamentos-repository.js
│   │
│   ├── 📁 routes/
│   │   └── equipamentos-routes.js
│   │
│   ├── 📁 database/
│   │   └── connection.js
│   │
│   ├── server.js
│   ├── .env
│   └── package.json
│
└── README.md
```

## 2. Onde entra a paginação?

| Arquivo | Responsabilidade |
|---|---|
| `Catalogo/index.jsx` | Exibe os registros e os botões de página anterior/próxima. |
| `Catalogo/styled.jsx` | Define a aparência dos botões de paginação. |
| `services/equipamentos.js` (frontend) | Envia `page` e `limit` ao backend utilizando Axios. |
| `equipamentos-routes.js` | Recebe a requisição `GET /equipamentos?page=1&limit=10`. |
| `equipamentos-controller.js` | Lê os parâmetros `page` e `limit`. |
| `equipamentos-services.js` | Valida os valores e calcula o `offset`. |
| `equipamentos-repository.js` | Executa a consulta SQL com `LIMIT` e `OFFSET`. |

## 3. Fluxo da paginação

```text
USUÁRIO CLICA NA PÁGINA 2
           │
           ▼
📁 frontend/
   Catalogo/index.jsx
           │
           ▼
   services/equipamentos.js
           │
           │ GET /equipamentos?page=2&limit=10
           │
           ▼
📁 backend/
   routes/equipamentos-routes.js
           │
           ▼
   controllers/equipamentos-controller.js
           │
           ▼
   services/equipamentos-services.js
           │
           │ offset = (2 - 1) * 10
           │ offset = 10
           │
           ▼
   repositories/equipamentos-repository.js
           │
           ▼
       BANCO MySQL
           │
           │ SELECT * FROM equipamentos
           │ ORDER BY id ASC
           │ LIMIT 10 OFFSET 10;
           │
           ▼
    RETORNA ATÉ 10 EQUIPAMENTOS
           │
           ▼
    CATÁLOGO MOSTRA A PÁGINA 2
```

## 4. Observação sobre a arquitetura

Para o projeto de aprendizagem, essa separação ajuda a compreender a responsabilidade de cada camada. **Você não precisa criar uma pasta `repositories`** se o professor já realiza as consultas SQL diretamente nos `services`. É possível manter a arquitetura ensinada em aula e implementar a paginação sem adicionar complexidade desnecessária.
