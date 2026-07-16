---
name: Mentorados Febracis Rio (Larissa + Emerson + Bruno + Paulo)
description: Grupo de mentoria Febracis Rio — 4 stakeholders ativos, foco no lancamento do Metodo CIS Presencial de agosto/2026, estrutura funil de uma live so replicavel para Brasilia e Orlando.
type: project
originSessionId: 6f11c5f9-b05b-4ffa-bd55-34be9fff60a4
---
Grupo de mentoria da Febracis Rio — onboarding em 2026-04-06. Vendem exclusivamente produtos da Holding/Paulo Vieira (Metodo CIS Global e Presencial, BHP, Maestria, ML5). Assumiram recentemente tambem as unidades de Brasilia e Orlando.

**Stakeholders reais (nao so Emerson + Larissa):**
- **Larissa** — gestora de marketing, decisora operacional. Engajamento alto, contratou Short.io na reuniao. Nivel 04 (83%). Teve crise alergica durante a call (fadiga de 3 unidades).
- **Bruno** — tecnico (trafego, paginas WordPress, infra). 20 anos de dev. Defensivo no inicio, abriu apos demo pratica. Gastava 1 semana para criar 1 LP.
- **Paulo** — socio critico, entrou tarde na reuniao. Fez a pergunta sobre entregaveis. Admitiu "fechamos na emocao".
- **Emerson** — contratante/sponsor. Saiu no meio. Nao operacional. Nivel 04 (68%).

**Escopo:** 3 meses (30 dias estruturacao + 2 meses acompanhamento). Foco: funil de uma live so para CIS Presencial Rio de agosto/2026. Replicavel para Brasilia e Orlando sem contrato adicional.

**Why:** lancamento em agosto/2026 e critico para receita das 3 unidades. Festa Berdan ja foi "aquecida" desde fev/2026 — tempo apertado. Paulo duvidou do escopo na reuniao; formalizacao por escrito evita cobranca desencaixada.

**How to apply:**
- Comunicacao por perfil: Larissa (decisoes operacionais), Bruno (materiais tecnicos + demo antes de teoria), Paulo (escopo formal), Emerson (so sponsor).
- Fase 1 (sessoes 2-5): organizar a casa — Short.io, Clarity, Connect Rate, ManyChat, dedupe base, pesquisa de audiencia. Depois Fase 2: funil CIS.
- Arquivos em `Mentoria Primia/Mentorados/Febracis RJ - Larissa Emerson/`: fichas individuais, plano-mentoria-emerson-larissa.md (ativo), index.html (pagina viva), docx da reuniao 2026-04-06.
- Hipotese original do plano estava errada (Larissa nao e tecnica). Atualizada apos sessao 1.
- SDR IA fora do escopo — negociar separado com Emerson (call 1:1 de 15 min).
- Avalon (IA da Holding) esta em beta — Larissa nao autoriza SDR autonomo ainda.

**Fatos do Metodo CIS (validados pelo usuario 11/05/2026):**
- Apresentadoras oficiais no palco do CIS Presencial: APENAS Paulo Vieira, Camila Vieira e Julia Vieira.
- Alessandra NAO e palestrante/apresentadora. Apareceu em UM anuncio especifico (criativo V01 PINO RIOCENTRO PV+EMERSON+ALESSANDRA) mas nao sobe ao palco no evento.
- Em qualquer copy de LP CIS: nao listar Alessandra como convidada. Pode citar como referencia factual ao criativo apenas se contexto for analise de anuncio.

---

## Estado do projeto em 11/05/2026

**Pasta canonica:** `Mentoria Primia/Mentorados/Febracis RJ - Larissa Emerson(1)/paginas-cis-rio/`

**Materiais recebidos do cliente:**
- Pasta `anuncios/`: relatorios meta nov-out/25 + xlsx CIS 247 + email mktg + screenshots
- Pasta `anuncios/Analise complementar/`: 3 transcricoes dos videos campeoes (V01, V05, V07) + xlsx consolidado
- Pasta `anuncios-baixados/`: video mp4 do criativo campeao
- Pasta `Paginas/`: 2 LPs antigas em PDF + LP do CIS Online de referencia (metodo-cis-online.pdf)

