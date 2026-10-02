---
title: Segurança e RLS
---

# Segurança e Row Level Security

`rls-policies.sql` habilita RLS nas quatro tabelas. Leitura de perfis, profissionais, obras e etapas é pública; inserts são amplos; updates e deletes usam regras específicas.

## Matriz resumida

| Tabela | SELECT | INSERT | UPDATE | DELETE |
|---|---|---|---|---|
| `usuarios` | público | público | próprio usuário | sem policy |
| `profissionais` | público | público | proprietário | sem policy |
| `obras` | público | público | proprietário | proprietário |
| `etapas_obra` | público | público | público | sem policy |

:::danger Políticas acadêmicas permissivas
As políticas atuais são adequadas somente à demonstração. Inserts de todas as entidades e atualização de etapas usam `WITH CHECK (true)`/`USING (true)`. Endureça as regras antes de armazenar dados reais.
:::

## Identidades incompatíveis

As PKs da aplicação são `BIGSERIAL`, mas `auth.uid()` do Supabase é UUID. Comparar `auth.uid()::text = id::text` não cria, por si só, vínculo confiável. Um desenho de produção deve:

1. adicionar coluna `auth_user_id UUID` referenciando `auth.users(id)`;
2. preencher esse vínculo no cadastro;
3. basear policies nessa coluna;
4. impedir que o cliente atribua proprietários arbitrários;
5. testar cada papel com JWT real.

## Backend JDBC

RLS costuma ser ignorada ou não receber identidade do usuário quando o backend conecta com uma credencial de banco privilegiada. A API também não autentica requests hoje. Portanto, RLS não substitui autorização na camada Spring.
