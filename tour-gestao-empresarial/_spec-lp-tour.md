# Spec — LP Tour de Gestão Empresarial

Data: 2026-07-11
Arquivo: `tour-gestao-empresarial/tour-gestao-empresarial.html`
Base: clone da `paginas-cis-rio/v1-sabotagem-wordpress.html` (CSS+JS CIS inline, form, webhook,
intl-tel-input, checkout). Fonte de conteúdo: deck `_resumo-metodo.md` (124 slides).

## Diferença-chave vs v1-v4
As v1-v4 são desenvolvimento PESSOAL, público amplo. Esta é GESTÃO EMPRESARIAL B2B,
público = empresários / gestores / líderes. Tom mais racional (números, ROI, custo de erro),
menos emocional. E ESTA EXIBE PREÇO (as outras eram captura pura).

## Decisões (Dan)
- Nome do produto: **Tour de Gestão Empresarial**
- Público: empresários, gestores, líderes de equipe
- Preço: ancoragem **De R$597 → Por R$297** (12x). LP é página de VENDA (exibe oferta).
- Data/local: PLACEHOLDERS `[DATA]` e `[LOCAL]` (Dan preenche depois).

## Estrutura (herda folds da v1 + bloco de oferta)
1. Hero: headline gestão, sub, meta (data/local placeholder), CTA "QUERO PARTICIPAR DO TOUR".
2. Faixa autoridade (+2mi / +100 países / 25 anos) — mantém (marca CIS).
3. Dor (Você se reconhece?): as 5 dores do deck (baixa performance, contratação errada,
   turnover, falta de execução, planejamento irreal) → 3 cards.
4. Promessa: o que sai do tour (equipe estruturada, gestão de pessoas, KPIs, execução).
5. Prova do Rio: mantém (prova social real).
6. Para quem (checklist 8 sinais): dono/gestor que sofre com time, turnover, execução.
7. Agenda/módulos: os 4 MÓDULOS do deck (Estruturação de time / Gestão de pessoas e cultura /
   Gestão do negócio / Processos e execução) no lugar dos 3 day-cards.
8. Formato / vídeos / FAQ: ajuste de linguagem p/ gestão.
9. **NOVO — Bloco de oferta:** ancoragem De R$597 / Por R$297 / 12x, CTA de compra.
10. Form final + footer.

## Conteúdo âncora (do deck, usar como argumento)
- Custo da má contratação ≈ R$15k/erro, ~R$422k/ano (Harvard, Gallup, MTE).
- 87% das demissões são comportamentais (Você S/A).
- Cultura = quem você é − permissividade.
- Miopia empresarial; gestão por indicadores (7 KPIs: receita, conversão, ticket, ciclo,
  CAC, retenção, lucratividade).
- Execução (Ram Charan): 3 processos + 3 premissas. Cases: Magazine Luiza, Cacau Show, Hering.

## NÃO muda
CSS CIS, JS, form, webhook n8n, intl-tel-input, imagens/vídeos do WP (reaproveita da v1),
contadores de autoridade.

## Regras do projeto (memória)
- Evitar travessões em texto visível. Acentuação PT-BR. Links clicáveis no fim.
- CTA primário nunca ghost (amarelo solar CIS + texto navy).
- Publicar na Vercel projeto `febracis-rj` (serve `.html` explícito) + `vercel alias set` depois.
