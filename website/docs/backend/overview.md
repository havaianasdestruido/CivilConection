---
title: Visão geral do backend
---

# Backend Spring Boot

O backend é uma aplicação Java 17/Spring Boot 3.2.5 iniciada por `CivilConectionApplication`. O build pode ser executado na raiz ou em `backend/`; para evitar ambiguidade, esta documentação usa `backend/`.

## Dependências principais

| Dependência | Uso |
|---|---|
| `spring-boot-starter-web` | MVC, JSON e servidor embutido |
| `spring-boot-starter-data-jpa` | repositórios, Hibernate e transações |
| `spring-boot-starter-validation` | validação Jakarta dos requests |
| `org.mindrot:jbcrypt` | hash de senhas |
| PostgreSQL Driver | runtime Supabase/PostgreSQL |
| H2 | runtime local em memória |
| Spring Boot Test | JUnit 5 e testes de contexto |

## Comandos

```bash
cd backend
./gradlew bootRun       # desenvolvimento
./gradlew test          # testes
./gradlew clean build   # JAR + verificações
java -jar build/libs/civilconection-0.0.1-SNAPSHOT.jar
```

## Rotas de alto nível

- `/api/usuarios` — usuários;
- `/api/profissionais` — perfis públicos;
- `/api/obras` — projetos e respectivas etapas;
- `/api/etapas` — diário e progresso;
- `/api/stats` — indicadores agregados;
- `/` e arquivos `.html` — frontend empacotado;
- `/h2-console` — console local habilitado.

Para payloads e filtros, consulte a [referência da API](/docs/reference/api).
