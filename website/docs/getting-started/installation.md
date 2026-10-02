---
title: Instalação e execução
---

# Instalação e execução

## 1. Clone o projeto

```bash
git clone https://github.com/havaianasdestruido/CivilConection.git
cd CivilConection
```

## 2. Inicie o backend

No Linux ou macOS:

```bash
cd backend
./gradlew bootRun
```

No Windows:

```powershell
cd backend
.\gradlew.bat bootRun
```

Sem variáveis de banco, a aplicação cria um H2 em memória, executa `DataInitializer` quando necessário e atende em **http://localhost:8080**.

## 3. Verifique

```bash
curl http://localhost:8080/api/stats
curl http://localhost:8080/api/obras
```

Abra uma das rotas:

- aplicação integrada: [http://localhost:8080](http://localhost:8080);
- console H2: [http://localhost:8080/h2-console](http://localhost:8080/h2-console), JDBC `jdbc:h2:mem:civilconectiondb`, usuário `sa`, senha vazia.

## Frontend separado

```bash
python -m http.server 3000 --directory frontend
```

Acesse `http://localhost:3000`. Se necessário, configure `frontend/js/config.js` com `baseUrl: 'http://localhost:8080'`. Arquivos abertos por `file://` usam essa URL local automaticamente.

## Portal de documentação

```bash
cd website
npm install
npm start
```

O servidor Docusaurus abre em `http://localhost:3000`. Se a porta já estiver em uso, acrescente `-- --port 3001`.

## Encerramento

`Ctrl+C` encerra cada servidor. Os dados H2 são descartados quando o backend para.