**Anuncio campeao absoluto (V01):** R$ 8.825,25 investidos, 1.149 leads, CPL R$ 7,68. Vocabulario-ancora do Paulo no video:
- "procrastinacao vai acabar, zona de conforto vai acabar, medos que te paralisam"
- "reprogramar de crencas, de identidade, capacidade, merecimento"
- "vem pagar o preco, por um nivel melhor, por uma conquista maior"

**Demografia confirmada (relatorios meta):**
- 68% mulheres, 35-44 anos, 96% no RJ estado
- Volume nov/25: 2.779 cadastros, R$ 37k investidos, CPL ~R$ 13,55 (sem dedupe)
- 4 clusters de criativo: sabotagem / mente inimiga / "travado nao sabe por que" / "compre 1 leve outro"

**Entregaveis criados (5 paginas HTML em `paginas-cis-rio/`):**
- `defesa-estrategica.html` — Dossie 01 argumentativo, 8 secoes, padrao editorial Poppins+Inter, paleta CIS oficial
- `index.html` — Dossie 02 painel A/B com 3 cards das versoes + tech section URLs/UTMs
- `v1-sabotagem.html` — LP variante "A pessoa que mais te sabota esta dentro de voce"
- `v2-mente-inimiga.html` — LP variante "Sua mente virou seu maior inimigo?"
- `v3-compre-1-leve-1.html` — LP variante "Compre 1 ingresso, leve outra pessoa"
- `assets/style.css` — design system oficial CIS (1100+ linhas)
- `assets/app.js` — modal pre-checkout + UTM forward + webhook
- `assets/img/` — 20+ assets oficiais baixados (Paulo Vieira, selo garantia, pilares, depoimentos, logo)
- `README.md` — guia tecnico

**Decisoes de produto validadas pelo usuario:**
- 3 versoes A/B com pre-checkout (modal -> webhook -> redirect com UTMs preservadas)
- Valores simbolicos pra validar estrutura (Lote Pioneiro R$ 1.997 / Antecipado R$ 2.497 / Ultimo R$ 2.997 std; VIP +R$ 2k em cada)
- Camila e Julia como unicas apresentadoras (sem Alessandra)
- Webhook + checkout aindam precisam ser configurados antes de subir

**Pendencias para Bruno antes de subir em producao:**
1. Configurar `CFG.checkoutUrl`, `CFG.leadWebhook`, `CFG.whatsappPhone` em `assets/app.js`
2. Validar valores reais dos lotes com Larissa/Emerson
3. Substituir `<img src="">` por assets reais (Paulo, depoimentos do RJ)
4. Cadastrar UTMs por criativo no Meta Ads
5. URLs sugeridas: `cisrio.com.br/destrave`, `/mente`, `/duplo`

**Design system oficial (calibrado em 11/05/2026):**
- Paleta: navy `#0A1430` + amarelo `#FFB901` + CTA amarelo com texto navy `#07102A`
- Tipografia: Poppins (display) + Inter (body) — NAO usar Montserrat/Fraunces/Geist
- Skill global: `landing-cis-presencial` em `~/.claude/skills/`
- Caso-base: este projeto

**Convencao "primia.dossie":**
- Dossie № 01 = defesa estrategica (argumentativa)
- Dossie № 02 = painel A/B (operacional/index)
- Padrao visual editorial: masthead em hairline + section-tag numerado + eyebrow com dot amarelo

---

## Estado do projeto em 22/06/2026 — LP em producao no WordPress

**Cliente APROVOU as 3 LPs.** Decidiram NAO exibir preco na pagina por enquanto — a LP virou captura de lead pura (sem lotes/valores), pre-checkout redireciona pro checkout externo.

**Arquivo de producao: `v1-sabotagem-wordpress.html`** (o "wp-file")
- HTML standalone: CSS + JS inline, imagens com URL absoluta do WP
- Gerado originalmente pelo script `c:/tmp/build-wordpress.py` (le `v1-sabotagem-base.html` + `assets/style.css` + `assets/app.js`)
- **O usuario agora edita ESTE arquivo direto.** NAO rodar o build (sobrescreve e ele perde trabalho). Ver [[feedback_febracis_rio_nao_editar_sem_pedir]].
- Colado num widget HTML dentro de pagina WP em `febracisriodejaneiro.com.br/cis-presencial-v1`
- Imagens em `https://febracisriodejaneiro.com.br/wp-content/uploads/2026/06/` (hero.avif, bg-hero-mobile.avif, bg-metodo-cis.avif, bio-camila.avif, bio-julia.avif, img-paulo.avif, logo-cis-1.png, paulo-vieira.png)

