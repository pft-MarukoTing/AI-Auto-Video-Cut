document.addEventListener('DOMContentLoaded', function () {

  /* ---- Mobile side menu ---- */
  var hamburgerBtn = document.getElementById('hamburgerBtn');
  var mobileMenu = document.getElementById('mobileMenu');
  var mobileOverlay = document.getElementById('mobileOverlay');
  var mobileMenuClose = document.getElementById('mobileMenuClose');

  function openMobileMenu() {
    mobileMenu.classList.add('is-open');
    mobileOverlay.classList.add('is-open');
  }
  function closeMobileMenu() {
    mobileMenu.classList.remove('is-open');
    mobileOverlay.classList.remove('is-open');
  }
  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openMobileMenu);
  if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMobileMenu);
  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileMenu);

  /* ---- FAQ accordion (single-open) ---- */
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var q = item.querySelector('.faq-item__q');
    q.addEventListener('click', function () {
      var wasOpen = item.classList.contains('is-open');
      faqItems.forEach(function (i) {
        i.classList.remove('is-open');
        var chev = i.querySelector('.faq-item__chevron');
        chev.src = 'assets/YCO/icons/Icon_close.svg';
      });
      if (!wasOpen) {
        item.classList.add('is-open');
        item.querySelector('.faq-item__chevron').src = 'assets/YCO/icons/Icon_open.svg';
      }
    });
  });

  /* ---- Topbanner: swap in the mobile cut (card only, full-bleed) at <=1024px ---- */
  var tbVideo = document.querySelector('.topbanner__media[data-src-desktop]');
  if (tbVideo) {
    var tbMq = window.matchMedia('(max-width: 1024px)');
    var tbApply = function () {
      var m = tbMq.matches;
      var src = m ? tbVideo.dataset.srcMobile : tbVideo.dataset.srcDesktop;
      if (tbVideo.getAttribute('src') !== src) {
        tbVideo.setAttribute('src', src);
        if (m && tbVideo.dataset.posterMobile) tbVideo.setAttribute('poster', tbVideo.dataset.posterMobile);
        tbVideo.load();
        tbVideo.play().catch(function () {});
      }
    };
    tbApply();
    if (tbMq.addEventListener) tbMq.addEventListener('change', tbApply);
    else tbMq.addListener(tbApply);
  }


  /* ---- Footer language switch (front-end toggle only) ---- */
  var langBtn = document.getElementById('langSwitchBtn');
  if (langBtn) {
    langBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      langBtn.classList.toggle('is-open');
    });
  }

});