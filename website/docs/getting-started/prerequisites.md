---
title: Pré-requisitos
---

# Pré-requisitos

## Aplicação

- **JDK 17** — compilação e execução do backend;
- **Git** — obtenção e versionamento do repositório;
- navegador moderno — Chrome, Firefox, Edge ou Safari;
- conexão com a internet no primeiro build Gradle.

O wrapper Gradle já está no repositório; não instale Gradle globalmente.

```bash
java -version
git --version
```

## Documentação

Para desenvolver este portal, use **Node.js 20 ou superior** e npm. Essa exigência acompanha o Docusaurus 3.10.

```bash
node --version
npm --version
```

## Opcionais

- conta e projeto no **Supabase**, apenas para persistência PostgreSQL em nuvem;
- extensão Live Server do VS Code, caso o frontend seja servido separadamente;
- `curl` ou um cliente HTTP para testar a API.

:::tip Sem infraestrutura externa
O backend usa H2 em memória por padrão. Para começar, Java 17 é a única dependência de runtime necessária.
:::
