/*
================================================================================
This Area Of Code Is: Community Standards Filter
Explanation: Clean patterns for church-specific content guidelines. NO profanity
checking here—that's handled externally by Google's API. This only checks for
political content and LGBTQ themes as requested for your church context.
In Other Words: This checks for topics you don't want (politics, LGBTQ) without
any bad words in your code.
================================================================================
*/

const COMMUNITY_STANDARDS = {
  // Political content
  politics: {
    pattern: /\b(trump|biden|obama|republican|democrat|election\s+day|vote\s+for|maga|antifa|liberal|conservative)\b/gi,
    message: "Please keep political content out of get-well cards"
  },
  
  // LGBTQ content
  lgbtq: {
    pattern: /\b(lgbt|gay|lesbian|transgender|trans|queer|bisexual|pride\s+parade|drag\s+queen|non-binary)\b/gi,
    message: "Content does not align with church community guidelines"
  },
  
  // Anti-religious content
  antiChristian: {
    pattern: /\b(anti-christ|satanic\s+cult|god\s+is\s+dead)\b/gi,
    message: "Respectful religious content only"
  },
  
  // Hate symbols
  hate: {
    pattern: /\b(nazi|kkk|white\s+supremacy)\b/gi,
    message: "No hate speech permitted"
  }
};

function checkCommunityStandards(text) {
  const result = {
    passed: true,
    violations: [],
    message: 'Passes community standards'
  };
  
  for (const [category, config] of Object.entries(COMMUNITY_STANDARDS)) {
    if (config.pattern.test(text)) {
      result.passed = false;
      result.violations.push(category);
      result.message = config.message;
      return result;
    }
  }
  
  return result;
}

module.exports = { checkCommunityStandards };
