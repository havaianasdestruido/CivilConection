---
title: Design system
---

# Design system “Construct Modern”

A linguagem visual combina precisão de blueprint, azul estrutural e laranja de segurança.

## Tokens essenciais

| Token | Valor | Uso |
|---|---|---|
| `primary` | `#020E26` | navegação, títulos, superfícies escuras |
| `secondary-container` | `#FD9432` | chamadas primárias e destaque |
| `accent-hover` | `#D96F0D` | hover de ações |
| `surface-canvas` | `#F6F4EF` | fundo de leitura |
| `status-success` | `#2D8A60` | conclusão e verificação |
| `status-warning` | `#F59E0B` | atenção |
| `status-danger` | `#EF4444` | erro e bloqueio |

## Tipografia

**Sora** é usada em títulos e indicadores; **Inter/Archivo** em corpo e controles. Números operacionais devem usar algarismos tabulares.

## Princípios

- grid de 12 colunas no desktop, 8 no tablet e 4 no mobile;
- ritmo espacial de 8 pontos;
- bordas nítidas e raios pequenos (4–8px);
- estado nunca comunicado somente por cor;
- foco visível e contraste WCAG AA;
- fotos de obras em proporção consistente, com texto alternativo contextual.

A fonte completa dos tokens está em `design/tokens/DESIGN.md`; a configuração compilável está em `tools/tailwind/tailwind.config.js`.
