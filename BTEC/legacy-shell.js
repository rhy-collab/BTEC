const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const shellNavItems = [
  ['why-btec.html', 'BTEC explained'],
  ['curriculum.html', 'Curriculum'],
  ['experience.html', 'Experience'],
  ['fees.html', 'Fees'],
  ['universities.html', 'University & careers'],
  ['visa.html', 'Visa guidance'],
  ['faq.html', 'FAQ']
];
const shellLinks = shellNavItems.map(([href, label]) => `<a href="${href}"${currentPage === href ? ' aria-current="page"' : ''}>${label}</a>`).join('');
const headerMarkup = `<header class="site-header"><div class="shell-wrap nav-shell"><a class="brand" href="index.html" aria-label="UK BTEC Online home"><span class="brand-mark">UB</span><span>UK BTEC <em>Online</em></span></a><button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav" aria-label="Open navigation"><span></span><span></span><span></span></button><nav class="main-nav" id="main-nav" aria-label="Main navigation">${shellLinks}<a class="button" href="https://calendly.com/ukbtec-info/30min">Book a free call →</a></nav></div></header>`;
const footerMarkup = `<footer class="site-footer"><div class="shell-wrap"><div class="footer-grid"><div class="footer-about"><a class="brand" href="index.html"><span class="brand-mark">UB</span><span>UK BTEC <em>Online</em></span></a><p>Make a clear decision with the important questions answered.</p></div><div><p class="footer-title">Explore</p><div class="footer-links"><a href="why-btec.html">BTEC explained</a><a href="curriculum.html">Curriculum</a><a href="experience.html">Experience</a><a href="fees.html">Fees</a><a href="faq.html">FAQ</a></div></div><div><p class="footer-title">Guidance</p><div class="footer-links"><a href="universities.html">University &amp; careers</a><a href="visa.html">Visa guidance</a><a href="https://calendly.com/ukbtec-info/30min">Book a free call</a><a href="mailto:rhys.coombes@gmail.com">Email Rhys</a></div></div></div><div class="footer-bottom"><p>© <span data-year>${new Date().getFullYear()}</span> UK BTEC Online.</p><p class="footer-disclaimer">Always verify the exact qualification, registration route and destination requirements before paying or enrolling.</p></div></div></footer>`;
const existingHeader = document.querySelector('header');
if (existingHeader) {
  existingHeader.outerHTML = headerMarkup;
} else {
  document.body.classList.add('legacy-shell-page');
  document.body.insertAdjacentHTML('afterbegin', headerMarkup);
}
const existingFooter = document.querySelector('footer');
if (existingFooter) {
  existingFooter.outerHTML = footerMarkup;
} else {
  document.body.classList.add('legacy-shell-page');
  document.body.insertAdjacentHTML('beforeend', footerMarkup);
}
