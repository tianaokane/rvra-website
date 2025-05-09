document.addEventListener('DOMContentLoaded', () => {
    includeHTML('header', 'components/header.html');
    includeHTML('footer', 'components/footer.html');
  });
  
  function includeHTML(id, url) {
    const el = document.getElementById(id);
    if (!el) return;
  
    fetch(url)
      .then(res => res.text())
      .then(html => {
        el.innerHTML = html;
      })
      .catch(err => console.error(`Error loading ${url}:`, err));
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    includeHTML('header', 'components/header.html', initMobileMenu);
    includeHTML('footer', 'components/footer.html');
  });
  
  function includeHTML(id, url, callback) {
    const el = document.getElementById(id);
    if (!el) return;
  
    fetch(url)
      .then(res => res.text())
      .then(html => {
        el.innerHTML = html;
        if (typeof callback === 'function') callback();
      })
      .catch(err => console.error(`Error loading ${url}:`, err));
  }
  