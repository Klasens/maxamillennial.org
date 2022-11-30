'use strict';
// CLICKABLE LINKS
const tocChaptersLink = document.querySelector('#toc-chaptersLink');
const tocFictionLink = document.querySelector('#toc-fictionLink');
const tocLFLink = document.querySelector('#toc-LF-NonfictionLink');
const tocSFLink = document.querySelector('#toc-SF-NonfictionLink');
const tocAphorismsLink = document.querySelector('#toc-aphorisms');
const tocPoetryLink = document.querySelector('#toc-poetry');

// DISPLAYS
const tocChaptersDisplay = document.querySelector('#toc-chaptersDisplay');
const tocFictionDisplay = document.querySelector('#toc-fictionDisplay');
const tocLFNonfictionDisplay = document.querySelector('#toc-LFDisplay');
const tocSFNonfictionDisplay = document.querySelector('#toc-SFDisplay');
const tocAphorismsDisplay = document.querySelector('#toc-aphorismsDisplay');
const tocPoetryDisplay = document.querySelector('#toc-poetryDisplay');

// SUB DISPLAYS
const tocLFSet1 = document.querySelector('.toc-set1--LF');
const tocLFSet2 = document.querySelector('.toc-set2--LF');

// CHAPTER SELECTORS
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

// FICTION SELECTORS
const f1 = document.querySelector('#f1');
const f2 = document.querySelector('#f2');
const f3 = document.querySelector('#f3');
const f4 = document.querySelector('#f4');
const f5 = document.querySelector('#f5');

// SHOW FUNCTIONS
const showChapters = function () {
  tocChaptersDisplay.classList.add('opacity-1');
  tocChaptersDisplay.classList.add('z-index-10');
  tocChaptersDisplay.classList.remove('pointerEvents-none');
  c0.classList.add('unfold-c0');
  c1.classList.add('unfold-c1');
  c2.classList.add('unfold-c2');
  c3.classList.add('unfold-c3');
  c4.classList.add('unfold-c4');
  c5.classList.add('unfold-c5');
  c6.classList.add('unfold-c6');
  c0Line.classList.add('fadeIn-c0');
  c1Line.classList.add('fadeIn-c1');
  c2Line.classList.add('fadeIn-c2');
  c3Line.classList.add('fadeIn-c3');
  c4Line.classList.add('fadeIn-c4');
  c5Line.classList.add('fadeIn-c5');
};

const showFiction = function () {
  tocFictionDisplay.classList.remove('pointerEvents-none');
  tocFictionDisplay.classList.add('z-index-10');
  f1.classList.add('fade-f1');
  f2.classList.add('fade-f2');
  f3.classList.add('fade-f3');
  f4.classList.add('fade-f4');
  f5.classList.add('fade-f5');
};
const showNonfictionLF = function () {
  tocLFSet1.classList.add('fadeIn-LF1');
  tocLFSet2.classList.add('fadeIn-LF2');
};
// HIDE FUNCTIONS
const hideChapters = function () {
  tocChaptersDisplay.classList.remove('opacity-1');
  tocChaptersDisplay.classList.remove('z-index-10');
  tocChaptersDisplay.classList.add('pointerEvents-none');
  c0.classList.remove('unfold-c0');
  c1.classList.remove('unfold-c1');
  c2.classList.remove('unfold-c2');
  c3.classList.remove('unfold-c3');
  c4.classList.remove('unfold-c4');
  c5.classList.remove('unfold-c5');
  c6.classList.remove('unfold-c6');
  c0Line.classList.remove('fadeIn-c0');
  c1Line.classList.remove('fadeIn-c1');
  c2Line.classList.remove('fadeIn-c2');
  c3Line.classList.remove('fadeIn-c3');
  c4Line.classList.remove('fadeIn-c4');
  c5Line.classList.remove('fadeIn-c5');
};

const hideFiction = function () {
  tocFictionDisplay.classList.add('pointerEvents-none');
  f1.classList.remove('fade-f1');
  f2.classList.remove('fade-f2');
  f3.classList.remove('fade-f3');
  f4.classList.remove('fade-f4');
  f5.classList.remove('fade-f5');
};
const hideNonfictionLF = function () {
  tocLFSet1.classList.remove('fadeIn-LF1');
  tocLFSet2.classList.remove('fadeIn-LF2');
};

// EVENT LISTENERS
tocChaptersLink.addEventListener('click', function () {
  showChapters();
  hideFiction();
  hideNonfictionLF();
});

tocFictionLink.addEventListener('click', function () {
  hideChapters();
  showFiction();
  hideNonfictionLF();
});

tocLFLink.addEventListener('click', function () {
  showNonfictionLF();
  hideChapters();
  hideFiction();
});
