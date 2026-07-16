---
name: febracis-rio-lp-wordpress-n-o-editar-sem-pedido-direto
description: "No projeto da LP CIS Presencial (paginas-cis-rio), só editar quando o usuário pedir diretamente, só o que ele pedir, e nunca regenerar o arquivo -wordpress.html sem autorização."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 6f11c5f9-b05b-4ffa-bd55-34be9fff60a4
---

Na LP do Método CIS Presencial (`Mentoria Primia/Mentorados/Febracis RJ - Larissa Emerson(1)/paginas-cis-rio/`), o usuário definiu regras estritas de edição em 2026-06-21:

- **Só editar se ele pedir diretamente.** Não aplicar melhorias proativas.
- **Editar apenas o que foi pedido** — nada a mais.
- **Nunca rodar o build** (regenerar `v1-sabotagem-wordpress.html` via `c:/tmp/build-wordpress.py`) sem autorização explícita.

**Why:** o usuário edita manualmente o arquivo gerado `v1-sabotagem-wordpress.html` (CSS+JS inline, é o que ele cola no widget HTML do WordPress). Quando eu regenerei o WP a partir do `style.css`/`base.html`, sobrescrevi e ele PERDEU várias edições manuais (ex: remoção da stick bar, ajustes de urgency-bar). Isso gerou retrabalho e frustração real.

**How to apply:**
- O wp-file (`v1-sabotagem-wordpress.html`) é onde o usuário trabalha agora — tratar como fonte da verdade dele, não regenerar por cima.
- A stick bar (`.urgency-bar`) foi removida definitivamente por ele do wp-file; o `style.css`/`base.html` ainda têm — não "corrigir" essa divergência sem pedido.
- Antes de qualquer edição: confirmar exatamente o escopo e não extrapolar.
- Relacionado: [[feedback_link_clicavel_paginas]], projeto [[project_febracis_rio]].
