/*
================================================================================
This Area Of Code Is: Community Standards Filter
Explanation: This module defines content filters based on church community 
guidelines. It checks for political content, LGBTQ themes, anti-Christian 
content, and hate speech using regular expression patterns. No profanity 
checking occurs here—that is handled by Google's Perspective API externally. 
The patterns are case-insensitive and match whole words.
In Other Words: This is the church's content guard. It looks for topics that 
don't fit the church setting (like politics) and stops them before they reach 
the get-well cards. It keeps the content respectful and aligned with church values.
================================================================================
*/

/*
This Area Of Code Is: Filter Patterns Configuration
Explanation: An object containing regular expression patterns for different 
categories of content to filter. Each category has a pattern to match text 
and a message to display if matched. The 'gi' flags make it global (matches 
all instances) and case-insensitive.
In Other Words: This is the list of "watch words" organized by category. 
Each category has a rule for what text to look for and what message to show 
if someone tries to use that kind of content.
*/
const COMMUNITY_STANDARDS = {
  // Political content filter
  politics: {
    pattern: /\b(trump|biden|obama|republican|democrat|election\s+day|vote\s+for|maga|antifa|liberal|conservative)\b/gi,
    message: "Please keep political content out of get-well cards"
  },
  
  // LGBTQ content filter
  lgbtq: {
    pattern: /\b(lgbt|gay|lesbian|transgender|trans|queer|bisexual|pride\s+parade|drag\s+queen|non-binary)\b/gi,
    message: "Content does not align with church community guidelines"
  },
  
  // Anti-religious content filter
  antiChristian: {
    pattern: /\b(anti-christ|satanic\s+cult|god\s+is\s+dead)\b/gi,
    message: "Respectful religious content only"
  },
  
  // Hate symbols filter
  hate: {
    pattern: /\b(nazi|kkk|white\s+supremacy)\b/gi,
    message: "No hate speech permitted"
  }
};

/*
This Area Of Code Is: Content Checker Function
Explanation: This function takes text input and checks it against all defined 
community standards patterns. It returns an object indicating whether the text 
passed (no violations found) or failed (violation found), along with details 
about which category was violated and the corresponding message. It stops 
checking at the first violation found for efficiency.
In Other Words: This is the checker that reads through submitted text. If it 
finds any "watch words," it stops and says "this isn't allowed" with an 
explanation. If everything looks good, it gives a thumbs up.
*/
function checkCommunityStandards(text) {
  /*
  This Area Of Code Is: Result Object Initialization
  Explanation: Creates the default result object assuming the content passes. 
  It includes a boolean flag (passed), an empty array for violations, and a 
  default success message.
  In Other Words: Start by assuming everything is okay. Create a report card 
  that says "passed" by default, with empty spaces to write violations if found.
  */
  const result = {
    passed: true,
    violations: [],
    message: 'Passes community standards'
  };
  
  /*
  This Area Of Code Is: Pattern Matching Loop
  Explanation: Iterates through each category in COMMUNITY_STANDARDS using 
  Object.entries to get both the category name and its configuration. Tests 
  the input text against each pattern. If a match is found, updates the result 
  object to indicate failure, records the violation category, sets the specific 
  message, and immediately returns (short-circuiting the loop).
  In Other Words: Go through each category one by one. Check if the text 
  matches any "watch words." If yes, mark the test as failed, note which 
  category was violated, and stop checking further.
  */
  for (const [category, config] of Object.entries(COMMUNITY_STANDARDS)) {
    if (config.pattern.test(text)) {
      result.passed = false;
      result.violations.push(category);
      result.message = config.message;
      return result;
    }
  }
  
  /*
  This Area Of Code Is: Return Result
  Explanation: Returns the result object. If no violations were found in the 
  loop, this returns the default "passed" state. If violations were found, 
  the function would have already returned inside the loop.
  In Other Words: Send back the report card. If we found problems earlier, 
  we already sent it back. Otherwise, send back the "all clear" report.
  */
  return result;
}

/*
This Area Of Code Is: Module Export
Explanation: Exports the checkCommunityStandards function so it can be imported 
and used by other files (specifically moderation.js). This follows Node.js 
CommonJS module pattern.
In Other Words: Make the checker available for other parts of the program to use.
*/
module.exports = { checkCommunityStandards };
