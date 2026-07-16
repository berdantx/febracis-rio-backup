---
name: autofill-do-chrome-quebra-input-em-tema-dark
description: Chrome ignora background em :-webkit-autofill e pinta o campo de branco. Corrigir com box-shadow inset + -webkit-text-fill-color.
metadata: 
  node_type: memory
  type: feedback
  originSessionId: 6f11c5f9-b05b-4ffa-bd55-34be9fff60a4
---

Em formulários de tema escuro, quando o Chrome autopreenche (nome, email), ele aplica um fundo claro próprio e o campo destoa dos demais. Sintoma clássico: os campos autopreenchidos ficam brancos, os digitados à mão continuam escuros.

**Why:** o Chrome usa `-internal-light-dark` / `-internal-autofill-selected` no estado `:-webkit-autofill` e **ignora a propriedade `background`**. Mas respeita `box-shadow`.

**How to apply:**
```css
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 1000px var(--bg-escuro) inset !important;
  box-shadow: 0 0 0 1000px var(--bg-escuro) inset !important;
  -webkit-text-fill-color: var(--texto-claro) !important;
  caret-color: var(--texto-claro);
  transition: background-color 9999s ease-in-out 0s;
}
input:autofill { /* Firefox */
  background: var(--bg-escuro);
  color: var(--texto-claro);
}
```

Detalhes que importam:
- `-webkit-text-fill-color` é necessário porque `color` também é sobrescrito.
- `transition: background-color 9999s` trava a animação do Chrome que reverteria a cor.
- Cobrir `:hover`, `:focus` e `:active`, senão o fundo branco volta ao interagir.
- Se usar `intl-tel-input`, aplicar também em `.iti__tel-input`.
- Aplicado em [[project_febracis_rio]] (LP CIS Presencial). Ver também [[feedback_intl_tel_input_jsdelivr]].
