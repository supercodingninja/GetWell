/*
================================================================================
This Area Of Code Is: Main Server Application
Explanation: This is the backend server that runs the GetWell Living Card 
application. It serves the frontend files, manages the jokes database (JSON file), 
handles API endpoints for fetching and submitting jokes, and coordinates content 
moderation. Built with Express.js and designed to run on Render.com.
In Other Words: This is the brain behind the website. It saves jokes to a file, 
serves the web pages, checks if new jokes are appropriate, and makes sure 
everything works 24/7.
================================================================================
*/

/*
This Area Of Code Is: Module Imports
Explanation: Imports required Node.js modules. Express creates the web server, 
CORS allows the frontend to talk to the backend from different web addresses, 
body-parser reads JSON data from requests, fs.promises handles file operations 
asynchronously, and path handles file paths correctly across different operating 
systems. The moderation module is imported from the local file.
In Other Words: Gather the tools needed: Express (web server maker), CORS 
(security helper), body-parser (reads form data), fs (file saver), path 
(address organizer), and the content moderator from earlier.
*/
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');
const { moderateContent } = require('./moderation');

/*
This Area Of Code Is: Express App Initialization
Explanation: Creates the Express application instance. Sets the port from 
environment variables (for Render.com deployment) or defaults to 3000 for 
local development. Enables CORS for cross-origin requests and JSON body parsing.
In Other Words: Turn on the web server machine. Use the port Render tells us 
to use (or 3000 at home), and allow other websites to talk to us safely.
*/
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

/*
This Area Of Code Is: Static File Serving
Explanation: Configures Express to serve static files (HTML, CSS, JS, images) 
from the 'public' folder automatically. When someone visits the site, they 
get the index.html file.
In Other Words: Make the public folder (where the website pages live) 
available to anyone who visits.
*/
app.use(express.static('public'));

/*
This Area Of Code Is: Database Path Configuration
Explanation: Defines the absolute path to the JSON database file where jokes 
are stored persistently. Located in the same directory as the server file.
In Other Words: Set the address where we keep the jokes file (like a notebook 
that remembers all jokes even if the server restarts).
*/
const DB_PATH = path.join(__dirname, 'jokes-database.json');

