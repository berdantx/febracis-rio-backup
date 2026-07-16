---
name: waf-bloqueia-par-metro-name-na-url
description: Sites WordPress atrás de WAF retornam 404 quando a URL tem ?name=. Renomear para ?nome= e sempre testar parâmetro a parâmetro com curl antes de culpar o código.
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 6f11c5f9-b05b-4ffa-bd55-34be9fff60a4
---

Ao redirecionar para uma URL com dados do lead na query string, o parâmetro chamado `name` pode ser bloqueado por WAF/firewall e devolver **404**, mesmo com a página existindo.

Confirmado em `febracisriodejaneiro.com.br` (junho/2026):

| URL | Resultado |
|---|---|
| `/pagina/?phone=...` | 200 |
| `/pagina/?email=...` | 200 |
| `/pagina/?foo=bar` | 200 |
| `/pagina/?name=X` | **404** |
| `/pagina/?nome=X` | 200 |

**Why:** `name` é parâmetro sensível em várias assinaturas de ataque, então WAFs (Wordfence, Cloudflare, mod_security) costumam barrá-lo. Perdi tempo suspeitando do código quando o problema era o servidor.

**How to apply:**
- Ao montar URL de redirect com dados do usuário, usar `nome` em vez de `name`.
- **Diagnosticar sempre isolando parâmetro por parâmetro** com curl antes de mexer no código:
  `curl -s -o /dev/null -w "HTTP %{http_code}\n" "https://site/pagina/?param=valor"`
- Checar também a **barra final**: WordPress com permalink canônico faz 301 para adicionar `/`, mas o redirect quebra (404) quando há query params. Sempre incluir a barra: `/pagina/?a=b`.
- Não jogar na URL parâmetros de tracking interno (`lp_path`, `lp_version`) — geram encoding duplo (`%2520`) e poluem. Mandar só no webhook.
- Aplicado em [[project_febracis_rio]].
