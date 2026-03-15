const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');
const { moderateContent } = require('./moderation');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

const DB_PATH = path.join(__dirname, 'jokes-database.json');

const DEFAULT_JOKES = [
  {
    id: 1,
    type: 'message',
    icon: '👋',
    tag: 'Welcome',
    content: 'Hi! We miss you at church! These cards have funny jokes to make you smile and feel better. God loves you and your church friends are praying for you. We hope you get well soon! Press "Next" to see a joke!',
    preview: 'Hi! We miss you at church...',
    source: 'system'
  },
  {
    id: 2,
    type: 'joke',
    icon: '🧪',
    tag: 'Joke',
    setup: "Why don't scientists trust atoms?",
    punchline: "Because they make up everything!",
    preview: "Why don't scientists trust atoms?",
    source: 'system'
  },
  {
    id: 3,
    type: 'joke',
    icon: '🍝',
    tag: 'Joke',
    setup: "What do you call a fake noodle?",
    punchline: "An impasta!",
    preview: "What do you call a fake noodle?",
    source: 'system'
  },
  {
    id: 4,
    type: 'message',
    icon: '💪',
    tag: 'Strength',
    content: "Tough times don't last. Tough people do. And you are tougher than you know. Keep fighting!",
    preview: "Tough times don't last...",
    source: 'system'
  },
  {
    id: 5,
    type: 'joke',
    icon: '☕',
    tag: 'Joke',
    setup: "Why did the coffee file a police report?",
    punchline: "It got mugged!",
    preview: "Why did the coffee file a police report?",
    source: 'system'
  },
  {
    id: 6,
    type: 'joke',
    icon: '🐝',
    tag: 'Joke',
    setup: "Why do bees have sticky hair?",
    punchline: "Because they use honeycombs!",
    preview: "Why do bees have sticky hair?",
    source: 'system'
  },
  {
    id: 7,
    type: 'message',
    icon: '🍗',
    tag: 'Soul Food',
    content: "Good food and good friends make everything better. We're saving you a plate at the next church dinner!",
    preview: "Good food and good friends...",
    source: 'system'
  },
  {
    id: 8,
    type: 'joke',
    icon: '🐻',
    tag: 'Joke',
    setup: "What do you call a bear with no teeth?",
    punchline: "A gummy bear!",
    preview: "What do you call a bear with no teeth?",
    source: 'system'
  },
  {
    id: 9,
    type: 'prayer',
    icon: '🕊️',
    tag: 'Faith',
    content: "May the God of hope fill you with all joy and peace as you trust in Him. The whole church family is praying for you daily.",
    preview: "May the God of hope fill you...",
    source: 'system'
  },
  {
    id: 10,
    type: 'joke',
    icon: '🌾',
    tag: 'Joke',
    setup: "Why did the scarecrow win an award?",
    punchline: "Because he was outstanding in his field!",
    preview: "Why did the scarecrow win an award?",
    source: 'system'
  },
  {
    id: 11,
    type: 'joke',
    icon: '🐂',
    tag: 'Joke',
    setup: "What do you call a sleeping bull?",
    punchline: "A bulldozer!",
    preview: "What do you call a sleeping bull?",
    source: 'system'
  },
  {
    id: 12,
    type: 'joke',
    icon: '🐟',
    tag: 'Joke',
    setup: "What do you call a fish with no eyes?",
    punchline: "Fsh!",
    preview: "What do you call a fish with no eyes?",
    source: 'system'
  },
  {
    id: 13,
    type: 'message',
    icon: '🙏',
    tag: 'Encouragement',
    content: "You are braver than you believe, stronger than you seem, and loved more than you know. Get well soon!",
    preview: "You are braver than you believe...",
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
    icon: '📚',
    tag: 'Joke',
    setup: "Why did the math book look sad?",
    punchline: "Because it had too many problems!",
    preview: "Why did the math book look sad?",
    source: 'system'
  },
  {
    id: 16,
    type: 'joke',
    icon: '🦕',
    tag: 'Joke',
    setup: "What do you call a sleeping dinosaur?",
    punchline: "A dino-snore!",
    preview: "What do you call a sleeping dinosaur?",
    source: 'system'
  },
  {
    id: 17,
    type: 'joke',
    icon: '🚲',
    tag: 'Joke',
    setup: "Why did the bicycle fall over?",
    punchline: "Because it was two-tired!",
    preview: "Why did the bicycle fall over?",
    source: 'system'
  },
  {
    id: 18,
    type: 'message',
    icon: '🚗',
    tag: 'Sunday Drive',
    content: "Life is a journey, not a destination. We can't wait to see you cruisin' again soon!",
    preview: "Life is a journey...",
    source: 'system'
  },
  {
    id: 19,
    type: 'joke',
    icon: '🐱',
    tag: 'Joke',
    setup: "What do you call a pile of cats?",
    punchline: "A meowtain!",
    preview: "What do you call a pile of cats?",
    source: 'system'
  },
  {
    id: 20,
    type: 'joke',
    icon: '🐄',
    tag: 'Joke',
    setup: "What do you call a cow that plays music?",
    punchline: "A moo-sician!",
    preview: "What do you call a cow that plays music?",
    source: 'system'
  },
  {
    id: 21,
    type: 'joke',
    icon: '🪃',
    tag: 'Joke',
    setup: "What do you call a boomerang that doesn't come back?",
    punchline: "A stick!",
    preview: "What do you call a boomerang...?",
    source: 'system'
  },
  {
    id: 22,
    type: 'message',
    icon: '🦁',
    tag: 'Courage',
    content: "The Lord is with you. Be strong and courageous! Joshua 1:9",
    preview: "The Lord is with you...",
    source: 'system'
  },
  {
    id: 23,
    type: 'joke',
    icon: '🌊',
    tag: 'Joke',
    setup: "What did the ocean say to the shore?",
    punchline: "Nothing, it just waved!",
    preview: "What did the ocean say to the shore?",
    source: 'system'
  },
  {
    id: 24,
    type: 'message',
    icon: '⛪',
    tag: 'Church Family',
    content: "The church isn't the same without you. We're saving your seat! Come back to us soon.",
    preview: "The church isn't the same without you...",
    source: 'system'
  }
];

