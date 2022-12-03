'use strict';
//APHORISM CONTAINER
const aphorismTextAndTitle = document.querySelector('#aphorismTextAndTitle');
//APHORISM BUTTONS
const aDropInTheOceanBtn = document.querySelector('#a1');
const ageOldWisdomBtn = document.querySelector('#a2');
const charityWorkBtn = document.querySelector('#a3');
const createBtn = document.querySelector('#a4');
const cityPart1Btn = document.querySelector('#a5');
const cityPart2Btn = document.querySelector('#a6');
const epilogueBtn = document.querySelector('#a7');
const existentialDreadBtn = document.querySelector('#a8');
const heideggersDashesBtn = document.querySelector('#a9');
const iAmAFraudBtn = document.querySelector('#a10');
const impactBtn = document.querySelector('#a11');
const lostInMyHeadBtn = document.querySelector('#a12');
const maxaMillennialCreatingBtn = document.querySelector('#a13');
const maxaTheOvercreatorBtn = document.querySelector('#a14');
const maxaMillennialOrgBtn = document.querySelector('#a15');
const momentsOfValidityBtn = document.querySelector('#a16');
const myBeingMaskBtn = document.querySelector('#a17');
const pillarsOfConsciousnessBtn = document.querySelector('#a18');
const realWorldFriendsBtn = document.querySelector('#a19');
const surveyingMySoulscapeBtn = document.querySelector('#a20');
const theAbsurdBtn = document.querySelector('#a21');
const theAfterLifeBtn = document.querySelector('#a22');
const theBackhandedJaywalkBtn = document.querySelector('#a23');
const youLookSoDifferentBtn = document.querySelector('#a24');

//APHORISM TEXT FOR LOOP
const inputAphorism = function (arr) {
  aphorismTextAndTitle.innerHTML = '';
  let title = document.createElement('h4');
  title.classList.add('pieceDisplay-header');
  title.innerText = `${arr[0]}`;
  document.getElementById('aphorismTextAndTitle').appendChild(title);
  for (let i = 1; i < arr.length; i++) {
    let para = document.createElement('p');
    para.innerText = `${arr[i]}`;
    para.classList.add('pieceDisplay-text');
    document.getElementById('aphorismTextAndTitle').appendChild(para);
  }
};

// APHORISM TEXT ARRAYS
const aDropInTheOcean = [
  'A Drop In the Ocean',
  "There's a silence that must be broken -- not shattered but pierced.",
];
const ageOldWisdom = [
  'Age Old Wisdom',
  "Shortly after death, people always tell me to live every day like it's my last.",
  "But tomorrow I said I'd get lunch with Mom, so can it be the next one?",
];
const charityWork = [
  'Charity Work',
  'I will never donate anonymously. Never ever.',
  "I'll donate everything I own but never anonymously.",
];
const create = [
  'CREATE',
  "A Stranger told me to always CREATE. I told her, 'but I'm depressed.' She said, 'And?'",
];
const cityPart1 = [
  'City - Part 1',
  'Future',
  'Future-residential',
  'Future-residential-luxury',
  'Future-Successive-luxury',
];
const cityPart2 = [
  'City - Part 2',
  'Pit',
  'Pit-fallen',
  'Pit-fallen-evaded',
  'Pit-fallen-Creation',
];
const epilogue = ['Epilogue', 'You never win', 'Or lose for that matter'];
const existentialDread = [
  'Existential Dread',
  'Really feeling that existential dread.',
  "Sometimes wondering if I'm already dead.",
];
const heideggersDashes = [
  "Heidegger's Dashes",
  'Self',
  'My-self',
  'Being-my-self',
  'Authentically-being-my-self',
  'Authentically-being-my-thrown-self',
  'Authentically-being-my-resolved-thrown-self',
];
const iAmAFraud = [
  'I Am a Fraud',
  'Blessed with a face, it says you can trust me.',
  'Sharpened by a mind, it thinks of you.',
];
const impact = [
  'Impact',
  'The student yelled,',
  'Impact',
  'The professor flummoxed,',
  'Affected the asteroid until it was harmless',
];
const lostInMyHead = [
  'Lost In My Head',
  "I'm lost in my head, so deep that I can't feel the feelings of dread.",
  "I'm so deep that I can't witness my own disguise.",
  "I'm too deep to see the truth from my lying eyes.",
];
const maxaMillennialCreating = [
  'Maxa Millennial Creating',
  "'Ironically, I feel like I create ",
  "more on the days where I don't leave the apartment",
  " and just say one or two lines to you.'",
  'Cat:',
];
const maxaTheOvercreator = [
  'Maxa the Overcreator',
  'The natural problem when embracing the ideal of creation is the pause between those moments of creation. If every moment is a genuine expression of the self, what results is a life that only has genuine moments. With the obvious observation of a supremely arrogant individual, something else is lost too. The mundane trotting of the ordinary becomes a ceaseless defining of destiny.',
  "I ask, 'Want to write a song with me?'",
  "I respond, 'Yes, our voices will masquerade across the tides of life.'",
  "I ask, 'Would you run a 5k with me?'",
  "I respond, 'Yes, our feet will carry the day into unique permanence.'",
  "Finally, I ask, 'Grab a coffee in five?'",
  "I respond, 'Of course, it shall be our coffee, in our moment, in our eternity.'",
];
const maxaMillennialOrg = [
  'MaxaMilennial.org',
  'Mediocre Poet, Writer, Musician, Comedian, Grammarian, Brother, Friend, Teammate, Gamer, and Thinker',
];
const momentsOfValidity = [
  'Moments of Validity',
  'Of all things forgotten, intentionally or unintentionally, a crisp yet uninspired moment remains.',
  'A child, a simple mind, asking itself questions but knowing any answer it comes up with can easily be disregarded',
  'Until now.',
];
const mybeingMask = [
  'My Being Mask',
  'The Original Midwesterner is ',
  'hard to Notice',
  'easy to Read',
  'Fashionably uninspired',
  'Luckily cultured',
  'uncharacteristically Resolute',
];
const pillarsOfConsciousness = [
  'Pillars of Consciousness',
  "In the self, first, there's You.",
  'You, a meticulous construction of Your-self.',
  'You choose the Brown shoes or the Short skirt, their Leather laces or its Zippered back, the masquerade of Piercing eyes, the hidden glance to Windblown thighs.',
  'You, still further, choose the Planner, the Anxiety-Ridden, the Confident, or the Insecure self; The Overthinker. Yet, in every choice a self persists which You do not choose. Some self which cannot be seen but only lived.',
  'You, as you live, can feel this impenetrable sphere of consciousness. It feels empty, except its emptiness really is only a feeling. Inside is an entire world of meaning that You can touch but not see, a world You know but cannot be. When You choose the Confident i see the Unconfident. You choose the Piercing eyes and they’re seen; You think.',
  'Put differently, when I look at you, the other, I choose to see Me.',
  "For You, the platitude to live life as if no one is watching is impossible. Not because someone is always watching – usually no one is watching and no one cares. Rather, it's because You created a space for them to watch and never know if they are. The goal then is not to live life as if no one is watching, but instead to live life as if they see the self You choose.For You, the platitude to live life as if no one is watching is impossible. Not because someone is always watching – usually no one is watching and no one cares. Rather, it's because You created a space for them to watch and never know if they are. The goal then is not to live life as if no one is watching, but instead to live life as if they see the self You choose.",
];
const realWorldFriends = ['Real-world Friends'];
const surveyingMySoulscape = [
  'Surveying My Soulscape',
  'To confront fear, one must create fear.',
  'To die, one must live.',
  'In each moment I strive towards death, just as I strive towards life.',
  'What will amount is only an open question in the mind.',
  "Except for the blink of an eye, it's closed for all eternity, except for a moment of time.",
];
const theAbsurd = [
  'The Absurd',
  "This guy (an assumption I'm barely qualified to make) I know always makes a joke about my hyper-serious infatuation with our absurdity. I'll mention my lack of motivation, to live, because it feels pointless, and he'll point out some totally irrelevant fact about making progress in some little game we've created in the, our, world.",
];
const theAfterLife = [
  'The After-life',
  "Life doesn't have an after. It only is. And 'is's can't be oughts. ",
];
const theBackhandedJaywalk = [
  'The Backhanded Jaywalk',
  "I'm always looking for a way to innocuously interact with strangers. Of course, this is always under the ever existent emphasis of the appearance over the actuality. ",
];
const youLookSoDifferent = [
  'You Look So Different',
  'It turns out that gaming, my deepest passion, the expression of a purer self, my single understood measurement, was only discovered by contingency. It turns out that life, by equivocation, was also a simple contingency.',
];

