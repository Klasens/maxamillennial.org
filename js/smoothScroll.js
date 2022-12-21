'use strict';

const scrollBtn = document.querySelector('.title-btn');
const scrollContent = document.querySelector('#scrollAdhoc');

scrollBtn.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('test');
  scrollContent.scrollIntoView({ block: 'start', behavior: 'smooth' });
});
