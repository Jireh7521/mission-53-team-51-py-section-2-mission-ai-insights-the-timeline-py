const milestones = {
  roots:{year:"BEFORE 1950",title:"Philosophical Roots",era:"FOUNDATIONS",field:"Philosophy · Automata",description:"Myths such as Talos and early mechanical automata imagined artificial beings long before electronic computers. These were cultural and mechanical precursors, not modern AI systems.",impact:"They raised enduring questions about thinking and artificial creation that later shaped AI research and debate."},
  turing:{year:"1950",title:"Turing's Imitation Game",era:"FOUNDATIONS",field:"Philosophy of AI · Computing",description:"In Computing Machinery and Intelligence, Alan Turing proposed the imitation game to discuss machine intelligence through observable responses. Turing Test is the familiar later name; it does not directly measure consciousness.",impact:"It reframed Can machines think? as a behavioural question researchers could debate and investigate."},
  dartmouth:{year:"1955–1956",title:"The Dartmouth Project",era:"FOUNDATIONS",field:"AI research",description:"John McCarthy proposed the summer research project in 1955; the workshop took place at Dartmouth in 1956. The proposal used the phrase artificial intelligence.",impact:"The workshop helped establish AI as a named research field, but was not the beginning of all earlier work on intelligent machines."},
  "logic-theorist":{year:"1956",title:"The Logic Theorist",era:"FOUNDATIONS",field:"Automated reasoning · Symbolic AI",description:"Created by Allen Newell, Herbert A. Simon and programmer Cliff Shaw, Logic Theorist was an early program designed to prove mathematical theorems using symbolic reasoning.",impact:"It showed that computers could manipulate symbols to perform tasks associated with human reasoning."},
  eliza:{year:"1966",title:"ELIZA",era:"SYMBOLIC AI & EXPERT SYSTEMS",field:"Natural language processing",description:"Joseph Weizenbaum created ELIZA, an early conversational program. Its DOCTOR script used pattern matching to imitate a Rogerian psychotherapist.",impact:"ELIZA revealed how readily people attribute understanding to conversational machines, a lesson relevant to trust in today's chatbots."},
  "expert-systems":{year:"1980s",title:"Expert Systems and R1",era:"SYMBOLIC AI & EXPERT SYSTEMS",field:"Knowledge engineering · Business AI",description:"Expert systems encoded specialist knowledge as rules. Digital Equipment Corporation used R1, developed by John McDermott, to help configure VAX computer systems.",impact:"R1 demonstrated a practical business use for rule-based AI while highlighting the effort needed to maintain specialised knowledge bases."},
  "ai-winters":{year:"1980s–1990s",title:"The AI Winters",era:"SYMBOLIC AI & EXPERT SYSTEMS",field:"AI research history",description:"Funding and enthusiasm declined when systems failed to meet inflated expectations and some expert systems proved expensive or brittle. Exact dates and causes vary by account.",impact:"These periods showed the risks of hype outrunning capability; research continued in machine learning and statistics."},
  backprop:{year:"1986",title:"Backpropagation",era:"MACHINE & DEEP LEARNING",field:"Neural networks",description:"The 1986 work by David Rumelhart, Geoffrey Hinton and Ronald Williams helped popularise backpropagation as a practical method for training multi-layer neural networks.",impact:"Backpropagation became a central training method and helped renew interest in learning from examples."},
  deepblue:{year:"1997",title:"Deep Blue Defeats Kasparov",era:"MACHINE & DEEP LEARNING",field:"Game AI · Search",description:"IBM's Deep Blue defeated reigning world chess champion Garry Kasparov in a six-game rematch, using specialised hardware, search and evaluation methods.",impact:"The match showed how powerful computation could solve a complex, bounded task without requiring human-like general intelligence."},
  darpa:{year:"2004–2007",title:"DARPA Grand and Urban Challenges",era:"MACHINE & DEEP LEARNING",field:"Robotics · Autonomous systems",description:"DARPA competitions challenged teams to build autonomous vehicles that navigated demanding desert routes and a mock urban environment.",impact:"They advanced research in vehicle perception, planning and control, making autonomous driving a measurable engineering challenge."},
  "netflix-prize":{year:"2006–2009",title:"The Netflix Prize",era:"MACHINE & DEEP LEARNING",field:"Machine learning · Recommendation systems",description:"Netflix offered a prize for improving movie recommendation predictions, attracting teams exploring collaborative filtering and ensemble methods.",impact:"It demonstrated how shared datasets and open competitions could accelerate applied machine-learning research."},
  imagenet:{year:"2009",title:"ImageNet",era:"MACHINE & DEEP LEARNING",field:"Computer vision · Data",description:"Led by Fei-Fei Li and collaborators, ImageNet introduced a large image database organised around WordNet concepts and labelled categories.",impact:"ImageNet and its visual-recognition challenge provided a shared benchmark; 2012 results helped demonstrate deep convolutional networks."},
  watson:{year:"2011",title:"IBM Watson Wins Jeopardy!",era:"MACHINE & DEEP LEARNING",field:"Natural language processing · Question answering",description:"IBM Watson defeated champions on Jeopardy!, combining natural-language processing, information retrieval and confidence-based answer selection.",impact:"It demonstrated a complex question-answering system, but not general human-like understanding."},
  "deep-learning":{year:"2010s",title:"The Deep Learning Revolution",era:"MACHINE & DEEP LEARNING",field:"Deep learning · Neural networks",description:"Deep learning advanced through larger datasets, faster GPU computing, improved algorithms and benchmark competitions. AlexNet's 2012 ImageNet result was a widely recognised turning point.",impact:"Deep neural networks drove major advances in image and speech recognition and became a dominant approach across many AI applications."},
  gans:{year:"2014",title:"Generative Adversarial Networks",era:"GENERATIVE AI & LLMS",field:"Generative machine learning",description:"Ian Goodfellow and colleagues introduced GANs, in which a generator creates candidate data and a discriminator learns to distinguish generated examples from real ones.",impact:"GANs became an influential generative-modelling approach and raised concerns about realistic fabricated media."},
  transformer:{year:"2017",title:"The Transformer Architecture",era:"GENERATIVE AI & LLMS",field:"Deep learning · Language models",description:"Attention Is All You Need introduced the Transformer, which uses attention to relate sequence elements without relying on recurrence as its core mechanism.",impact:"Transformers enabled more parallel training and became an important basis for many, but not all, modern language models."},
  chatgpt:{year:"2022",title:"ChatGPT",era:"GENERATIVE AI & LLMS",field:"Conversational AI · Large language models",description:"OpenAI released ChatGPT as a research preview in November 2022, making conversational interaction with a large language model widely accessible.",impact:"Its accessible interface brought generative AI into mainstream discussion and renewed attention to accuracy, privacy, safety and social effects."},
  agi:{year:"FUTURE",title:"AGI and Superintelligence?",era:"FUTURE HORIZON",field:"Open research questions",description:"AGI and superintelligence describe hypothetical levels of AI capability. Their definitions and possible tests are contested, and neither is an achieved milestone.",impact:"Questions about their possible development shape research, safety work and policy, but their arrival and timing remain uncertain."}
};
const buttons=document.querySelectorAll(".milestone");
const placeholder=document.querySelector("#panel-placeholder");
const detail=document.querySelector("#event-detail");
const fields={era:document.querySelector("#event-era"),year:document.querySelector("#event-year"),title:document.querySelector("#event-title"),description:document.querySelector("#event-description"),impact:document.querySelector("#event-impact"),field:document.querySelector("#event-field")};
function showMilestone(id,button){
  const event=milestones[id];
  if(!event)return;
  fields.era.textContent=event.era;
  fields.year.textContent=event.year;
  fields.title.textContent=event.title;
  fields.description.textContent=event.description;
  fields.impact.textContent=event.impact;
  fields.field.textContent=event.field;
  placeholder.hidden=true;
  detail.hidden=false;
  buttons.forEach(item=>{
    const selected=item===button;
    item.classList.toggle("is-selected",selected);
    item.setAttribute("aria-pressed",String(selected));
  });
}
buttons.forEach(button=>{
  button.setAttribute("aria-pressed","false");
  button.addEventListener("click",()=>showMilestone(button.dataset.event,button));
});
const firstMilestone=document.querySelector('[data-event="roots"]');
if(firstMilestone)showMilestone("roots",firstMilestone);
