/* ============================================================
   EVENTURA DESIGNS — MAIN JS
   ============================================================ */

/* ── Mobile nav toggle ── */
(function () {
  const burger = document.querySelector('.nav__burger');
  const mobileNav = document.querySelector('.nav__mobile');

  if (!burger || !mobileNav) return;

  burger.addEventListener('click', function () {
    const isOpen = mobileNav.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  mobileNav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      mobileNav.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!burger.contains(e.target) && !mobileNav.contains(e.target)) {
      mobileNav.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
})();

/* ── Scroll reveal (Intersection Observer) ── */
(function () {
  const targets = document.querySelectorAll('.reveal');

  if (!targets.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();

/* ── Enquiry form – inline thank you ── */
(function () {
  const form = document.getElementById('enquiry-form');
  const success = document.getElementById('form-success');

  if (!form || !success) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.style.display = 'none';
    success.classList.add('visible');
  });
})();

/* ── Set active nav link based on current page ── */
(function () {
  const path = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();
