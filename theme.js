// theme.js - Sync theme across all Krative pages
(function(){
  const KEY = 'krative_theme';
  
  function applyTheme(theme){
    const isLight = theme === 'light';
    document.documentElement.classList.toggle('light', isLight);
    document.body.classList.toggle('light', isLight);
    const btn = document.getElementById('themeBtn');
    if(btn) btn.textContent = isLight ? '☀️' : '🌙';
  }

  // Apply saved theme immediately on load
  const saved = localStorage.getItem(KEY) || 'dark';
  applyTheme(saved);

  // Apply again when DOM ready (in case body not ready)
  document.addEventListener('DOMContentLoaded', () => {
    applyTheme(localStorage.getItem(KEY) || 'dark');
  });

  // Sync across tabs/pages instantly
  window.addEventListener('storage', (e) => {
    if(e.key === KEY && e.newValue){
      applyTheme(e.newValue);
    }
  });
})();