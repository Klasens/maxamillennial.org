'use strict';
//POEM CONTAINER
const poemTextAndTitle = document.querySelector('#poemTextAndTitle');

//POEM BUTTONS
const fiveTwoOneBtn = document.querySelector('#p1');
const aDrugForHumansBtn = document.querySelector('#p2');
const doctypeSoulscapeBtn = document.querySelector('#p3');
const howCanHeDenyMyPremisesBtn = document.querySelector('#p4');
const hungerPangsBtn = document.querySelector('#p5');
const mirrorWritingBtn = document.querySelector('#p6');
const oftenTimesBtn = document.querySelector('#p7');
const oneTrackLifeBtn = document.querySelector('#p8');
const somedayBtn = document.querySelector('#p9');
const soSoonIllRetireBtn = document.querySelector('#p10');
const standingAtTheCornerBtn = document.querySelector('#p11');
const theAlienatedVoiceFromWithinBtn = document.querySelector('#p12');
const theCageBtn = document.querySelector('#p13');
const theDayThatCameAndWentBtn = document.querySelector('#p14');
const theMelancholicManBtn = document.querySelector('#p15');
const theProblemBtn = document.querySelector('#p16');
const theSwellBtn = document.querySelector('#p17');
const toDedicateBtn = document.querySelector('#p18');
const trapsInMyMindBtn = document.querySelector('#p19');
const whatAboutMeBtn = document.querySelector('#p20');
const whiskingAwayBtn = document.querySelector('#p21');
const whoTurnedOutTheLightsBtn = document.querySelector('#p22');
const theWheelIsTurningBtn = document.querySelector('#p23');

//POEM TEXT FOR LOOP
const inputPoem = function (arr) {
  poemTextAndTitle.innerHTML = '';
  let title = document.createElement('h4');
  title.classList.add('pieceDisplay-header');
  title.innerText = `${arr[0]}`;
  document.getElementById('poemTextAndTitle').appendChild(title);
  for (let i = 1; i < arr.length; i++) {
    let para = document.createElement('p');
    para.innerText = `${arr[i]}`;
    para.classList.add('pieceDisplay-text');
    document.getElementById('poemTextAndTitle').appendChild(para);
  }
};

// POEM TEXT ARRAYS
const fiveTwoOne = [
  '5:21',
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
];
const aDrugForHumans = [
  'A Drug For Humans',
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
];
const doctypeSoulscape = [
  'DOCTYPE! Soulscape',
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
];
const howCanHeDenyMyPremises = [
  'How Can He Deny My Premises',
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
];
const hungerPangs = [
  'Hunger Pangs',
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
];
const mirrorWriting = [
  'Mirror Writing',
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
];
const oftenTimes = ['Often Times', "test'test", "test'test"];
const oneTrackLife = [
  'One Track Life',
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
];
const someday = [
  'Someday',
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
];
const soSoonIllRetire = [
  "So Soon I'll Retire",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
];
const standingAtTheCorner = [
  'Standing At the Corner',
  "test'test",
  "test'test",
  "test'test",
  "test'test",
];
const theAlienatedVoiceFromWithin = [
  'The Alienated Voice from Within',
  "test'test",
  "test'test",
  "test'test",
  "test'test",
];
const theCage = [
  'The Cage',
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
];
const theDayThatCameAndWent = [
  'The Day That Came and Went',
  "test'test",
  "test'test",
  "test'test",
  "test'test",
];
const theMelancholicMan = [
  'The Melancholic Man',
  "test'test",
  "test'test",
  "test'test",
  "test'test",
];
const theProblem = [
  'The Problem',
  "test'test",
  "test'test",
  "test'test",
  "test'test",
];
const theSwell = [
  'The Swell',
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
];
const toDedicate = [
  'To Dedicate',
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
];
const trapsInMyMind = [
  'Traps In My Mind',
  "test'test",
  "test'test",
  "test'test",
  "test'test",
];
const whatAboutMe = [
  'What About Me?',
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
];
const whiskingAway = [
  'Whisking Away',
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
];
const whoTurnedOutTheLights = [
  'Who Turned Out the Lights',
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
  "test'test",
];
const theWheelIsTurning = ['The Wheel Is Turning', "test'test", "test'test"];

// APHORISM EVENT LISTENERS
fiveTwoOneBtn.addEventListener('click', function () {
  inputPoem(fiveTwoOne);
});
aDrugForHumansBtn.addEventListener('click', function () {
  inputPoem(aDrugForHumans);
});
doctypeSoulscapeBtn.addEventListener('click', function () {
  inputPoem(doctypeSoulscape);
});
howCanHeDenyMyPremisesBtn.addEventListener('click', function () {
  inputPoem(howCanHeDenyMyPremises);
});
hungerPangsBtn.addEventListener('click', function () {
  inputPoem(hungerPangs);
});
mirrorWritingBtn.addEventListener('click', function () {
  inputPoem(mirrorWriting);
});

oftenTimesBtn.addEventListener('click', function () {
  inputPoem(oftenTimes);
});
oneTrackLifeBtn.addEventListener('click', function () {
  inputPoem(oneTrackLife);
});
somedayBtn.addEventListener('click', function () {
  inputPoem(someday);
});
soSoonIllRetireBtn.addEventListener('click', function () {
  inputPoem(soSoonIllRetire);
});
standingAtTheCornerBtn.addEventListener('click', function () {
  inputPoem(standingAtTheCorner);
});
theAlienatedVoiceFromWithinBtn.addEventListener('click', function () {
  inputPoem(theAlienatedVoiceFromWithin);
});
theCageBtn.addEventListener('click', function () {
  inputPoem(theCage);
});
theDayThatCameAndWentBtn.addEventListener('click', function () {
  inputPoem(theDayThatCameAndWent);
});
theMelancholicManBtn.addEventListener('click', function () {
  inputPoem(theMelancholicMan);
});
theProblemBtn.addEventListener('click', function () {
  inputPoem(theProblem);
});
theSwellBtn.addEventListener('click', function () {
  inputPoem(theSwell);
});
toDedicateBtn.addEventListener('click', function () {
  inputPoem(toDedicate);
});
trapsInMyMindBtn.addEventListener('click', function () {
  inputPoem(trapsInMyMind);
});
whatAboutMeBtn.addEventListener('click', function () {
  inputPoem(whatAboutMe);
});
whiskingAwayBtn.addEventListener('click', function () {
  inputPoem(whiskingAway);
});
whoTurnedOutTheLightsBtn.addEventListener('click', function () {
  inputPoem(whoTurnedOutTheLights);
});
theWheelIsTurningBtn.addEventListener('click', function () {
  inputPoem(theWheelIsTurning);
});
