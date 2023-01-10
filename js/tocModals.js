'use strict';

// SELECTORS
// ---- ALL SELECTORS
const modalClose = document.querySelectorAll('.modal-close');
const allModals = document.querySelectorAll('.modal');
const allModalBtns = document.querySelectorAll('.modalBtn');

// --- Outer Modal
const outerModal = document.querySelector('.pageContainer');

// ---- MODAL SELECTORS
const findingZen = document.querySelector('#findingZen');
const intoTheGray = document.querySelector('#intoTheGray');
const demolitionDerby = document.querySelector('#demolitionDerby');
const partOne = document.querySelector('#partOne');
const partTwo = document.querySelector('#partTwo');
const partThree = document.querySelector('#partThree');
const partFour = document.querySelector('#partFour');
const partFive = document.querySelector('#partFive');
const endDays = document.querySelector('#endDays');
const momentsInBetween = document.querySelector('#momentsInBetween');
const myExistentialRomance = document.querySelector('#myExistentialRomance');
const theOutsideWitness = document.querySelector('#theOutsideWitness');
const theReasonsICantFind = document.querySelector('#theReasonsICantFind');
const theFeelingOfASoftMind = document.querySelector('#theFeelingOfASoftMind');
const theDayIDiedAgain = document.querySelector('#theDayIDiedAgain');
const theWheelIsTurningModal = document.querySelector(
  '#theWheelIsTurningModal'
);
const theMidwesternRoot = document.querySelector('#theMidwesternRoot');

// ---- BTN SELECTORS
const findingZenBtn = document.querySelector('#sf4');
const intoTheGrayBtn = document.querySelector('#sf5');
const demolitionDerbyBtn = document.querySelector('#sf2');
const partOneBtn = document.querySelector('#sf15');
const partTwoBtn = document.querySelector('#sf16');
const partThreeBtn = document.querySelector('#sf17');
const partFourBtn = document.querySelector('#sf18');
const partFiveBtn = document.querySelector('#sf19');
const endDaysBtn = document.querySelector('#sf9');
const momentsInBetweenBtn = document.querySelector('#sf11');
const myExistentialRomanceBtn = document.querySelector('#sf6');
const theOutsideWitnessBtn = document.querySelector('#sf8');
const theReasonsICantFindBtn = document.querySelector('#sf1');
const theFeelingOfASoftMindBtn = document.querySelector('#sf7');
const theDayIDiedAgainBtn = document.querySelector('#sf3');
const theWheelIsTurningModalBtn = document.querySelector('#sf13');
const theMidwesternRootBtn = document.querySelector('#sf10');

// ---- BTN SELECTORS MOBILE
const findingZenBtnMobile = document.querySelector('#sfM1');
const intoTheGrayBtnMobile = document.querySelector('#sfM2');
const demolitionDerbyBtnMobile = document.querySelector('#sfM3');
const partOneBtnMobile = document.querySelector('#sfM4');
const partTwoBtnMobile = document.querySelector('#sfM5');
const partThreeBtnMobile = document.querySelector('#sfM6');
const partFourBtnMobile = document.querySelector('#sfM7');
const partFiveBtnMobile = document.querySelector('#sfM8');
const endDaysBtnMobile = document.querySelector('#sfM9');
const momentsInBetweenBtnMobile = document.querySelector('#sfM10');
const myExistentialRomanceBtnMobile = document.querySelector('#sfM11');
const theOutsideWitnessBtnMobile = document.querySelector('#sfM12');
const theReasonsICantFindBtnMobile = document.querySelector('#sfM13');
const theFeelingOfASoftMindBtnMobile = document.querySelector('#sfM14');
const theDayIDiedAgainBtnMobile = document.querySelector('#sfM15');
const theWheelIsTurningModalBtnMobile = document.querySelector('#sfM16');
const theMidwesternRootBtnMobile = document.querySelector('#sfM17');
// MODAL CLOSE LOOP
for (let i = 0; i < modalClose.length; i++) {
  modalClose[i].addEventListener('click', function () {
    allModals[i].classList.remove('showModal');
  });
}
for (let i = 0; i < allModalBtns.length; i++) {
  allModalBtns[i].addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    // e.stopImmediatePropagation();
  });
}
for (let i = 0; i < allModals.length; i++) {
  allModals[i].addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    for (let i = 0; i < allModals.length; i++) {
      allModals[i].classList.remove('showModal');
    }
  }
});

