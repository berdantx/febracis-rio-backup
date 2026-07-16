---
name: Vercel - alias não atualiza automaticamente em novos deploys
description: Quando projeto Vercel já existe com alias custom, cada novo `vercel deploy` cria deployment novo mas NÃO atualiza o alias — precisa rodar `vercel alias set` manualmente
type: feedback
originSessionId: 122759eb-439f-42b8-9c43-a6977c8b8a4d
---
# Vercel: alias custom precisa de update manual a cada deploy

**Regra:** Em projetos Vercel que já têm alias customizado (ex: `consultoria-cv.vercel.app`), cada novo `vercel deploy --prod` cria um novo deployment com URL própria (tipo `projeto-abc123-scope.vercel.app`), mas **o alias customizado continua apontando pro deployment anterior**.

**Why:** aconteceu na sessão da Consultoria Camila Vieira — rodei `vercel deploy` após atualizar CTA, mas o usuário reportou que as páginas continuavam mostrando a versão antiga. Investiguei e descobri que `https://consultoria-cv.vercel.app` estava apontando pro deployment antigo. A primeira vez que roda `vercel alias set` funciona, mas em deploys subsequentes o alias não migra automaticamente.

**How to apply:**

**Fluxo correto pra atualizar um projeto Vercel existente com alias custom:**

```bash
# 1. Deploy (gera URL nova tipo projeto-abc-scope.vercel.app)
cd /pasta/do/projeto
DEPLOY_URL=$(vercel deploy --prod --yes --scope SEU_SCOPE 2>&1 | grep "^Production:" | awk '{print $2}')

# 2. Atualizar alias pra apontar pro novo deployment
vercel alias set "$DEPLOY_URL" meu-alias-custom.vercel.app --scope SEU_SCOPE

# 3. Validar com cache-bust (CDN pode ter cache)
curl -s "https://meu-alias-custom.vercel.app/pagina.html?v=$(date +%s)"
```

**Passo crítico:** sempre validar com `?v=timestamp` pra forçar bypass do cache do Vercel Edge. Sem isso, pode parecer que o deploy não rolou quando na verdade rolou mas está servindo do cache.

**Observação adicional:** `grep -P` (regex Perl) não funciona em algumas versões do Git Bash no Windows — dá erro *"supports only unibyte and UTF-8 locales"*. Usar `grep` sem `-P`, ou `awk '{print $2}'` pra extrair URL.