**Base derivada:** `v1-sabotagem-base.html` (fonte, usa `assets/style.css` externo, roda no Live Server). Divergiu do wp-file: base ainda tem a stick bar, wp-file nao.

**Gotcha critico — WAF do febracisriodejaneiro.com.br bloqueia `?name=`:**
- URL com parametro `name` retorna 404. Com `nome`, `email`, `phone`, `foo` → 200.
- Tambem exige barra final na URL da pagina (`/aqui-seria-o-checkout/`), senao 404 quando ha query params.
- Solucao aplicada: redirect usa `?nome=` em vez de `?name=`; `lp_path`/`lp_version` NAO vao na URL (so no webhook) porque geravam encoding duplo `%2520`.

**Gotcha — intl-tel-input (bandeiras de pais):**
- Usar CDN **jsdelivr**, NAO cdnjs. O cdnjs nao publica os `img/flags.webp` que o CSS referencia (so `.png`), entao a bandeira nao renderiza.
- Base correta: `https://cdn.jsdelivr.net/npm/intl-tel-input@23.8.1/build/{css,js,img}/...`
- No submit, ler `iti.getNumber()` (E.164) e sobrescrever `data.phone`.
- Estilizar `.iti__selected-dial-code` (o `+55` ao lado da bandeira) — sem isso herda branco. Usar `var(--g500)`, mesma cor do placeholder.

**Gotcha — autofill do Chrome quebra input dark:**
- Chrome ignora `background` em `:-webkit-autofill` e pinta o campo de branco. Sintoma: nome/email claros, telefone/select escuros.
- Fix: `box-shadow: 0 0 0 1000px var(--navy-1) inset !important` + `-webkit-text-fill-color: var(--white) !important` + `transition: background-color 9999s`. Cobrir `:hover/:focus/:active` e tambem `.iti__tel-input`.

**Recursos implementados no wp-file:**
- Hero: bg dedicado por viewport (`hero.avif` desktop / `bg-hero-mobile.avif` ≤767px), `center top`, padding-top 230px no mobile
- Secoes light (fundo branco): "Voce se reconhece?" e "Convidados" (Camila + Julia em cards foto 3:4 com nome sobreposto)
- Carrossel de 5 depoimentos YouTube com lazy-load (thumb → iframe no clique). IDs: AqMNsE_AOCc (Lyoto Machida), Ufl-7OQi0WE (Michelle Lima), vJCWD--bvb8 (Catarina e Nilson), ODEGdGfokto (Cida Oliveira), MFmWNFZbmuQ (Felipe Borlenghi)
- Scroll-reveal 100% CSS via `animation-timeline: view()` (nao depende de JS) + `@supports` fallback
- Overlay pos-submit: checkmark animado + "Vaga reservada! Estamos te levando para o proximo passo..." → redirect apos 1,2s
- Modal e formulario final padronizados (mesmos campos + select "O que mais te incomoda hoje?")
- Stick bar (urgency-bar) REMOVIDA do wp-file pelo usuario
- Breakpoints: >1024 desktop / ≤1024 tablet / ≤767 mobile (container 90%, CTA max 380px) / ≤430-480 celular
- WhatsApp: `5521995625554`

**Webhook ATIVO (configurado 22/06/2026):**
- `CFG.leadWebhook = 'https://n8n-01-n8n.xtdesz.easypanel.host/webhook/cadastra-lead-cis-rj'`
- Smoke test POST retornou 200. Dispara nos DOIS formularios (modal + final), com `keepalive: true` (completa mesmo com o redirect logo depois).
- Payload: `name`, `email`, `phone` (E.164 via `iti.getNumber()`), `phone_country` (BR), `goal` (select), UTMs, `lp_version`, `lp_path`, `lp_url` (link COMPLETO da pagina de origem = `window.location.href`, com dominio + query string), `ts`, `form_origin`.
- Se o webhook falhar, o codigo captura o erro e segue pro checkout mesmo assim (lead nao trava).

