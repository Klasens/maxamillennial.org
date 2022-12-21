'use strict';
// POEMS AND APHORISMS SELECTORS
const aphorismClose = document.querySelector('#aphorismClose');
const poemClose = document.querySelector('#poemClose');
const mainLinks = document.querySelector('.toc-mainLinks');
const pieceLinks = document.querySelector('.toc-pieceLinks');

const mediaQuery850 = window.matchMedia('(max-width: 850px)');
function displayChaptersList(mediaQuery850) {
  if (mediaQuery850.matches) {
    // If media query matches
    console.log('test');
    showSideMenu();
    showChaptersList();
  }
}
function displayFictionList(mediaQuery850) {
  if (mediaQuery850.matches) {
    // If media query matches
    console.log('test');
    showSideMenu();
    showShortStoriesList();
  }
}
function displayNonfictionLFList(mediaQuery850) {
  if (mediaQuery850.matches) {
    // If media query matches
    console.log('test');
    showSideMenu();
    showNonfictionList_long();
  }
}
function displayNonfictionSFList(mediaQuery850) {
  if (mediaQuery850.matches) {
    // If media query matches
    console.log('test');
    showSideMenu();
    showNonfictionList_short();
  }
}
function displayAphorismsList(mediaQuery850) {
  if (mediaQuery850.matches) {
    // If media query matches
    mainLinks.classList.add('width-0');
    mainLinks.classList.add('opacity-0');
    pieceLinks.classList.add('width-100');
    aphorismClose.classList.remove('opacity-0');
  }
}
function displayPoetryList(mediaQuery850) {
  if (mediaQuery850.matches) {
    // If media query matches
    mainLinks.classList.add('width-0');
    mainLinks.classList.add('opacity-0');
    pieceLinks.classList.add('width-100');
    poemClose.classList.remove('opacity-0');
  }
}

tocChaptersLink.addEventListener('click', function () {
  displayChaptersList(mediaQuery850); // Call listener function at run time
});
tocFictionLink.addEventListener('click', function () {
  displayFictionList(mediaQuery850); // Call listener function at run time
});

tocLFLink.addEventListener('click', function () {
  displayNonfictionLFList(mediaQuery850); // Call listener function at run time
});
tocSFLink.addEventListener('click', function () {
  displayNonfictionSFList(mediaQuery850); // Call listener function at run time
});
tocAphorismsLink.addEventListener('click', function () {
  displayAphorismsList(mediaQuery850);
});
tocPoetryLink.addEventListener('click', function () {
  displayPoetryList(mediaQuery850);
});

aphorismClose.addEventListener('click', function () {
  mainLinks.classList.remove('width-0');
  mainLinks.classList.remove('opacity-0');
  pieceLinks.classList.remove('width-100');
  aphorismClose.classList.add('opacity-0');
});
poemClose.addEventListener('click', function () {
  mainLinks.classList.remove('width-0');
  mainLinks.classList.remove('opacity-0');
  pieceLinks.classList.remove('width-100');
  poemClose.classList.add('opacity-0');
});
