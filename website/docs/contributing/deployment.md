---
title: Build e publicação
---

# Build e publicação

## Aplicação estática

A raiz do repositório é publicada diretamente na Vercel. `.vercelignore` exclui backend, ferramentas e documentação. O Tailwind precisa estar compilado antes do deploy.

```bash
cd tools/tailwind
npm ci
npm run build
```

## Backend

```bash
cd backend
./gradlew clean bootJar
```

Publique o JAR de `build/libs/` em um runtime Java 17 e configure as variáveis JDBC. Restrinja o H2 Console e CORS em produção; adicione endpoint de health check e TLS no proxy/plataforma.

## Documentação

```bash
cd website
npm ci
npm run build
npm run serve
```

O build estático fica em `website/build/`. Para GitHub Pages, o config padrão usa a origem `havaianasdestruido.github.io` e o caminho `/CivilConection/`:

```bash
GIT_USER=havaianasdestruido npm run deploy
```

Para Vercel/Netlify em domínio próprio, defina `DOCS_URL` e `DOCS_BASE_URL=/`; publique `website/build`.

## Checklist de release

- build Spring e Docusaurus verdes;
- variáveis e banco configurados fora do Git;
- schema aplicado antes de código que dependa dele;
- smoke tests de `/api/stats`, `/api/obras` e páginas;
- headers de segurança, logs e rollback revisados.
