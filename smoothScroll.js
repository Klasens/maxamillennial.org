'use strict';

const scrollBtn = document.querySelector('.title-btn');
const scrollContent = document.querySelector('.chapter-content');

scrollBtn.addEventListener('click', function (e) {
  e.preventDefault();
  scrollContent.scrollIntoView({ behavior: 'smooth' });
});
