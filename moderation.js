/*
================================================================================
This Area Of Code Is: Content Moderation Engine
Explanation: This module provides two-layer content safety. First, it checks 
against church community standards (from filters.js) for political/LGBTQ content. 
Second, it uses Google's Perspective API to check for profanity, toxicity, and 
threats externally. This ensures zero inappropriate words are stored in the 
application code while maintaining safety.
In Other Words: This is the double-check security system. First check: does it 
fit church rules? Second check: does Google think it's clean? This keeps bad 
words out of the code by using Google's brain instead.
================================================================================
*/

/*
This Area Of Code Is: External Module Imports
Explanation: Imports the checkCommunityStandards function from the local 
filters.js file to perform the first layer of content filtering.
In Other Words: Bring in the church's content guard from the other file.
*/
const { checkCommunityStandards } = require('./filters');

/*
This Area Of Code Is: API Configuration
Explanation: Retrieves the Perspective API key from environment variables 
(process.env) for security. Constructs the full API URL with the key appended 
as a query parameter. The environment variable must be set in the hosting 
platform (Render.com).
In Other Words: Get the secret password (API key) from the computer's memory 
(not stored in code) and build the web address for Google's safety checker.
*/
const PERSPECTIVE_API_KEY = process.env.PERSPECTIVE_API_KEY;
const PERSPECTIVE_URL = `https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=${PERSPECTIVE_API_KEY}`;

/*
This Area Of Code Is: Main Moderation Function
Explanation: An async function that coordinates both layers of content checking. 
First checks against church standards locally. If that passes, sends the text 
to Google's Perspective API for profanity/toxicity analysis. Returns an object 
indicating whether content passed all checks and appropriate messaging.
In Other Words: The main boss that runs both security checks. First asks the 
church guard, then asks Google. Returns the final yes/no with details.
*/
async function moderateContent(text) {
  /*
  This Area Of Code Is: Layer 1 - Community Standards Check
  Explanation: Calls the local church standards filter first. If content fails 
  this check (politics/LGBTQ/etc.), immediately returns the failure result 
  without calling the external API, saving time and API quota.
  In Other Words: Ask the church guard first. If they say no, don't bother 
  asking Google - just return the rejection.
  */
  const churchCheck = checkCommunityStandards(text);
  if (!churchCheck.passed) {
    return {
      passed: false,
      reason: 'community_standards',
      message: churchCheck.message
    };
  }
  
  /*
  This Area Of Code Is: API Key Validation
  Explanation: Checks if the Perspective API key is configured. If not, returns 
  a configuration error. This prevents API calls that would definitely fail and 
  alerts the administrator that setup is incomplete.
  In Other Words: Check if we have the secret password. If not, say "system not 
  ready" instead of trying to connect without it.
  */
  if (!PERSPECTIVE_API_KEY) {
    return {
      passed: false,
      reason: 'config_error',
      message: 'Safety system not configured'
    };
  }
  
  /*
  This Area Of Code Is: Try-Catch Block for API Call
  Explanation: Wraps the external API call in error handling. Network requests 
  can fail for many reasons (no internet, API down, etc.), so this catches 
  errors gracefully instead of crashing the server.
  In Other Words: Try to ask Google, but be ready in case the internet is 
  broken or Google's asleep.
  */
  try {
    /*
    This Area Of Code Is: Perspective API Request
    Explanation: Sends a POST request to Google's Perspective API with the 
    text to analyze. Includes the text, language (English), and requested 
    attributes to check: toxicity, severe toxicity, profanity, insults, and 
    threats. Uses fetch API with JSON content type headers.
    In Other Words: Send the text to Google with a list asking "check for 
    these bad things: mean words, swearing, threats, etc."
    */
    const response = await fetch(PERSPECTIVE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        comment: { text: text },
        languages: ['en'],
        requestedAttributes: {
          TOXICITY: {},
          SEVERE_TOXICITY: {},
          PROFANITY: {},
          INSULT: {},
          THREAT: {}
        }
      })
    });
    
    /*
    This Area Of Code Is: Response Parsing
    Explanation: Converts the API response from JSON format into a JavaScript 
    object that can be worked with. Also extracts the specific scores for 
    toxicity, profanity, and threat levels (0.0 to 1.0 scale).
    In Other Words: Read Google's response and pull out the danger scores 
    (0 = safe, 1 = very bad).
    */
    const data = await response.json();
    const scores = {
      toxicity: data.attributeScores?.TOXICITY?.summaryScore?.value || 0,
      profanity: data.attributeScores?.PROFANITY?.summaryScore?.value || 0,
      threat: data.attributeScores?.THREAT?.summaryScore?.value || 0
    };
    
    /*
    This Area Of Code Is: Threshold Evaluation
    Explanation: Checks if any score exceeds 0.7 (70% confidence of being 
    inappropriate). If toxicity or profanity is above this threshold, returns 
    a failure response with the scores for transparency.
    In Other Words: If Google says "I'm more than 70% sure this is bad," 
      reject the content. Otherwise, approve it.
    */
    if (scores.toxicity > 0.7 || scores.profanity > 0.7) {
      return {
        passed: false,
        reason: 'inappropriate_content',
        message: 'Content contains inappropriate language (detected by AI)',
        scores: scores
      };
    }
    
    /*
    This Area Of Code Is: Success Response
    Explanation: If all checks passed, returns an approval object with success 
    message and the safety scores for reference.
    In Other Words: Everything looks good! Give the green light and show the 
    safety scores.
    */
    return {
      passed: true,
      message: 'Content approved',
      scores: scores
    };
    
  } catch (error) {
    /*
    This Area Of Code Is: Error Handling
    Explanation: Catches any errors from the API call (network issues, invalid 
    responses, etc.). Logs the error for debugging and returns a user-friendly 
    error message suggesting they try again.
    In Other Words: If something broke while talking to Google, write down what 
    happened for the tech person, but tell the user "please try again later."
    */
    console.error('Moderation API error:', error);
    return {
      passed: false,
      reason: 'system_error',
      message: 'Unable to verify content safety. Please try again.'
    };
  }
}

/*
This Area Of Code Is: Module Export
Explanation: Exports the moderateContent function so it can be used by the 
server.js file when processing new joke submissions.
In Other Words: Make the moderation boss available to the main server.
*/
module.exports = { moderateContent };