**Checkout ATIVO (configurado 10/07/2026):**
- `CFG.checkoutUrl = 'https://checkout2.cispay.com.br/cmk5fne1z000a02l278qihs3k?utm_sellerId=0051I00000552psQAA&utm_sellerId_check=ec6c2800487d74e360b8b93f3e40b6fc&utm_source_enc=TWFya2V0aW5n'`
- Plataforma **cispay** (dominio proprio, NAO febracisriodejaneiro.com.br). A URL ja vem com params do vendedor; o codigo usa `new URL()`+`searchParams.set()` que os preserva e so adiciona `nome`/`email`/`phone`+UTMs do lead.
- Mantido `nome` (nao `name`) por seguranca do WAF, mas como e outro dominio provavelmente nem le esses campos. Se o cispay precisar pre-preencher e esperar `name`, reverter so nesse ponto.

**UTMs nos formularios (10/07/2026):** os dois forms (modal + final) tem 7 inputs hidden `[data-utm]` (utm_source/medium/campaign/content/term + gclid + fbclid), preenchidos no boot por `fillUtmFields()` a partir de `getUtms()`. Ja iam no webhook via `...getUtms()`; agora tambem entram no FormData nativamente.

**Deploys Vercel (versoes antigas, pre-WordPress):** `febracis-rj.vercel.app` (index, defesa, resumo-apresentacao, pauta-reuniao, v1/v2/v3).
- Projeto Vercel = `febracis-rj` (team berdantx-gmailcoms-projects). Serve arquivos com `.html` EXPLICITO (sem clean URLs): a URL e `/arquivo.html`, NAO `/arquivo`.
- Deploy: `vercel deploy --prod --yes` na pasta `paginas-cis-rio` + SEMPRE `vercel alias set <deploy> febracis-rj.vercel.app` depois (alias nao atualiza sozinho).

**v4 "Sua melhor versao" (11/07/2026):** nova variante A/B de captura, nascida do anuncio `CIS247_01_PINO_RIOCENTRO_PV_EMERSON_ALESSANDRA.txt` (Paulo Vieira). Big idea = "sua melhor versao ja existe, so esta presa atras da zona de conforto". Clone da v1 de producao com copy 100% reescrita no angulo (zona de conforto / reprogramar crencas de identidade-capacidade-merecimento / procrastinacao / medo que paralisa). Mesma estrutura, imagens, videos, form, webhook, checkout. Datas mantidas 05-07 ago (anuncio dizia 27-29 nov, ignorado). Arquivo `v4-melhor-versao-wordpress.html`, `data-version="v4-melhor-versao"`. NO AR: `https://febracis-rj.vercel.app/v4-melhor-versao-wordpress.html`. Spec em `paginas-cis-rio/_spec-v4-melhor-versao.md`.

**Tour de Gestao Empresarial (11/07/2026):** LP de VENDA (nao captura pura) B2B, publico empresarios/gestores/lideres. Nascida do deck `tour-gestao-empresarial/v3 - Gestao Eficaz...pptx` (124 slides, 1.2GB, 4 MP4 + 73 imgs). Metodo destilado em `tour-gestao-empresarial/_resumo-metodo.md` (transcricao em `_transcricao-slides.txt`). Clone da v1 com copy reescrita no angulo gestao (custo da ma contratacao ~R$15k, cultura=quem voce e menos permissividade, miopia empresarial, KPIs, execucao Ram Charan). 4 modulos do deck viram a agenda. EXIBE PRECO: ancoragem De R$597 -> Por R$297 (12x R$29,70), card `.offer-card` novo (CSS proprio). `data-version="tour-gestao-empresarial"`. CHECKOUT = placeholder `CHECKOUT_AQUI` (Dan tem que passar o checkout do Tour; o guard no JS agradece via overlay e NAO redireciona pro checkout errado do CIS). Data/local = placeholders `[DATA DO TOUR]`/`[LOCAL]`. Arquivo em 2 pastas: fonte `tour-gestao-empresarial/tour-gestao-empresarial.html` + copia em `paginas-cis-rio/` (deploy). NO AR: `https://febracis-rj.vercel.app/tour-gestao-empresarial.html`. Spec em `tour-gestao-empresarial/_spec-lp-tour.md`. PENDENTE Dan: checkout do Tour, data, local, e decidir se mantem convidados Camila+Julia e videos (sao de transformacao pessoal, nao gestao B2B).