/*
This Area Of Code Is: Default Jokes Database
Explanation: Hardcoded array of initial jokes, messages, and prayers using 
King James Version scriptures. These are used to populate the database on 
first run. Content is neutral (no brother/sister references) and diverse. 
Includes welcome message, KJV prayers, and clean family-friendly jokes.
In Other Words: The starting list of 24 cards with church-friendly jokes, 
KJV Bible verses, and welcome messages that don't say "brother" or "sister."
*/
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
    icon: '🧪',
    tag: 'Joke',
    setup: "Why don't scientists trust atoms?",
    punchline: "Because they make up everything!",
    preview: "Why don't scientists trust atoms?",
    source: 'system'
  },
  {
    id: 4,
    type: 'joke',
    icon: '🍝',
    tag: 'Joke',
    setup: "What do you call a fake noodle?",
    punchline: "An impasta!",
    preview: "What do you call a fake noodle?",
    source: 'system'
  },
  {
    id: 5,
    type: 'message',
    icon: '💪',
    tag: 'Encouragement',
    content: "Tough times don't last, but tough people do. And you are tougher than you know! We are all praying for your strength and speedy recovery. The whole congregation sends love!",
    preview: "Tough times don't last...",
    source: 'system'
  },
  {
    id: 6,
    type: 'joke',
    icon: '☕',
    tag: 'Joke',
    setup: "Why did the coffee file a police report?",
    punchline: "It got mugged!",
    preview: "Why did the coffee file a police report?",
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
    icon: '🐻',
    tag: 'Joke',
    setup: "What do you call a bear with no teeth?",
    punchline: "A gummy bear!",
    preview: "What do you call a bear with no teeth?",
    source: 'system'
  },
  {
    id: 9,
    type: 'joke',
    icon: '🐧',
    tag: 'Joke',
    setup: "How does a penguin build its house?",
    punchline: "Igloos it together!",
    preview: "How does a penguin build its house?",
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
    icon: '🪵',
    tag: 'Joke',
    setup: "What's brown and sticky?",
    punchline: "A stick!",
    preview: "What's brown and sticky?",
    source: 'system'
  },
  {
    id: 14,
    type: 'joke',
    icon: '❄️',
    tag: 'Joke',
    setup: "Why can't you give Elsa a balloon?",
    punchline: "Because she will let it go!",
    preview: "Why can't you give Elsa a balloon?",
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
    icon: '🧀',
    tag: 'Joke',
    setup: "What do you call cheese that isn't yours?",
    punchline: "Nacho cheese!",
    preview: "What do you call cheese that isn't yours?",
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
    icon: '📚',
    tag: 'Joke',
    setup: "Why did the math book look sad?",
    punchline: "Because it had too many problems!",
    preview: "Why did the math book look sad?",
    source: 'system'
  },
  {
    id: 19,
    type: 'joke',
    icon: '🦕',
    tag: 'Joke',
    setup: "What do you call a sleeping dinosaur?",
    punchline: "A dino-snore!",
    preview: "What do you call a sleeping dinosaur?",
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
    icon: '🚲',
    tag: 'Joke',
    setup: "Why did the bicycle fall over?",
    punchline: "Because it was two-tired!",
    preview: "Why did the bicycle fall over?",
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
    icon: '🎉',
    tag: 'Coming Back',
    content: "The church isn't the same without you! We are saving your seat and planning a wonderful celebration for when you return. Get well soon - we miss you!",
    preview: "The church isn't the same without you...",
    source: 'system'
  }
];

/*
This Area Of Code Is: Database Initialization Function
Explanation: Checks if the database file exists when the server starts. If not, 
creates it with the DEFAULT_JOKES array. Uses async/await for non-blocking file 
operations. Logs status to console.
In Other Words: When starting up, check if we have the jokes notebook. If not, 
create it with the starter jokes. Tell us in the console what happened.
*/
async function initDatabase() {
  try {
    /*
    This Area Of Code Is: File Existence Check
    Explanation: Attempts to access the database file. If successful (no error), 
    the file exists and we log that it loaded. If it throws an error (caught by 
    the catch block), the file doesn't exist.
    In Other Words: Try to find the notebook. If found, say "loaded." If not 
    found (error), go to catch block.
    */
    await fs.access(DB_PATH);
    console.log('Database loaded');
  } catch {
    /*
    This Area Of Code Is: Database Creation
    Explanation: If the file doesn't exist (catch block triggered), write the 
    default jokes array to the file as formatted JSON (null, 2 means 2-space 
    indentation for readability).
    In Other Words: Create the notebook with the starter jokes written nicely 
    with spaces so humans can read it too.
    */
    console.log('Creating new database...');
    await fs.writeFile(DB_PATH, JSON.stringify(DEFAULT_JOKES, null, 2));
  }
}

/*
This Area Of Code Is: GET /api/jokes Endpoint
Explanation: API route that returns all jokes from the database. Reads the JSON 
file, parses it, and sends it as the response. Handles errors by sending 500 
status code if file reading fails.
In Other Words: When someone asks "give me all the jokes," read the notebook 
and send them the list. If you can't read it, say "error 500 - something broke."
*/
app.get('/api/jokes', async (req, res) => {
  try {
    const data = await fs.readFile(DB_PATH, 'utf8');
    const jokes = JSON.parse(data);
    res.json(jokes);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load jokes' });
  }
});

