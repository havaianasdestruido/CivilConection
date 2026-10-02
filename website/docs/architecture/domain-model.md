---
title: Modelo de domínio
---

# Modelo de domínio

```mermaid
 erDiagram
  USUARIO ||--o| PROFISSIONAL : possui
  USUARIO ||--o{ OBRA : gerencia
  OBRA ||--o{ ETAPA_OBRA : contém
  USUARIO { bigint id PK string nome string email UK string senha string tipo }
  PROFISSIONAL { bigint id PK bigint usuario_id FK string profissao string cidade decimal avaliacao }
  OBRA { bigint id PK bigint cliente_id FK string nome string status string categoria int progresso }
  ETAPA_OBRA { bigint id PK bigint obra_id FK string nome string status int progresso int ordem }
```

## Usuário

Identidade base. `email` é único e `tipo` assume `CLIENTE`, `PROFISSIONAL` ou `ADMIN`. A API nunca retorna `senha`.

## Profissional

Perfil um-para-um associado a usuário. Ao salvar o perfil, o serviço altera automaticamente o tipo do usuário para `PROFISSIONAL`. A consulta permite filtrar profissão, cidade, nome e especialidades.

## Obra

Pertence a um cliente e agrega etapas com cascade e remoção de órfãos. Estados esperados: `PLANEJAMENTO`, `EM_ANDAMENTO`, `CONCLUIDA`; categorias principais: `RESIDENCIAL`, `COMERCIAL`, `INFRAESTRUTURA`.

## Etapa de obra

Unidade ordenada do diário. Estados esperados: `PENDENTE`, `EM_ANDAMENTO`, `CONCLUIDO`. `progresso` varia de 0 a 100 no schema PostgreSQL.

:::caution Validação em duas camadas
Os valores de status e categoria aparecem como strings, não enums Java, e os DTOs de obra/etapa não declaram constraints. O PostgreSQL limita intervalos numéricos, mas H2 criado pelo JPA pode aceitar valores que os scripts SQL rejeitariam.
:::
