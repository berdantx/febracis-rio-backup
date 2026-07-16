# Spec — v4 "Sua Melhor Versão" (LP captura CIS Rio)

Data: 2026-07-11
Arquivo: `paginas-cis-rio/v4-melhor-versao-wordpress.html` (clone de `v1-sabotagem-wordpress.html`)
Fonte do ângulo: anúncio `anuncios/Analise complementar/CIS247_01_PINO_RIOCENTRO_PV_EMERSON_ALESSANDRA.txt`

## Objetivo
Nova variante A/B da LP de captura CIS Rio (05-07 agosto, Riocentro), nascida do ângulo
"sua nova versão / sua melhor versão" do anúncio do Paulo Vieira. Irmã das v1/v2/v3.

## Escopo
- Clone da v1 de produção (standalone WordPress: CSS+JS inline, imagens via URL do WP).
- SÓ a copy muda. Herda 100%: layout, imagens, vídeos, convidados (Camila+Júlia), form,
  webhook n8n, intl-tel-input, limite de telefone, checkout cispay, contadores de autoridade.
- Datas: mantém 05-07 agosto (NÃO usar 27-29 nov do anúncio).
- Escassez: "última edição de 2026 no Rio" (o anúncio diz "última do ano", mas a data é
  agosto — evitar a incoerência temporal).

## Big idea
A sua melhor versão já existe — ela só está presa atrás da zona de conforto.
Do anúncio: reprogramar crenças de identidade / capacidade / merecimento; matar
procrastinação, zona de conforto e medos que paralisam; foco, objetividade, ação massiva;
crescimento financeiro/profissional, relacionamentos restaurados, disciplina p/ saúde.

## Reescrita bloco a bloco
- Hero H1: "A sua **melhor versão** já existe. Ela só está presa atrás da zona de conforto."
- Hero sub: 3 dias com Paulo Vieira para reprogramar as crenças que te mantêm na versão atual.
- CTAs: "QUERO MINHA MELHOR VERSÃO" / "QUERO MINHA VAGA".
- Dor (Você se reconhece?): "Você sabe do que é capaz. Mas trava toda vez que chega perto."
  3 cards: procrastinação/zona de conforto; teto de crença (merecimento); medo que paralisa.
- Promessa (6 checks): reprogramar identidade/capacidade/merecimento; matar procrastinação;
  foco + ação massiva; relacionamentos restaurados; disciplina p/ saúde; crescimento fin/prof.
- Prova do Rio: mantém (prova social real). Ajuste leve de tom.
- Para quem (8 sinais): sinais de "preso na zona de conforto / abaixo do próprio potencial".
- Cronograma 3 dias: Confrontar a zona de conforto → Reprogramar as crenças → Construir a nova versão.
- Formato/FAQ/footer: ajustes leves de linguagem, sem mudar dados.

## NÃO muda
Imagens, vídeos, convidados, estrutura de form, webhook, checkout, WhatsApp, contadores
(+2mi / +100 países / 25 anos), datas.

## Entrega
Publicar na Vercel sob `febracis-rj.vercel.app/v4-melhor-versao`.

## Regras do projeto (memória)
- Evitar travessões em texto visível (usar vírgula/ponto).
- Acentuação PT-BR correta.
- Retornar links clicáveis ao final.
- Não regenerar a v1 de produção (arquivo canônico editado à mão pelo Dan).
