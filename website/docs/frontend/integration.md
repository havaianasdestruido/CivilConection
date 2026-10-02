---
title: Integração com a API
---

# Integração frontend–API

`js/config.js` publica `window.CIVIL_API_CONFIG`; `app.js` centraliza requisições em `apiFetch`.

## Resolução da URL

1. endpoints absolutos são preservados;
2. `CIVIL_API_CONFIG.baseUrl` tem prioridade;
3. páginas `file://` usam `http://localhost:8080`;
4. nos demais casos, usa-se mesma origem.

```js
const API_CONFIG = {
  baseUrl: 'https://api.exemplo.com'
};
```

## Contrato de `apiFetch`

A função adiciona `Content-Type: application/json`, converte respostas JSON, retorna `null` para 204 e transforma indisponibilidade de rede em erro com `code = 'NETWORK_OFFLINE'`. Em 4xx/5xx, tenta usar `message` da resposta e preserva o status.

## Modo de demonstração

As páginas trazem cartões estáticos no HTML. Se a API estiver offline, a captura da exceção registra aviso e mantém esse conteúdo. Se houver dados na resposta, a renderização dinâmica substitui os cartões.

## CORS

Quando frontend e backend usam origens diferentes, `CorsConfig` deve autorizar a origem. Em produção, prefira mesma origem ou uma allowlist explícita; não abra origens indiscriminadamente.

:::warning Configuração pública do Supabase
Chaves `anon`/publishable podem existir no cliente e dependem de RLS forte. Nunca inclua `service_role` ou credenciais JDBC em JavaScript.
:::