// APHORISM EVENT LISTENERS
aDropInTheOceanBtn.addEventListener('click', function () {
  inputAphorism(aDropInTheOcean);
});
ageOldWisdomBtn.addEventListener('click', function () {
  inputAphorism(ageOldWisdom);
});
charityWorkBtn.addEventListener('click', function () {
  inputAphorism(charityWork);
});
createBtn.addEventListener('click', function () {
  inputAphorism(create);
});
cityPart1Btn.addEventListener('click', function () {
  inputAphorism(cityPart1);
});
cityPart2Btn.addEventListener('click', function () {
  inputAphorism(cityPart2);
});

epilogueBtn.addEventListener('click', function () {
  inputAphorism(epilogue);
});
existentialDreadBtn.addEventListener('click', function () {
  inputAphorism(existentialDread);
});
heideggersDashesBtn.addEventListener('click', function () {
  inputAphorism(heideggersDashes);
});
iAmAFraudBtn.addEventListener('click', function () {
  inputAphorism(iAmAFraud);
});
impactBtn.addEventListener('click', function () {
  inputAphorism(impact);
});
lostInMyHeadBtn.addEventListener('click', function () {
  inputAphorism(lostInMyHead);
});
maxaMillennialCreatingBtn.addEventListener('click', function () {
  inputAphorism(maxaMillennialCreating);
});
maxaTheOvercreatorBtn.addEventListener('click', function () {
  inputAphorism(maxaTheOvercreator);
});
maxaMillennialOrgBtn.addEventListener('click', function () {
  inputAphorism(maxaMillennialOrg);
});
momentsOfValidityBtn.addEventListener('click', function () {
  inputAphorism(momentsOfValidity);
});
myBeingMaskBtn.addEventListener('click', function () {
  inputAphorism(mybeingMask);
});
pillarsOfConsciousnessBtn.addEventListener('click', function () {
  inputAphorism(pillarsOfConsciousness);
});
realWorldFriendsBtn.addEventListener('click', function () {
  inputAphorism(realWorldFriends);
});
surveyingMySoulscapeBtn.addEventListener('click', function () {
  inputAphorism(surveyingMySoulscape);
});
theAbsurdBtn.addEventListener('click', function () {
  inputAphorism(theAbsurd);
});
theAfterLifeBtn.addEventListener('click', function () {
  inputAphorism(theAfterLife);
});
theBackhandedJaywalkBtn.addEventListener('click', function () {
  inputAphorism(theBackhandedJaywalk);
});
youLookSoDifferentBtn.addEventListener('click', function () {
  inputAphorism(youLookSoDifferent);
});
