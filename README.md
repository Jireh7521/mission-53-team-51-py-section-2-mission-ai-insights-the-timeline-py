# AI Insights: The Timeline Pyramid

An interactive, responsive learning resource covering **18 milestones** in the history of artificial intelligence. The five-layer pyramid groups the milestones into foundations, symbolic AI and expert systems, machine and deep learning, generative AI, and open future questions.

## Project contents

- **Interactive pyramid:** 18 selectable milestone buttons.
- **Milestone panel:** each selection displays its period, explanation, significance and AI field.
- **Styled notes page:** [milestone-notes.html](milestone-notes.html) presents all 18 explanations, source links and editorial notes in the website design.
- **Markdown source:** [explanatory_notes.md](explanatory_notes.md) remains the editable source for the historical notes and references.
- **Responsive layout:** desktop and mobile CSS breakpoints, plus reduced-motion support.
- **Accessible controls:** milestone selectors are native HTML buttons and support keyboard activation.

## The five layers

| Layer | Era | Milestones |
| --- | --- | --- |
| 1 — Base | Foundations | Early ideas and automata; Turing's imitation game; Dartmouth project; Logic Theorist |
| 2 | Symbolic AI & Expert Systems | ELIZA; expert systems and R1; AI winters |
| 3 | Machine & Deep Learning | Backpropagation; Deep Blue; DARPA challenges; Netflix Prize; ImageNet; IBM Watson; deep learning revolution |
| 4 | Generative AI & LLMs | GANs; Transformer architecture; ChatGPT |
| 5 — Apex | Future questions | AGI and superintelligence as hypothetical concepts |

The layers are a learning aid, not a claim that AI developed in a simple straight line or that one approach replaced every earlier approach. The fifth layer describes open questions, not achieved capabilities.

## Run locally

No build tools, package manager or backend are required.

1. Clone the repository.
2. Open `index.html` in a modern browser.

Alternatively, start a local server from the project directory:

```bash
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Project structure

```text
.
├── index.html
├── explanatory_notes.md
├── milestone-notes.html
├── css/
│   └── style.css
└── js/
    └── script.js
```

## Interaction

Select a milestone button in the pyramid. The information panel displays its date or period, description, significance and field. The first milestone is selected automatically when the page loads.

## Historical accuracy

The interactive labels and descriptions are intended to correspond one-to-one with the 18 headings in [explanatory_notes.md](explanatory_notes.md). The notes provide sources and explain important qualifications, including the 1955 Dartmouth proposal versus the 1956 workshop, the later name “Turing Test,” and the hypothetical status of AGI and superintelligence.

Historical summaries are concise educational descriptions. Consult the linked sources in the notes for deeper research.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts (Manrope and DM Mono)

## Current status

Content reconciliation update: the pyramid and explanatory notes each contain 18 matching milestone topics. Desktop/mobile visual verification and interactive browser testing are the next validation steps.
