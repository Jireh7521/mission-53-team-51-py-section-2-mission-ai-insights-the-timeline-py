# AI Insights: The Timeline Pyramid

An interactive, responsive visual timeline exploring the evolution of artificial intelligence through five connected eras. The pyramid communicates how early foundations support symbolic reasoning, machine learning, modern generative AI and questions about the future.

## Project design

The interface follows a futuristic visual direction:
- Dark navy background with a subtle grid and ambient lighting.
- Five layered, colour-coded pyramid sections.
- Clickable milestone controls that update an explanatory information panel.
- A colour legend and a section explaining the visual progression.
- Responsive layouts for desktop and mobile, with reduced-motion support.

## Pyramid layers

| Layer | Era | Example milestones |
| --- | --- | --- |
| 1 — Base | Foundations | Turing Test (1950), Dartmouth workshop (1956), Logic Theorist (1956) |
| 2 | Symbolic AI & Expert Systems | ELIZA (1966), MYCIN (1970s), expert systems (1980s) |
| 3 | Machine & Deep Learning | Backpropagation (1986), Deep Blue (1997), ImageNet (2009), AlexNet (2012) |
| 4 | Generative AI & LLMs | GANs (2014), Transformers (2017), GPT-3 (2020), ChatGPT (2022) |
| 5 — Apex | Future horizon | AGI as an open question; responsible AI as ongoing work |

The apex is intentionally presented as a **future horizon**, not as a claim that AGI or superintelligence already exists. Responsible AI is ongoing work, not a dated future invention.

## Run locally

No build tools, package manager or backend are required.

1. Clone the repository.
2. Open `index.html` in a modern browser.

For a local development server, run this from the project directory:

```bash
python3 -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Project structure

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

## Interaction

Select a milestone button inside any pyramid layer. The information panel displays its date or time period, description, significance and AI field. The controls are native buttons and can be operated with a keyboard.

## Design and content notes

- The pyramid is a visual grouping of milestones, not a claim that AI developed in a strictly linear sequence.
- Some entries represent broad periods (for example, the growth of expert systems in the 1980s), rather than a single invention.
- The “Future” layer separates a debated possibility (AGI) from ongoing responsible-AI work.
- Historical descriptions are concise learning summaries. Add source references from the team's research materials before treating the project as a fully referenced historical publication.

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts (Manrope and DM Mono)

## Status

Initial implementation of the Tier 2 pyramid design and interactive prototype.