/*
================================================================================
This Area Of Code Is: Main Frontend Logic
Explanation: This JavaScript file controls all interactivity on the GetWell 
Living Card application. It fetches cards from the server, handles card 
navigation, auto-play mode, menu functionality, community joke submissions, 
and animates the church community background scene. Coordinates with the backend 
API for content moderation when submitting new jokes.
In Other Words: The brain of the webpage. It makes the buttons work, slides 
the cards, opens the menu, sends new jokes to the server for checking, and 
makes the cars and people move in the background.
================================================================================
*/

/*
This Area Of Code Is: Global State Variables
Explanation: Variables that track the current state of the application across 
all functions. Includes current card index, whether punchline is revealed, 
auto mode status, pause status, speed setting, active timers array, and the 
cards data array fetched from the server.
In Other Words: The app's memory. It remembers which card is showing, if the 
answer is visible, if auto mode is on, etc.
*/
let currentIndex = 0;
let isRevealed = false;
let autoMode = false;
let isPaused = false;
let currentSpeed = 'slow';
let timers = [];
let cards = [];

/*
This Area Of Code Is: Speed Settings Configuration
Explanation: Object defining timing durations (in milliseconds) for each speed 
mode. Setup time is how long to show the joke question before revealing the 
answer. Punchline time is how long to show the answer before moving to next 
card. Message time is for non-joke cards (prayers/messages).
In Other Words: The timer settings - how long to wait for each speed. Slow 
waits 8 seconds, Medium waits 6 seconds, etc. Numbers are in milliseconds 
(1000 = 1 second).
*/
const speedSettings = {
    slow: { setup: 8000, punchline: 10000, message: 12000, name: 'Slow' },
    medium: { setup: 6000, punchline: 8000, message: 10000, name: 'Medium' },
    fast: { setup: 4000, punchline: 6000, message: 8000, name: 'Fast' }
};

/*
================================================================================
This Area Of Code Is: Initialization Functions
Explanation: Functions that run when the page first loads to set up the app - 
fetching jokes from the server, creating the animated background, and setting 
initial UI states.
================================================================================
*/

/*
This Area Of Code Is: Fetch Jokes Function
Explanation: Async function that calls the backend API to get all jokes from 
the database. Uses fetch API to make GET request to /api/jokes. If successful, 
stores data in cards array and renders the first card. If failed, shows error 
in console and uses empty array.
In Other Words: When the page opens, ask the server "give me all the jokes" 
and save them. Then show the first one. If it fails, write in the console 
"couldn't get jokes."
*/
async function fetchJokes() {
    try {
        const response = await fetch('/api/jokes');
        if (!response.ok) throw new Error('Failed to fetch');
        cards = await response.json();
        if (cards.length > 0) {
            renderCards();
            renderMenu();
        }
    } catch (error) {
        console.error('Error fetching jokes:', error);
        cards = [];
    }
}

