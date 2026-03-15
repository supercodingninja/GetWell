/*
================================================================================
This Area Of Code Is: Card Data Array (The Content Database)
Explanation: This is an array (list) of 24 objects, where each object represents one card. Each object contains properties like type (joke, prayer, message), icon (emoji), tag (category label), content or setup/punchline (the text), and preview (text for the menu). This is the "database" of all content displayed in the app. No external files needed - everything is self-contained.
In Other Words: This is the list of all 24 jokes and messages. Each one has an emoji, the joke text, and info about what type of card it is (joke, prayer, etc.).
================================================================================
*/

/*
This Area Of Code Is: Cards Array Declaration
Explanation: We declare a constant variable named "cards" that holds an array of objects. "const" means this won't change (though the contents inside can be modified). Each object in the array represents one flash card with properties like type, icon, tag, content, setup, punchline, and preview.
In Other Words: This creates the list that holds all our jokes. We use "const" because we don't want to accidentally replace the whole list, just look at items in it.
*/
const cards = [
    /*
    This Area Of Code Is: Individual Card Object (Example: Prayer Card)
    Explanation: This is the first object in the array. It has:
    - type: "prayer" (tells the app how to display it)
    - icon: "✝️" (the emoji shown at the top)
    - tag: "Prayer" (the label in the corner)
    - content: The full text to display
    - preview: Short text for the menu list
    In Other Words: This is the first card - a prayer with a cross emoji. The "type" tells the app "this is a prayer, not a joke, so show all the text at once."
    */
    {
        type: 'prayer',
        icon: '✝️',
        tag: 'Prayer',
        content: 'The Lord is my shepherd; I shall not want. He makes me lie down in green pastures.\n\nHealing is coming. Be still and know that He is God.',
        preview: 'The Lord is my shepherd...'
    },
    
    /*
    This Area Of Code Is: Joke Card Object Structure
    Explanation: Joke cards have "type: 'joke'", a "setup" (the question), and a "punchline" (the answer). The app will hide the punchline initially and show it when the button is clicked.
    In Other Words: This is a joke card. It has the question (setup) and the answer (punchline) separate so we can hide the answer until the button is pressed.
    */
    {
        type: 'joke',
        icon: '🧪',
        tag: 'Joke',
        setup: 'Why don\'t scientists trust atoms?',
        punchline: 'Because they make up everything!',
        preview: 'Why don\'t scientists trust atoms?'
    },
    {
        type: 'joke',
        icon: '🍝',
        tag: 'Joke',
        setup: 'What do you call a fake noodle?',
        punchline: 'An impasta!',
        preview: 'What do you call a fake noodle?'
    },
    {
        type: 'message',
        icon: '💪',
        tag: 'Strength',
        content: 'Tough times don\'t last. Tough people do.\n\nAnd you are tougher than you know.\n\nKeep fighting, brother.',
        preview: 'Tough times don\'t last...'
    },
    {
        type: 'joke',
        icon: '☕',
        tag: 'Joke',
        setup: 'Why did the coffee file a police report?',
        punchline: 'It got mugged!',
        preview: 'Why did the coffee file a police report?'
    },
    {
        type: 'joke',
        icon: '🐧',
        tag: 'Joke',
        setup: 'How does a penguin build its house?',
        punchline: 'Igloos it together!',
        preview: 'How does a penguin build its house?'
    },
    {
        type: 'joke',
        icon: '🥚',
        tag: 'Joke',
        setup: 'Why don\'t eggs tell jokes?',
        punchline: 'They\'d crack each other up!',
        preview: 'Why don\'t eggs tell jokes?'
    },
    {
        type: 'joke',
        icon: '🐻',
        tag: 'Joke',
        setup: 'What do you call a bear with no teeth?',
        punchline: 'A gummy bear!',
        preview: 'What do you call a bear with no teeth?'
    },
    {
        type: 'prayer',
        icon: '🕊️',
        tag: 'Faith',
        content: 'May the God of hope fill you with all joy and peace as you trust in Him.\n\nThe whole church family is praying for you daily.',
        preview: 'May the God of hope fill you...'
    },
    {
        type: 'joke',
        icon: '🌾',
        tag: 'Joke',
        setup: 'Why did the scarecrow win an award?',
        punchline: 'Because he was outstanding in his field!',
        preview: 'Why did the scarecrow win an award?'
    },
    {
        type: 'joke',
        icon: '🪵',
        tag: 'Joke',
        setup: 'What\'s brown and sticky?',
        punchline: 'A stick!',
        preview: 'What\'s brown and sticky?'
    },
    {
        type: 'joke',
        icon: '❄️',
        tag: 'Joke',
        setup: 'Why can\'t you give Elsa a balloon?',
        punchline: 'Because she will let it go!',
        preview: 'Why can\'t you give Elsa a balloon?'
    },
    {
        type: 'message',
        icon: '🙏',
        tag: 'Encouragement',
        content: 'You are braver than you believe, stronger than you seem, and loved more than you know.\n\nGet well soon!',
        preview: 'You are braver than you believe...'
    },
    {
        type: 'joke',
        icon: '🧀',
        tag: 'Joke',
        setup: 'What do you call cheese that isn\'t yours?',
        punchline: 'Nacho cheese!',
        preview: 'What do you call cheese that isn\'t yours?'
    },
    {
        type: 'joke',
        icon: '📚',
        tag: 'Joke',
        setup: 'Why did the math book look sad?',
        punchline: 'Because it had too many problems!',
        preview: 'Why did the math book look sad?'
    },
    {
        type: 'joke',
        icon: '🦕',
        tag: 'Joke',
        setup: 'What do you call a sleeping dinosaur?',
        punchline: 'A dino-snore!',
        preview: 'What do you call a sleeping dinosaur?'
    },
    {
        type: 'joke',
        icon: '🚲',
        tag: 'Joke',
        setup: 'Why did the bicycle fall over?',
        punchline: 'Because it was two-tired!',
        preview: 'Why did the bicycle fall over?'
    },
    {
        type: 'message',
        icon: '🇺🇸',
        tag: 'Honor',
        content: 'Just like our veterans who never give up, you keep fighting.\n\nYour strength honors them.',
        preview: 'Just like our veterans...'
    },
    {
        type: 'joke',
        icon: '🐱',
        tag: 'Joke',
        setup: 'What do you call a pile of cats?',
        punchline: 'A meowtain!',
        preview: 'What do you call a pile of cats?'
    },
    {
        type: 'joke',
        icon: '💀',
        tag: 'Joke',
        setup: 'Why don\'t skeletons fight each other?',
        punchline: 'They don\'t have the guts!',
        preview: 'Why don\'t skeletons fight each other?'
    },
    {
        type: 'joke',
        icon: '🪃',
        tag: 'Joke',
        setup: 'What do you call a boomerang that doesn\'t come back?',
        punchline: 'A stick!',
        preview: 'What do you call a boomerang...?'
    },
    {
        type: 'message',
        icon: '🦁',
        tag: 'Courage',
        content: 'The Lord is with you. Be strong and courageous!\n\nJoshua 1:9',
        preview: 'The Lord is with you...'
    },
    {
        type: 'joke',
        icon: '🌊',
        tag: 'Joke',
        setup: 'What did the ocean say to the shore?',
        punchline: 'Nothing, it just waved!',
        preview: 'What did the ocean say to the shore?'
    },
    {
        type: 'message',
        icon: '⛪',
        tag: 'Church Family',
        content: 'The church isn\'t the same without you. We\'re saving your seat!\n\nCome back to us soon, brother.',
        preview: 'The church isn\'t the same without you...'
    }
];

