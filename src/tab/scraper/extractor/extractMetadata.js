export default {
  extractPhindSearchMetadata,
  extractPhindAgentMetadata,
  extractArbitraryPageMetadata,
  extractPerplexityMetadata,
  extractMaxAIGoogleMetadata,
}

/**
 * Get the title of the page
 * @returns {string} title
 */
export function getPhindPageTitle() { //extractMetadata
  const searchFirstMsg = document.querySelector('[name^="answer-"] > div > div > span');
  const agentFirstMsg = document.querySelector('[tabindex="0"]');
  return searchFirstMsg !== null && searchFirstMsg.innerHTML !== ""
    ? searchFirstMsg.innerHTML
    : agentFirstMsg
      ? agentFirstMsg.innerText.replace(/\u00A0/g, " ")
      : "";
}

function extractPhindSearchMetadata() {
  return {
    title: getPhindPageTitle(),
    source: "Phind-Search",
  }
}

function extractPhindAgentMetadata() {
  return {
    title: getPhindPageTitle(),
    source: "Phind-Agent",
  }
}

function extractArbitraryPageMetadata() {
  return {
    title: document.title ?? "",
    source: window.location.hostname,
  }
}

export function getPerplexityPageTitle() {
  // return document.querySelector(".mb-md:nth-of-type(1) > div").innerHTML ?? "";
  return document.title;
}

function extractPerplexityMetadata() {
  return {
    title: getPerplexityPageTitle(),
    source: "Perplexity.ai",
  }
}

export function getMaxAIGooglePageTitle() {
  return document.querySelector("textarea").innerHTML ?? "";
}

function extractMaxAIGoogleMetadata() {
  return {
    // title: document.title ?? "",
    title: getMaxAIGooglePageTitle(),
    source: "MaxAI-Google",
  }
}