/*
This Area Of Code Is: Background Scene Initialization
Explanation: Creates the animated church community background elements - cars 
driving by, people walking, kids playing, and falling leaves. Uses emojis and 
CSS animations to create a lively scene without heavy images.
In Other Words: Set up the animated wallpaper - make cars, people, and kids 
appear and start moving around.
*/
function initBackground() {
    /*
    This Area Of Code Is: Cars Creation
    Explanation: Creates 3 car elements with different emojis (sedan, SUV, truck) 
    and animation delays so they drive by at different times.
    In Other Words: Create 3 cars with different looks and make them drive by 
    at different times so they don't crash into each other.
    */
    const carsContainer = document.getElementById('carsContainer');
    const carEmojis = ['🚗', '🚙', '🚕'];
    
    carEmojis.forEach((emoji, index) => {
        const car = document.createElement('div');
        car.className = 'car';
        car.textContent = emoji;
        car.style.animationDelay = `${index * 5}s`;
        car.style.top = `${index * 20}px`;
        carsContainer.appendChild(car);
    });

    /*
    This Area Of Code Is: People Creation
    Explanation: Creates diverse church members using person emojis in different 
    colors/sizes to represent the multicultural congregation (Asians, Black, 
    Hispanic, European, African, Indian) in suits and dresses.
    In Other Words: Create people of different backgrounds walking to church - 
    different skin tones and clothing colors to show diversity.
    */
    const peopleContainer = document.getElementById('peopleContainer');
    const peopleEmojis = ['🧑🏽', '👩🏾', '🧑🏻', '👩🏿', '👨🏻', '👩🏽'];
    
    peopleEmojis.forEach((emoji, index) => {
        const person = document.createElement('div');
        person.className = 'person';
        person.textContent = emoji;
        person.style.animationDelay = `${index * 0.5}s`;
        person.style.left = `${10 + index * 15}%`;
        peopleContainer.appendChild(person);
    });

    /*
    This Area Of Code Is: Kids Playing Creation
    Explanation: Creates children playing with a ball in the playground area 
    using child and ball emojis with bouncing animations.
    In Other Words: Create kids playing with a ball - bouncing up and down.
    */
    const playground = document.getElementById('playgroundArea');
    const kids = ['👦🏽', '⚽', '👧🏾'];
    
    kids.forEach((emoji, index) => {
        const kid = document.createElement('div');
        kid.className = 'playing-child';
        kid.textContent = emoji;
        kid.style.left = `${index * 40}px`;
        kid.style.animationDelay = `${index * 0.3}s`;
        playground.appendChild(kid);
    });

    /*
    This Area Of Code Is: Falling Leaves Creation
    Explanation: Creates falling leaves/atmospheric particles that drift down 
    the screen to add life to the scene.
    In Other Words: Create leaves falling from the top to make it feel like 
    a nice day outside.
    */
    const atmosphere = document.getElementById('atmosphere');
    const leaves = ['🍂', '🍁', '🌸'];
    
    for (let i = 0; i < 5; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'falling-leaf';
        leaf.textContent = leaves[Math.floor(Math.random() * leaves.length)];
        leaf.style.left = `${Math.random() * 100}%`;
        leaf.style.animationDuration = `${8 + Math.random() * 4}s`;
        leaf.style.animationDelay = `${Math.random() * 5}s`;
        atmosphere.appendChild(leaf);
    }
}

/*
================================================================================
This Area Of Code Is: Core Rendering Functions
Explanation: Functions that control what appears on the screen - displaying 
cards, updating buttons, and refreshing the menu.
================================================================================
*/

/*
This Area Of Code Is: Render Cards Function
Explanation: Main function that draws the current card on screen. Gets the 
card data from the cards array using currentIndex, creates HTML elements with 
appropriate classes based on card type (joke, prayer, message), handles 
punchline visibility for jokes, and updates all UI controls.
In Other Words: The artist that paints the card on screen. Looks at which 
card number we're on, gets that data, creates the HTML, and puts it on the 
page. If it's a joke, hides the answer until told to show it.
*/
function renderCards() {
    /*
    This Area Of Code Is: Safety Check
    Explanation: Checks if cards array is empty or currentIndex is invalid. 
    If so, exits the function early to prevent errors.
    In Other Words: Make sure we actually have cards to show before trying to 
    display them.
    */
    if (!cards.length || currentIndex >= cards.length) return;
    
    const stack = document.getElementById('cardStack');
    const card = cards[currentIndex];
    
    /*
    This Area Of Code Is: Card Element Creation
    Explanation: Creates the card div with appropriate CSS classes based on 
    card type (joke, message, or prayer). Adds 'active' class to make it visible.
    In Other Words: Create the card box and color-code it based on type (brown 
    for jokes, blue for messages, green for prayers).
    */
    const cardEl = document.createElement('div');
    cardEl.className = `flash-card card-${card.type} active`;
    
    /*
    This Area Of Code Is: Card Content Building
    Explanation: Builds the inner HTML of the card based on its type. All cards 
    have a tag (top right label) and icon (large emoji). Joke cards have setup 
    (question) and punchline (answer). Prayer and message cards have content 
    (full text). KJV scriptures are shown in the prayer format.
    In Other Words: Fill the card with content - all cards get a label and big 
    emoji. Jokes get question + hidden answer. Prayers and messages get the 
    full text displayed immediately.
    */
    let innerHTML = `
        <div class="tag">${card.tag}</div>
        <div class="icon">${card.icon}</div>
    `;
    
    if (card.type === 'joke') {
        innerHTML += `
            <div class="setup">${card.setup}</div>
            <div class="punchline">${card.punchline}</div>
        `;
        
        if (isRevealed) {
            cardEl.classList.add('revealed');
        }
    } else {
        innerHTML += `<div class="content">${card.content}</div>`;
    }
    
    /*
    This Area Of Code Is: DOM Update
    Explanation: Clears the previous card from the stack container and inserts 
    the newly created card element.
    In Other Words: Erase the old card and put the new one in its place.
    */
    stack.innerHTML = '';
    stack.appendChild(cardEl);
    
    updateControls();
}

