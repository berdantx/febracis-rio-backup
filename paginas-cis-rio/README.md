# Metodo CIS Presencial Rio · 3 LPs A/B

3 versoes de landing page para o lancamento do **Metodo CIS Presencial Rio · 05-07 Ago 2026 · Riocentro**.

## Estrutura

```
paginas-cis-rio/
├── index.html                  Painel de navegacao (abrir primeiro)
├── v1-sabotagem.html           Hook: "A pessoa que mais te sabota esta dentro de voce"
├── v2-mente-inimiga.html       Hook: "Sua mente virou seu maior inimigo?"
├── v3-compre-1-leve-1.html     Hook: "Compre 1 ingresso, leve outra pessoa"
├── README.md                   Este arquivo
└── assets/
    ├── style.css               Design system compartilhado
    └── app.js                  Logica compartilhada (UTM, modal, redirect, FAQ)
```

## Hipotese das 3 versoes

Cada pagina e dirigida a um **cluster diferente de criativo** que ja roda no Meta. Em vez de jogar todo o trafego pra mesma LP (quebra de mensagem), cada cluster cai numa LP que ecoa o mesmo discurso do anuncio.

| Versao | Cluster do ad | Persona | Oferta |
|--------|---------------|---------|--------|
| **V1** | Auto-sabotagem / procrastinacao | Empresario 35-50, trava perto da virada | Std R$ 1.997 + VIP R$ 3.997 |
| **V2** | Mente inimiga / sindrome de impostor | Executivo com ansiedade + cabeca dura consigo | Std R$ 1.997 + VIP R$ 3.997 |
| **V3** | "Quero comprar 1 e levar outro" | Casal / socios / pai-filho | Individual R$ 1.997 OU Pack 1+1 R$ 1.997 |

## Estrutura comum (17 folds)

1. Hero (varia por versao) + CTA primario
2. Sticky urgency bar (lote pioneiro)
3. Reconhecimento da dor (3 cards — varia por versao)
4. Promessa do evento (resultado, nao conteudo)
5. Prova do RJ (foto/video + 3 depoimentos)
6. Para quem (checklist auto-identificacao — varia por versao)
7. Agenda dos 3 dias
8. Autoridade (Paulo Vieira)
9. Convidados (Camila, Julia, Alessandra)
10. Formato (presencial, 3 dias, Riocentro, kit)
11. Stats (4 numeros chave)
12. Prova em video (carrossel de depoimentos)
13. Ingressos / lotes (varia na V3)
14. Garantia 7 dias
15. FAQ (logistica do evento)
16. Formulario qualificado final
17. Footer + WhatsApp flutuante

## Lotes simbolicos (a validar)

| Lote | Periodo | Standard | VIP |
|------|---------|----------|-----|
| **Pioneiro** | ate 31/mai | R$ 1.997 | R$ 3.997 |
| **Antecipado** | 01/jun a 15/jul | R$ 2.497 | R$ 4.997 |
| **Ultimo** | 16/jul ate esgotar | R$ 2.997 | R$ 5.997 |

> ⚠ Valores ilustrativos para validar a estrutura visual. Bruno/Larissa devem confirmar os valores oficiais antes de subir em producao.

## Fluxo pre-checkout

```
Usuario clica CTA
   ↓
Modal abre (nome + email + WhatsApp)
   ↓
Submit dispara webhook (n8n / ManyChat / SeuEsforco)
   ↓
Lead gravado + UTMs preservadas
   ↓
Redirect imediato para checkout externo (Eduzz/Hotmart/proprio)
   ↓
Se nao finalizar: lead fica gravado pro consultor recuperar
```

**Importante:** o redirect preserva todas as UTMs e os dados do form (`?name=&email=&phone=`) — assim o checkout ja vem pre-preenchido e o tracking de origem chega ate o pagamento.

## Configurar antes de subir em producao

Abrir [`assets/app.js`](assets/app.js) e trocar:

```js
const CFG = {
  checkoutUrl: 'https://CHECKOUT_AQUI.com/cis-rio-2026',  // ← URL real do checkout
  leadWebhook: 'https://WEBHOOK_AQUI/lead-cis-rio',        // ← webhook do n8n
  whatsappPhone: '5521985356848',                           // ← WhatsApp do consultor
  whatsappMsg: 'Oi! Quero garantir minha vaga no Metodo CIS Rio Ago/2026.',
};
```

