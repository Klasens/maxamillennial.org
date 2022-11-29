'use strict';

const tocChapters = document.querySelector('#toc-chapters');
const tocChaptersDisplay = document.querySelector('#toc-chaptersDisplay');
const tocFiction = document.querySelector('#toc-fiction');
const tocFictionDisplay = document.querySelector('#toc-fictionDisplay');
const tocLF = document.querySelector('#toc-LF');
const tocSF = document.querySelector('#toc-SF');
const tocAphorisms = document.querySelector('#toc-aphorisms');
const tocPoetry = document.querySelector('#toc-poetry');
const c0 = document.querySelector('#c0');
const c1 = document.querySelector('#c1');
const c2 = document.querySelector('#c2');
const c3 = document.querySelector('#c3');
const c4 = document.querySelector('#c4');
const c5 = document.querySelector('#c5');
const c6 = document.querySelector('#c6');
const c0Line = document.querySelector('#c0-line');
const c1Line = document.querySelector('#c1-line');
const c2Line = document.querySelector('#c2-line');
const c3Line = document.querySelector('#c3-line');
const c4Line = document.querySelector('#c4-line');
const c5Line = document.querySelector('#c5-line');
const f1 = document.querySelector('#f1');
const f2 = document.querySelector('#f2');
const f3 = document.querySelector('#f3');
const f4 = document.querySelector('#f4');
const f5 = document.querySelector('#f5');

const showChapters = function () {
  tocChaptersDisplay.classList.add('opacity-1');
  tocChaptersDisplay.classList.add('z-index-10');
  c0.classList.add('unfold-0');
  c1.classList.add('unfold-1');
  c2.classList.add('unfold-2');
  c3.classList.add('unfold-3');
  c4.classList.add('unfold-4');
  c5.classList.add('unfold-5');
  c6.classList.add('unfold-6');
  c0Line.classList.add('fade-0');
  c1Line.classList.add('fade-1');
  c2Line.classList.add('fade-2');
  c3Line.classList.add('fade-3');
  c4Line.classList.add('fade-4');
  c5Line.classList.add('fade-5');
};

const hideChapters = function () {
  tocChaptersDisplay.classList.remove('opacity-1');
  tocChaptersDisplay.classList.remove('z-index-10');
  c0.classList.remove('unfold-0');
  c1.classList.remove('unfold-1');
  c2.classList.remove('unfold-2');
  c3.classList.remove('unfold-3');
  c4.classList.remove('unfold-4');
  c5.classList.remove('unfold-5');
  c6.classList.remove('unfold-6');
  c0Line.classList.remove('fade-0');
  c1Line.classList.remove('fade-1');
  c2Line.classList.remove('fade-2');
  c3Line.classList.remove('fade-3');
  c4Line.classList.remove('fade-4');
  c5Line.classList.remove('fade-5');
};

const showFiction = function () {
  tocFictionDisplay.classList.add('z-index-10');
  f1.classList.add('fade-f1');
  f2.classList.add('fade-f2');
  f3.classList.add('fade-f3');
  f4.classList.add('fade-f4');
  f5.classList.add('fade-f5');
};

const hideFiction = function () {
  f1.classList.remove('fade-f1');
  f2.classList.remove('fade-f2');
  f3.classList.remove('fade-f3');
  f4.classList.remove('fade-f4');
  f5.classList.remove('fade-f5');
};

tocChapters.addEventListener('click', function () {
  showChapters();
  hideFiction();
});

tocFiction.addEventListener('click', function () {
  hideChapters();
  showFiction();
});
