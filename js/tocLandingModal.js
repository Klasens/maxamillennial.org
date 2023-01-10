const landingModal = document.querySelector('.modal-landing');
const landingModalContainer = document.querySelector('.modal-container');
const landingModalClose = document.querySelector('.link-2');
const topNavTitle = document.querySelector('.topNav-title');

window.localStorage.setItem('key', 'modal');

if (window.localStorage.getItem('key')) {
  landingModal.classList.remove('showModal');
  landingModalContainer.classList.remove('showModal');
  landingModalContainer.classList.add('pointerEvents-none');
}
topNavTitle.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
  console.log('test');
  landingModal.classList.add('showModal');
  landingModalContainer.classList.add('showModal');
  landingModalContainer.classList.remove('pointerEvents-none');
});

landingModal.addEventListener('click', function (e) {
  e.preventDefault();
  e.stopPropagation();
  e.stopImmediatePropagation();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    landingModal.classList.remove('showModal');
    landingModalContainer.classList.remove('showModal');
    landingModalContainer.classList.add('pointerEvents-none');
  }
});

landingModalClose.addEventListener('click', function () {
  landingModal.classList.remove('showModal');
  landingModalContainer.classList.remove('showModal');
  landingModalContainer.classList.add('pointerEvents-none');
});

outerModal.addEventListener('click', function () {
  landingModal.classList.remove('showModal');
  landingModalContainer.classList.remove('showModal');
  landingModalContainer.classList.add('pointerEvents-none');
});
