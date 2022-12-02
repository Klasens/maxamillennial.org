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
    console.log('test');
    showSideMenu();
    showAphorismsList();
  }
}
function displayPoetryList(mediaQuery850) {
  if (mediaQuery850.matches) {
    // If media query matches
    console.log('test');
    showSideMenu();
    showPoetryList();
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
  displayAphorismsList(mediaQuery850); // Call listener function at run time
});
tocPoetryLink.addEventListener('click', function () {
  displayPoetryList(mediaQuery850); // Call listener function at run time
});