/*
This Area Of Code Is: Update Controls Function
Explanation: Updates the button states and progress indicator based on the 
current card. Shows/hides the reveal button depending on if it's a joke. 
Updates the "Card X of Y" text. Shows submit form if at the last card.
In Other Words: Update the buttons at the bottom. If it's a joke, show the 
"Show Answer" button. Update the card counter. If on the last card, show the 
"Submit Joke" form.
*/
function updateControls() {
    if (!cards.length) return;
    
    const currentCard = cards[currentIndex];
    const revealBtn = document.getElementById('revealBtn');
    
    /*
    This Area Of Code Is: Reveal Button Toggle
    Explanation: Shows the reveal button only for joke cards and updates its 
    text based on whether the punchline is currently revealed or hidden.
    In Other Words: If this is a joke, show the answer button and make it say 
    either "Show Answer" or "Hide Answer" depending on if it's already showing.
    */
    if (currentCard.type === 'joke') {
        revealBtn.style.display = 'inline-block';
        revealBtn.textContent = isRevealed ? 'Hide Punchline' : 'Show Punchline';
    } else {
        revealBtn.style.display = 'none';
    }
    
    /*
    This Area Of Code Is: Progress Update
    Explanation: Updates the card counter text (e.g., "Card 5 of 24"). Adds 1 
    to currentIndex because arrays start at 0 but humans count from 1.
    In Other Words: Update the text to show which card number we're on (adding 
    1 because computers count 0,1,2 but we show 1,2,3).
    */
    document.getElementById('progress').textContent = 
        `Card ${currentIndex + 1} of ${cards.length}`;
    
    /*
    This Area Of Code Is: Submit Form Toggle
    Explanation: Shows the joke submission form when user reaches the last card 
    to encourage community participation.
    In Other Words: When they reach the last card, show the form so they can 
    add their own joke.
    */
    const submitSection = document.getElementById('submitSection');
    if (currentIndex === cards.length - 1) {
        submitSection.classList.add('visible');
    } else {
        submitSection.classList.remove('visible');
    }
}

/*
This Area Of Code Is: Toggle Punchline Function
Explanation: Toggles the visibility of the punchline for joke cards. Flips the 
isRevealed boolean and re-renders the card. If in auto mode, manages the timer 
to advance to next card after punchline display time.
In Other Words: When you click the Show/Hide button, flip the switch (if hidden 
show it, if shown hide it) and redraw the card. If auto mode is on, start the 
timer to go to the next card after showing the answer.
*/
function toggleReveal() {
    if (!cards.length || cards[currentIndex].type !== 'joke') return;
    
    isRevealed = !isRevealed;
    renderCards();
    
    if (autoMode && !isPaused && isRevealed) {
        clearAllTimers();
        const settings = speedSettings[currentSpeed];
        const timer = setTimeout(() => {
            if (!isPaused) nextCard();
        }, settings.punchline);
        timers.push(timer);
    }
}

