const DEFAULT_JOKES = [
  {
    id: 1,
    type: 'message',
    icon: '⛪',
    tag: 'Welcome',
    content: "We miss seeing your smiling face at church! The pews feel a little emptier without you, and we can't wait until you're back worshipping with us. Until then, here are some smiles to brighten your day. Get well soon!",
    preview: 'We miss seeing your smiling face...',
    source: 'system'
  },
  {
    id: 2,
    type: 'prayer',
    icon: '📖',
    tag: 'Psalm 23:1-3 (KJV)',
    content: "The Lord is my shepherd; I shall not want. He maketh me to lie down in green pastures: he leadeth me beside the still waters. He restoreth my soul: he leadeth me in the paths of righteousness for his name's sake.",
    preview: 'The Lord is my shepherd...',
    source: 'system'
  },
  {
    id: 3,
    type: 'joke',
    icon: '🍌',
    tag: 'Joke',
    setup: "Why did the banana go to the doctor?",
    punchline: "Because it wasn't peeling well!",
    preview: "Why did the banana go to the doctor?",
    source: 'system'
  },
  {
    id: 4,
    type: 'joke',
    icon: '🍪',
    tag: 'Joke',
    setup: "Why did the cookie go to the hospital?",
    punchline: "Because it felt crumby!",
    preview: "Why did the cookie go to the hospital?",
    source: 'system'
  },
  {
    id: 5,
    type: 'message',
    icon: '💪',
    tag: 'Encouragement',
    content: "Tough times don't last, but tough people do! And you are tougher than you know. We are all praying for your strength and speedy recovery. The whole congregation sends love!",
    preview: "Tough times don't last...",
    source: 'system'
  },
  {
    id: 6,
    type: 'joke',
    icon: '🐂',
    tag: 'Joke',
    setup: "What do you call a sleeping bull?",
    punchline: "A bulldozer!",
    preview: "What do you call a sleeping bull?",
    source: 'system'
  },
  {
    id: 7,
    type: 'prayer',
    icon: '🕊️',
    tag: 'Jeremiah 29:11 (KJV)',
    content: "For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected end.",
    preview: "For I know the thoughts...",
    source: 'system'
  },
  {
    id: 8,
    type: 'joke',
    icon: '📚',
    tag: 'Joke',
    setup: "Why did the student eat his homework?",
    punchline: "Because the teacher said it was a piece of cake!",
    preview: "Why did the student eat his homework?",
    source: 'system'
  },
  {
    id: 9,
    type: 'joke',
    icon: '🍝',
    tag: 'Joke',
    setup: "What do you call a fake noodle?",
    punchline: "An impasta!",
    preview: "What do you call a fake noodle?",
    source: 'system'
  },
  {
    id: 10,
    type: 'message',
    icon: '❤️',
    tag: 'Love',
    content: "Your church family loves you and is holding you close in prayer. We are saving your seat and look forward to the day when we can worship together again. Stay strong!",
    preview: "Your church family loves you...",
    source: 'system'
  },
  {
    id: 11,
    type: 'joke',
    icon: '🌾',
    tag: 'Joke',
    setup: "Why did the scarecrow win an award?",
    punchline: "Because he was outstanding in his field!",
    preview: "Why did the scarecrow win an award?",
    source: 'system'
  },
  {
    id: 12,
    type: 'prayer',
    icon: '🙏',
    tag: 'Philippians 4:13 (KJV)',
    content: "I can do all things through Christ which strengtheneth me.",
    preview: "I can do all things...",
    source: 'system'
  },
  {
    id: 13,
    type: 'joke',
    icon: '⛄',
    tag: 'Joke',
    setup: "What do you call a snowman with a six pack?",
    punchline: "An abdominal snowman!",
    preview: "What do you call a snowman with a six pack?",
    source: 'system'
  },
  {
    id: 14,
    type: 'joke',
    icon: '🥚',
    tag: 'Joke',
    setup: "Why don't eggs tell jokes?",
    punchline: "Because they'd crack each other up!",
    preview: "Why don't eggs tell jokes?",
    source: 'system'
  },
  {
    id: 15,
    type: 'message',
    icon: '🌟',
    tag: 'Hope',
    content: "You are braver than you believe, stronger than you seem, and loved more than you know. We are all rooting for your complete healing!",
    preview: "You are braver than you believe...",
    source: 'system'
  },
  {
    id: 16,
    type: 'joke',
    icon: '🚲',
    tag: 'Joke',
    setup: "Why did the bicycle fall over?",
    punchline: "Because it was two-tired!",
    preview: "Why did the bicycle fall over?",
    source: 'system'
  },
  {
    id: 17,
    type: 'prayer',
    icon: '📖',
    tag: 'Isaiah 41:10 (KJV)',
    content: "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee; yea, I will uphold thee with the right hand of my righteousness.",
    preview: "Fear thou not; for I am with thee...",
    source: 'system'
  },
  {
    id: 18,
    type: 'joke',
    icon: '🧀',
    tag: 'Joke',
    setup: "What do you call cheese that isn't yours?",
    punchline: "Nacho cheese!",
    preview: "What do you call cheese that isn't yours?",
    source: 'system'
  },
  {
    id: 19,
    type: 'joke',
    icon: '🏌️',
    tag: 'Joke',
    setup: "Why did the golfer wear two pairs of pants?",
    punchline: "In case he got a hole in one!",
    preview: "Why did the golfer wear two pairs of pants?",
    source: 'system'
  },
  {
    id: 20,
    type: 'message',
    icon: '🌻',
    tag: 'Sunshine',
    content: "Sending you sunshine, prayers, and positive thoughts. May each day bring you closer to full health and happiness. We can't wait to see you again!",
    preview: "Sending you sunshine...",
    source: 'system'
  },
  {
    id: 21,
    type: 'joke',
    icon: '🐻',
    tag: 'Joke',
    setup: "What do you call a bear with no teeth?",
    punchline: "A gummy bear!",
    preview: "What do you call a bear with no teeth?",
    source: 'system'
  },
  {
    id: 22,
    type: 'prayer',
    icon: '✝️',
    tag: 'Joshua 1:9 (KJV)',
    content: "Have not I commanded thee? Be strong and of a good courage; be not afraid, neither be thou dismayed: for the Lord thy God is with thee whithersoever thou goest.",
    preview: "Be strong and of a good courage...",
    source: 'system'
  },
  {
    id: 23,
    type: 'joke',
    icon: '🐶',
    tag: 'Joke',
    setup: "What do you call a dog that can do magic?",
    punchline: "A Labracadabrador!",
    preview: "What do you call a dog that can do magic?",
    source: 'system'
  },
  {
    id: 24,
    type: 'message',
    icon: '🎉',
    tag: 'Coming Back',
    content: "The church isn't the same without you! We are saving your seat and planning a wonderful celebration for when you return. Get well soon - we miss you!",
    preview: "The church isn't the same without you...",
    source: 'system'
  }
];
