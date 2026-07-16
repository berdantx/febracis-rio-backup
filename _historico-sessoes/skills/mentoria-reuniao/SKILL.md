---
name: mentoria-reuniao
description: Processa transcricoes e observacoes de reunioes de mentoria — extrai insights, atualiza fichas, plano de mentoria, nota da sessao especifica (E1 a E6), tabela de acompanhamento, dashboard mestre e regenera pagina HTML. Use SEMPRE que o usuario subir transcricao de reuniao, arquivo de observacoes, anotacoes do Gemini, ou pedir para analisar uma sessao de mentoria. Tambem use quando disser "analise a reuniao", "subi a transcricao", "processe a sessao", "o que ficou definido na reuniao", ou qualquer variacao envolvendo pos-sessao de mentoria.
---

# Processador de Reunioes — Mentoria Primia (padrao novo)

Voce processa reunioes de mentoria depois que acontecem. Sua funcao e extrair tudo de relevante de transcricoes e observacoes e atualizar todos os artefatos da mentoria no **padrao Primia padronizado** (Onda 1, 2026-05-26):
- Ficha individual de cada mentorado
- Plano de mentoria (painel + tabela de acompanhamento + notas)
- **Nota da sessao especifica** em `02-sessoes/E{N}-{bloco}.md`
- **Dashboard mestre** em `Mentoria Primia/_dashboard.md`
- Pagina HTML do mentorado

## Contexto

- Vault: `C:\Users\hober\OneDrive\Documentos\Claude code + OB\Obsidian 2`
- Mentorados: `Mentoria Primia/Mentorados/{Nome}/` (padrao novo: subpastas `00-onboarding`, `01-ficha-e-plano`, `02-sessoes`, `03-entregaveis`, `04-gravacoes`, `05-pos-mentoria`)
- Dashboard mestre: `Mentoria Primia/_dashboard.md`
- Metodo: `Mentoria Primia/_metodo/`

A skill `mentoria-diagnostico` ja criou a estrutura inicial. Esta skill atualiza tudo apos cada sessao.

## Tipos de Arquivo de Entrada

- **Transcricao .txt** — texto corrido com timestamps e falas
- **Observacoes .pdf** — resumo Gemini/Meet com Resumo, Detalhes, Proximas Etapas
- **Audio transcrito** — colado direto na conversa
- **Notas manuais** — usuario descreve o que aconteceu

Transcricoes podem ser longas (40k+ tokens) — ler em partes.

## Fluxo de Trabalho

### Passo 1 — Identificar mentorado e sessao

1. Localizar a pasta do mentorado em `Mentoria Primia/Mentorados/`. Confirmar que segue padrao novo (tem `01-ficha-e-plano/`, `02-sessoes/`). Se nao seguir, **alertar o usuario** e perguntar se quer migrar primeiro.
2. **Identificar qual sessao foi processada (E1 a E6).** Olhar:
   - `plano-mentoria.md` na pasta `01-ficha-e-plano/` — qual a proxima sessao pendente?
   - Conteudo da reuniao — fala de "diagnostico" (E1), "setup" (E2), "encerramento" (E6), bloco especifico (E3-E5)?
3. Se nao for claro, perguntar.

Ler os arquivos existentes na pasta para contexto:
- Fichas individuais em `01-ficha-e-plano/`
- `plano-mentoria.md`
- Nota da sessao previa (`02-sessoes/E{N-1}-*.md`)
- Pagina HTML em `00-onboarding/`

### Passo 2 — Extrair conteudo

**Para .txt:** ler em blocos de 200 linhas.

**Para .pdf:**
```python
python -c "
import fitz, sys
sys.stdout.reconfigure(encoding='utf-8')
doc = fitz.open(r'CAMINHO')
for i, page in enumerate(doc):
    print(f'--- PAGE {i+1} ---')
    print(page.get_text())
doc.close()
"
```

Ler AMBOS se existirem — PDF tem resumo estruturado, .txt tem falas literais. Se complementam.

### Passo 3 — Analisar e extrair insights

**Informacoes fatuais:**
- O que foi apresentado/demonstrado
- Ferramentas mencionadas/adotadas
- Decisoes tomadas
- Tarefas atribuidas (quem faz o que)
- Prazos definidos
- Materiais pedidos

**Informacoes sobre o negocio:**
- Nome do expert/produto/marca
- Tamanho da base de leads
- Plataformas/ferramentas (vendas, CRM, email, paginas)
- Metricas (conversao, faturamento, abertura)
- Dores do publico-alvo
- Lancamentos planejados

**Insights sobre os mentorados:**
- Quem engajou mais
- Quem mostrou perfil gestor vs. tecnico
- Frases literais reveladoras (citar entre aspas)
- Nivel real demonstrado
- O que os animou mais (indica prioridade real)

**Proximos passos:**
- Tema da proxima sessao
- Tarefas pendentes por pessoa
- Materiais a enviar/preparar

### Passo 4 — Atualizar nota da sessao

Localizar `02-sessoes/E{N}-{bloco}.md`. Se ainda esta com template, **substituir** pelo conteudo da sessao. Manter a estrutura padrao:

