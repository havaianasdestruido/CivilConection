---
title: Testes e qualidade
---

# Testes e qualidade

## Executar a suíte

```bash
cd backend
./gradlew test
```

O teste existente carrega o contexto Spring. Antes de enviar alterações no backend, também execute:

```bash
./gradlew clean build
```

Relatórios ficam em `backend/build/reports/tests/test/index.html`.

## Estratégia recomendada

| Nível | Ferramenta | Cobertura desejada |
|---|---|---|
| unitário | JUnit 5 + Mockito | regras dos services |
| slice MVC | `@WebMvcTest` + MockMvc | contrato e validação dos controllers |
| persistência | `@DataJpaTest` | filtros JPQL e relacionamentos |
| integração | `@SpringBootTest` | fluxo HTTP → banco H2 |
| frontend | teste de navegador | busca, filtros, fallback e acessibilidade |

## Casos críticos

1. e-mail duplicado deve retornar 400 sem expor hash;
2. criação de profissional deve promover o usuário;
3. filtros devem ignorar caixa e combinar parâmetros;
4. média das etapas deve atualizar a obra;
5. exclusões inexistentes devem preservar o formato de erro;
6. DTOs nunca devem serializar `senha`.

Ao adicionar fixtures, prefira criação explícita no teste para não depender da ordem do `DataInitializer`.
