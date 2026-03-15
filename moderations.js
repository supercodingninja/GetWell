/*
================================================================================
This Area Of Code Is: Content Moderation Engine
Explanation: Two-layer safety: 1) Your church standards (filters.js), 2) Google
Perspective API for profanity/toxicity. ZERO bad words stored in your code.
In Other Words: Your code is clean. Profanity checking happens on Google's servers.
================================================================================
*/

const { checkCommunityStandards } = require('./filters');

const PERSPECTIVE_API_KEY = process.env.PERSPECTIVE_API_KEY;
const PERSPECTIVE_URL = `https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=${PERSPECTIVE_API_KEY}`;

async function moderateContent(text) {
  // Step 1: Check church standards (politics, LGBTQ, etc.)
  const churchCheck = checkCommunityStandards(text);
  if (!churchCheck.passed) {
    return {
      passed: false,
      reason: 'community_standards',
      message: churchCheck.message
    };
  }
  
  // Step 2: Check profanity via Google API (external)
  if (!PERSPECTIVE_API_KEY) {
    return {
      passed: false,
      reason: 'config_error',
      message: 'Safety system not configured'
    };
  }
  
  try {
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
    
    const data = await response.json();
    const scores = {
      toxicity: data.attributeScores?.TOXICITY?.summaryScore?.value || 0,
      profanity: data.attributeScores?.PROFANITY?.summaryScore?.value || 0,
      threat: data.attributeScores?.THREAT?.summaryScore?.value || 0
    };
    
    // Block if >70% toxic or profane
    if (scores.toxicity > 0.7 || scores.profanity > 0.7) {
      return {
        passed: false,
        reason: 'inappropriate_content',
        message: 'Content contains inappropriate language (detected by AI)',
        scores: scores
      };
    }
    
    return {
      passed: true,
      message: 'Content approved',
      scores: scores
    };
    
  } catch (error) {
    console.error('Moderation API error:', error);
    return {
      passed: false,
      reason: 'system_error',
      message: 'Unable to verify content safety. Please try again.'
    };
  }
}
module.exports = { moderateContent 