/*
================================================================================
This Area Of Code Is: Navigation Functions
Explanation: Functions for moving between cards - next, previous, and jumping 
to specific cards via the menu.
================================================================================
*/

/*
This Area Of Code Is: Next Card Function
Explanation: Advances to the next card in the sequence. Resets isRevealed to 
false so punchlines are hidden on new joke cards. If at the end during auto 
mode, stops auto mode and shows completion. Continues auto sequence if active.
In Other Words: Go to the next joke. Hide the answer (reset). If we're at the 
last one and auto mode is on, stop and say "all done." Otherwise keep the 
slideshow going if it's in auto mode.
*/
function nextCard() {
    if (!cards.length) return;
    
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        isRevealed = false;
        renderCards();
        
        if (autoMode && !isPaused) {
            scheduleAutoSequence();
        }
    } else if (autoMode) {
        stopAuto();
        setTimeout(() => {
            alert('All done! Hope these brought a smile to your face. 🙏');
        }, 500);
    }
}

/*
This Area Of Code Is: Previous Card Function
Explanation: Moves to the previous card if not at the beginning. Only works 
when not in auto mode or when paused. Resets punchline reveal state.
In Other Words: Go back to the previous joke (only if not on the first one, 
and only if auto mode is off or paused).
*/
function previousCard() {
    if (!cards.length) return;
    
    if (currentIndex > 0 && (!autoMode || isPaused)) {
        currentIndex--;
        isRevealed = false;
        renderCards();
    }
}

/*
This Area Of Code Is: Jump to Card Function
Explanation: Allows jumping to any specific card by index. Used when clicking 
items in the slide-in menu. Closes the menu after jumping. Continues auto mode 
if active.
In Other Words: Jump directly to a specific card number (used when clicking in 
the menu). Close the menu after jumping.
*/
function jumpToCard(index) {
    if (!cards.length || index < 0 || index >= cards.length) return;
    
    currentIndex = index;
    isRevealed = false;
    renderCards();
    toggleMenu();
    
    if (autoMode && !isPaused) {
        scheduleAutoSequence();
    }
}

/*
================================================================================
This Area Of Code Is: Menu Functions
Explanation: Functions controlling the slide-in navigation menu that shows all 
cards and allows jumping to any card.
================================================================================
*/

/*
This Area Of Code Is: Toggle Menu Function
Explanation: Opens or closes the slide-in menu by toggling the 'visible' class 
on the overlay and panel elements. CSS handles the sliding animation. Calls 
renderMenu if opening to ensure content is current.
In Other Words: Open or close the side menu by adding/removing the "visible" 
class. If opening, fill it with the current list of cards.
*/
function toggleMenu() {
    const overlay = document.getElementById('menuOverlay');
    const panel = document.getElementById('menuPanel');
    
    overlay.classList.toggle('visible');
    panel.classList.toggle('visible');
    
    if (panel.classList.contains('visible')) {
        renderMenu();
    }
}

/*
This Area Of Code Is: Render Menu Function
Explanation: Populates the slide-in menu with items representing all cards in 
the database. Creates HTML for each item including number, type, preview text, 
and emoji. Highlights the current card. Handles click events to jump to that card.
In Other Words: Create the list of all cards in the side menu with numbers and 
previews. Make the current card green. When you click a row, jump to that card.
*/
function renderMenu() {
    const menuList = document.getElementById('menuList');
    if (!menuList || !cards.length) return;
    
    menuList.innerHTML = '';
    
    cards.forEach((card, index) => {
        const item = document.createElement('div');
        item.className = `menu-item ${index === currentIndex ? 'current' : ''}`;
        item.onclick = () => jumpToCard(index);
        
        const preview = card.type === 'joke' ? card.setup : 
                       (card.preview || card.content.substring(0, 30) + '...');
        
        item.innerHTML = `
            <div class="menu-item-number">${index + 1}</div>
            <div class="menu-item-content">
                <div class="menu-item-type">${card.tag}</div>
                <div class="menu-item-preview">${preview}</div>
            </div>
            <div>${card.icon}</div>
        `;
        
        menuList.appendChild(item);
    });
}

