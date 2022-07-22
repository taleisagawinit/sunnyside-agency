const $mobileNavBtn = document.getElementById('mobileNavBtn');
const $header = document.getElementById('header');

// show mobile menu on click
if ($mobileNavBtn && $header) {
  $mobileNavBtn.addEventListener('click', () => {
    $header.classList.toggle('visible');
  });
}