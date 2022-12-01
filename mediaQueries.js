'use strict';

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
const showChaptersMobile = function () {
  chaptersList.classList.add('subNav-show');
};
const hideChaptersMobile = function () {
  chaptersList.classList.remove('subNav-show');
};

const showFictionMobile = function () {
  shortStoriesList.classList.add('subNav-show');
};
const hideFictionMobile = function () {
  shortStoriesList.classList.remove('subNav-show');
};

tocChaptersLink.addEventListener('click', function () {
  displayChaptersList(mediaQuery850); // Call listener function at run time
});
tocFictionLink.addEventListener('click', function () {
  displayFictionList(mediaQuery850); // Call listener function at run time
});