/*
================================================================================
This Area Of Code Is: Auto Mode Functions
Explanation: Functions handling the automatic slideshow feature where cards 
advance on timers without user clicking.
================================================================================
*/

/*
This Area Of Code Is: Toggle Settings Panel
Explanation: Shows or hides the Auto Mode settings panel (speed selection) 
by toggling the 'visible' class.
In Other Words: Show or hide the speed selection popup.
*/
function toggleSettings() {
    const panel = document.getElementById('settingsPanel');
    panel.classList.toggle('visible');
}

/*
This Area Of Code Is: Set Speed Function
Explanation: Updates the currentSpeed variable and UI to reflect the selected 
speed (slow, medium, fast). Updates button styling (selected class) and 
explanation text showing the timing details.
In Other Words: When you click Slow, Medium, or Fast, remember your choice, 
make that button blue, and update the text explaining how long each part takes.
*/
function setSpeed(speed) {
    currentSpeed = speed;
    
    ['slow', 'medium', 'fast'].forEach(s => {
        document.getElementById(s + 'Btn').classList.remove('selected');
    });
    document.getElementById(speed + 'Btn').classList.add('selected');
    
    const settings = speedSettings[speed];
    const explanation = document.getElementById('timingExplanation');
    
    let text = `<strong>${settings.name} Mode:</strong><br>`;
    text += `Setup: ${settings.setup/1000}s, Punchline: ${settings.punchline/1000}s<br>`;
    text += `Messages: ${settings.message/1000}s`;
    
    if (speed === 'slow') {
        text += `<br><em>Recommended for hospital rest.</em>`;
    }
    
    explanation.innerHTML = text;
}

/*
This Area Of Code Is: Start Auto Mode Function
Explanation: Initializes automatic slideshow. Hides settings panel, updates 
button states (green pulsing), shows pause button, updates instruction text, 
and starts the first timer sequence.
In Other Words: Start the automatic slideshow. Change buttons to show it's 
running, show the pause button, and begin the countdown.
*/
function startAuto() {
    autoMode = true;
    isPaused = false;
    
    document.getElementById('settingsPanel').classList.remove('visible');
    document.getElementById('autoBtn').classList.add('active');
    document.getElementById('autoBtn').textContent = '⏹ Stop Auto';
    document.getElementById('autoBtn').onclick = stopAuto;
    document.getElementById('autoStatus').classList.add('visible');
    document.getElementById('pauseBtn').classList.add('visible');
    document.getElementById('instruction').textContent = 
        'Auto Mode: Press SPACE to pause. Menu to jump cards.';
    
    if (currentIndex === cards.length - 1 && isRevealed) {
        currentIndex = 0;
        isRevealed = false;
    }
    
    renderCards();
    scheduleAutoSequence();
}

/*
This Area Of Code Is: Stop Auto Mode Function
Explanation: Stops automatic playback. Clears all timers, resets state variables, 
restores UI to manual mode appearance, and restores button click handlers.
In Other Words: Stop the automatic slideshow and put everything back to normal 
manual button mode.
*/
function stopAuto() {
    autoMode = false;
    isPaused = false;
    clearAllTimers();
    
    document.getElementById('autoBtn').classList.remove('active');
    document.getElementById('autoBtn').textContent = '⚙️ Auto Mode';
    document.getElementById('autoBtn').onclick = toggleSettings;
    document.getElementById('autoStatus').classList.remove('visible');
    document.getElementById('pauseBtn').classList.remove('visible');
    document.getElementById('pausedNotice').classList.remove('visible');
    document.getElementById('pauseBtn').textContent = '⏸ Pause';
    document.getElementById('pauseBtn').classList.remove('paused');
    document.getElementById('instruction').textContent = 
        'Press "Menu" to jump to any card. Toggle punchline on/off.';
    
    renderCards();
}