/*
================================================================================
This Area Of Code Is: State Variables (Memory/Tracking)
Explanation: These variables keep track of the current state of the app - which card is showing, whether the punchline is revealed, if auto mode is on, if it's paused, what speed is selected, and active timers. These change as the user interacts with the app.
In Other Words: These are the app's memory. They remember things like "we're on card 5," "the answer is showing," or "auto mode is paused right now."
================================================================================
*/

/*
This Area Of Code Is: Current Index Tracker
Explanation: This variable stores which card number we're currently viewing. Starts at 0 (the first card in the array). Arrays in JavaScript start counting at 0, not 1.
In Other Words: This remembers which joke we're looking at right now. It starts at 0 because computers start counting at 0, not 1.
*/
let currentIndex = 0;

/*
This Area Of Code Is: Punchline Revealed State
Explanation: Boolean (true/false) tracking whether the punchline is currently visible on joke cards. Starts as false (hidden).
In Other Words: This remembers if the answer to the joke is showing (true) or hidden (false). Starts hidden.
*/
let isRevealed = false;

/*
This Area Of Code Is: Auto Mode State
Explanation: Boolean tracking whether the slideshow is running automatically. When true, cards advance automatically after timers expire.
In Other Words: This remembers if the app is automatically going through the jokes by itself (true) or waiting for button presses (false).
*/
let autoMode = false;

/*
This Area Of Code Is: Pause State
Explanation: Boolean tracking whether the auto mode is currently paused. When true, timers are stopped and the slideshow is frozen.
In Other Words: This remembers if we pressed the pause button to freeze the automatic slideshow.
*/
let isPaused = false;

/*
This Area Of Code Is: Current Speed Setting
Explanation: String storing the current speed selection: "slow", "medium", or "fast". Affects timer durations.
In Other Words: This remembers if we picked Slow, Medium, or Fast speed for the automatic mode.
*/
let currentSpeed = 'slow';

/*
This Area Of Code Is: Active Timers Array
Explanation: Array storing references to active setTimeout timers. We store them so we can clear (cancel) them if the user pauses or stops auto mode.
In Other Words: This is a list of countdown timers that are running. We keep track of them so we can stop them if the user presses pause.
*/
let timers = [];

/*
This Area Of Code Is: Speed Settings Configuration Object
Explanation: An object containing the timing configurations for each speed mode. Each mode has setup time (how long to show the joke question), punchline time (how long to show the answer), and message time (how long to show non-joke cards), all in milliseconds.
In Other Words: This is the chart that says how long to wait for each speed: Slow waits 8 seconds, Medium waits 6 seconds, etc. The numbers are in milliseconds (1 second = 1000 milliseconds).
*/
const speedSettings = {
    slow: { setup: 8000, punchline: 10000, message: 12000, name: 'Slow' },
    medium: { setup: 6000, punchline: 8000, message: 10000, name: 'Medium' },
    fast: { setup: 4000, punchline: 6000, message: 8000, name: 'Fast' }
};