/*
This Area Of Code Is: POST /api/jokes Endpoint
Explanation: API route for submitting new community jokes. Validates input 
(length limits, required fields), runs moderation checks (church standards + 
Perspective API), saves approved jokes to database with metadata (author, 
timestamp, ID), and returns appropriate responses.
In Other Words: When someone submits a new joke, check if it's complete (not 
too long), check if it's appropriate (church rules + Google), then save it to 
the notebook with their name and date. Tell them if it was approved or rejected.
*/
app.post('/api/jokes', async (req, res) => {
  try {
    /*
    This Area Of Code Is: Request Body Destructuring
    Explanation: Extracts setup, punchline, and author from the request body 
    sent by the frontend.
    In Other Words: Pull out the joke question, answer, and person's name from 
    the form they submitted.
    */
    const { setup, punchline, author } = req.body;
    
    /*
    This Area Of Code Is: Validation Checks
    Explanation: Verifies that setup and punchline are provided and not empty. 
    Also checks that neither exceeds 200 characters to prevent abuse and keep 
    cards readable.
    In Other Words: Make sure they actually wrote a question and answer, and 
    that it's not a novel (keep it under 200 letters each).
    */
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
    
    /*
    This Area Of Code Is: Content Moderation
    Explanation: Combines setup and punchline into one text string and sends 
    it to the moderation engine for checking against church standards and 
    Google's safety API.
    In Other Words: Stick the question and answer together and ask the security 
    guard if it's okay.
    */
    const fullText = `${setup} ${punchline}`;
    const modResult = await moderateContent(fullText);
    
    /*
    This Area Of Code Is: Moderation Result Handling
    Explanation: If moderation fails (content inappropriate), returns the 
    rejection message immediately without saving to database.
    In Other Words: If the guard says "no," tell them why and stop here.
    */
    if (!modResult.passed) {
      return res.json({
        passed: false,
        message: modResult.message
      });
    }
    
    /*
    This Area Of Code Is: Database Read
    Explanation: Reads the current database to get all existing jokes before 
    adding the new one.
    In Other Words: Open the notebook to see what's already there.
    */
    const data = await fs.readFile(DB_PATH, 'utf8');
    const jokes = JSON.parse(data);
    
    /*
    This Area Of Code Is: New Joke Object Creation
    Explanation: Creates a new joke object with unique ID (timestamp), type 
    'joke', generic icon, Community tag, the submitted content, author name 
    or 'Anonymous Friend', source marked as 'community', and current timestamp.
    In Other Words: Create a new entry with a unique ID number (time-based), 
    label it as from the community, add the joke text, person's name (or 
    Anonymous), and today's date.
    */
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
    
    /*
    This Area Of Code Is: Database Update
    Explanation: Adds the new joke to the array and writes the updated array 
    back to the file as formatted JSON.
    In Other Words: Add the new joke to the list and save the notebook.
    */
    jokes.push(newJoke);
    await fs.writeFile(DB_PATH, JSON.stringify(jokes, null, 2));
    
    /*
    This Area Of Code Is: Success Response
    Explanation: Returns success status, thank you message, and the new joke 
    object so the frontend can display it immediately.
    In Other Words: Say "thank you, it's approved!" and show them their joke.
    */
    res.json({
      passed: true,
      message: 'Joke approved! Thank you for sharing.',
      joke: newJoke
    });
    
  } catch (error) {
    /*
    This Area Of Code Is: Error Handling
    Explanation: Catches any unexpected errors during the process, logs them 
    for debugging, and returns a generic error message to the user.
    In Other Words: If anything breaks during saving, write down what happened 
    and tell the user "oops, try again."
    */
    console.error('Error:', error);
    res.status(500).json({ 
      passed: false, 
      message: 'Server error. Please try again.' 
    });
  }
});

/*
This Area Of Code Is: Server Start
Explanation: Starts the Express server listening on the specified port. 
Initializes the database. Logs the running status to console.
In Other Words: Turn on the server and start listening for visitors. Set up 
the notebook. Tell us in the console that it's working.
*/
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  initDatabase();
});