/*
This Area Of Code Is: Toggle Pause Function
Explanation: Pauses or resumes the auto mode slideshow. When pausing, clears 
timers and shows yellow "PAUSED" status. When resuming, restarts the timer 
sequence and shows green "Active" status.
In Other Words: Pause the slideshow (if running) or resume it (if paused). 
Show yellow text when paused, green when running.
*/
function togglePause() {
    if (!autoMode) return;
    
    isPaused = !isPaused;
    
    const pauseBtn = document.getElementById('pauseBtn');
    const pausedNotice = document.getElementById('pausedNotice');
    const autoStatus = document.getElementById('autoStatus');
    
    if (isPaused) {
        clearAllTimers();
        pauseBtn.textContent = '▶ Resume';
        pauseBtn.classList.add('paused');
        pausedNotice.classList.add('visible');
        autoStatus.classList.remove('visible');
    } else {
        pauseBtn.textContent = '⏸ Pause';
        pauseBtn.classList.remove('paused');
        pausedNotice.classList.remove('visible');
        autoStatus.classList.add('visible');
        scheduleAutoSequence();
    }
}

/*
This Area Of Code Is: Schedule Auto Sequence Function
Explanation: Sets up the timer chain for automatic advancement. Clears old 
timers first. For joke cards: waits for setup time, reveals punchline, waits 
for punchline time, then advances. For message cards: waits for message time 
then advances.
In Other Words: Set up the countdown timers. If it's a joke: wait, show answer, 
wait, go to next. If it's a message: just wait then go to next.
*/
function scheduleAutoSequence() {
    if (!autoMode || isPaused || !cards.length) return;
    
    clearAllTimers();
    
    const settings = speedSettings[currentSpeed];
    const currentCard = cards[currentIndex];
    
    if (currentCard.type === 'joke') {
        if (!isRevealed) {
            const revealTimer = setTimeout(() => {
                if (!isPaused) {
                    isRevealed = true;
                    renderCards();
                    const nextTimer = setTimeout(() => {
                        if (!isPaused) nextCard();
                    }, settings.punchline);
                    timers.push(nextTimer);
                }
            }, settings.setup);
            timers.push(revealTimer);
        } else {
            const nextTimer = setTimeout(() => {
                if (!isPaused) nextCard();
            }, settings.punchline);
            timers.push(nextTimer);
        }
    } else {
        const nextTimer = setTimeout(() => {
            if (!isPaused) nextCard();
        }, settings.message);
        timers.push(nextTimer);
    }
}

/*
This Area Of Code Is: Clear All Timers Function
Explanation: Iterates through the timers array and cancels each timeout using 
clearTimeout. Then empties the array.
In Other Words: Stop all countdown timers and empty the list.
*/
function clearAllTimers() {
    timers.forEach(timer => clearTimeout(timer));
    timers = [];
}

/*
================================================================================
This Area Of Code Is: Community Submission Functions
Explanation: Functions for handling joke submissions from users - validating 
input, sending to server for moderation, and handling responses.
================================================================================
*/

