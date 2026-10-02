---
sidebar_position: 1
title: Visão geral
slug: /intro
description: Introdução à plataforma Civil Connection e ao mapa da documentação.
---

# Civil Connection

**Civil Connection** é uma plataforma web acadêmica que conecta clientes, profissionais e projetos do setor da construção civil. Este portal documenta o código executável: interface estática, API REST Spring Boot e persistência PostgreSQL/Supabase com fallback H2.

## O que a plataforma oferece

- vitrine pesquisável de engenheiros, arquitetos e especialistas;
- catálogo de obras com categoria, situação e progresso;
- diário de obra composto por etapas ordenadas;
- cadastro de usuários e perfis profissionais;
- indicadores agregados para a página inicial;
- modo de demonstração no frontend quando a API está indisponível.

## Mapa da documentação

| Quero… | Consulte |
|---|---|
| executar tudo localmente | [Instalação](/docs/getting-started/installation) |
| compreender decisões e limites | [Arquitetura](/docs/architecture/overview) |
| consumir ou alterar endpoints | [Referência da API](/docs/reference/api) |
| configurar H2 ou Supabase | [Banco de dados](/docs/database/overview) |
| alterar telas e integração REST | [Frontend](/docs/frontend/overview) |
| contribuir ou publicar | [Fluxo de contribuição](/docs/contributing/workflow) |

:::info Estado atual
A API não implementa sessão, login ou autorização HTTP. Senhas cadastradas são armazenadas com BCrypt, mas `LoginRequestDTO` ainda não é exposto por um endpoint. Considere autenticação uma evolução futura, não uma capacidade disponível.
:::

## Stack

| Camada | Tecnologias |
|---|---|
| Interface | HTML5, Tailwind CSS 3, JavaScript ES6+, Material Symbols |
| API | Java 17, Spring Boot 3.2.5, Spring Web, Bean Validation |
| Persistência | Spring Data JPA, Hibernate, PostgreSQL ou H2 |
| Segurança de senha | jBCrypt 0.4 |
| Documentação | Docusaurus 3.10, React, Mermaid, busca local |
