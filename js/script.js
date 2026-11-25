const milestones = {
  turing: {
    year: "1950", title: "The Turing Test", era: "FOUNDATIONS", field: "Philosophy of AI · Computing",
    description: "In his paper “Computing Machinery and Intelligence,” British mathematician Alan Turing proposed the imitation game, now widely known as the Turing Test. It asks whether a human evaluator can distinguish a machine's conversational responses from a person's.",
    impact: "The paper helped turn a broad question—whether machines can think—into a practical discussion about machine behaviour and intelligence."
  },
  dartmouth: {
    year: "1956", title: "The Dartmouth Workshop", era: "FOUNDATIONS", field: "Artificial Intelligence research",
    description: "A summer research project at Dartmouth College brought together scientists to explore whether aspects of learning and intelligence could be described precisely enough for machines to simulate them. The proposal helped establish the name “artificial intelligence.”",
    impact: "The workshop is commonly regarded as a founding moment for AI as an organised research field."
  },
  "logic-theorist": {
    year: "1956", title: "Logic Theorist", era: "FOUNDATIONS", field: "Automated reasoning · Symbolic AI",
    description: "Created by Allen Newell, Herbert A. Simon and programmer Cliff Shaw, Logic Theorist was an early program designed to prove mathematical theorems using symbolic reasoning.",
    impact: "It demonstrated that computers could manipulate symbols to carry out tasks associated with human reasoning."
  },
  eliza: {
    year: "1966", title: "ELIZA", era: "SYMBOLIC AI & EXPERT SYSTEMS", field: "Natural language processing",
    description: "Joseph Weizenbaum at MIT created ELIZA, a program that used pattern matching and scripted responses to imitate a conversation. Its DOCTOR script reflected users' statements back as questions.",
    impact: "ELIZA became an influential early example of conversational software and raised questions about how people interpret computer-generated language."
  },
  mycin: {
    year: "1970s", title: "MYCIN", era: "SYMBOLIC AI & EXPERT SYSTEMS", field: "Expert systems · Medicine",
    description: "Developed at Stanford in the 1970s, MYCIN was a rule-based expert system designed to help identify certain bacterial infections and recommend antibiotics. It used a knowledge base and an inference engine.",
    impact: "MYCIN showed how specialist knowledge could be represented as rules, while also highlighting the challenges of deploying expert systems in real clinical settings."
  },
  "expert-systems": {
    year: "1980s", title: "Expert Systems", era: "SYMBOLIC AI & EXPERT SYSTEMS", field: "Knowledge engineering",
    description: "During the 1980s, rule-based expert systems became a prominent commercial application of AI. They encoded specialist knowledge so a computer could provide recommendations in a narrow domain.",
    impact: "Their adoption brought AI into business workflows and exposed the cost of building, updating and maintaining large rule collections."
  },
  backprop: {
    year: "1986", title: "Backpropagation gains influence", era: "MACHINE & DEEP LEARNING", field: "Neural networks",
    description: "The 1986 paper by David Rumelhart, Geoffrey Hinton and Ronald Williams helped popularise backpropagation as a practical way to train multi-layer neural networks by adjusting weights to reduce errors.",
    impact: "Backpropagation became a central training method for neural networks and helped renew interest in connectionist approaches to learning."
  },
  deepblue: {
    year: "1997", title: "Deep Blue defeats Kasparov", era: "MACHINE & DEEP LEARNING", field: "Search · Game-playing AI",
    description: "IBM's Deep Blue chess computer defeated reigning world champion Garry Kasparov in a six-game match. The system combined specialised hardware, search and evaluation methods.",
    impact: "The match demonstrated the strength of computers in a complex, bounded game, while showing that success did not require human-like general intelligence."
  },
  imagenet: {
    year: "2009", title: "ImageNet", era: "MACHINE & DEEP LEARNING", field: "Computer vision · Data",
    description: "ImageNet, introduced by researchers led by Fei-Fei Li, provided a large, organised image database with labelled categories. It helped create a shared benchmark for visual recognition research.",
    impact: "Large labelled datasets and common benchmarks made it easier to measure progress and helped accelerate the deep-learning advances that followed."
  },
  alexnet: {
    year: "2012", title: "AlexNet", era: "MACHINE & DEEP LEARNING", field: "Deep learning · Computer vision",
    description: "AlexNet, developed by Alex Krizhevsky, Ilya Sutskever and Geoffrey Hinton, achieved a landmark result in the 2012 ImageNet image-recognition competition using a deep convolutional neural network and GPU training.",
    impact: "Its performance helped spark widespread interest and investment in deep learning for computer vision and other applications."
  },
  gans: {
    year: "2014", title: "Generative Adversarial Networks", era: "GENERATIVE AI & LLMS", field: "Generative machine learning",
    description: "Ian Goodfellow and colleagues introduced Generative Adversarial Networks (GANs), in which a generator and a discriminator are trained in competition. The generator learns to create data that resembles examples in the training set.",
    impact: "GANs became an influential approach to generative modelling and inspired research into synthetic images, video and other forms of generated data."
  },
  transformer: {
    year: "2017", title: "The Transformer Architecture", era: "GENERATIVE AI & LLMS", field: "Deep learning · Language models",
    description: "The research paper “Attention Is All You Need” introduced the Transformer, an architecture based on attention mechanisms rather than recurrence as its core sequence-processing approach.",
    impact: "Transformers made it practical to train powerful models in parallel and became the foundation for many later language models and generative AI systems."
  },
  gpt3: {
    year: "2020", title: "GPT-3", era: "GENERATIVE AI & LLMS", field: "Large language models",
    description: "OpenAI introduced GPT-3, a large autoregressive language model trained on a broad mixture of text. It demonstrated strong few-shot performance when given examples in a prompt.",
    impact: "GPT-3 helped popularise the idea that a single large language model could perform many text tasks from natural-language instructions and examples."
  },
  chatgpt: {
    year: "2022", title: "ChatGPT", era: "GENERATIVE AI & LLMS", field: "Conversational AI · Large language models",
    description: "OpenAI released ChatGPT as a conversational AI product in November 2022. It was fine-tuned for dialogue using methods that included human feedback.",
    impact: "Its accessible chat interface brought generative AI into everyday public use and accelerated discussion about the opportunities and risks of AI systems."
  },
  agi: {
    year: "FUTURE", title: "Artificial General Intelligence?", era: "FUTURE HORIZON", field: "Open research question",
    description: "Artificial General Intelligence (AGI) is a term used for a hypothetical AI system able to learn and perform a broad range of intellectual tasks across different domains. There is no universally accepted definition or agreed test for AGI.",
    impact: "AGI is a debated future possibility, not an established milestone or a capability that should be assumed to exist. Research continues on capability evaluation, alignment and governance."
  },
  "responsible-ai": {
    year: "ONGOING", title: "Responsible AI", era: "FUTURE HORIZON", field: "AI safety · Governance · Ethics",
    description: "Responsible AI brings together work on safety, fairness, privacy, transparency, accountability, security and human oversight across the AI lifecycle.",
    impact: "These concerns are not only future issues: they already shape how AI systems should be designed, evaluated, deployed and governed."
  }
};

const buttons = document.querySelectorAll(".milestone");
const placeholder = document.querySelector("#panel-placeholder");
const detail = document.querySelector("#event-detail");
const fields = {
  era: document.querySelector("#event-era"),
  year: document.querySelector("#event-year"),
  title: document.querySelector("#event-title"),
  description: document.querySelector("#event-description"),
  impact: document.querySelector("#event-impact"),
  field: document.querySelector("#event-field")
};

function showMilestone(id, button) {
  const event = milestones[id];
  if (!event) return;

  fields.era.textContent = event.era;
  fields.year.textContent = event.year;
  fields.title.textContent = event.title;
  fields.description.textContent = event.description;
  fields.impact.textContent = event.impact;
  fields.field.textContent = event.field;

  placeholder.hidden = true;
  detail.hidden = false;
  buttons.forEach((item) => {
    const selected = item === button;
    item.classList.toggle("is-selected", selected);
    item.setAttribute("aria-pressed", String(selected));
  });
}

buttons.forEach((button) => {
  button.setAttribute("aria-pressed", "false");
  button.addEventListener("click", () => showMilestone(button.dataset.event, button));
});

const firstMilestone = document.querySelector('[data-event="turing"]');
if (firstMilestone) showMilestone("turing", firstMilestone);