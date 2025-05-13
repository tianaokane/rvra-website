const validPages = [
  "index.html", "about-us.html", "our-projects.html", "get-involved.html",
  "news-and-events.html", "facilities.html", "our-story.html",
  "maries-fund.html", "our-team.html"
];

const path = window.location.pathname.split("/").pop();
if (path && !validPages.includes(path) && !path.endsWith("404.html")) {
  window.location.href = "404.html";
}


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

function highlightActiveNav() {
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });
}

function initIncludes() {
  includeHTML('header-placeholder', 'components/header.html', () => {
  initMobileMenu();
  highlightActiveNav();
});

  includeHTML('footer', 'components/footer.html');
}

document.addEventListener('DOMContentLoaded', initIncludes);
