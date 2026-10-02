---
title: Configuração de ambiente
---

# Configuração de ambiente

Spring lê a configuração de variáveis de ambiente, com defaults definidos em `backend/src/main/resources/application.properties`.

```bash
cp .env.example .env
```

:::warning Carregamento do `.env`
Spring Boot não carrega `.env` automaticamente. Exporte as variáveis no shell, configure-as na IDE ou use o mecanismo de secrets da hospedagem. Nunca versione credenciais reais.
:::

## Perfil local padrão

Nenhuma configuração é necessária:

```properties
spring.datasource.url=jdbc:h2:mem:civilconectiondb;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=FALSE
spring.datasource.username=sa
spring.jpa.hibernate.ddl-auto=update
```

## PostgreSQL/Supabase

```bash
export SPRING_DATASOURCE_URL='jdbc:postgresql://HOST:5432/postgres?sslmode=require'
export SPRING_DATASOURCE_USERNAME='postgres.PROJECT_REF'
export SPRING_DATASOURCE_PASSWORD='senha-segura'
export SERVER_PORT=8080
cd backend && ./gradlew bootRun
```

Consulte [Configuração de referência](/docs/reference/configuration) para a matriz completa e [Supabase](/docs/database/supabase) para provisionamento.
