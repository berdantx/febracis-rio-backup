# Plano de Mentoria — Febracis Rio

**Grupo:** [[emerson-doblas]] (contratante) + [[larissa-van-boekel]] (gestora mkt) + [[bruno-febracis]] (trafego/infra) + Paulo (socio critico)
**Produto foco:** Metodo CIS Presencial — Rio de Janeiro — agosto/2026
**Metodologia:** Funil de uma live so (mesmo modelo aplicado em Paulo e Camila Vieira)
**Escopo contratado:** 3 meses (30 dias de estruturacao + 2 meses de acompanhamento)
**Inicio:** 2026-04-06
**Data da proxima sessao:** a agendar apos entrega do checklist

---

## Visao Geral (revisada apos sessao 1)

A hipotese inicial do plano ("mentoria de socios Emerson+Larissa, Larissa tecnica, Emerson gestor") estava incompleta. A sessao de onboarding de 2026-04-06 revelou a realidade:

| Pessoa | Papel real | Engajamento |
|--------|-----------|-------------|
| **Emerson** | Contratante / sponsor — nao operacional | Baixo (saiu no meio) |
| **Larissa** | Gestora de marketing — decisora operacional | Alto (contratou Short.io na reuniao) |
| **Bruno** | Tecnico — trafego, paginas, WordPress, infra | Medio (abriu apos demo pratica) |
| **Paulo** | Socio critico — voz de escopo/contrato | Alto / cetico |

A Febracis Rio assumiu recentemente as unidades de **Brasilia e Orlando** — toda estrutura montada aqui sera replicada nelas (ganho de escala grande sem custo adicional).

## Produto e Contexto

- Vendem exclusivamente produtos da Holding/Paulo Vieira: **Metodo CIS Global** (unidades), **Metodo CIS Presencial** (palco, Rio), **BHP** (Inteligencia Financeira), **Maestria**, **ML5**.
- Foco imediato: **CIS Presencial de agosto/2026 no Rio**.
- Base declarada: 150k+ leads no Salesforce (mas com duplicacoes — teste da Larissa mostrou 1 email virando 5 registros).
- Trafego: R$ 20k/mes → 9 vendas em mar/2026, 17 em fev/2026.
- Ciclo medio CIS: 30 dias.

## Dores Criticas Identificadas

| # | Dor | Responsavel natural |
|---|-----|---------------------|
| 1 | **Zero rastreamento de origem** de leads e vendas | Bruno |
| 2 | **LP com 11s de carregamento** / pixel FB como 31o item / Connect Rate ruim | Bruno |
| 3 | R$ 20k/mes gerando so 9 vendas (mar/2026) | Bruno + Larissa |
| 4 | **Bruno gasta 1 semana** para criar uma LP do zero | Bruno |
| 5 | **3 consultoras manuais** para CIS — 100+ leads perdidos num fim de semana | Larissa |
| 6 | Dependencia total do Guilherme (BI) para qualquer relatorio | Larissa + Bruno |
| 7 | Zero recuperacao de vendas automatizada | Larissa |
| 8 | Salesforce duplica leads — metricas falsamente tranquilizadoras | Todos |
| 9 | ManyChat iniciante (1 semana de uso) | Larissa + social media |

---

## Fase 1 — Organizar a Casa (30 dias | sessoes 2-5)

> "Qual que e a nossa funcao aqui primeiro? E organizar a sua casa." (Berdan)

**Objetivo:** antes de estruturar o funil do CIS Presencial, dar visibilidade total aos canais, vendas e performance de LPs. Sem isso, qualquer estrategia roda no escuro.

### Sessao 2 — Setup de Rastreamento e Diagnostico de LPs
- Revisar Short.io configurado: canais de distribuicao mapeados, links UTM por canal, QR codes para eventos fisicos
- Validar Microsoft Clarity rodando nas LPs (Global + Presencial)
- **Entregavel Berdan:** diagnostico tecnico completo das LPs atuais (Connect Rate, ordem de carregamento, peso, scripts)
- **Entregavel Bruno:** relatorios de anuncios (ranking cliques + ranking leads) de mar/2026

### Sessao 3 — Connect Rate e Otimizacao da LP Principal
- Atacar a LP do CIS Presencial como quick win: reordenar pixel FB (do 31o para o 2o item), reduzir JavaScript, otimizar imagens
- Meta: Connect Rate >= 80% (benchmark Berdan: 82-85%)
- **Entregavel:** LP presencial otimizada + relatorio antes/depois

