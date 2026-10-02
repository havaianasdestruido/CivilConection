---
title: API REST
sidebar_label: API REST
---

# Referência da API REST

**Base URL local:** `http://localhost:8080/api` · **Formato:** `application/json`

A versão atual não exige token. IDs são inteiros de 64 bits.

## Rotas

| Método | Rota | Descrição |
|---|---|---|
| GET | `/stats` | indicadores globais |
| GET, POST | `/usuarios` | listar e criar usuários |
| GET, PUT, DELETE | `/usuarios/{id}` | operar usuário |
| GET, POST | `/profissionais` | pesquisar e salvar perfil |
| GET, PUT, DELETE | `/profissionais/{id}` | operar perfil |
| GET, POST | `/obras` | pesquisar e criar obras |
| GET, PUT, DELETE | `/obras/{id}` | operar obra |
| GET, POST | `/etapas` | listar e criar etapas |
| GET, PUT, DELETE | `/etapas/{id}` | operar etapa |

## Estatísticas

### `GET /stats`

```json
{"obrasConcluidas":2,"profissionaisCadastrados":4,"totalObras":6,"satisfacaoMedia":4.8}
```

A satisfação é a média de avaliações, arredondada em uma casa. Avaliações nulas contam como 5.0.

## Usuários

- `GET /usuarios` retorna todos; `GET /usuarios/{id}` retorna um.
- `POST /usuarios` cria e retorna **201**.
- `PUT /usuarios/{id}` atualiza e retorna **200**.
- `DELETE /usuarios/{id}` retorna **204**.

```json
{
  "nome": "Ana Souza",
  "email": "ana@example.com",
  "senha": "SenhaForte123",
  "tipo": "CLIENTE"
}
```

`nome`, `email` válido e `senha` são obrigatórios; e-mail deve ser único. `tipo` usa por convenção `CLIENTE`, `PROFISSIONAL` ou `ADMIN`. A senha é armazenada com BCrypt e nunca consta na resposta:

```json
{"id":1,"nome":"Ana Souza","email":"ana@example.com","tipo":"CLIENTE"}
```

:::note Atualização de senha
Embora o service verifique senha vazia antes de alterar o hash, `@NotBlank` no DTO exige senha no PUT HTTP atual.
:::

## Profissionais

### Pesquisa

`GET /profissionais` aceita filtros opcionais combinados por AND:

| Query | Comportamento |
|---|---|
| `profissao` | contém, sem diferenciar caixa |
| `cidade` | contém, sem diferenciar caixa |
| `termo` | nome, profissão ou especialidades |

`GET /profissionais/{id}` retorna um perfil.

```json
{
  "id": 1,
  "usuarioId": 2,
  "nome": "Roberto Lima",
  "email": "roberto@example.com",
  "profissao": "Engenheiro Civil",
  "cidade": "São Paulo, SP",
  "descricao": "Especialista em estruturas.",
  "avaliacao": 4.9,
  "especialidades": "Estruturas, Laudos",
  "contato": "(11) 99999-0000"
}
```

### Escrita

`POST /profissionais` recebe os campos abaixo, faz upsert por `usuarioId`, promove o usuário para `PROFISSIONAL` e retorna 201. O contato usa o e-mail quando omitido.

```json
{
  "usuarioId": 2,
  "profissao": "Engenheiro Civil",
  "cidade": "São Paulo, SP",
  "descricao": "Especialista em estruturas.",
  "avaliacao": 4.9,
  "especialidades": "Estruturas, Laudos",
  "contato": "(11) 99999-0000"
}
```

`PUT /profissionais/{id}` retorna 200; a implementação resolve o registro por `usuarioId`, não pelo ID da URL. `DELETE /profissionais/{id}` retorna 204.

## Obras

### Pesquisa

`GET /obras` aceita `categoria` e `status` por igualdade; `cidade` por conteúdo; e `termo` no nome ou descrição. Comparações ignoram caixa. `GET /obras/{id}` inclui etapas ordenadas.

```json
{
  "id": 1,
  "clienteId": 1,
  "clienteNome": "Ana Souza",
  "nome": "Residencial Horizonte",
  "descricao": "Edifício residencial.",
  "cidade": "Campinas, SP",
  "status": "EM_ANDAMENTO",
  "categoria": "RESIDENCIAL",
  "progresso": 45,
  "etapas": []
}
```

### Escrita

`POST /obras` retorna 201; `PUT /obras/{id}` retorna 200. `clienteId` deve existir. A lista `etapas` do request não é persistida por esta operação.

```json
{
  "clienteId": 1,
  "nome": "Residencial Horizonte",
  "descricao": "Edifício residencial.",
  "cidade": "Campinas, SP",
  "status": "PLANEJAMENTO",
  "categoria": "RESIDENCIAL",
  "progresso": 0
}
```

`DELETE /obras/{id}` retorna 204 e remove as etapas por cascade.

## Etapas

`GET /etapas` lista todas. Filtre pela obra com `GET /etapas?obraId=1`; não há rota `/etapas/obra/{id}`. `GET /etapas/{id}` retorna uma.

```json
{
  "obraId": 1,
  "nome": "Instalações elétricas",
  "descricao": "Infraestrutura e cabeamento.",
  "status": "PENDENTE",
  "progresso": 0,
  "ordem": 4
}
```

`POST /etapas` retorna 201. `PUT /etapas/{id}` recebe o objeto completo, inclusive `obraId`, e retorna 200; não existe rota específica `/{id}/status`. Ambas recalculam o progresso da obra pela média das etapas. `DELETE /etapas/{id}` retorna 204 e também recalcula quando restam etapas.

## Exemplos cURL

```bash
curl 'http://localhost:8080/api/obras?categoria=RESIDENCIAL&status=EM_ANDAMENTO'

curl -X POST http://localhost:8080/api/usuarios \
  -H 'Content-Type: application/json' \
  -d '{"nome":"Ana Souza","email":"ana@example.com","senha":"SenhaForte123","tipo":"CLIENTE"}'
```

## Respostas e erros

| Status | Situação |
|---|---|
| 200 | leitura/atualização concluída |
| 201 | criação concluída |
| 204 | exclusão concluída |
| 400 | validação, duplicidade ou ID/referência inexistente |
| 500 | falha não tratada |

```json
{
  "timestamp": "2026-10-02T12:00:00",
  "status": 400,
  "error": "Validation Error",
  "errors": {"email": "O e-mail deve ser válido"}
}
```

Recursos ausentes são tratados como 400 no código atual, não 404.

:::warning Segurança
Não há autenticação, autorização, rate limiting ou paginação. Não exponha esta versão a dados reais sem esses controles.
:::