/*
This Area Of Code Is: Submit Joke Function
Explanation: Handles the community joke submission form. Validates that setup 
and punchline are provided, shows loading state, sends POST request to server 
with the joke data, handles the response (success shows thank you message and 
adds joke to local array, failure shows error message), and clears the form 
on success.
In Other Words: When someone submits a joke, check they filled it out, send it 
to the server to be checked, then show "thank you" if approved or "sorry" if 
rejected. If approved, add it to the list immediately.
*/
async function submitJoke() {
    const setupInput = document.getElementById('jokeSetup');
    const punchlineInput = document.getElementById('jokePunchline');
    const authorInput = document.getElementById('authorName');
    const messageDiv = document.getElementById('submitMessage');
    
    const setup = setupInput.value.trim();
    const punchline = punchlineInput.value.trim();
    const author = authorInput.value.trim();
    
    /*
    This Area Of Code Is: Input Validation
    Explanation: Checks that both setup and punchline fields are filled. If 
    not, shows error message and exits.
    In Other Words: Make sure they wrote both the question and the answer. If 
    not, say "please fill out both fields."
    */
    if (!setup || !punchline) {
        messageDiv.textContent = 'Please fill out both the question and answer.';
        messageDiv.className = 'submit-message error';
        return;
    }
    
    messageDiv.textContent = 'Submitting for review...';
    messageDiv.className = 'submit-message';
    
    try {
        /*
        This Area Of Code Is: API Request
        Explanation: Sends POST request to /api/jokes endpoint with the joke 
        data as JSON. Includes setup, punchline, and author name.
        In Other Words: Send the joke to the server to be checked.
        */
        const response = await fetch('/api/jokes', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ setup, punchline, author })
        });
        
        const result = await response.json();
        
        /*
        This Area Of Code Is: Response Handling
        Explanation: If server returns passed: true, shows success message, 
        adds the new joke to the local cards array immediately so user sees it 
        without refreshing, and clears the form. If passed: false, shows the 
        rejection message from the server (could be inappropriate content or 
        community standards violation).
        In Other Words: If the server says "approved," say thank you, add the 
        joke to the list right away, and clear the form. If the server says 
        "rejected," show their reason (like "too political" or "bad words").
        */
        if (result.passed) {
            messageDiv.textContent = result.message;
            messageDiv.className = 'submit-message success';
            
            if (result.joke) {
                cards.push(result.joke);
                document.getElementById('progress').textContent = 
                    `Card ${currentIndex + 1} of ${cards.length}`;
                renderMenu();
            }
            
            setupInput.value = '';
            punchlineInput.value = '';
            authorInput.value = '';
        } else {
            messageDiv.textContent = result.message || 'Content did not pass moderation.';
            messageDiv.className = 'submit-message error';
        }
        
    } catch (error) {
        /*
        This Area Of Code Is: Error Handling
        Explanation: Catches network errors or server failures. Logs to console 
        and shows user-friendly error message.
        In Other Words: If the internet is broken or server is down, write it 
        down for the tech person and tell the user "try again later."
        */
        console.error('Submission error:', error);
        messageDiv.textContent = 'Network error. Please try again later.';
        messageDiv.className = 'submit-message error';
    }
}

/*
================================================================================
This Area Of Code Is: Event Listeners (Keyboard Controls)
Explanation: Listens for keyboard presses to allow control without clicking 
buttons (Space for reveal/pause, Arrows for navigation, Escape for menu).
================================================================================
*/
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        if (autoMode) {
            togglePause();
        } else if (cards[currentIndex] && cards[currentIndex].type === 'joke') {
            toggleReveal();
        } else {
            nextCard();
        }
    } else if (e.key === 'ArrowRight') {
        if (!autoMode || isPaused) nextCard();
    } else if (e.key === 'ArrowLeft') {
        if (!autoMode || isPaused) previousCard();
    } else if (e.key === 'Escape') {
        const panel = document.getElementById('menuPanel');
        if (panel.classList.contains('visible')) {
            toggleMenu();
        }
    }
});

/*
================================================================================
This Area Of Code Is: Initialization (Startup)
Explanation: Runs when the page loads. Calls functions to initialize background 
animation, set default speed, and fetch jokes from the server.
In Other Words: Start everything up when the page opens - make the background 
move, set the speed to Slow, and get the jokes from the server.
================================================================================
*/
initBackground();
setSpeed('slow');
fetchJokes();