/*
================================================================================
This Area Of Code Is: Core Rendering Functions (Display Logic)
Explanation: These functions control what appears on the screen. They create the HTML for cards, update buttons, and refresh the display when things change.
In Other Words: These are the functions that draw the cards on the screen and update the buttons.
================================================================================
*/

/*
This Area Of Code Is: Render Cards Function
Explanation: This is the main function that draws the current card on the screen. It:
1. Gets the card data from the cards array using currentIndex
2. Creates a new div element for the card
3. Adds appropriate CSS classes based on card type (joke, prayer, message)
4. Builds the HTML content (icon, tag, text)
5. If it's a joke, it adds the setup and punchline (hidden initially)
6. If punchline should be revealed, adds the "revealed" class
7. Clears the old card and inserts the new one
8. Calls updateControls to refresh buttons
In Other Words: This is the artist that paints the card on the screen. It looks at which card number we're on, gets that joke from the list, creates the HTML for it, and puts it on the page. If it's a joke, it hides the answer until we say to show it.
*/
function renderCards() {
    /*
    This Area Of Code Is: Get Card Stack Container
    Explanation: Gets a reference to the HTML element with id="cardStack" where cards are displayed. We store it in a constant variable "stack".
    In Other Words: Find the box on the page where we put the cards.
    */
    const stack = document.getElementById('cardStack');
    
    /*
    This Area Of Code Is: Clear Previous Cards
    Explanation: Sets the innerHTML to empty string, removing any previously displayed cards. This prevents cards from stacking up.
    In Other Words: Erase the old card before drawing the new one.
    */
    stack.innerHTML = '';
    
    /*
    This Area Of Code Is: Get Current Card Data
    Explanation: Accesses the cards array at the currentIndex position to get the data for the card we need to display.
    In Other Words: Look at our list of jokes and pick the one for the current card number.
    */
    const card = cards[currentIndex];
    
    /*
    This Area Of Code Is: Create Card Element
    Explanation: Creates a new div (division/container) element in memory. This will become our flash card.
    In Other Words: Create a new empty box to put our card content in.
    */
    const cardEl = document.createElement('div');
    
    /*
    This Area Of Code Is: Add CSS Classes to Card
    Explanation: Sets the className to include "flash-card", the specific type class (like "card-joke"), and "active" (to make it visible and centered).
    In Other Words: Give the card its styling classes so it looks right (brown border for jokes, visible state, etc.).
    */
    cardEl.className = `flash-card card-${card.type}`;
    cardEl.classList.add('active');
    
    /*
    This Area Of Code Is: Build Card HTML Content
    Explanation: Creates a string variable containing the HTML structure for the card. Starts with the tag (top right label) and icon (big emoji).
    In Other Words: Start building the card HTML with the label and big emoji.
    */
    let innerHTML = `
        <div class="tag">${card.tag}</div>
        <div class="icon">${card.icon}</div>
    `;
    
    /*
    This Area Of Code Is: Conditional Content Based on Type
    Explanation: Checks if this is a joke card. If yes, adds setup (question) and punchline (answer). If no (message/prayer), adds content (full text).
    In Other Words: If it's a joke, put the question and hidden answer. If it's a prayer, put the full prayer text.
    */
    if (card.type === 'joke') {
        /*
        This Area Of Code Is: Joke Card HTML Structure
        Explanation: Adds two divs - one for the setup (question) with class "setup", and one for the punchline (answer) with class "punchline".
        In Other Words: Add the joke question and the hidden answer boxes.
        */
        innerHTML += `
            <div class="setup">${card.setup}</div>
            <div class="punchline">${card.punchline}</div>
        `;
        
        /*
        This Area Of Code Is: Check Reveal State
        Explanation: If isRevealed is true, adds the "revealed" class to the card element, which makes the punchline visible via CSS.
        In Other Words: If we should show the answer, add the class that makes it visible.
        */
        if (isRevealed) {
            cardEl.classList.add('revealed');
        }
    } else {
        /*
        This Area Of Code Is: Message Card HTML Structure
        Explanation: For non-joke cards, adds a single div with class "content" containing the full text.
        In Other Words: For prayers and messages, just show all the text at once in one box.
        */
        innerHTML += `<div class="content">${card.content}</div>`;
    }
    
    /*
    This Area Of Code Is: Insert HTML into Card Element
    Explanation: Sets the innerHTML of the card element to the HTML string we built.
    In Other Words: Put the HTML we built into the card box.
    */
    cardEl.innerHTML = innerHTML;
    
    /*
    This Area Of Code Is: Append Card to Stack
    Explanation: Adds the newly created card element to the card stack container in the DOM (Document Object Model - the page structure).
    In Other Words: Put the finished card onto the page so the user can see it.
    */
    stack.appendChild(cardEl);
    
    /*
    This Area Of Code Is: Update Control Buttons
    Explanation: Calls the function that updates the button states (show/hide punchline button, update text, etc.).
    In Other Words: Now update the buttons at the bottom to match this card.
    */
    updateControls();
    
    /*
    This Area Of Code Is: Update Menu Highlight
    Explanation: Calls the function that highlights the current card in the slide-in menu.
    In Other Words: Also update the menu to show which card we're on.
    */
    updateMenuHighlight();
}