### Sessao 4 — Migracao WhatsApp para ManyChat + Base Dedupe
- Migrar disparos do Cloud Market (Holding) para ManyChat
- Rodar dedupe por email unico no Salesforce — descobrir a base real
- Setup de estrategia de disparo via utilidade (economia tipo case Berdan: R$ 400k em WhatsApp)
- **Entregavel:** ManyChat disparando + base real conhecida

### Sessao 5 — Pesquisa e Diagnostico de Audiencia
- Rodar diagnostico estilo Camila (ferramenta do Berdan) com a base Febracis Rio
- Entender perfil real do comprador de CIS: genero, idade, dor predominante
- Explorar pesquisas internas da Holding (via autorizacao de Dani/Elisa)
- **Entregavel:** perfil de audiencia documentado + dores prioritarias para CPL

---

## Fase 2 — Estruturar o Funil de Uma Live So (Agosto/2026)

**Objetivo:** construir todo o backstage para o lancamento do CIS Presencial.

### Componentes a entregar
- CPL (conteudo da live) baseado nas dores identificadas na pesquisa
- Pagina de captura otimizada
- Pagina de obrigado com pesquisa embutida (estrategia da Camila)
- Checkout com upsell/order bump
- Sequencia de email/WhatsApp pre-live, durante-live, pos-live
- Recuperacao de vendas automatizada (checkout abandonado + pix/boleto nao pago)
- Segmentacao por UTM: publico semelhante x frio x base aquecida x indicacao
- Replicabilidade para Brasilia e Orlando (mesma estrutura, ajuste de UTMs)

### Ferramentas que Berdan vai liberar
- Agentes IA: "Visao Estrategica" (ranking de anuncios campeoes), gerador de LPs via Lovable/Claude Code
- Skills/prompts para o time operar localmente (VS Code + Claude plano minimo)
- Templates de diagnostico (estilo Camila — 90% de finalizacao em 11k inscritos)

### Entregavel final da fase
- 1 lancamento completo do CIS Presencial funcionando — trafego entra, LP converte, venda sai, automacoes rodam, metricas visiveis

---

## Fase 3 — Acompanhamento e Replicacao (2 meses pos-lancamento)

- Monitoramento das metricas da primeira edicao
- Ajustes baseados em dados reais
- Replicacao da estrutura para Brasilia e Orlando
- Documentacao do playbook completo para autonomia pos-mentoria

---

## Escopo Fora do Contrato Atual (a negociar com Emerson)

- **Agente SDR de IA** (Blip ou similar) para resolver gargalo comercial das 3 consultoras e perda de leads em fins de semana — tema ficou pendente com a saida do Emerson da reuniao

---

## O que ficou definido na Sessao 1 (Onboarding — 2026-04-06)

### Informacoes-chave reveladas
- Febracis Rio vende so produtos da Holding/Paulo Vieira (nao tem produtos proprios)
- Focaram em publico semelhante historicamente — evitam publico frio por nao ter estrutura comercial para ciclo longo
- Avalon (IA da Holding) esta em beta — Larissa nao autoriza ser SDR autonomo ainda
- Relacao direta com Dani e Elisa na Holding para liberar pesquisas internas
- Vinicius (Sao Jose dos Campos) citado como parceiro com case replicavel (evento Mulheres Experience)
- "Fechamos na emocao" (Paulo) — bandeira amarela: escopo precisa ser formalizado por escrito no grupo

### Decisoes tomadas
- Escopo: 3 meses — 30 dias estruturacao + 2 meses acompanhamento
- Produto foco: CIS Presencial, Rio, agosto/2026
- Short.io contratado (R$ 80/mes ilimitado) — Larissa confirmou na reuniao
- Microsoft Clarity a instalar (gratuito)
- WhatsApp migra para ManyChat
- Mentoria ensina metodologia replicavel (nao acompanha todos os lancamentos)
- Agente SDR IA fica fora do escopo atual — a negociar com Emerson

### Tarefas pendentes (pre-sessao 2)

**Bruno:**
- [ ] Contratar Short.io e liberar acesso ao Berdan/Diego (ate 2026-04-07)
- [ ] Instalar Microsoft Clarity em todas as LPs
- [ ] Mapear e cadastrar canais de distribuicao no Short.io (redes, panfletos, WhatsApp, email, parceiros, eventos)
- [ ] Enviar LPs (Global + Presencial), criativos validados (Paulo/Camila), relatorio de anuncios (cliques + leads), relatorio de aberturas de email
- [ ] Liberar acesso admin ao WordPress
- [ ] Informar hospedagem atual (GoDaddy? VPS?), dominios ativos, emails da equipe
- [ ] Adicionar Gabi ao grupo da mentoria

