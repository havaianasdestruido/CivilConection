---
title: Configurar Supabase
---

# Configurar Supabase

## Provisionamento

1. crie um projeto em [supabase.com](https://supabase.com);
2. abra **SQL Editor**;
3. execute `database/schema.sql`;
4. execute `database/seed.sql` se quiser dados demonstrativos;
5. execute `database/rls-policies.sql`;
6. copie a connection string em **Project Settings → Database**.

## Conectar o backend

```bash
export SPRING_DATASOURCE_URL='jdbc:postgresql://db.PROJECT_REF.supabase.co:5432/postgres?sslmode=require'
export SPRING_DATASOURCE_USERNAME='postgres.PROJECT_REF'
export SPRING_DATASOURCE_PASSWORD='SENHA_DO_BANCO'
cd backend
./gradlew bootRun
```

Dependendo do tipo de conexão, use pooler de transação (normalmente 6543) ou conexão direta/sessão (5432). Confirme host e usuário no painel do seu projeto.

## Verificação

```bash
curl http://localhost:8080/api/usuarios
curl 'http://localhost:8080/api/obras?status=EM_ANDAMENTO'
```

Depois, confira as tabelas no Table Editor. Não salve a senha em `.env` versionado, HTML ou `js/config.js`.

## Reset de desenvolvimento

Para reconstruir um projeto descartável, remova tabelas na ordem dependente (`etapas_obra`, `obras`, `profissionais`, `usuarios`) e execute novamente os scripts. Não faça isso em produção sem backup.
