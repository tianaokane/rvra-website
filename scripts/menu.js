function initMobileMenu() {
  const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('closeBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!menuBtn || !closeBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('show');
  });
}
