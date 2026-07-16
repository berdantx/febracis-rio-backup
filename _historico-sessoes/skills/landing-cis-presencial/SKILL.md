---
name: landing-cis-presencial
description: Gera paginas no padrao visual oficial do Metodo CIS (extraido de metodocisonline.com.br/matriculas-abertas). Dark navy #060D2C + amarelo destaque #FFBA06 + verde CTA #15c269. Tipografia Inter + Montserrat. Use quando o usuario pedir LP para qualquer edicao do CIS (Rio, Curitiba, BH, online), evento Febracis, ou qualquer pagina que precise herdar identidade Paulo Vieira/CIS. Triggers: "/landing-cis-presencial", "padrao CIS", "design CIS Online", "landing do CIS Rio", "pagina febracis".
---

# Landing CIS Presencial — Design System

Design system oficial do **Metodo CIS** extraido da pagina viva `metodocisonline.com.br/matriculas-abertas/` em maio/2026.

Usa-se para: lancamentos do CIS Presencial (qualquer edicao), CIS Online, eventos Febracis, ofertas de Paulo Vieira, ou qualquer pagina que precise herdar a identidade visual oficial da marca CIS.

## Paleta oficial (calibrada com metodocisonline.com.br/matriculas-abertas)

| Token | Hex | Uso |
|-------|-----|-----|
| `--navy-0` | `#030714` | Fundo extremo / footer |
| `--navy-1` | `#0A1430` | **Fundo principal** de pagina (oficial CIS) |
| `--navy-2` | `#07102A` | Card / bloco elevado |
| `--navy-3` | `#141C3D` | Elevado / hover |
| `--navy-accent` | `#2B3E94` | Azul institucional Febracis |
| `--yellow` | `#FFB901` | **AMARELO OFICIAL CIS** — destaque, headlines, CTA |
| `--yellow-l` | `#FFCE3D` | Hover / brilho |
| `--yellow-d` | `#D69900` | Sombra / borda |
| `--cta` | `#FFB901` | **CTA primario** (amarelo solar) |
| `--cta-text` | `#07102A` | Texto navy em cima do amarelo |
| `--red` | `#D10000` | Urgencia / escassez |
| `--g400` | `#A1A1A1` | Texto secundario |

## Tipografia (oficial CIS Online)

- **Inter** (300-800): body, paragrafos, formularios
- **Poppins** (300-900): todos os headings + eyebrow + numeros grandes + CTA labels
- Google Fonts: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800;900&display=swap`

**NAO USAR:** Montserrat, Fraunces, Geist, JetBrains Mono em paginas CIS oficiais.

## Estrutura padrao de LP (17 folds)

1. **Urgency bar** sticky (vermelha com pulse-dot amarelo)
2. **Hero** com headline (palavra-chave em amarelo) + sub + hero-card lateral com data
3. **Faixa de autoridade** (3 numeros: +2mi pessoas, +100 paises, 25 anos)
4. **Reconhecimento da dor** (3 cards, 1 destacado em vermelho)
5. **Promessa do evento** (2x3 grid com checks amarelos)
6. **Prova social** (foto grande + 3 depoimentos)
7. **Para quem e** (checklist interativo amarelo)
8. **5 Pilares** (cards retrato com label amarela vertical — padrao CIS Online)
9. **Agenda** (3 day-cards com data amarela)
10. **Autoridade** (foto + 4 numeros amarelos)
11. **Convidados** (3 guest-cards)
12. **Formato** (4 format-icons amarelos)
13. **Stats row** (4 cells)
14. **Video depoimentos** (3 cards com play-button amarelo)
15. **Bonus** (2 cards azul/amarelo com expiracao — padrao CIS Online)
16. **Ingressos / lotes** (2 cards, 1 featured com tag amarela)
17. **Garantia** (selo dourado real) + **FAQ** + **Form final**

## Regra obrigatoria de CTA

- CTA primario **NUNCA** ghost/outline
- **Amarelo oficial CIS** (`#FFB901`) solido + texto navy (`#07102A`)
- Sombra amarela colorida + pulse animation + padding 18px/32px
- Texto Poppins 800 uppercase
- Teste de 2s: se passar despercebido na olhada rapida, esta errado

> Nota: a regra Primia diz "CTA destacado". No padrao CIS oficial, isso e o **amarelo solar**, nao verde. Manter coerencia com a marca Febracis.

## Como usar

### Para criar uma LP nova do CIS

1. Copiar `assets/style.css` desta skill para o projeto
2. Carregar Google Fonts (Inter + Montserrat)
3. Usar a estrutura de 17 folds (ou subset conforme caso)
4. Aplicar classes: `hero`, `authority-strip`, `pain-grid`, `promise`, `agenda-grid`, `authority`, `pilares-grid`, `bonus-grid`, `lots-grid`, `guarantee`, `faq-list`, `final-form-wrap`

### Para usar imagens reais do CIS

Caso o projeto seja edicao oficial, baixar assets de:
- Logo: `https://metodocisonline.com.br/wp-content/uploads/2026/01/LOGO-METODO-CIS-2.png`
- Paulo Vieira: `https://metodocisonline.com.br/wp-content/uploads/2026/01/PV-Alta2-1-2.png`
- Selo garantia: `https://metodocisonline.com.br/wp-content/uploads/2026/01/img-garantia.png`
- Pilares (5): `fundo-Pilar-1.png` ate `fundo-Pilar-5.png`
- Depoimentos (4): `depoimento-1-2.png` ate `depoimento-4-3.png`

## Caso-base

Pasta `Mentoria Primia/Mentorados/Febracis RJ - Larissa Emerson(1)/paginas-cis-rio/`:
- `defesa-estrategica.html` — pagina argumentativa pro cliente
- `v1-sabotagem.html`, `v2-mente-inimiga.html`, `v3-compre-1-leve-1.html` — 3 LPs A/B
- `assets/style.css` — design system completo (1100+ linhas)
- `assets/app.js` — modal pre-checkout + UTM forward
- `assets/img/` — 20+ assets oficiais baixados

## Notas

- Cliente Febracis Rio (Larissa + Bruno + Paulo + Emerson) — mentoria Primia em curso
- Produto-foco: Metodo CIS Presencial agosto/2026 no Riocentro
- Estrategia: 3 variantes A/B + pre-checkout + UTM forward para checkout externo
- CSS tem aliases retrocompatibilidade (`--gold`, `--bg-0` etc) para reaproveitar componentes antigos