async function initDatabase() {
  try {
    await fs.access(DB_PATH);
    console.log('Database loaded');
  } catch {
    console.log('Creating new database...');
    await fs.writeFile(DB_PATH, JSON.stringify(DEFAULT_JOKES, null, 2));
  }
}

app.get('/api/jokes', async (req, res) => {
  try {
    const data = await fs.readFile(DB_PATH, 'utf8');
    const jokes = JSON.parse(data);
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load jokes' });
  }
});

app.post('/api/jokes', async (req, res) => {
  try {
    const { setup, punchline, author } = req.body;
    
    if (!setup || !punchline) {
      return res.status(400).json({ 
        passed: false, 
        message: 'Missing joke question or answer' 
      });
    }
    
    if (setup.length > 200 || punchline.length > 200) {
      return res.status(400).json({
        passed: false,
        message: 'Joke too long (max 200 characters each)'
      });
    }
    
    const fullText = `${setup} ${punchline}`;
    const modResult = await moderateContent(fullText);
    
    if (!modResult.passed) {
      return res.json({
        passed: false,
        message: modResult.message
      });
    }
    
    const data = await fs.readFile(DB_PATH, 'utf8');
    const jokes = JSON.parse(data);
    
    const newJoke = {
      id: Date.now(),
      type: 'joke',
      icon: '🎭',
      tag: 'Community',
      setup,
      punchline,
      preview: setup,
      author: author || 'Anonymous Friend',
      source: 'community',
      submittedAt: new Date().toISOString()
    };
    
    jokes.push(newJoke);
    await fs.writeFile(DB_PATH, JSON.stringify(jokes, null, 2));
    
    res.json({
      passed: true,
      message: 'Joke approved! Thank you for sharing.',
      joke: newJoke
    });
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ 
      passed: false, 
      message: 'Server error. Please try again.' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  initDatabase();
});
