---
title: Configuração
---

# Referência de configuração

## Backend

| Variável | Default | Descrição |
|---|---|---|
| `SERVER_PORT` | `8080` | porta HTTP |
| `SPRING_DATASOURCE_URL` | URL H2 em memória | JDBC do banco |
| `SPRING_DATASOURCE_USERNAME` | `sa` | usuário JDBC |
| `SPRING_DATASOURCE_PASSWORD` | vazio | senha JDBC |

Propriedades fixas relevantes:

| Propriedade | Valor |
|---|---|
| `spring.jpa.hibernate.ddl-auto` | `update` |
| `spring.jpa.open-in-view` | `false` |
| `spring.jpa.show-sql` | `false` |
| `spring.h2.console.enabled` | `true` |
| `spring.h2.console.path` | `/h2-console` |
| encoding servlet | UTF-8 forçado |

## Frontend

`window.CIVIL_API_CONFIG.baseUrl` controla o host da API. String vazia significa mesma origem. `window.SUPABASE_CONFIG` está reservado a integrações diretas e deve conter somente chave pública.

## Documentação

| Variável | Default | Uso |
|---|---|---|
| `DOCS_URL` | `https://havaianasdestruido.github.io` | origem canônica |
| `DOCS_BASE_URL` | `/CivilConection/` | caminho de publicação |
| `USE_SSH` | ausente | deploy Docusaurus via SSH quando `true` |
| `GIT_USER` | usuário atual | identidade de deploy |

Para publicar em domínio raiz:

```bash
DOCS_URL=https://docs.exemplo.com DOCS_BASE_URL=/ npm run build
```
