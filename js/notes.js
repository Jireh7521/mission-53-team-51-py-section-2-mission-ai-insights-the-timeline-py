async function loadMilestoneNotes() {
  const container = document.querySelector("#notes-content");

  try {
    const response = await fetch("explanatory_notes.md");
    if (!response.ok) {
      throw new Error(`Could not load notes (HTTP ${response.status}).`);
    }

    const markdown = await response.text();
    const rendered = marked.parse(markdown);
    const safeHtml = DOMPurify.sanitize(rendered, {
      USE_PROFILES: { html: true }
    });

    const parsed = new DOMParser().parseFromString(safeHtml, "text/html");
    const nodes = Array.from(parsed.body.children);
    container.replaceChildren();

    let index = 0;

    while (index < nodes.length) {
      const node = nodes[index];

      if (node.matches("h1")) {
        index += 1;
        continue;
      }

      const milestoneHeading =
        node.matches("blockquote") &&
        node.querySelector("h3")?.textContent.trim().startsWith("Milestone");

      if (milestoneHeading) {
        const card = document.createElement("article");
        card.className = "milestone-card";
        container.append(card);

        while (index < nodes.length) {
          const current = nodes[index];
          const nextIsMilestone =
            current.matches("blockquote") &&
            current.querySelector("h3")?.textContent.trim().startsWith("Milestone");

          if (card.childElementCount > 0 &&
              (nextIsMilestone || current.matches("h2, hr"))) {
            break;
          }

          card.append(current);
          index += 1;
        }
        continue;
      }

      if (node.matches("h2")) {
        const isSources = node.textContent.trim().toLowerCase().includes("sources");
        const section = document.createElement("section");
        section.className = isSources ? "sources-card" : "editorial-card";
        container.append(section);

        while (index < nodes.length && !nodes[index].matches("h2")) {
          section.append(nodes[index]);
          index += 1;
        }
        continue;
      }

      if (node.matches("hr")) {
        index += 1;
        continue;
      }

      container.append(node);
      index += 1;
    }

    const count = container.querySelectorAll(".milestone-card").length;
    if (count !== 18) {
      console.warn(`Expected 18 milestone cards; rendered ${count}.`);
    }
  } catch (error) {
    container.innerHTML =
      '<p class="notes-loading">The notes could not be loaded. Please return to the pyramid and try again later.</p>';
    console.error("Milestone notes loading failed:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (window.marked && window.DOMPurify) {
    loadMilestoneNotes();
  } else {
    const container = document.querySelector("#notes-content");
    container.textContent = "The notes renderer could not be loaded. Check your internet connection and refresh this page.";
  }
});