/*
This Area Of Code Is: Update Controls Function
Explanation: Updates the button states and visibility based on the current card:
1. Gets references to the buttons
2. If current card is a joke, shows the reveal button and sets text to "Show" or "Hide" based on isRevealed
3. If not a joke, hides the reveal button
4. Updates the progress counter (Card X of 24)
In Other Words: This updates the buttons at the bottom. If it's a joke, show the "Show Answer" button. If not, hide it. Also update the "Card 5 of 24" text.
*/
function updateControls() {
    /*
    This Area Of Code Is: Get Button Elements
    Explanation: Gets references to the reveal button, previous button, and next button from the HTML.
    In Other Words: Find the buttons on the page so we can change them.
    */
    const currentCard = cards[currentIndex];
    const revealBtn = document.getElementById('revealBtn');
    
    /*
    This Area Of Code Is: Conditional Button Display
    Explanation: Checks if current card is a joke. If yes, shows the reveal button and sets appropriate text. If not, hides it.
    In Other Words: If this is a joke card, show the answer button and say either "Show Answer" or "Hide Answer" depending on if it's already showing.
    */
    if (currentCard.type === 'joke') {
        revealBtn.style.display = 'inline-block';
        revealBtn.textContent = isRevealed ? 'Hide Punchline' : 'Show Punchline';
    } else {
        revealBtn.style.display = 'none';
    }
    
    /*
    This Area Of Code Is: Update Progress Counter
    Explanation: Updates the text content of the progress element to show current card number (adding 1 because arrays start at 0 but we want to display "Card 1" not "Card 0").
    In Other Words: Update the text at the bottom to say which card number we're on (adding 1 because computers count 0,1,2 but humans count 1,2,3).
    */
    document.getElementById('progress').textContent = `Card ${currentIndex + 1} of ${cards.length}`;
}

/*
This Area Of Code Is: Toggle Punchline Function
Explanation: Toggles the visibility of the punchline for joke cards. If currently hidden, shows it. If currently shown, hides it. Updates the display and handles auto mode timing if active.
In Other Words: When you click the "Show/Hide Answer" button, this flips it - if hidden, show it. If showing, hide it.
*/
function toggleReveal() {
    /*
    This Area Of Code Is: Get Current Card Data
    Explanation: Gets the current card object to check if it's a joke.
    In Other Words: Look at what card we're on.
    */
    const currentCard = cards[currentIndex];
    
    /*
    This Area Of Code Is: Type Check and Toggle
    Explanation: Only proceeds if it's a joke card. Flips the isRevealed boolean (true becomes false, false becomes true).
    In Other Words: Only do this for jokes. Flip the switch: if it was hidden, now it's showing. If it was showing, now it's hidden.
    */
    if (currentCard.type === 'joke') {
        isRevealed = !isRevealed;
        
        /*
        This Area Of Code Is: Re-render Card
        Explanation: Calls renderCards to update the display with the new revealed state.
        In Other Words: Redraw the card to show the change.
        */
        renderCards();
        
        /*
        This Area Of Code Is: Auto Mode Continuation Logic
        Explanation: If auto mode is active and not paused and we just revealed the punchline, sets a timer to advance to next card after the punchline display time.
        In Other Words: If auto mode is running and we just showed the answer, wait a bit then go to the next card automatically.
        */
        if (autoMode && !isPaused && isRevealed) {
            clearAllTimers();
            const settings = speedSettings[currentSpeed];
            const timer = setTimeout(() => {
                if (!isPaused) nextCard();
            }, settings.punchline);
            timers.push(timer);
        }
    }
}

/*
================================================================================
This Area Of Code Is: Navigation Functions (Moving Between Cards)
Explanation: These functions handle moving to the next card, previous card, or jumping to a specific card via the menu.
In Other Words: These functions handle the "Next" button, going back, and jumping to specific jokes from the menu.
================================================================================
*/

/*
This Area Of Code Is: Next Card Function
Explanation: Advances to the next card in the sequence. Checks if we're at the end (card 24). If not, increments currentIndex, resets isRevealed to false (hide punchline), re-renders the card, and continues auto mode if active. If at end during auto mode, stops auto mode and shows completion message.
In Other Words: Go to the next joke. Hide the answer (reset). If we're at the last joke and auto mode is on, stop and say "all done."
*/
function nextCard() {
    /*
    This Area Of Code Is: Boundary Check
    Explanation: Checks if currentIndex is less than the last index (cards.length - 1). If yes, we can advance. If no, we're at the end.
    In Other Words: Check if there are more jokes after this one.
    */
    if (currentIndex < cards.length - 1) {
        /*
        This Area Of Code Is: Advance Index
        Explanation: Increments currentIndex by 1 to move to next card. Resets isRevealed to false so punchlines are hidden on new joke cards.
        In Other Words: Move to the next joke number and hide the answer (so the new joke starts with the answer hidden).
        */
        currentIndex++;
        isRevealed = false;
        
        /*
        This Area Of Code Is: Update Display
        Explanation: Calls renderCards to display the new current card.
        In Other Words: Show the new joke on screen.
        */
        renderCards();
        
        /*
        This Area Of Code Is: Continue Auto Mode
        Explanation: If auto mode is on and not paused, schedules the next auto advancement.
        In Other Words: If auto mode is running, keep the automatic slideshow going.
        */
        if (autoMode && !isPaused) {
            scheduleAutoSequence();
        }
    } else if (autoMode) {
        /*
        This Area Of Code Is: End of Deck Handling
        Explanation: If we're at the last card and auto mode is on, stops auto mode and shows an alert after a short delay.
        In Other Words: If we reached the last joke and auto mode is on, stop the slideshow and say "all done."
        */
        stopAuto();
        setTimeout(() => {
            alert('All done! Hope that brought a smile to your face. 🙏');
        }, 500);
    }
}

