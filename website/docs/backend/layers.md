---
title: Camadas e regras de negócio
---

# Camadas e regras de negócio

## Controllers

Controllers usam injeção por construtor, `ResponseEntity` e `@Valid`. POST retorna `201`, DELETE `204`; leituras e PUT retornam `200`. Eles não contêm regras de persistência.

## Services

Métodos de leitura usam `@Transactional(readOnly = true)` e escritas usam `@Transactional`. Responsabilidades relevantes:

- `UsuarioService`: unicidade de e-mail, BCrypt e omissão da senha;
- `ProfissionalService`: upsert por `usuarioId`, promoção do tipo de usuário e contato padrão pelo e-mail;
- `ObraService`: resolução do cliente, filtros e inclusão das etapas no DTO;
- `EtapaObraService`: ordenação e recálculo do progresso da obra.

## Repositories

Todos estendem `JpaRepository<Entidade, Long>`. As buscas de obras e profissionais usam JPQL com parâmetros opcionais. Comparações de categoria/status ignoram caixa; textos usam `LIKE %termo%`.

## Exceções

`GlobalExceptionHandler` padroniza três grupos:

```json
{
  "timestamp": "2026-10-02T12:00:00",
  "status": 400,
  "error": "Bad Request",
  "message": "Obra não encontrada com ID: 999"
}
```

Erros de Bean Validation usam `error: "Validation Error"` e um objeto `errors` por campo. Exceções não tratadas retornam mensagem genérica e status 500.

:::note Semântica HTTP atual
Recursos inexistentes geram `IllegalArgumentException` e, portanto, **400**, não 404. A referência descreve o comportamento atual do código.
:::
