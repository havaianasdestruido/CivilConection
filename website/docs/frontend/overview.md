---
title: Visão geral do frontend
---

# Frontend web

A interface é um site multipágina sem framework de runtime. HTML entrega conteúdo útil imediatamente; `app.js` aprimora navegação, busca e dados vindos da API.

| Página | Responsabilidade |
|---|---|
| `index.html` | apresentação, métricas e busca global |
| `profissionais.html` | vitrine, filtros e contato |
| `obras.html` | catálogo e progresso de projetos |
| `diario.html` | etapas e registros da obra |
| `cadastro.html` | formulários de conta e perfil |

## Cópias dos arquivos

Os mesmos assets existem em:

1. raiz — deploy estático atual;
2. `frontend/` — fonte para desenvolvimento isolado;
3. `backend/src/main/resources/static/` — empacotamento Spring.

Depois de alterar páginas, CSS ou JS, sincronize as três árvores e valide que o comportamento é idêntico.

## Build do Tailwind

```bash
cd tools/tailwind
npm install
npm run build
```

O comando varre as três árvores, gera `css/tailwind.css` minificado e executa `sync.js`. Em desenvolvimento contínuo, use `npm run watch`.

## Acessibilidade e segurança no cliente

- menu móvel informa `aria-expanded` e responde a Escape;
- toasts usam `role=status` e `aria-live=polite`;
- conteúdo da API passa por `escapeHtml` antes de interpolação;
- imagens usam assets locais e lazy loading quando aplicável.
