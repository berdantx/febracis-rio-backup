---
name: intl-tel-input-usar-jsdelivr-n-o-cdnjs
description: "As bandeiras do intl-tel-input não renderizam quando servido pelo cdnjs, porque o CSS referencia flags.webp e o cdnjs só publica flags.png. Usar jsDelivr."
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 6f11c5f9-b05b-4ffa-bd55-34be9fff60a4
---

Ao adicionar seletor internacional de telefone com bandeiras (`intl-tel-input`), servir os assets pelo **jsDelivr**, nunca pelo cdnjs.

```
https://cdn.jsdelivr.net/npm/intl-tel-input@23.8.1/build/css/intlTelInput.css
https://cdn.jsdelivr.net/npm/intl-tel-input@23.8.1/build/js/intlTelInput.min.js
https://cdn.jsdelivr.net/npm/intl-tel-input@23.8.1/build/js/utils.js
```

**Why:** o CSS da lib referencia as bandeiras por caminho relativo `../img/flags.webp` (formato **webp**). O cdnjs publica apenas `img/flags.png` — o `.webp` retorna 404. Sintoma: o componente monta (aparece `+55` e a seta), mas a bandeira vira um retângulo vazio. O jsDelivr publica o pacote npm completo, com os `.webp` no caminho esperado.

**How to apply:**
- Verificar o CDN com `curl -s -o /dev/null -w "%{http_code}" <url>` antes de assumir que um asset existe.
- No submit, ler o número internacional completo: `iti.getNumber()` retorna E.164 (`+5521995625554`). Sobrescrever `data.phone` com isso, senão vai só o que foi digitado, sem DDI.
- Guardar as instâncias num `Map` (`window.__itiInstances`) para recuperar no handler de submit.
- Envolver a init em `if (typeof window.intlTelInput !== 'function') return;` — se o CDN for bloqueado (CSP de widget WordPress), o campo degrada para input de texto normal em vez de quebrar a página.
- Aplicado em [[project_febracis_rio]].