/*
This Area Of Code Is: Previous Card Function
Explanation: Moves to the previous card if not at the beginning and not restricted by auto mode. Decrements currentIndex and resets isRevealed.
In Other Words: Go back to the previous joke (if we're not on the first one).
*/
function previousCard() {
    /*
    This Area Of Code Is: Validity Check
    Explanation: Only allows going back if not on first card (index > 0) and either not in auto mode or currently paused.
    In Other Words: Only go back if: 1) We're not on the first joke, AND 2) We're not in auto mode OR we paused it.
    */
    if (currentIndex > 0 && (!autoMode || isPaused)) {
        currentIndex--;
        isRevealed = false;
        renderCards();
    }
}

/*
This Area Of Code Is: Jump to Card Function
Explanation: Allows jumping to any specific card by index (used by the menu). Sets currentIndex to the target, resets reveal state, closes menu, and continues auto mode if applicable.
In Other Words: Jump directly to a specific joke number (used when clicking an item in the menu).
*/
function jumpToCard(index) {
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
This Area Of Code Is: Menu Functions (Slide-in Navigation)
Explanation: These functions control the slide-in menu that shows all cards and allows jumping to any card.
In Other Words: These functions open and close the side menu that lists all the jokes.
================================================================================
*/

/*
This Area Of Code Is: Toggle Menu Function
Explanation: Opens or closes the slide-in menu by toggling the "visible" class on the overlay and panel elements. The CSS handles the sliding animation.
In Other Words: Open or close the side menu by adding/removing the "visible" class.
*/
function toggleMenu() {
    /*
    This Area Of Code Is: Get Menu Elements
    Explanation: Gets references to the dark overlay and the menu panel.
    In Other Words: Find the menu parts on the page.
    */
    const overlay = document.getElementById('menuOverlay');
    const panel = document.getElementById('menuPanel');
    
    /*
    This Area Of Code Is: Toggle Visible Classes
    Explanation: Toggles (adds if not present, removes if present) the "visible" class on both elements. This triggers CSS transitions.
    In Other Words: Flip the visibility - if open, close it. If closed, open it.
    */
    overlay.classList.toggle('visible');
    panel.classList.toggle('visible');
    
    /*
    This Area Of Code Is: Render Menu List
    Explanation: If opening the menu (panel now has visible class), calls renderMenu to populate the list with current card data.
    In Other Words: If we just opened the menu, fill it with the list of jokes.
    */
    if (panel.classList.contains('visible')) {
        renderMenu();
    }
}

/*
This Area Of Code Is: Render Menu Function
Explanation: Populates the slide-in menu with items representing all 24 cards. Creates HTML for each item including number, type, preview text, and icon. Adds click handlers to jump to that card.
In Other Words: Create the list of all jokes in the side menu with numbers and previews.
*/
function renderMenu() {
    /*
    This Area Of Code Is: Get Menu List Container
    Explanation: Gets the div where menu items will be inserted.
    In Other Words: Find the box in the menu where we put the list.
    */
    const menuList = document.getElementById('menuList');
    
    /*
    This Area Of Code Is: Clear Previous Items
    Explanation: Empties the menu list to prevent duplicates when reopening.
    In Other Words: Clear the old list before making a new one.
    */
    menuList.innerHTML = '';
    
    /*
    This Area Of Code Is: Loop Through Cards
    Explanation: Iterates through the cards array using forEach, creating a menu item for each card.
    In Other Words: Go through each joke one by one and make a menu row for it.
    */
    cards.forEach((card, index) => {
        /*
        This Area Of Code Is: Create Menu Item Element
        Explanation: Creates a div for this menu item and adds classes. Adds "current" class if this is the active card.
        In Other Words: Create a box for this menu item. If it's the joke we're currently looking at, highlight it in green.
        */
        const item = document.createElement('div');
        item.className = `menu-item ${index === currentIndex ? 'current' : ''}`;
        
        /*
        This Area Of Code Is: Add Click Handler
        Explanation: Sets the onclick event to call jumpToCard with this index when clicked.
        In Other Words: When you click this menu item, jump to that joke.
        */
        item.onclick = () => jumpToCard(index);
        
        /*
        This Area Of Code Is: Build Menu Item HTML
        Explanation: Creates the inner HTML structure: number circle, content div with type and preview, and the icon.
        In Other Words: Fill the menu row with the number, the joke preview text, and the emoji.
        */
        item.innerHTML = `
            <div class="menu-item-number">${index + 1}</div>
            <div class="menu-item-content">
                <div class="menu-item-type">${card.tag}</div>
                <div class="menu-item-preview">${card.preview || card.setup || card.content.substring(0, 30) + '...'}</div>
            </div>
            <div>${card.icon}</div>
        `;
        
        /*
        This Area Of Code Is: Append to Menu
        Explanation: Adds this item to the menu list container.
        In Other Words: Add this row to the menu list.
        */
        menuList.appendChild(item);
    });
}

/*
This Area Of Code Is: Update Menu Highlight Function
Explanation: Updates which menu item is highlighted as "current" without re-rendering the entire menu. Useful for reflecting navigation changes while menu is open.
In Other Words: Update the green highlight in the menu to show which joke we're on now.
*/
function updateMenuHighlight() {
    /*
    This Area Of Code Is: Get All Menu Items
    Explanation: Queries all elements with class "menu-item".
    In Other Words: Get all the rows in the menu.
    */
    const items = document.querySelectorAll('.menu-item');
    
    /*
    This Area Of Code Is: Update Each Item
    Explanation: Loops through items, adds "current" class if index matches currentIndex, removes if not. Also scrolls current item into view.
    In Other Words: Go through each row - if it's the joke we're on, make it green. If not, remove the green. Also scroll to keep it visible.
    */
    items.forEach((item, index) => {
        if (index === currentIndex) {
            item.classList.add('current');
            item.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            item.classList.remove('current');
        }
    });
}

/*
================================================================================
This Area Of Code Is: Auto Mode Functions (Automatic Slideshow)
Explanation: These functions handle the automatic playback mode where cards advance on timers without user clicking.
In Other Words: These functions run the automatic slideshow where jokes change by themselves.
================================================================================
*/

/*
This Area Of Code Is: Toggle Settings Panel
Explanation: Shows or hides the Auto Mode settings panel (speed selection) by toggling the "visible" class.
In Other Words: Show or hide the speed selection popup.
*/
function toggleSettings() {
    const panel = document.getElementById('settingsPanel');
    panel.classList.toggle('visible');
}

/*
This Area Of Code Is: Set Speed Function
Explanation: Updates the currentSpeed variable and UI to reflect the selected speed (slow, medium, fast). Updates button styling and explanation text.
In Other Words: When you click Slow, Medium, or Fast, this remembers your choice and updates the text to explain the timing.
*/
function setSpeed(speed) {
    /*
    This Area Of Code Is: Update Speed Variable
    Explanation: Sets currentSpeed to the selected value ('slow', 'medium', or 'fast').
    In Other Words: Remember which speed was picked.
    */
    currentSpeed = speed;
    
    /*
    This Area Of Code Is: Update Button Styles
    Explanation: Removes "selected" class from all speed buttons, then adds it to the clicked one.
    In Other Words: Make the clicked button blue and the others not blue.
    */
    ['slow', 'medium', 'fast'].forEach(s => {
        document.getElementById(s + 'Btn').classList.remove('selected');
    });
    document.getElementById(speed + 'Btn').classList.add('selected');
    
    /*
    This Area Of Code Is: Update Explanation Text
    Explanation: Gets the timing settings for selected speed and updates the explanation div with the timing details.
    In Other Words: Update the text box to show how many seconds each part will take.
    */
    const settings = speedSettings[speed];
    const explanation = document.getElementById('timingExplanation');
    
    let text = `<strong>${settings.name} Mode:</strong><br>`;
    text += `Joke Setup: ${settings.setup/1000}s<br>`;
    text += `Punchline: ${settings.punchline/1000}s<br>`;
    text += `Messages: ${settings.message/1000}s`;
    
    if (speed === 'slow') {
        text += `<br><em>Recommended for hospital rest.</em>`;
    }
    
    explanation.innerHTML = text;
}

/*
This Area Of Code Is: Start Auto Mode Function
Explanation: Initializes automatic slideshow mode. Hides settings panel, updates button states to show auto mode is active, shows pause button, updates instruction text, and starts the first timer.
In Other Words: Start the automatic slideshow. Change the buttons to show it's running, show the pause button, and start the first timer.
*/
function startAuto() {
    /*
    This Area Of Code Is: Set State Variables
    Explanation: Sets autoMode to true and isPaused to false.
    In Other Words: Turn on auto mode and make sure it's not paused.
    */
    autoMode = true;
    isPaused = false;
    
    /*
    This Area Of Code Is: Update UI Elements
    Explanation: Hides settings panel, adds "active" class to auto button, changes its text to "Stop Auto", changes its click handler to stopAuto, shows status text and pause button, updates instructions.
    In Other Words: Change the look of the page to show auto mode is running: green pulsing button, show "Stop" instead of "Start", show the pause button.
    */
    document.getElementById('settingsPanel').classList.remove('visible');
    document.getElementById('autoBtn').classList.add('active');
    document.getElementById('autoBtn').textContent = '⏹ Stop Auto';
    document.getElementById('autoBtn').onclick = stopAuto;
    document.getElementById('autoStatus').classList.add('visible');
    document.getElementById('pauseBtn').classList.add('visible');
    document.getElementById('instruction').textContent = 'Auto Mode: Press SPACE to pause. Menu to jump cards.';
    
    /*
    This Area Of Code Is: Reset if at End
    Explanation: If currently on the last card and punchline is revealed, resets to beginning.
    In Other Words: If we were at the end, start over from the beginning.
    */
    if (currentIndex === cards.length - 1 && isRevealed) {
        currentIndex = 0;
        isRevealed = false;
    }
    
    /*
    This Area Of Code Is: Initial Render and Timer
    Explanation: Renders the current card and starts the auto timer sequence.
    In Other Words: Show the card and start the countdown.
    */
    renderCards();
    scheduleAutoSequence();
}

/*
This Area Of Code Is: Stop Auto Mode Function
Explanation: Stops automatic playback. Clears all timers, resets state variables, restores UI to manual mode appearance.
In Other Words: Stop the automatic slideshow and go back to manual button pressing.
*/
function stopAuto() {
    /*
    This Area Of Code Is: Reset State
    Explanation: Sets autoMode and isPaused to false, clears all active timers.
    In Other Words: Turn off auto mode and stop all countdowns.
    */
    autoMode = false;
    isPaused = false;
    clearAllTimers();
    
    /*
    This Area Of Code Is: Restore UI
    Explanation: Removes active styling from auto button, changes text back to "Auto Mode", restores click handler to toggleSettings, hides status and pause elements, resets pause button appearance, restores instruction text.
    In Other Words: Put all the buttons back to how they were before auto mode started.
    */
    document.getElementById('autoBtn').classList.remove('active');
    document.getElementById('autoBtn').textContent = '⚙️ Auto Mode';
    document.getElementById('autoBtn').onclick = toggleSettings;
    document.getElementById('autoStatus').classList.remove('visible');
    document.getElementById('pauseBtn').classList.remove('visible');
    document.getElementById('pausedNotice').classList.remove('visible');
    document.getElementById('pauseBtn').textContent = '⏸ Pause';
    document.getElementById('pauseBtn').classList.remove('paused');
    document.getElementById('instruction').textContent = 'Press "Menu" to jump to any card. Toggle punchline on/off.';
    renderCards();
}

/*
This Area Of Code Is: Toggle Pause Function
Explanation: Pauses or resumes the auto mode slideshow. When pausing, clears timers and updates UI to show paused state. When resuming, restarts the timer sequence.
In Other Words: Pause the slideshow (if running) or resume it (if paused).
*/
function togglePause() {
    /*
    This Area Of Code Is: Guard Clause
    Explanation: If not in auto mode, exits function early (can't pause if not playing).
    In Other Words: If auto mode isn't running, don't do anything.
    */
    if (!autoMode) return;
    
    /*
    This Area Of Code Is: Toggle Pause State
    Explanation: Flips the isPaused boolean.
    In Other Words: Switch between paused and not paused.
    */
    isPaused = !isPaused;
    
    /*
    This Area Of Code Is: Get UI Elements
    Explanation: Gets references to pause button and status notices.
    In Other Words: Find the pause button and status text.
    */
    const pauseBtn = document.getElementById('pauseBtn');
    const pausedNotice = document.getElementById('pausedNotice');
    const autoStatus = document.getElementById('autoStatus');
    
    /*
    This Area Of Code Is: Conditional UI Update
    Explanation: If now paused, clear timers, change button to "Resume", show paused notice, hide auto status. If resuming, change button back to "Pause", hide paused notice, show auto status, restart timer sequence.
    In Other Words: If pausing: stop the countdown, change button to say "Resume", show "PAUSED" text. If resuming: start countdown again, change button back to "Pause", hide the paused text.
    */
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
Explanation: Sets up the timer chain for automatic advancement. Clears old timers first. For joke cards: waits for setup time, reveals punchline, waits for punchline time, then advances. For message cards: waits for message time then advances.
In Other Words: Set up the countdown timers for auto mode. If it's a joke: wait, show answer, wait, go to next. If it's a message: wait, go to next.
*/
function scheduleAutoSequence() {
    /*
    This Area Of Code Is: Guard Checks
    Explanation: Only proceeds if auto mode is on and not paused.
    In Other Words: Only do this if auto mode is running and not paused.
    */
    if (!autoMode || isPaused) return;
    
    /*
    This Area Of Code Is: Clear Existing Timers
    Explanation: Clears any existing timers to prevent duplicates or conflicts.
    In Other Words: Cancel any old countdowns before starting new ones.
    */
    clearAllTimers();
    
    /*
    This Area Of Code Is: Get Timing Settings
    Explanation: Gets the timing values for the current speed setting.
    In Other Words: Look up how long to wait based on Slow/Medium/Fast setting.
    */
    const settings = speedSettings[currentSpeed];
    const currentCard = cards[currentIndex];
    
    /*
    This Area Of Code Is: Conditional Timer Logic
    Explanation: Different logic for joke cards vs message cards. Jokes have two phases (setup then punchline), messages have one phase.
    In Other Words: If it's a joke, do the two-step timer (question, then answer). If it's a message, just wait once.
    */
    if (currentCard.type === 'joke') {
        if (!isRevealed) {
            /*
            This Area Of Code Is: Phase 1 - Setup Display
            Explanation: Sets timer to wait for setup duration, then reveal punchline and start phase 2 timer.
            In Other Words: Wait for the question to be read, then show the answer and start waiting again.
            */
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
            /*
            This Area Of Code Is: Already Revealed
            Explanation: If punchline is already showing, just wait for punchline duration then advance.
            In Other Words: If the answer is already showing, just wait then go to next.
            */
            const nextTimer = setTimeout(() => {
                if (!isPaused) nextCard();
            }, settings.punchline);
            timers.push(nextTimer);
        }
    } else {
        /*
        This Area Of Code Is: Message Card Timer
        Explanation: For non-joke cards, simply waits for the message duration then advances.
        In Other Words: For prayers and messages, just wait then go to next.
        */
        const nextTimer = setTimeout(() => {
            if (!isPaused) nextCard();
        }, settings.message);
        timers.push(nextTimer);
    }
}

/*
This Area Of Code Is: Clear All Timers Function
Explanation: Iterates through the timers array and calls clearTimeout on each to cancel them. Then empties the array.
In Other Words: Stop all countdown timers and empty the list.
*/
function clearAllTimers() {
    timers.forEach(timer => clearTimeout(timer));
    timers = [];
}

/*
================================================================================
This Area Of Code Is: Background Animation Function
Explanation: Creates the floating stars, flags, and crosses in the background for visual appeal.
In Other Words: This makes the floating stars and flags drift up in the background.
================================================================================
*/

/*
This Area Of Code Is: Create Background Elements Function
Explanation: Creates 8 floating elements (stars, flags, crosses) with random positions, sizes, and animation timings. Appends them to the background container.
In Other Words: Create 8 floating things (stars, American flags, crosses) that float up from the bottom at different speeds and sizes.
*/
function createBackground() {
    /*
    This Area Of Code Is: Get Container and Symbols
    Explanation: Gets the background container div and defines the array of emojis to use.
    In Other Words: Find the background box and pick the emojis to float (stars, flags, crosses, etc.).
    */
    const container = document.getElementById('background');
    const symbols = ['⭐', '✨', '🇺🇸', '✝️', '🕊️', '🎖️'];
    
    /*
    This Area Of Code Is: Create Elements Loop
    Explanation: Loop runs 8 times to create 8 floating elements. Each gets random properties.
    In Other Words: Do this 8 times to make 8 floating things.
    */
    for (let i = 0; i < 8; i++) {
        /*
        This Area Of Code Is: Create Star Element
        Explanation: Creates a div, adds "star" class, picks random emoji from symbols array.
        In Other Words: Create a floating thing and pick a random emoji for it.
        */
        const star = document.createElement('div');
        star.className = 'star';
        star.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        
        /*
        This Area Of Code Is: Set Random Properties
        Explanation: Sets random horizontal position (left: 0-100%), random animation duration (20-30 seconds), random delay (0-20 seconds), and random size (16-28px).
        In Other Words: Randomly place it left-to-right, make it float at different speeds, start at different times, and be different sizes.
        */
        star.style.left = Math.random() * 100 + '%';
        star.style.animationDuration = (20 + Math.random() * 10) + 's';
        star.style.animationDelay = Math.random() * 20 + 's';
        star.style.fontSize = (16 + Math.random() * 12) + 'px';
        
        /*
        This Area Of Code Is: Append to Container
        Explanation: Adds the star to the background container.
        In Other Words: Put the floating thing on the page.
        */
        container.appendChild(star);
    }
}

/*
================================================================================
This Area Of Code Is: Event Listeners (Keyboard Controls)
Explanation: These listen for keyboard presses to allow control without clicking buttons (accessibility feature).
In Other Words: This lets you use the keyboard (spacebar, arrows) to control the app instead of clicking buttons.
================================================================================
*/

/*
This Area Of Code Is: Keydown Event Listener
Explanation: Listens for when any key is pressed. Handles Space (pause/resume or toggle), ArrowRight (next), ArrowLeft (previous), and Escape (close menu).
In Other Words: When you press a key, check which key it is and do the right thing.
*/
document.addEventListener('keydown', (e) => {
    /*
    This Area Of Code Is: Spacebar Handler
    Explanation: Prevents default spacebar action (scrolling page). If in auto mode, toggles pause. If not in auto mode and on a joke, toggles reveal. Otherwise goes to next card.
    In Other Words: Spacebar pauses if in auto mode, or shows/hides the answer if looking at a joke, or goes to next card otherwise.
    */
    if (e.code === 'Space') {
        e.preventDefault();
        if (autoMode) {
            togglePause();
        } else if (cards[currentIndex].type === 'joke') {
            toggleReveal();
        } else {
            nextCard();
        }
    } 
    /*
    This Area Of Code Is: Right Arrow Handler
    Explanation: Goes to next card if not in auto mode or if paused.
    In Other Words: Right arrow key goes to next joke (if not in auto mode or if paused).
    */
    else if (e.key === 'ArrowRight') {
        if (!autoMode || isPaused) nextCard();
    } 
    /*
    This Area Of Code Is: Left Arrow Handler
    Explanation: Goes to previous card if not in auto mode or if paused.
    In Other Words: Left arrow key goes to previous joke (if not in auto mode or if paused).
    */
    else if (e.key === 'ArrowLeft') {
        if (!autoMode || isPaused) previousCard();
    } 
    /*
    This Area Of Code Is: Escape Handler
    Explanation: Closes the menu if it's open.
    In Other Words: Escape key closes the side menu.
    */
    else if (e.key === 'Escape') {
        const panel = document.getElementById('menuPanel');
        if (panel.classList.contains('visible')) {
            toggleMenu();
        }
    }
});

/*
================================================================================
This Area Of Code Is: Initialization (Startup)
Explanation: These lines run automatically when the page loads to set up the initial state.
In Other Words: This starts everything up when you open the page.
================================================================================
*/

/*
This Area Of Code Is: Create Background
Explanation: Calls the function to create floating stars/flags.
In Other Words: Start the floating stars animation.
*/
createBackground();

/*
This Area Of Code Is: Set Initial Speed
Explanation: Calls setSpeed to initialize the UI with "slow" selected by default.
In Other Words: Set the speed to Slow by default.
*/
setSpeed('slow');

/*
This Area Of Code Is: Initial Render
Explanation: Calls renderCards to display the first card.
In Other Words: Show the first joke on the screen.
*/
renderCards();
