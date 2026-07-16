// ============================================
// CIS Presencial Rio 2026 — JS compartilhado
// 3 LPs: sabotagem / mente-inimiga / compre1-leve-outro
// ============================================

(function () {
  'use strict';

  // ──────────────────────────────────────────────────────────
  // CONFIG — Bruno: trocar antes de subir em producao
  // ──────────────────────────────────────────────────────────
  const CFG = {
    // URL do checkout externo (Eduzz/Hotmart/proprio)
    // Sera substituida via data-checkout-url do <body> ou aqui:
    checkoutUrl: 'https://CHECKOUT_AQUI.com/cis-rio-2026',

    // Webhook para gravar o lead antes do redirect
    // (n8n / ManyChat / SeuEsforco — usar o que o Bruno configurar)
    leadWebhook: 'https://WEBHOOK_AQUI/lead-cis-rio',

    // WhatsApp do consultor (com codigo do pais, sem +)
    whatsappPhone: '5521985356848',
    whatsappMsg: 'Oi! Quero garantir minha vaga no Metodo CIS Rio Ago/2026.',
  };

  // ──────────────────────────────────────────────────────────
  // UTM CAPTURE — guarda os parametros da URL no sessionStorage
  // Para forward na hora do redirect pro checkout
  // ──────────────────────────────────────────────────────────
  function captureUtms() {
    const params = new URLSearchParams(window.location.search);
    const utms = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'fbclid'].forEach(k => {
      const v = params.get(k);
      if (v) utms[k] = v;
    });
    // origem da pagina (qual versao do A/B esta)
    utms.lp_version = document.body.dataset.version || 'unknown';
    utms.lp_path = window.location.pathname;

    sessionStorage.setItem('cis_utms', JSON.stringify(utms));
    return utms;
  }

  function getUtms() {
    try { return JSON.parse(sessionStorage.getItem('cis_utms') || '{}'); }
    catch (e) { return {}; }
  }

  // ──────────────────────────────────────────────────────────
  // MODAL PRE-CHECKOUT
  // ──────────────────────────────────────────────────────────
  const modal = document.getElementById('preCheckoutModal');
  const modalBackdrop = modal;

  function openModal(lotName) {
    if (!modal) return;
    const lotEl = modal.querySelector('[data-modal-lot]');
    if (lotEl && lotName) lotEl.textContent = lotName;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
  document.querySelectorAll('[data-cta]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      const lot = el.dataset.lot || '';
      openModal(lot);
    });
  });
  document.querySelectorAll('[data-modal-close]').forEach(el => {
    el.addEventListener('click', closeModal);
  });
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', e => {
      if (e.target === modalBackdrop) closeModal();
    });
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  // ──────────────────────────────────────────────────────────
  // FORM SUBMIT — captura lead, dispara webhook, redirect
  // Vale para o modal (rapido) E para o form final (qualificado)
  // ──────────────────────────────────────────────────────────
  async function handleSubmit(formEl, e) {
    e.preventDefault();
    const btn = formEl.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Processando...';

    const data = Object.fromEntries(new FormData(formEl).entries());
    const payload = {
      ...data,
      ...getUtms(),
      ts: new Date().toISOString(),
      lot: modal?.querySelector('[data-modal-lot]')?.textContent || '',
      form_origin: formEl.id,
    };

    try {
      if (CFG.leadWebhook && !CFG.leadWebhook.includes('WEBHOOK_AQUI')) {
        await fetch(CFG.leadWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true,
        });
      } else {
        console.warn('[CIS-RIO] Webhook nao configurado. Payload:', payload);
      }
    } catch (err) {
      console.error('[CIS-RIO] Falha no webhook (segue para checkout):', err);
    }

    // Redirect com UTMs + dados preservados
    const checkout = new URL(CFG.checkoutUrl);
    Object.entries(getUtms()).forEach(([k, v]) => checkout.searchParams.set(k, v));
    if (data.name) checkout.searchParams.set('name', data.name);
    if (data.email) checkout.searchParams.set('email', data.email);
    if (data.phone) checkout.searchParams.set('phone', data.phone);

    // Se webhook nao esta configurado (dev), avisar antes de redirecionar
    if (CFG.checkoutUrl.includes('CHECKOUT_AQUI')) {
      alert('[DEV] Lead capturado. Configure CFG.checkoutUrl no app.js para ativar o redirect.');
      btn.disabled = false;
      btn.textContent = originalText;
      return;
    }

    window.location.href = checkout.toString();
  }

  ['preCheckoutForm', 'preCheckoutFormQuick'].forEach(id => {
    const f = document.getElementById(id);
    if (f) f.addEventListener('submit', e => handleSubmit(f, e));
  });

  // ──────────────────────────────────────────────────────────
  // WHATSAPP FLOATING
  // ──────────────────────────────────────────────────────────
  const wapp = document.querySelector('.fab-whatsapp');
  if (wapp) {
    wapp.addEventListener('click', () => {
      const utms = getUtms();
      const ctx = utms.lp_version ? ` (origem: ${utms.lp_version})` : '';
      const url = `https://wa.me/${CFG.whatsappPhone}?text=${encodeURIComponent(CFG.whatsappMsg + ctx)}`;
      window.open(url, '_blank');
    });
  }

  // ──────────────────────────────────────────────────────────
  // FAQ ACCORDION
  // ──────────────────────────────────────────────────────────
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    q.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(o => o.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  // ──────────────────────────────────────────────────────────
  // PERSONA CHECKLIST — interativo
  // ──────────────────────────────────────────────────────────
  const personaChecks = document.querySelectorAll('.persona-check');
  const personaResult = document.querySelector('.persona-result');
  function updatePersonaCount() {
    if (!personaResult) return;
    const total = personaChecks.length;
    const checked = document.querySelectorAll('.persona-check.checked').length;
    const counter = personaResult.querySelector('[data-checked-count]');
    if (counter) counter.textContent = checked;
    if (checked >= 3) {
      personaResult.style.background = 'rgba(21, 194, 105, 0.10)';
      personaResult.style.borderColor = 'rgba(21, 194, 105, 0.35)';
    }
  }
  personaChecks.forEach(el => {
    el.addEventListener('click', () => {
      el.classList.toggle('checked');
      updatePersonaCount();
    });
  });

  // ──────────────────────────────────────────────────────────
  // INIT
  // ──────────────────────────────────────────────────────────
  captureUtms();
})();
