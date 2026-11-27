"use strict";

const NOTES_URL = new URL("explanatory_notes.md", window.location.href);
const EXPECTED_MILESTONES = 18;

function appendInlineMarkdown(parent, source) {
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\(https?:\/\/[^)\s]+\))/g;
  let cursor = 0;

  for (const match of source.matchAll(pattern)) {
    const token = match[0];
    const start = match.index;

    if (start > cursor) parent.append(document.createTextNode(source.slice(cursor, start)));

    if (token.startsWith("**")) {
      const strong = document.createElement("strong");
      strong.textContent = token.slice(2, -2);
      parent.append(strong);
    } else if (token.startsWith("*")) {
      const emphasis = document.createElement("em");
      emphasis.textContent = token.slice(1, -1);
      parent.append(emphasis);
    } else {
      const separator = token.lastIndexOf("](");
      const link = document.createElement("a");
      link.textContent = token.slice(1, separator);
      link.href = token.slice(separator + 2, -1);
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      parent.append(link);
    }

    cursor = start + token.length;
  }

  if (cursor < source.length) parent.append(document.createTextNode(source.slice(cursor)));
}

function appendParagraph(parent, lines) {
  const paragraph = document.createElement("p");
  appendInlineMarkdown(paragraph, lines.join(" ").trim());
  parent.append(paragraph);
}

function renderNotes(markdown, container) {
  const lines = markdown.replace(/\r\n?/g, "\n").split("\n");
  const fragment = document.createDocumentFragment();
  let currentParent = fragment;
  let index = 0;
  let milestoneCount = 0;

  while (index < lines.length) {
    const line = lines[index].trim();

    if (!line || /^---+$/.test(line) || /^#\s+/.test(line)) {
      index += 1;
      continue;
    }

    const milestoneHeading = line.match(/^>\s*###\s+(.+)$/);
    if (milestoneHeading) {
      const card = document.createElement("article");
      card.className = "milestone-card";

      const quote = document.createElement("blockquote");
      const heading = document.createElement("h3");
      heading.textContent = milestoneHeading[1];
      quote.append(heading);
      card.append(quote);
      fragment.append(card);

      currentParent = card;
      milestoneCount += 1;
      index += 1;
      continue;
    }

    if (/^##\s+/.test(line)) {
      const headingText = line.replace(/^##\s+/, "");
      const section = document.createElement("section");
      section.className = headingText.toLowerCase().includes("sources") ? "sources-card" : "editorial-card";

      const heading = document.createElement("h2");
      heading.textContent = headingText;
      section.append(heading);
      fragment.append(section);
      currentParent = section;
      index += 1;
      continue;
    }

    const orderedItem = line.match(/^\d+\.\s+(.+)$/);
    const unorderedItem = line.match(/^[-*]\s+(.+)$/);
    if (orderedItem || unorderedItem) {
      const isOrdered = Boolean(orderedItem);
      const list = document.createElement(isOrdered ? "ol" : "ul");
      const itemPattern = isOrdered ? /^\d+\.\s+(.+)$/ : /^[-*]\s+(.+)$/;

      while (index < lines.length) {
        const itemMatch = lines[index].trim().match(itemPattern);
        if (!itemMatch) break;
        const item = document.createElement("li");
        appendInlineMarkdown(item, itemMatch[1]);
        list.append(item);
        index += 1;
      }

      currentParent.append(list);
      continue;
    }

    const paragraphLines = [];
    while (index < lines.length) {
      const next = lines[index].trim();
      if (
        !next ||
        /^---+$/.test(next) ||
        /^#\s+/.test(next) ||
        /^##\s+/.test(next) ||
        /^>\s*###\s+/.test(next) ||
        /^\d+\.\s+/.test(next) ||
        /^[-*]\s+/.test(next)
      ) break;

      paragraphLines.push(next);
      index += 1;
    }

    if (paragraphLines.length) appendParagraph(currentParent, paragraphLines);
    else index += 1;
  }

  container.replaceChildren(fragment);
  container.dataset.milestoneCount = String(milestoneCount);

  if (milestoneCount !== EXPECTED_MILESTONES) {
    const notice = document.createElement("p");
    notice.className = "notes-loading";
    notice.setAttribute("role", "status");
    notice.textContent = "The notes loaded, but " + milestoneCount +
      " milestone sections were found; " + EXPECTED_MILESTONES + " were expected.";
    container.prepend(notice);
  }
}

function showLoadError(container, message) {
  const notice = document.createElement("p");
  notice.className = "notes-loading";
  notice.setAttribute("role", "alert");
  notice.textContent = message;

  const retry = document.createElement("button");
  retry.type = "button";
  retry.className = "milestone";
  retry.textContent = "Try loading again";
  retry.addEventListener("click", loadMilestoneNotes);
  container.replaceChildren(notice, retry);
}

async function loadMilestoneNotes() {
  const container = document.querySelector("#notes-content");
  if (!container) {
    console.error("Milestone notes container #notes-content was not found.");
    return;
  }

  const loading = document.createElement("p");
  loading.className = "notes-loading";
  loading.setAttribute("role", "status");
  loading.textContent = "Loading the milestone notes and references…";
  container.replaceChildren(loading);

  try {
    const response = await fetch(NOTES_URL, {
      headers: { Accept: "text/markdown, text/plain;q=0.9, */*;q=0.8" },
      cache: "no-cache"
    });

    if (!response.ok) throw new Error("The notes file returned HTTP " + response.status + ".");

    const markdown = await response.text();
    if (!markdown.trim()) throw new Error("The notes file is empty.");

    renderNotes(markdown, container);
  } catch (error) {
    console.error("Milestone notes could not be loaded:", error);
    showLoadError(
      container,
      "The milestone notes could not be loaded. Check that the local server is running from the project folder, then try again."
    );
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadMilestoneNotes, { once: true });
} else {
  loadMilestoneNotes();
}