**Larissa:**
- [ ] Enviar audio para Dani e Elisa (Holding) pedindo autorizacao para compartilhar pesquisas internas
- [ ] Pedir ao Guilherme (BI) relatorio filtrado so de vendas Metodo CIS (sem upsells) + CAC por produto
- [ ] Confirmar responsavel atual pelo marketing da Holding (Viviane antes — hoje indefinido)
- [ ] Definir se mantem Cloud Market em paralelo ao ManyChat

**Emerson:**
- [ ] Call 1:1 com Berdan (15 min) para alinhar escopo adicional do agente SDR IA

**Berdan + Diego:**
- [ ] Enviar checklist + gravacao + resumo na area de membros (ate 2026-04-07 manha) ✓
- [ ] Diagnostico tecnico das LPs apos receber acessos
- [ ] Criar call 1:1 com Emerson para escopo SDR

### Ritual de acompanhamento
- **Definir na sessao 2:** semanal (recomendacao do mentor dado o prazo curto ate agosto)
- Ata de 1 paragrafo no grupo apos cada sessao para fechar assimetrias de informacao (Emerson saiu, Paulo entrou tarde)

---

## Acompanhamento

| Sessao | Data | Fase | Foco | Status |
|--------|------|------|------|--------|
| 1 | 2026-04-06 | Onboarding | Diagnostico inicial + escopo + setup Short.io | Concluida |
| 2 | a agendar | Organizar a casa | Setup tracking + diagnostico de LPs | Pendente — aguardando material |
| 3 | — | Organizar a casa | Otimizacao da LP CIS Presencial (Connect Rate) | — |
| 4 | — | Organizar a casa | Migracao ManyChat + dedupe base | — |
| 5 | — | Organizar a casa | Pesquisa e diagnostico de audiencia | — |
| 6+ | — | Funil CIS | Estruturar live, CPL, checkout, recuperacao | — |

---

## Notas para o Mentor

### Bandeiras amarelas
- **"Fechamos na emocao" (Paulo):** formalizar escopo no grupo nos proximos 2 dias. Listar: 3 meses de duracao, 1 lancamento completo, 2 meses de acompanhamento replicavel, o que NAO esta incluso.
- **Emerson saiu no meio:** marcar call 1:1 (15 min) antes da proxima reuniao geral. Nao depender do grupo para alinhamentos com ele.
- **Larissa com crise alergica ("rosto todo inchado"):** sondar disponibilidade real antes de marcar agenda densa. Ela opera em 3 unidades — risco de saturacao.
- **3 unidades simultaneas:** Febracis Rio + Brasilia + Orlando. Ritual curto e semanal e obrigatorio para nao perder prazo de agosto.

### Comunicacao por perfil
- **Larissa:** decisoes operacionais, agenda, ferramentas. E a decisora real.
- **Bruno:** materiais tecnicos, diagnosticos de LP, relatorios. Aprende por evidencia — comecar proxima sessao com demo pratica, nao teoria.
- **Paulo:** comunicacoes formais de escopo/contrato. Se ele ficar alinhado, o resto do grupo segue.
- **Emerson:** so sponsor / dono de orcamento. Para escopo adicional, nao para operacao.

### Oportunidades nao ditas
- Replicar metodologia em Brasilia e Orlando sem contrato adicional — posicionar explicitamente: "o que a gente monta aqui voce replica nas outras duas unidades sem me pagar de novo". Ancora percepcao de ROI em 3x.
- ManyChat ja provou valor organico (11 → 37 pessoas em 1 semana). Usar como vitrine de vitoria rapida.
- Descoberta do pixel FB como 31o item e extremamente tecnica — documentar como case interno anonimo para conteudo proprio.

### Contradicoes a sondar
- Base declarada de 150k leads vs duplicacao confirmada no Salesforce — rodar dedupe antes de qualquer campanha
- "Trabalhamos base de clientes e leads semanalmente" vs so 9 vendas com R$ 20k em mar/2026 — pedir CTR por campanha e conversao real
- CAC real do CIS puro (sem upsells BHP/Master/ML5) — sem segmentar, ROI do trafego e caixa preta

### Perguntas sem resposta (follow-up)
- Hospedagem atual e GoDaddy? VPS?
- Relacao financeira com a Holding (royalties? split?) — afeta margem e disposicao para investir em trafego
- Larissa tem backup operacional? Ferias / saude dela travam a mentoria?
- Calendario global de lancamentos (BH, Rio, Brasilia, Orlando) para evitar canibalizacao
- Febracis Rio pode usar criativos validados do Paulo Vieira? Como obter audios/videos sob demanda?