```markdown
# E{N} — {Nome da Sessao}

**Mentorado:** [[../01-ficha-e-plano/ficha|ficha]]
**Caminho:** {Caminho do mentorado}
**Data:** YYYY-MM-DD
**Duracao:** XXmin
**Gravacao:** [link]

## Objetivos desta sessao (preenchidos na pre)
- [x] {objetivo 1 — se atingido}
- [ ] {objetivo 2 — se nao atingido, explicar}
- [x] {objetivo 3}

## Validacao do pre
**O que de fato veio pronto:** {lista do que estava ok}
**O que travou:** {lista do que precisou desbloqueio}

## Trabalho principal
{narrativa em paragrafos do que rolou, decisoes, debates}

## Decisoes
- {decisao 1 — por que}
- {decisao 2 — por que}

## Entregaveis desta sessao
- {o que ficou pronto — referenciar arquivos em `03-entregaveis/`}

## Tarefas pos (ate proxima sessao)
**Mentorado:**
- [ ] {tarefa concreta + deadline}

**Time:**
- [ ] {o que o time precisa apoiar}

**Dan:**
- [ ] Atualizar plano e ficha (feito por esta skill)
- [ ] {outras tarefas especificas}

## Proxima sessao
**E{N+1} — {bloco}** • Data: YYYY-MM-DD • Foco: {foco extraido da conversa}
```

### Passo 5 — Atualizar fichas individuais

Em cada ficha de `01-ficha-e-plano/{primeiro-nome}.md`, adicionar/atualizar:

**Bloco `### Informacoes da Sessao E{N}`** com:
- Dados revelados na reuniao (ferramentas, metricas, expert, base)
- Comportamento observado
- Frases-chave entre aspas
- Interesses e prioridades demonstradas

**Atualizar bloco `## Status`:**
- Fase atual: "Pos-E{N}, indo pra E{N+1}"
- Caminho confirmado (se ainda nao estava)
- Proxima acao concreta

**Adicionar linha no `## Historico de Sessoes`:**
| Sessao | Data | Resumo |
|--------|------|--------|
| E{N} | YYYY-MM-DD | {resumo em 1-2 linhas} |

### Passo 6 — Atualizar plano de mentoria

Em `01-ficha-e-plano/plano-mentoria.md`:

**Atualizar painel** (topo):
- Sessao atual = E{N} ✅
- Proxima = E{N+1} em {data}
- Status (🟢 No prazo / 🟠 Atrasado / 🔴 Parado)

**Atualizar tabela de acompanhamento:**
- Marcar E{N} como ✅ com data, entregavel e resumo
- Marcar E{N+1} como 🟡 com data se ja agendada

**Atualizar `## Notas para o Mentor`** com insights estrategicos novos da sessao.

### Passo 7 — Atualizar dashboard mestre

Em `Mentoria Primia/_dashboard.md`, na secao "Mentorados ativos", atualizar a linha do mentorado:

```markdown
| **{Nome}** ({contexto}) | {Caminho} | ✅ | ✅ | {emoji} | ⏳ | ⏳ | ⏳ | {status} | {proxima acao} |
```

**Estados das colunas E1 a E6:**
- ✅ Concluida
- 🟡 Em curso ou agendada
- ⏳ Pendente

**Estados de "Status":**
- 🟢 No prazo
- 🟠 Atrasado / atencao
- 🔴 Parado
- ⚠️ Atencao Dan

Atualizar tambem o campo `**Ultima atualizacao:**` no topo do dashboard.

Se sessao foi a E6 (encerramento), **mover o mentorado** da tabela "Mentorados ativos" para "Mentorados em suporte (pos-E6, dentro dos 90 dias)" com:
- E6 em: YYYY-MM-DD
- Fim do suporte: YYYY-MM-DD + 90 dias

### Passo 8 — Gerar/atualizar pagina HTML do mentorado

A pagina HTML em `00-onboarding/diagnostico-{slug}.html` deve refletir o estado atual.

**Atualizar/adicionar:**
- Status bar com fase atual
- Hero com informacoes atualizadas
- Card "Sessao mais recente" com resumo da E{N}
- Roadmap visual das 6 sessoes com estado de cada
- Board de tarefas pos da E{N}
- Historico de sessoes (timeline)
- Notas estrategicas atualizadas

**Design system Primia-OS:**
- Dark `#0A0418` background
- Purple `#A78BFA` accent
- Inter + Instrument Serif italic + JetBrains Mono
- Cards `border-radius: 14px`, border `rgba(160,120,240,.18)`
- Numeracao "01 / Label"
- Checkboxes clicaveis no board
- Responsivo + print-friendly

### Passo 9 — Subir gravacao (se aplicavel)

Se o usuario passou arquivo de gravacao (audio/video), mover/copiar para `04-gravacoes/E{N}-{data}.{ext}`.

### Passo 10 — Apresentar resultado

Listar:
1. **Arquivos atualizados** (links clicaveis)
2. **Resumo das descobertas mais importantes** da reuniao
3. **Tarefas pos por pessoa** (mentorado, time, Dan)
4. **O que mudou no plano** (caminho confirmado, datas ajustadas, etc.)
5. **Linha atualizada do dashboard**
6. Perguntar: "Manda resumo no grupo WhatsApp do mentorado? (pra eu gerar o texto)"

## Principios

**Fidelidade:** Dados reais da reuniao, nao suposicoes. Frases literais quando reveladoras.

**Atualizacao, nao substituicao:** Adicionar informacoes — nao apagar historico.

**Plano vivo:** Se a reuniao revelou que o caminho mudou, plano deve refletir. Mas isso e excecao — Caminho e fechado no E1.

**Dashboard sempre sincronizado:** Toda sessao processada = dashboard atualizado. Esse e o invariante.

**Tarefas rastreaveis:** Toda tarefa mencionada deve ter owner e aparecer no .md + HTML + dashboard.

**Padrao detectivel:** Se a pasta do mentorado nao esta no padrao novo (sem `00-onboarding/` etc.), **alertar** antes de fazer qualquer coisa — pode ser pasta legada.
