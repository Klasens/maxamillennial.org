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
  "I don't wanna go",
  'I just wanna sleep',
  'But we both know',
  "This life isn't complete",
  "It's early, I'm tired",
  "My will, it's waning",
];
const aDrugForHumans = [
  'A Drug For Humans',
  'I wake up with a weight in my chest.',
  'With every Trace removed it feels heavier.',
  "This new path I'm on kills me slowly",
  "This new drug is one we can't quit",
  "Around here, it's cheap, easy to spot, and fleeting forever.",
  "The supply is so short, and I want it all to myself, otherwise I'll never ",
];
const doctypeSoulscape = ['DOCTYPE! Soulscape', '', '', '', '', '', '', '', ''];
const howCanHeDenyMyPremises = [
  'How Can He Deny My Premises',
  'How Can He Deny My Premises?',
  'With rules, with facts, with stats, all of these.',
  'How can he deny my premises?',
  'My thoughts, my news, my instincts, all of those.',
  'How can he deny my articles?',
  'I watch, their lives, they burn, can’t you see?',
  'The pain, the hurt, the blood.',
];
const hungerPangs = [
  'Hunger Pangs',
  'Sometimes it just happens like that',
  'I look and can see the time pass',
  'A fortelling of my own doom',
  'The weight',
  "I can't wait",
  'But sometimes it just happens like that',
  'A character in the sky',
  'Flashes before my mind',
  'Their spirit soon to die',
  'A vision of my own time lined',
  "But one day, it'll happen just like that",
];
const mirrorWriting = [
  'Mirror Writing',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
];
const oftenTimes = [
  'Often Times',
  "Often times I sit and wonder, and think about the parts of my life. It's like a universe springs from my mind. A universe separates me from the person next to them, next to them. Can we escape the universe? The death of me. The birth, of us.",
  "Often times I sit and wonder, and think about the parts of my life. And when I do I realize it's filled with strife, but not from my life. It's from those that I see, the men, women, children, blissful as can be. And still I always seem to sit and wonder, and I think about the parts of my life.",
];
const oneTrackLife = [
  'One Track Life',
  'I designed a one track life',
  "I've got a one track mind",
  'Every day I spend all my time ',
  "Only thinking about what's next in that one line",
  'The only fear is if I die',
  "Then I'll have nothing to show but my one track",
  "Except I don't think it matters what that is",
  'For my one track will never bring me back',
];
const someday = [
  'Someday',
  "Someday you're going to die",
  "Someday it'll all be alright",
  'Someday this life will cease',
  "Someday we'll all believe",
  'But not tonight I reckon',
  'Because ',
];
const soSoonIllRetire = [
  "So Soon I'll Retire",
  "I'm nearly there, so soon I'll be hired. ",
  "And then onto what's next, just waiting to retire. ",
  'My network is full, my prospects so bright ',
  'And yet I still sit here just longing to write. ',
  "Or maybe it's to soar, to play, to live, then die.",
  "What if I'm being told, or sold, one simple lie? ",
  'So melodramatic, yes, I certainly need to stop. Plus I have work in the morning, ',
  'shift one till shift drop. ',
  "It's been nearly ten, twenty, thirty years now ",
  "And I feel I've lost all I'd hoped I'd found. ",
  'But still something waits there, so deep, this fire. ',
  "I simply can't wait, for so soon I'll retire. ",
];
const standingAtTheCorner = [
  'Standing At the Corner',
  'Standing at the corner ',
  'Handing my phone',
  "Just so I don't bump into people",
  'On my brief walk home',
];
const theAlienatedVoiceFromWithin = [
  'The Alienated Voice from Within',
  'So often I sit and watch, listening to the tamed voices of the dimmed-down worriers',
  'The new warriors anticipating their next battle',
  '9-5 hundred thousand losses. 5 days their utensil inspired skirmish',
  "It's not that I can't bare it, I just don't think I want too",
];
const theCage = [
  'The Cage',
  'Our mind is trapped in a cage',
  'A cage of emotion, a cage of ambition, a cage of love and strife',
  'Our lives are spent trying to navigate, to slip through the once rigid bars of the psyche to achieve that desire',
  'Our thoughts become so electrified that one neglects to bend the bars of their body',
  'They focus intently on what inside never pushing , grinding , or working their challenges into submission',
];
const theDayThatCameAndWent = [
  'The Day That Came and Went',
  'With a smile on my face',
  'And a mark against my heart',
  'I watched, from the shadows of a screen,',
  'My never-lost love depart',
];
const theMelancholicMan = [
  'The Melancholic Man',
  'He knows I see the Melancholic Man',
  "He leans over the rails, as if I'll be able to reach out and grab his tale ",
  "I see it, but don't believe the stranger on the street",
  'Such a face suffers from such defeat?',
];
const theProblem = [
  'The Problem',
  'For most of eternity, up until modernity, the problem of time lay with the divine.',
  "Enter the west, claiming they're best, and finally time was stripped from the divine.",
  'So the scientist talked, quibbled, and progressed, hoping their answer would someday impress.',
  "But it didn't, and now, only being given scraps, we face a long long life of explanatory gaps.",
];
const theSwell = [
  'The Swell',
  'Human-Beings thrive on routines.',
  'From the moment they wake, bake, and are sealed to their fate',
  'They choose the same choices',
  'They make the same marks',
  'They lead the same lives',
  'This is true until the moment they die.',
  'The moment devoid of routine; the moment that frees us from our Human-Life-Being.',
];
const toDedicate = [
  'To Dedicate',
  'What does it mean to dedicate?',
  'Does it mean to work from 5-8?',
  'From start till late?',
  'From birth till fate?',
  "But I can't dedicate myself to you, myself to two, myself can pull through.",
  'How long can it last? A week? A Year?',
  'My whole life I fear',
];
const trapsInMyMind = [
  'Traps In My Mind',
  'Most days I lay a trap in my mind',
  'That grips my psyche and leaves me to die. And if this trap is physical yet',
  "Then I'll only have moments to regret.",
  "But if it's still true then I still have much to do",
];
const whatAboutMe = [
  'What About Me?',
  'What about me could have changed?',
  'In the span of a minute, a moment',
  "I won't, I did",
  'And now my mind begins to skid',
  'My stomach begins to turn',
  "Where is my self that's still left to earn?",
];
const whiskingAway = [
  'Whisking Away',
  'So hard to do the dishes it is',
  "So soft to lay my bed I'll stay",
  'So mellow this fellow get up off the floor',
  'Your wish is my dishes so sleep me no more.',
  "To sit I can't move I wish I was there",
  'The fall of the rain to stop to stare',
  'And still I look the dishes they wait',
  "Well back to bed it's getting too late.",
  'And now I dream the pile so high',
  "That dread you said I'll never get right",
  "Of course I start on the dread  it's no use",
  "Oh please just leave I'm being obtuse.",
];
const whoTurnedOutTheLights = [
  'Who Turned Out the Lights',
  "I've started having this uncanny experience. As I walk past or look at the lights, they dim, they flicker, the bite. The bulb breaks, the energy depletes, and I'm left wondering if I've caused this defeat. If I've caused this again, then when will my will upend. I can't escape. Is this a sign of my own demise?",
];
const theWheelIsTurning = [
  'The Wheel Is Turning',
  'Human-Beings thrive on routines.',
  'From the moment they wake, bake, and are sealed to their fate',
  'They choose the same choices',
  'They make the same marks',
  'They lead the same lives',
  'This is true until the moment they die.',
  'The moment devoid of routine; the moment that frees us from our Human-Life-Being.',
];

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
