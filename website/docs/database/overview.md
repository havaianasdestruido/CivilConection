---
title: Visão geral dos dados
---

# Banco de dados

A aplicação suporta **H2 em memória** para desenvolvimento e **PostgreSQL/Supabase** para persistência. Hibernate usa as mesmas entidades nos dois ambientes, enquanto `database/` contém o contrato SQL explícito de produção.

## Arquivos

| Arquivo | Finalidade |
|---|---|
| `schema.sql` | tabelas, FKs, checks, índices e triggers |
| `seed.sql` | conjunto demonstrativo |
| `rls-policies.sql` | ativação e políticas Row Level Security |

Execute no Supabase na ordem acima.

## Integridade

- exclusão de usuário propaga para profissionais e obras;
- exclusão de obra propaga para etapas;
- e-mail é único;
- avaliação fica entre 0 e 5;
- progresso fica entre 0 e 100;
- triggers atualizam `updated_at` em cada tabela;
- índices cobrem chaves estrangeiras e filtros mais usados.

## H2 versus PostgreSQL

| Aspecto | H2 | PostgreSQL |
|---|---|---|
| ciclo de vida | memória do processo | persistente |
| criação | Hibernate `update` | scripts SQL + Hibernate |
| RLS | não disponível | disponível via Supabase |
| triggers de timestamp | não criadas pelas entidades | definidas no schema |
| uso | desenvolvimento/testes | homologação/produção |

:::caution
`ddl-auto=update` não substitui migrations. Para produção madura, adote Flyway ou Liquibase e altere a estratégia Hibernate para `validate`.
:::