## Tracking de UTMs

Toda LP captura automaticamente os parametros da URL (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`, `gclid`, `fbclid`) no `sessionStorage`. Eles sao:

1. **Enviados para o webhook** junto com os dados do lead
2. **Forwarded para o checkout** na URL do redirect

Alem disso, cada lead carrega:
- `lp_version` — qual das 3 versoes ele acessou
- `lp_path` — caminho da URL
- `form_origin` — se veio do modal rapido ou do form final qualificado
- `lot` — qual lote foi clicado no CTA
- `ts` — timestamp da captura

## URLs sugeridas em producao (Bruno)

| Versao | URL sugerida |
|--------|--------------|
| V1 Sabotagem | `cisrio.com.br/destrave` |
| V2 Mente Inimiga | `cisrio.com.br/mente` |
| V3 Pack 1+1 | `cisrio.com.br/duplo` |

## Convencao de UTMs nos anuncios do Meta

Quando criar a campanha no Meta Ads, usar:

- `utm_source=facebook` ou `instagram`
- `utm_medium=cpc`
- `utm_campaign=cis-rio-ago2026`
- `utm_content=<id-do-criativo>` — para rastrear qual criativo trouxe a venda
- `utm_term=<cluster>` — opcional, mas ajuda agrupar (sabotagem / mente / 1mais1)

Exemplo de URL final do anuncio:

```
cisrio.com.br/destrave?utm_source=instagram&utm_medium=cpc&utm_campaign=cis-rio-ago2026&utm_content=video-sabotagem-pino&utm_term=sabotagem&fbclid={fbclid}
```

## Assets pendentes (para Bruno)

- [ ] Foto/video da edicao anterior do PINO RIOCENTRO (fold 5 e fold 1 hero card)
- [ ] Foto do Paulo Vieira (fold 8)
- [ ] Fotos profissionais de Camila, Julia, Alessandra (fold 9)
- [ ] 3 videos de depoimentos curtos (fold 12) — podem ser os que ja existem nas LPs atuais
- [ ] Logo Febracis Rio (footer)
- [ ] Favicon

Todos os `<img src="">` estao com `onerror` para nao quebrar o layout enquanto as imagens nao chegam. Quando subir os assets:

1. Colocar em `assets/img/`
2. Trocar os `src=""` pelos paths reais
3. Manter o `alt=""` (acessibilidade)

## Decisoes de design (motivos)

### Por que dark + dourado + verde CTA?

- **Dark + azul Febracis (mantido):** continuidade visual com material institucional, mas reforcado
- **Dourado (institucional):** transmite high-ticket / experiencia premium / Paulo Vieira
- **Verde CTA:** regra do vault — CTA primario nao pode ser ghost/outline. Verde solido + shadow + pulse animation. Teste de 2s: o botao salta na pagina.

### Por que matar a folde "O que e Inteligencia Emocional"?

A LP atual gasta 60% da pagina explicando o conceito de IE. Quem clicou no ad ja foi vendido na ideia. A nova LP usa esse espaco pra vender o **evento especifico** — agenda, lotes, prova RJ, garantia. Conteudo vai pro CPL/live.

### Por que urgency bar sticky?

Ciclo de venda CIS e 30 dias. Lead esfria rapido (relatorio do onboarding mostrou 100+ leads perdidos em 1 fim de semana). Urgencia constante puxa decisao pra dentro da sessao &mdash; nao deixa adiar.

### Por que checklist interativo na fold "para quem e"?

A LP atual tem texto longo "para quem e o Metodo CIS". Ninguem le. O checklist clicavel forca **auto-identificacao ativa** — quem marca 3+ se convence sozinho. Funciona como mini-CPL antes do CTA.

### Por que pre-checkout + redirect em vez de checkout embutido?

Voce pediu. E faz sentido: garante captura do lead mesmo que o checkout falhe ou que a pessoa abandone na hora do pagamento. Bruno pode usar o lead pra recuperacao via WhatsApp/email. E permite trocar de plataforma de checkout sem mexer na LP.
