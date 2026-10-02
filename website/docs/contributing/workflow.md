---
title: Fluxo de contribuição
---

# Fluxo de contribuição

## Antes de codificar

1. crie uma branch curta a partir da branch principal;
2. descreva o comportamento esperado e a camada afetada;
3. evite misturar refatoração ampla com mudança funcional;
4. não inclua secrets, builds ou dependências instaladas.

## Checklist local

```bash
# Backend
cd backend && ./gradlew clean test

# CSS, quando alterado
cd ../tools/tailwind && npm ci && npm run build

# Documentação
cd ../../website && npm ci && npm run build
```

Faça também uma inspeção manual das cinco páginas em viewport móvel e desktop.

## Commits e pull requests

Use mensagens objetivas, por exemplo `docs: documenta filtros da API` ou `fix: recalcula progresso após remover etapa`. A PR deve indicar:

- problema e solução;
- testes executados;
- screenshots para alterações visuais;
- impactos no schema, API e documentação;
- estratégia de rollback quando houver dados persistentes.

## Definition of done

Uma alteração está pronta quando código, testes, três cópias do frontend e documentação concordam; o build passa sem links quebrados; não há credenciais ou artefatos gerados no diff.
