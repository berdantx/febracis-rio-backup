# Handoff — Projeto Febracis Rio (Larissa + Emerson)

Gerado em 16/07/2026. Este documento resume TODO o contexto do projeto para retomada
em qualquer computador, com ou sem a memória do Claude Code.

## O projeto

Mentoria Primia para o time Febracis Rio de Janeiro (Larissa van Boekel + Emerson Doblas +
Bruno + Paulo). Entregável central: landing pages para eventos presenciais da unidade.
Dois produtos distintos:

1. **Método CIS Presencial Rio** — 05 a 07 de agosto de 2026, Riocentro. LPs de captura
   (SEM preço na página, decisão do cliente). Paulo Vieira no palco, Camila e Júlia Vieira convidadas.
2. **Workshop Gestão Eficaz** — 16 de maio, Riocentro. Mentor: **Emerson Doblas**.
   LP de venda COM preço (De R$597 por R$297, 12x R$29,70). Checkout via e-inscricao.

## Estado das páginas (16/07/2026)

### Método CIS (pasta `paginas-cis-rio/`)
| Arquivo | O que é | Status |
|---|---|---|
| `v1-sabotagem-wordpress.html` | **PRODUÇÃO no WordPress.** Standalone (CSS+JS inline, imagens via URL WP). Editada À MÃO pelo Dan. | ⚠️ NUNCA regenerar/reconciliar sem pedido direto |
| `v1-sabotagem-base.html` + `assets/` | Fonte antiga (Live Server). DIVERGIU da produção | não usar como fonte de verdade |
| `v2-mente-inimiga.html` / `v3-compre-1-leve-1.html` | Variantes A/B antigas | só no Vercel |
| `v4-melhor-versao-wordpress.html` | Variante nova, big idea "sua melhor versão presa atrás da zona de conforto" (do anúncio CIS247 PV+Emerson+Alessandra) | no ar no Vercel |
| `tour-gestao-empresarial.html` | 1ª LP do Tour (placeholders) — SUPERADA pela tour-gestao-eficaz | candidata a aposentar |

### Workshop Gestão Eficaz (pasta `tour-gestao-empresarial/`)
| Arquivo | O que é |
|---|---|
| `index.html` | Página criada PELO DAN (dark dourado, Sora/Montserrat). Estrutura oficial |
| `tour-gestao-eficaz.html` | Estrutura do Dan + copy do Tour (deck destilado) + bloco oferta R$297. Imagens já apontam pro WP |
| `tour-gestao-eficaz-wordpress.html` | **Versão pra colar no widget HTML do WP** (sem DOCTYPE/head/title/meta; fontes via @import). Corrige o vazamento de tags no preview de compartilhamento |
| `v3 - Gestão Eficaz...pptx` | Deck do treinamento (124 slides, 1.2GB — 4 vídeos MP4) |
| `_resumo-metodo.md` | Destilação dos 4 módulos do deck (usar como fonte de copy) |
| `_transcricao-slides.txt` | Texto bruto dos 124 slides |

## Infra / integrações ativas

- **Webhook lead (n8n):** `https://n8n-01-n8n.xtdesz.easypanel.host/webhook/cadastra-lead-cis-rj`
  — dispara nos 2 forms da v1 (modal + final) com `keepalive:true`. Payload: name, email,
  phone (E.164), phone_country, goal, UTMs, lp_version, lp_path, lp_url (URL completa), ts, form_origin.
- **Checkout CIS (cispay):** `https://checkout2.cispay.com.br/cmk5fne1z000a02l278qihs3k?utm_sellerId=...`
  — params do vendedor preservados via `new URL()`+`searchParams.set()`.
- **Checkout Gestão Eficaz:** `https://www.e-inscricao.com/febracisrj/gestaoeficazriocentro160526`
- **WhatsApp:** `5521995625554`
- **UTMs:** capturadas da URL → sessionStorage → 7 inputs hidden `[data-utm]` nos forms + webhook.
- **Telefone internacional:** intl-tel-input 23.8.1 via **jsDelivr** (nunca cdnjs), limite de
  dígitos dinâmico por país (Brasil=11).
- **Vercel:** projeto `febracis-rj` (`febracis-rj.vercel.app`). Serve `.html` EXPLÍCITO
  (`/v1-sabotagem.html`, não `/v1-sabotagem`). Deploy da pasta `paginas-cis-rio` +
  SEMPRE `vercel alias set <deploy> febracis-rj.vercel.app` depois.

## Gotchas técnicos (aprendidos a caro)

1. **WAF do site bloqueia `?name=` na URL** → 404. Usar `?nome=`. Testar param a param com curl.
2. **WordPress widget HTML**: nunca colar `<head>/<title>/<meta>` — vazam como texto no preview
   de compartilhamento. Colar só `<style>` + conteúdo (fontes via `@import`).
3. **Autofill Chrome em input dark**: `background` é ignorado; usar
   `box-shadow: 0 0 0 1000px <cor> inset !important` + `-webkit-text-fill-color`.
4. **intl-tel-input**: cdnjs não tem `flags.webp` (bandeira some). Usar jsDelivr.
   `.iti__selected-dial-code` precisa de cor explícita.
5. **Barra final em URL WP com query params**: sem `/` dá 301→404.
6. **Vercel alias não atualiza sozinho** após deploy — sempre `vercel alias set`.
7. **Scroll-reveal com IntersectionObserver não dispara em screenshot headless** — não é bug.
8. **`?name=` no e-inscricao não foi testado** — o gotcha do WAF é do domínio febracisriodejaneiro.

## Regras de trabalho (IMPORTANTES)

- **"Só edite algo se eu te pedir diretamente e só edite o que eu pedir."** O Dan edita os
  arquivos de produção à mão; regenerá-los destrói trabalho dele (já aconteceu).
- LPs do CIS **não exibem preço** (decisão do cliente). A do Gestão Eficaz exibe.
- Sem travessões em copy visível; acentuação PT-BR correta; CTA primário nunca ghost
  (CIS = amarelo #FFB901 + texto navy; Gestão Eficaz = verde #52A956).
- Trigger "página gestão" = usar `tour-gestao-empresarial/index.html` como base.

## Pendências em aberto

1. Marcar **noindex** na página Gestão Eficaz pelo SEO do WordPress (a meta saiu do HTML colado).
2. Decidir se aposenta `tour-gestao-empresarial.html` (superada) do Vercel.
3. Logo `logo-gestao-eficaz.png` renderiza "GESTÀO" (crase) — conferir/corrigir o asset.
4. Página Gestão Eficaz não captura lead próprio (vai direto ao e-inscricao) — avaliar form+webhook.

## Conteúdo desta pasta `_historico-sessoes/`

- `memoria/` — arquivos de memória do Claude Code relevantes ao projeto (copiar para
  `~\.claude\projects\<slug-do-vault>\memory\` no outro PC, ou só ler como referência).
- `transcripts/` — os 2 transcripts brutos (.jsonl) das sessões de trabalho deste projeto.
- Este handoff.

### Para retomar no outro computador
Opção simples: abrir o Claude Code no vault e pedir "leia
`Mentoria Primia/Mentorados/Febracis RJ - Larissa Emerson(1)/_historico-sessoes/2026-07-16-handoff-projeto.md`
antes de qualquer coisa". Isso já dá 95% do contexto.
Opção completa: copiar `memoria/` para a pasta de memória do Claude no outro PC
(o nome da pasta em `~\.claude\projects\` muda conforme o caminho do vault lá).
