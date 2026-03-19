/*
================================================================================
This Area Of Code Is: Default Jokes Dataset (Server-Side)
Explanation: Server-side backup of 100 corny jokes with consistent structure
In Other Words: Backup joke collection for the server
================================================================================
*/

const DEFAULT_JOKES = [
  // Q&A Format (60 jokes)
  {
    id: 1,
    type: 'joke',
    icon: '🧪',
    tag: 'Joke',
    setup: "What do you call a fake noodle?",
    punchline: "An impasta!",
    preview: "What do you call a fake noodle?",
    source: 'system'
  },
  {
    id: 2,
    type: 'joke',
    icon: '🐄',
    tag: 'Joke',
    setup: "What do you call a sleeping bull?",
    punchline: "A bulldozer!",
    preview: "What do you call a sleeping bull?",
    source: 'system'
  },
  {
    id: 3,
    type: 'joke',
    icon: '🍊',
    tag: 'Joke',
    setup: "Why did the orange stop?",
    punchline: "It ran out of juice!",
    preview: "Why did the orange stop?",
    source: 'system'
  },
  {
    id: 4,
    type: 'joke',
    icon: '🐝',
    tag: 'Joke',
    setup: "What do you call a bee that can't make up its mind?",
    punchline: "A maybe!",
    preview: "What do you call a bee that can't make up its mind?",
    source: 'system'
  },
  {
    id: 5,
    type: 'joke',
    icon: '🐟',
    tag: 'Joke',
    setup: "What do you call a fish with no eyes?",
    punchline: "Fsh!",
    preview: "What do you call a fish with no eyes?",
    source: 'system'
  },
  {
    id: 6,
    type: 'joke',
    icon: '🍕',
    tag: 'Joke',
    setup: "Why did the pizza maker go to church?",
    punchline: "He needed help with his daily bread!",
    preview: "Why did the pizza maker go to church?",
    source: 'system'
  },
  {
    id: 7,
    type: 'joke',
    icon: '⛪',
    tag: 'Joke',
    setup: "Why do church musicians have to be so careful?",
    punchline: "Because one wrong note and it's an organ-ized crime!",
    preview: "Why do church musicians have to be so careful?",
    source: 'system'
  },
  {
    id: 8,
    type: 'joke',
    icon: '🍌',
    tag: 'Joke',
    setup: "Why did the banana go to the doctor?",
    punchline: "It wasn't peeling well!",
    preview: "Why did the banana go to the doctor?",
    source: 'system'
  },
  {
    id: 9,
    type: 'joke',
    icon: '🍪',
    tag: 'Joke',
    setup: "Why did the cookie go to the hospital?",
    punchline: "It felt crumby!",
    preview: "Why did the cookie go to the hospital?",
    source: 'system'
  },
  {
    id: 10,
    type: 'joke',
    icon: '🌾',
    tag: 'Joke',
    setup: "Why did the scarecrow win an award?",
    punchline: "He was outstanding in his field!",
    preview: "Why did the scarecrow win an award?",
    source: 'system'
  },
  {
    id: 11,
    type: 'joke',
    icon: '⛄',
    tag: 'Joke',
    setup: "What do you call a snowman with a six pack?",
    punchline: "An abdominal snowman!",
    preview: "What do you call a snowman with a six pack?",
    source: 'system'
  },
  {
    id: 12,
    type: 'joke',
    icon: '🥚',
    tag: 'Joke',
    setup: "Why don't eggs tell jokes?",
    punchline: "They'd crack each other up!",
    preview: "Why don't eggs tell jokes?",
    source: 'system'
  },
  {
    id: 13,
    type: 'joke',
    icon: '🚲',
    tag: 'Joke',
    setup: "Why did the bicycle fall over?",
    punchline: "It was two-tired!",
    preview: "Why did the bicycle fall over?",
    source: 'system'
  },
  {
    id: 14,
    type: 'joke',
    icon: '🧀',
    tag: 'Joke',
    setup: "What do you call cheese that isn't yours?",
    punchline: "Nacho cheese!",
    preview: "What do you call cheese that isn't yours?",
    source: 'system'
  },
  {
    id: 15,
    type: 'joke',
    icon: '🏌️',
    tag: 'Joke',
    setup: "Why did the golfer wear two pairs of pants?",
    punchline: "In case he got a hole in one!",
    preview: "Why did the golfer wear two pairs of pants?",
    source: 'system'
  },
  {
    id: 16,
    type: 'joke',
    icon: '🐻',
    tag: 'Joke',
    setup: "What do you call a bear with no teeth?",
    punchline: "A gummy bear!",
    preview: "What do you call a bear with no teeth?",
    source: 'system'
  },
  {
    id: 17,
    type: 'joke',
    icon: '🐶',
    tag: 'Joke',
    setup: "What do you call a dog that can do magic?",
    punchline: "A Labracadabrador!",
    preview: "What do you call a dog that can do magic?",
    source: 'system'
  },
  {
    id: 18,
    type: 'joke',
    icon: '🐱',
    tag: 'Joke',
    setup: "Why did the cat sit on the computer?",
    punchline: "To keep an eye on the mouse!",
    preview: "Why did the cat sit on the computer?",
    source: 'system'
  },
  {
    id: 19,
    type: 'joke',
    icon: '🐭',
    tag: 'Joke',
    setup: "What do you call a mouse that can sing?",
    punchline: "A mouse-ician!",
    preview: "What do you call a mouse that can sing?",
    source: 'system'
  },
  {
    id: 20,
    type: 'joke',
    icon: '🦁',
    tag: 'Joke',
    setup: "Why did the lion eat the tightrope walker?",
    punchline: "He wanted a well-balanced meal!",
    preview: "Why did the lion eat the tightrope walker?",
    source: 'system'
  },
  {
    id: 21,
    type: 'joke',
    icon: '🐸',
    tag: 'Joke',
    setup: "What do you call a frog that's illegally parked?",
    punchline: "Toad!",
    preview: "What do you call a frog that's illegally parked?",
    source: 'system'
  },
  {
    id: 22,
    type: 'joke',
    icon: '🐔',
    tag: 'Joke',
    setup: "Why did the chicken join a band?",
    punchline: "Because it had the drumsticks!",
    preview: "Why did the chicken join a band?",
    source: 'system'
  },
  {
    id: 23,
    type: 'joke',
    icon: '🐴',
    tag: 'Joke',
    setup: "What do you call a horse that lives next door?",
    punchline: "A neighbor!",
    preview: "What do you call a horse that lives next door?",
    source: 'system'
  },
  {
    id: 24,
    type: 'joke',
    icon: '🐘',
    tag: 'Joke',
    setup: "Why did the elephant bring a suitcase to the party?",
    punchline: "He wanted to pack his trunk!",
    preview: "Why did the elephant bring a suitcase to the party?",
    source: 'system'
  },
  {
    id: 25,
    type: 'joke',
    icon: '🦒',
    tag: 'Joke',
    setup: "What do you call a giraffe's notebook?",
    punchline: "A long story!",
    preview: "What do you call a giraffe's notebook?",
    source: 'system'
  },
  {
    id: 26,
    type: 'joke',
    icon: '🦓',
    tag: 'Joke',
    setup: "Why did the zebra get a ticket?",
    punchline: "For illegal parking!",
    preview: "Why did the zebra get a ticket?",
    source: 'system'
  },
  {
    id: 27,
    type: 'joke',
    icon: '🦘',
    tag: 'Joke',
    setup: "What do you call a lazy kangaroo?",
    punchline: "A pouch potato!",
    preview: "What do you call a lazy kangaroo?",
    source: 'system'
  },
  {
    id: 28,
    type: 'joke',
    icon: '🐨',
    tag: 'Joke',
    setup: "Why did the koala get hired?",
    punchline: "He had all the right koalafications!",
    preview: "Why did the koala get hired?",
    source: 'system'
  },
  {
    id: 29,
    type: 'joke',
    icon: '🐼',
    tag: 'Joke',
    setup: "What do you call a bear with no socks?",
    punchline: "Bare-foot!",
    preview: "What do you call a bear with no socks?",
    source: 'system'
  },
  {
    id: 30,
    type: 'joke',
    icon: '🦉',
    tag: 'Joke',
    setup: "Why did the owl invite his friends over?",
    punchline: "He didn't want to be owl by himself!",
    preview: "Why did the owl invite his friends over?",
    source: 'system'
  },
  {
    id: 31,
    type: 'joke',
    icon: '🦜',
    tag: 'Joke',
    setup: "What do you call a parrot that flew away?",
    punchline: "A polygon!",
    preview: "What do you call a parrot that flew away?",
    source: 'system'
  },
  {
    id: 32,
    type: 'joke',
    icon: '🦚',
    tag: 'Joke',
    setup: "Why did the peacock get a job?",
    punchline: "He wanted to make some plume!",
    preview: "Why did the peacock get a job?",
    source: 'system'
  },
  {
    id: 33,
    type: 'joke',
    icon: '🦩',
    tag: 'Joke',
    setup: "What do you call a flamingo at a dance?",
    punchline: "The pink of the party!",
    preview: "What do you call a flamingo at a dance?",
    source: 'system'
  },
  {
    id: 34,
    type: 'joke',
    icon: '🦢',
    tag: 'Joke',
    setup: "Why did the swan refuse to fight?",
    punchline: "He didn't want to ruffle feathers!",
    preview: "Why did the swan refuse to fight?",
    source: 'system'
  },
  {
    id: 35,
    type: 'joke',
    icon: '🦆',
    tag: 'Joke',
    setup: "What do you call a duck that gets all A's?",
    punchline: "A wise quacker!",
    preview: "What do you call a duck that gets all A's?",
    source: 'system'
  },
  {
    id: 36,
    type: 'joke',
    icon: '🦅',
    tag: 'Joke',
    setup: "Why did the eagle bring a ruler?",
    punchline: "To measure his talon-ts!",
    preview: "Why did the eagle bring a ruler?",
    source: 'system'
  },
  {
    id: 37,
    type: 'joke',
    icon: '🦜',
    tag: 'Joke',
    setup: "What do you call a parrot wearing a raincoat?",
    punchline: "Polly-unsaturated!",
    preview: "What do you call a parrot wearing a raincoat?",
    source: 'system'
  },
  {
    id: 38,
    type: 'joke',
    icon: '🍎',
    tag: 'Joke',
    setup: "Why did the apple go to school?",
    punchline: "To become a smart cookie!",
    preview: "Why did the apple go to school?",
    source: 'system'
  },
  {
    id: 39,
    type: 'joke',
    icon: '🍇',
    tag: 'Joke',
    setup: "What do you call a grape that gets stepped on?",
    punchline: "Wine!",
    preview: "What do you call a grape that gets stepped on?",
    source: 'system'
  },
  {
    id: 40,
    type: 'joke',
    icon: '🍉',
    tag: 'Joke',
    setup: "Why did the watermelon have fancy seeds?",
    punchline: "It was a little seedy!",
    preview: "Why did the watermelon have fancy seeds?",
    source: 'system'
  },
  {
    id: 41,
    type: 'joke',
    icon: '🍋',
    tag: 'Joke',
    setup: "What do you call a lemon that works out?",
    punchline: "Swole-mon!",
    preview: "What do you call a lemon that works out?",
    source: 'system'
  },
  {
    id: 42,
    type: 'joke',
    icon: '🍑',
    tag: 'Joke',
    setup: "Why did the peach go to the doctor?",
    punchline: "It wasn't feeling peachy!",
    preview: "Why did the peach go to the doctor?",
    source: 'system'
  },
  {
    id: 43,
    type: 'joke',
    icon: '🍍',
    tag: 'Joke',
    setup: "What do you call a pineapple who loves physics?",
    punchline: "Newton!",
    preview: "What do you call a pineapple who loves physics?",
    source: 'system'
  },
  {
    id: 44,
    type: 'joke',
    icon: '🥝',
    tag: 'Joke',
    setup: "Why did the kiwi cross the road?",
    punchline: "To prove he wasn't a chicken!",
    preview: "Why did the kiwi cross the road?",
    source: 'system'
  },
  {
    id: 45,
    type: 'joke',
    icon: '🥥',
    tag: 'Joke',
    setup: "What do you call a coconut that's a detective?",
    punchline: "Sherlock Holmes!",
    preview: "What do you call a coconut that's a detective?",
    source: 'system'
  },
  {
    id: 46,
    type: 'joke',
    icon: '🥑',
    tag: 'Joke',
    setup: "Why did the avocado go to the gym?",
    punchline: "To get better pits!",
    preview: "Why did the avocado go to the gym?",
    source: 'system'
  },
  {
    id: 47,
    type: 'joke',
    icon: '🥕',
    tag: 'Joke',
    setup: "Why did the carrot get an award?",
    punchline: "For being outstanding in his field!",
    preview: "Why did the carrot get an award?",
    source: 'system'
  },
  {
    id: 48,
    type: 'joke',
    icon: '🌽',
    tag: 'Joke',
    setup: "What do you call corn that joins the army?",
    punchline: "Kernel!",
    preview: "What do you call corn that joins the army?",
    source: 'system'
  },
  {
    id: 49,
    type: 'joke',
    icon: '🥦',
    tag: 'Joke',
    setup: "Why did the broccoli go to the party?",
    punchline: "He was a fungi!",
    preview: "Why did the broccoli go to the party?",
    source: 'system'
  },
  {
    id: 50,
    type: 'joke',
    icon: '🍄',
    tag: 'Joke',
    setup: "What do you call a mushroom at a party?",
    punchline: "A fungi!",
    preview: "What do you call a mushroom at a party?",
    source: 'system'
  },
  {
    id: 51,
    type: 'joke',
    icon: '🥜',
    tag: 'Joke',
    setup: "What do you call a peanut in a spacesuit?",
    punchline: "An astro-nut!",
    preview: "What do you call a peanut in a spacesuit?",
    source: 'system'
  },
  {
    id: 52,
    type: 'joke',
    icon: '🌰',
    tag: 'Joke',
    setup: "Why did the chestnut go to the doctor?",
    punchline: "He was feeling nutty!",
    preview: "Why did the chestnut go to the doctor?",
    source: 'system'
  },
  {
    id: 53,
    type: 'joke',
    icon: '🍞',
    tag: 'Joke',
    setup: "Why did the loaf of bread break up?",
    punchline: "She was too kneady!",
    preview: "Why did the loaf of bread break up?",
    source: 'system'
  },
  {
    id: 54,
    type: 'joke',
    icon: '🥯',
    tag: 'Joke',
    setup: "What do you call a bagel that can fly?",
    punchline: "A plain bagel!",
    preview: "What do you call a bagel that can fly?",
    source: 'system'
  },
  {
    id: 55,
    type: 'joke',
    icon: '🥞',
    tag: 'Joke',
    setup: "Why did the pancake go to the doctor?",
    punchline: "It was feeling flat!",
    preview: "Why did the pancake go to the doctor?",
    source: 'system'
  },
  {
    id: 56,
    type: 'joke',
    icon: '🧇',
    tag: 'Joke',
    setup: "What do you call a waffle that's been arrested?",
    punchline: "A waffled criminal!",
    preview: "What do you call a waffle that's been arrested?",
    source: 'system'
  },
  {
    id: 57,
    type: 'joke',
    icon: '🍔',
    tag: 'Joke',
    setup: "Why did the hamburger go to the gym?",
    punchline: "To get better buns!",
    preview: "Why did the hamburger go to the gym?",
    source: 'system'
  },
  {
    id: 58,
    type: 'joke',
    icon: '🍟',
    tag: 'Joke',
    setup: "What do you call a french fry that tells jokes?",
    punchline: "A pun-tato!",
    preview: "What do you call a french fry that tells jokes?",
    source: 'system'
  },
  {
    id: 59,
    type: 'joke',
    icon: '🌭',
    tag: 'Joke',
    setup: "Why did the hot dog turn down the race?",
    punchline: "He was already a wiener!",
    preview: "Why did the hot dog turn down the race?",
    source: 'system'
  },
  {
    id: 60,
    type: 'joke',
    icon: '🍿',
    tag: 'Joke',
    setup: "What do you call popcorn that's angry?",
    punchline: "Popped off!",
    preview: "What do you call popcorn that's angry?",
    source: 'system'
  },
  
  // One-Liner Format (40 jokes)
  {
    id: 61,
    type: 'joke',
    icon: '👔',
    tag: 'Joke',
    setup: "I told my wife she was drawing her eyebrows too high.",
    punchline: "She looked surprised.",
    preview: "I told my wife she was drawing her eyebrows too high...",
    source: 'system'
  },
  {
    id: 62,
    type: 'joke',
    icon: '🧊',
    tag: 'Joke',
    setup: "I used to be a banker,",
    punchline: "but I lost interest.",
    preview: "I used to be a banker...",
    source: 'system'
  },
  {
    id: 63,
    type: 'joke',
    icon: '🚗',
    tag: 'Joke',
    setup: "I'm reading a book on anti-gravity.",
    punchline: "It's impossible to put down!",
    preview: "I'm reading a book on anti-gravity...",
    source: 'system'
  },
  {
    id: 64,
    type: 'joke',
    icon: '⏰',
    tag: 'Joke',
    setup: "I used to run a bakery,",
    punchline: "but I couldn't make enough dough.",
    preview: "I used to run a bakery...",
    source: 'system'
  },
  {
    id: 65,
    type: 'joke',
    icon: '🎨',
    tag: 'Joke',
    setup: "I was wondering why the frisbee was getting bigger,",
    punchline: "and then it hit me.",
    preview: "I was wondering why the frisbee was getting bigger...",
    source: 'system'
  },
  {
    id: 66,
    type: 'joke',
    icon: '🎭',
    tag: 'Joke',
    setup: "The rotation of Earth",
    punchline: "really makes my day.",
    preview: "The rotation of Earth...",
    source: 'system'
  },
  {
    id: 67,
    type: 'joke',
    icon: '🎪',
    tag: 'Joke',
    setup: "I was going to tell a time-traveling joke,",
    punchline: "but you didn't like it yet.",
    preview: "I was going to tell a time-traveling joke...",
    source: 'system'
  },
  {
    id: 68,
    type: 'joke',
    icon: '🎯',
    tag: 'Joke',
    setup: "Did you hear about the kidnapping at the playground?",
    punchline: "They woke up!",
    preview: "Did you hear about the kidnapping at the playground?",
    source: 'system'
  },
  {
    id: 69,
    type: 'joke',
    icon: '🎲',
    tag: 'Joke',
    setup: "I used to hate facial hair,",
    punchline: "but then it grew on me.",
    preview: "I used to hate facial hair...",
    source: 'system'
  },
  {
    id: 70,
    type: 'joke',
    icon: '🎸',
    tag: 'Joke',
    setup: "I'm friends with all electricians",
    punchline: "because we have good current connections.",
    preview: "I'm friends with all electricians...",
    source: 'system'
  },
  {
    id: 71,
    type: 'joke',
    icon: '🎺',
    tag: 'Joke',
    setup: "I would avoid the sushi if I was you.",
    punchline: "It's a little fishy.",
    preview: "I would avoid the sushi if I was you...",
    source: 'system'
  },
  {
    id: 72,
    type: 'joke',
    icon: '🎻',
    tag: 'Joke',
    setup: "The shovel",
    punchline: "was a ground-breaking invention.",
    preview: "The shovel...",
    source: 'system'
  },
  {
    id: 73,
    type: 'joke',
    icon: '🎬',
    tag: 'Joke',
    setup: "I used to be addicted to soap,",
    punchline: "but I'm clean now.",
    preview: "I used to be addicted to soap...",
    source: 'system'
  },
  {
    id: 74,
    type: 'joke',
    icon: '🎤',
    tag: 'Joke',
    setup: "Velcro",
    punchline: "- what a rip-off!",
    preview: "Velcro...",
    source: 'system'
  },
  {
    id: 75,
    type: 'joke',
    icon: '🎧',
    tag: 'Joke',
    setup: "I couldn't figure out how to put my seatbelt on.",
    punchline: "Then it clicked.",
    preview: "I couldn't figure out how to put my seatbelt on...",
    source: 'system'
  },
  {
    id: 76,
    type: 'joke',
    icon: '🎹',
    tag: 'Joke',
    setup: "I'm on a seafood diet.",
    punchline: "I see food and I eat it.",
    preview: "I'm on a seafood diet...",
    source: 'system'
  },
  {
    id: 77,
    type: 'joke',
    icon: '🎳',
    tag: 'Joke',
    setup: "A plateau",
    punchline: "is the highest form of flattery.",
    preview: "A plateau...",
    source: 'system'
  },
  {
    id: 78,
    type: 'joke',
    icon: '🏹',
    tag: 'Joke',
    setup: "I used to think I was indecisive,",
    punchline: "but now I'm not so sure.",
    preview: "I used to think I was indecisive...",
    source: 'system'
  },
  {
    id: 79,
    type: 'joke',
    icon: '🏓',
    tag: 'Joke',
    setup: "I got a job at a bakery",
    punchline: "because I kneaded dough.",
    preview: "I got a job at a bakery...",
    source: 'system'
  },
  {
    id: 80,
    type: 'joke',
    icon: '🏸',
    tag: 'Joke',
    setup: "My grandpa has the heart of a lion",
    punchline: "and a lifetime ban from the zoo.",
    preview: "My grandpa has the heart of a lion...",
    source: 'system'
  },
  {
    id: 81,
    type: 'joke',
    icon: '🏒',
    tag: 'Joke',
    setup: "I used to be a doctor,",
    punchline: "but then I lost my patience.",
    preview: "I used to be a doctor...",
    source: 'system'
  },
  {
    id: 82,
    type: 'joke',
    icon: '🏑',
    tag: 'Joke',
    setup: "I was going to tell a joke about pizza,",
    punchline: "but it's too cheesy.",
    preview: "I was going to tell a joke about pizza...",
    source: 'system'
  },
  {
    id: 83,
    type: 'joke',
    icon: '🏏',
    tag: 'Joke',
    setup: "I don't trust stairs",
    punchline: "because they're always up to something.",
    preview: "I don't trust stairs...",
    source: 'system'
  },
  {
    id: 84,
    type: 'joke',
    icon: '🎿',
    tag: 'Joke',
    setup: "The man who survived mustard gas and pepper spray",
    punchline: "is a seasoned veteran.",
    preview: "The man who survived mustard gas and pepper spray...",
    source: 'system'
  },
  {
    id: 85,
    type: 'joke',
    icon: '🥊',
    tag: 'Joke',
    setup: "I used to play piano by ear,",
    punchline: "but now I use my hands.",
    preview: "I used to play piano by ear...",
    source: 'system'
  },
  {
    id: 86,
    type: 'joke',
    icon: '🥋',
    tag: 'Joke',
    setup: "I'm terrified of elevators,",
    punchline: "so I'm going to start taking steps to avoid them.",
    preview: "I'm terrified of elevators...",
    source: 'system'
  },
  {
    id: 87,
    type: 'joke',
    icon: '⛳',
    tag: 'Joke',
    setup: "I couldn't commit to the marathon,",
    punchline: "but I've been running jokes into the ground.",
    preview: "I couldn't commit to the marathon...",
    source: 'system'
  },
  {
    id: 88,
    type: 'joke',
    icon: '🏓',
    tag: 'Joke',
    setup: "Parallel lines have so much in common.",
    punchline: "It's a shame they'll never meet.",
    preview: "Parallel lines have so much in common...",
    source: 'system'
  },
  {
    id: 89,
    type: 'joke',
    icon: '🏸',
    tag: 'Joke',
    setup: "I was wondering why the baseball was getting bigger.",
    punchline: "Then it hit me.",
    preview: "I was wondering why the baseball was getting bigger...",
    source: 'system'
  },
  {
    id: 90,
    type: 'joke',
    icon: '🏹',
    tag: 'Joke',
    setup: "I told my computer I needed a break,",
    punchline: "and now it won't stop sending me Kit-Kats.",
    preview: "I told my computer I needed a break...",
    source: 'system'
  },
  {
    id: 91,
    type: 'joke',
    icon: '🏒',
    tag: 'Joke',
    setup: "My wife told me to stop impersonating a flamingo.",
    punchline: "I had to put my foot down.",
    preview: "My wife told me to stop impersonating a flamingo...",
    source: 'system'
  },
  {
    id: 92,
    type: 'joke',
    icon: '🏑',
    tag: 'Joke',
    setup: "I was going to tell a chemistry joke,",
    punchline: "but I knew I wouldn't get a reaction.",
    preview: "I was going to tell a chemistry joke...",
    source: 'system'
  },
  {
    id: 93,
    type: 'joke',
    icon: '🏏',
    tag: 'Joke',
    setup: "Why do we tell actors to 'break a leg?'",
    punchline: "Because every play has a cast.",
    preview: "Why do we tell actors to 'break a leg?'...",
    source: 'system'
  },
  {
    id: 94,
    type: 'joke',
    icon: '🎿',
    tag: 'Joke',
    setup: "Helvetica and Times New Roman walk into a bar.",
    punchline: "The bartender says, 'We don't serve your type.'",
    preview: "Helvetica and Times New Roman walk into a bar...",
    source: 'system'
  },
  {
    id: 95,
    type: 'joke',
    icon: '🥊',
    tag: 'Joke',
    setup: "Two guys walk into a bar.",
    punchline: "The third one ducks.",
    preview: "Two guys walk into a bar...",
    source: 'system'
  },
  {
    id: 96,
    type: 'joke',
    icon: '🥋',
    tag: 'Joke',
    setup: "I have a few jokes about unemployed people,",
    punchline: "but none of them work.",
    preview: "I have a few jokes about unemployed people...",
    source: 'system'
  },
  {
    id: 97,
    type: 'joke',
    icon: '⛳',
    tag: 'Joke',
    setup: "Why did the invisible man turn down the job offer?",
    punchline: "He couldn't see himself doing it.",
    preview: "Why did the invisible man turn down the job offer?",
    source: 'system'
  },
  {
    id: 98,
    type: 'joke',
    icon: '🏓',
    tag: 'Joke',
    setup: "I wasn't originally going to get a brain transplant,",
    punchline: "but then I changed my mind.",
    preview: "I wasn't originally going to get a brain transplant...",
    source: 'system'
  },
  {
    id: 99,
    type: 'joke',
    icon: '🏸',
    tag: 'Joke',
    setup: "I have a fear of speed bumps,",
    punchline: "but I'm slowly getting over it.",
    preview: "I have a fear of speed bumps...",
    source: 'system'
  },
  {
    id: 100,
    type: 'joke',
    icon: '🏹',
    tag: 'Joke',
    setup: "Did you hear about the fire at the circus?",
    punchline: "It was in-tents!",
    preview: "Did you hear about the fire at the circus?",
    source: 'system'
  }
];

module.exports = { DEFAULT_JOKES };