// EVENT LISTENERS
findingZenBtn.addEventListener('click', function () {
  findingZen.classList.add('showModal');
});
intoTheGrayBtn.addEventListener('click', function () {
  intoTheGray.classList.add('showModal');
});
demolitionDerbyBtn.addEventListener('click', function () {
  demolitionDerby.classList.add('showModal');
});
partOneBtn.addEventListener('click', function () {
  partOne.classList.add('showModal');
});
partTwoBtn.addEventListener('click', function () {
  partTwo.classList.add('showModal');
});
partThreeBtn.addEventListener('click', function () {
  partThree.classList.add('showModal');
});
partFourBtn.addEventListener('click', function () {
  partFour.classList.add('showModal');
});
partFiveBtn.addEventListener('click', function () {
  partFive.classList.add('showModal');
});

endDaysBtn.addEventListener('click', function () {
  endDays.classList.add('showModal');
});
momentsInBetweenBtn.addEventListener('click', function () {
  momentsInBetween.classList.add('showModal');
});
myExistentialRomanceBtn.addEventListener('click', function () {
  myExistentialRomance.classList.add('showModal');
});
theOutsideWitnessBtn.addEventListener('click', function () {
  theOutsideWitness.classList.add('showModal');
});
theReasonsICantFindBtn.addEventListener('click', function () {
  theReasonsICantFind.classList.add('showModal');
});
theFeelingOfASoftMindBtn.addEventListener('click', function () {
  theFeelingOfASoftMind.classList.add('showModal');
});
theDayIDiedAgainBtn.addEventListener('click', function () {
  theDayIDiedAgain.classList.add('showModal');
});
theWheelIsTurningModalBtn.addEventListener('click', function () {
  theWheelIsTurningModal.classList.add('showModal');
});
theMidwesternRootBtn.addEventListener('click', function () {
  theMidwesternRoot.classList.add('showModal');
});

// EVENT LISTENERS MOBILE
findingZenBtnMobile.addEventListener('click', function () {
  console.log('test');
  findingZen.classList.add('showModal');
});
intoTheGrayBtnMobile.addEventListener('click', function () {
  intoTheGray.classList.add('showModal');
});
demolitionDerbyBtnMobile.addEventListener('click', function () {
  demolitionDerby.classList.add('showModal');
});
partOneBtnMobile.addEventListener('click', function () {
  partOne.classList.add('showModal');
});
partTwoBtnMobile.addEventListener('click', function () {
  partTwo.classList.add('showModal');
});
partThreeBtnMobile.addEventListener('click', function () {
  partThree.classList.add('showModal');
});
partFourBtnMobile.addEventListener('click', function () {
  partFour.classList.add('showModal');
});
partFiveBtnMobile.addEventListener('click', function () {
  partFive.classList.add('showModal');
});

endDaysBtnMobile.addEventListener('click', function () {
  endDays.classList.add('showModal');
});
momentsInBetweenBtnMobile.addEventListener('click', function () {
  momentsInBetween.classList.add('showModal');
});
myExistentialRomanceBtnMobile.addEventListener('click', function () {
  myExistentialRomance.classList.add('showModal');
});
theOutsideWitnessBtnMobile.addEventListener('click', function () {
  theOutsideWitness.classList.add('showModal');
});
theReasonsICantFindBtnMobile.addEventListener('click', function () {
  theReasonsICantFind.classList.add('showModal');
});
theFeelingOfASoftMindBtnMobile.addEventListener('click', function () {
  theFeelingOfASoftMind.classList.add('showModal');
});
theDayIDiedAgainBtnMobile.addEventListener('click', function () {
  theDayIDiedAgain.classList.add('showModal');
});
theWheelIsTurningModalBtnMobile.addEventListener('click', function () {
  theWheelIsTurningModal.classList.add('showModal');
});
theMidwesternRootBtnMobile.addEventListener('click', function () {
  theMidwesternRoot.classList.add('showModal');
});

outerModal.addEventListener('click', function () {
  findingZen.classList.remove('showModal');
  intoTheGray.classList.remove('showModal');
  demolitionDerby.classList.remove('showModal');
  partOne.classList.remove('showModal');
  partTwo.classList.remove('showModal');
  partThree.classList.remove('showModal');
  partFour.classList.remove('showModal');
  partFive.classList.remove('showModal');
  endDays.classList.remove('showModal');
  momentsInBetween.classList.remove('showModal');
  myExistentialRomance.classList.remove('showModal');
  theOutsideWitness.classList.remove('showModal');
  theReasonsICantFind.classList.remove('showModal');
  theFeelingOfASoftMind.classList.remove('showModal');
  theDayIDiedAgain.classList.remove('showModal');
  theWheelIsTurningModal.classList.remove('showModal');
  theMidwesternRoot.classList.remove('showModal');
});
