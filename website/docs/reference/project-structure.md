---
title: Estrutura do repositório
---

# Estrutura do repositório

```text
CivilConection/
├── backend/                 # aplicação Spring Boot independente
│   └── src/
│       ├── main/java/...    # config, controller, dto, model, repository, service
│       ├── main/resources/  # application.properties + frontend empacotado
│       └── test/            # testes JUnit
├── frontend/                # fonte isolada das páginas estáticas
├── assets/, css/, js/       # site de produção servido da raiz
├── database/                # schema, seed e políticas RLS
├── design/                  # logo, mockups e tokens
├── docs/                    # documentos Markdown legados/compactos
├── tools/tailwind/          # compilação e sincronização do CSS
├── website/                 # este portal Docusaurus
├── build.gradle             # build Spring alternativo na raiz
├── .env.example             # modelo de configuração
└── README.md                # entrada geral do projeto
```

## Onde fazer alterações

| Alteração | Fonte principal |
|---|---|
| regra de negócio | `backend/src/main/java/.../service` |
| rota HTTP | `.../controller` + esta referência |
| entidade | `.../model` + `database/schema.sql` |
| consulta | `.../repository` |
| página pública | `frontend/`, depois sincronizar cópias |
| tokens/classes | `tools/tailwind/` e `design/tokens/` |
| documentação | `website/docs/` |

Arquivos gerados (`build/`, `node_modules/`, `.docusaurus/`) não devem ser versionados.
