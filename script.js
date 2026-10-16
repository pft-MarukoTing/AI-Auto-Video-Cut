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

  /* ---- Topbanner: mobile cut at <=1024px, plus a review-only A/B switch ----
     A is the video in the markup; B comes from the data-*-b attributes once those
     files exist. The switch remembers the choice (?banner=a|b, then localStorage)
     and is meant to be deleted once a version is picked. */
  var tbVideo = document.querySelector('.topbanner__media[data-src-desktop]');
  if (tbVideo) {
    var tbMq = window.matchMedia('(max-width: 1024px)');
    var tbData = tbVideo.dataset;
    var tbPosterA = tbVideo.getAttribute('poster');
    var tbVersion = 'a';
    var tbHasB = false;
    try {
      var tbQuery = new URLSearchParams(window.location.search).get('banner');
      var tbSaved = window.localStorage.getItem('topbannerVersion');
      if (tbQuery === 'a' || tbQuery === 'b') tbVersion = tbQuery;
      else if (tbSaved === 'a' || tbSaved === 'b') tbVersion = tbSaved;
    } catch (e) { /* storage or URL API unavailable: stay on A */ }

    var tbApply = function () {
      var mobile = tbMq.matches;
      var useB = tbVersion === 'b' && tbHasB;
      var src = mobile ? (useB ? tbData.srcMobileB : tbData.srcMobile) : (useB ? tbData.srcDesktopB : tbData.srcDesktop);
      var poster = mobile ? (useB ? tbData.posterMobileB : tbData.posterMobile) : (useB ? tbData.posterB : tbPosterA);
      if (tbVideo.getAttribute('src') !== src) {
        tbVideo.setAttribute('src', src);
        if (poster) tbVideo.setAttribute('poster', poster);
        tbVideo.load();
        tbVideo.play().catch(function () {});
      }
    };
    tbApply();
    if (tbMq.addEventListener) tbMq.addEventListener('change', tbApply);
    else tbMq.addListener(tbApply);

    // The switch appears only when a B version is declared; its B button is
    // disabled until the B files are actually on disk.
    if (tbData.srcDesktopB && tbData.srcMobileB) {
      var tbSwitch = document.createElement('div');
      tbSwitch.className = 'review-switch';
      tbSwitch.setAttribute('role', 'group');
      tbSwitch.setAttribute('aria-label', 'Topbanner version');
      tbSwitch.innerHTML =
        '<span class="review-switch__label">Topbanner</span>' +
        '<button type="button" class="review-switch__btn" data-v="a">A</button>' +
        '<button type="button" class="review-switch__btn" data-v="b">B</button>';
      document.body.appendChild(tbSwitch);
      var tbBtns = tbSwitch.querySelectorAll('.review-switch__btn');
      var tbPaint = function () {
        Array.prototype.forEach.call(tbBtns, function (b) {
          b.setAttribute('aria-pressed', String(b.dataset.v === (tbHasB ? tbVersion : 'a')));
        });
      };
      var tbSet = function (v) {
        tbVersion = v;
        try {
          window.localStorage.setItem('topbannerVersion', v);
          var u = new URL(window.location.href);
          u.searchParams.set('banner', v);
          window.history.replaceState(null, '', u.toString());
        } catch (e) { /* ignore */ }
        tbApply();
        tbPaint();
      };
      Array.prototype.forEach.call(tbBtns, function (b) {
        b.addEventListener('click', function () { if (!b.disabled) tbSet(b.dataset.v); });
      });
      var tbB = tbSwitch.querySelector('[data-v="b"]');
      tbB.disabled = true;
      tbB.title = 'B version video is not added yet';
      tbPaint();
      fetch(tbData.srcDesktopB, { method: 'HEAD', cache: 'no-store' }).then(function (r) {
        if (!r.ok) return;
        tbHasB = true;
        tbB.disabled = false;
        tbB.title = '';
        tbApply();
        tbPaint();
      }).catch(function () { /* no B file yet */ });
    }
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