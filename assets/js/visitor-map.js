/* Optional visitor map: no third-party request before a click, no fabricated statistics. */
(() => {
  'use strict';
  document.querySelectorAll('[data-visitor-map]').forEach((frame) => {
    const button = frame.querySelector('.yx-map-load');
    if (!button || frame.dataset.enabled !== 'true') return;
    button.addEventListener('click', () => {
      const feedback = frame.querySelector('.yx-map-feedback');
      let source;
      try {
        source = new URL(frame.dataset.widgetSrc);
        const hosts = ['mapmyvisitors.com', 'www.mapmyvisitors.com', 'clustrmaps.com', 'www.clustrmaps.com'];
        if (source.protocol !== 'https:' || !hosts.includes(source.hostname)) throw new Error('Unsupported provider');
      } catch (_) { feedback.textContent = 'The visitor-map configuration is invalid.'; return; }
      if (frame.dataset.loaded === 'true') return;
      frame.dataset.loaded = 'true'; button.disabled = true;
      const target = frame.querySelector('.yx-map-widget'); target.hidden = false;
      const script = document.createElement('script');
      script.id = frame.dataset.widgetId || 'mapmyvisitors'; script.src = source.href; script.async = true;
      feedback.textContent = 'Loading visitor map…';
      script.onload = () => { feedback.textContent = ''; frame.querySelector('.yx-map-placeholder').hidden = true; };
      script.onerror = () => { script.remove(); target.hidden = true; frame.dataset.loaded = 'false'; button.disabled = false; feedback.textContent = 'The visitor map is unavailable. Please try again later.'; };
      target.appendChild(script);
    });
  });
})();
