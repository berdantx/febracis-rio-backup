---
name: modelo-pagina-gestao
description: "Triggers \"página gestão\" / \"modelo página gestão\" = usar tour-gestao-empresarial/index.html como estrutura base para páginas novas"
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 329e3832-0bca-463b-85a0-ecf90eadba1a
---

Quando Dan falar **"página gestão"** ou **"modelo página gestão"**, usar como estrutura base o template:

`Mentoria Primia/Mentorados/Febracis RJ - Larissa Emerson(1)/tour-gestao-empresarial/index.html`

**Why:** Dan clonou a página Gestão Eficaz da Febracis RJ (2026-07-14) e definiu essa estrutura como modelo reutilizável para novas páginas de evento/workshop.

**How to apply:**
- SEMPRE ler o index.html atual do template antes de gerar (Dan pode ter editado; o arquivo é a fonte de verdade, não a memória).
- Estrutura de seções: hero full-height com bg por viewport → dados/estatísticas (3 stat cards) → pilares (grid de cards com check dourado) → seção "sobre o workshop" centrada → treinamento com vídeo YouTube lazy-embed + bullets → bio do expert com retrato → local/inscrição (`#form`) → WhatsApp → footer legal.
- Arquivo único HTML, CSS inline, assets locais em `assets/`, Google Fonts (Sora títulos, Montserrat sub, Roboto corpo).
- Tokens padrão: dark `#0A0905`/`#141414`, dourado `#C89C3C`, verde CTA `#52A956` com glow (segue [[cta-destacado-landing]]).
- CTAs internos ancoram em `#form`; inscrição externa e WhatsApp são os únicos links de saída.
- Breakpoints 1024/767 ([[breakpoints-padrao]]), scroll reveal, noindex em clones internos.
- Trocar copy, cores da marca, assets e links conforme o novo cliente/evento; a estrutura e os padrões de componente permanecem.
