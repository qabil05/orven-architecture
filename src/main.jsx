import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const projects = [
  {
    id: "house-nera",
    number: "01",
    title: "HOUSE NERA",
    city: "Baku",
    country: "Azerbaijan",
    type: "Residential",
    year: "2026",
    area: "480 m²",
    status: "Concept / Private Residence",
    palette: "Limestone / Oak / Raw concrete",
    hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=88",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=88",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=86",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=86",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=86",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=86"
    ],
    intro: "A courtyard house shaped by heat, privacy and filtered light. Heavy mineral walls define a calm sequence of shaded rooms around a planted center.",
    concept: "The house is conceived as a sequence of thresholds rather than a collection of rooms. Limestone walls hold the perimeter while oak, glass and shadow soften the interior edge."
  },
  {
    id: "courtyard-17",
    number: "02",
    title: "COURTYARD 17",
    city: "Barcelona",
    country: "Spain",
    type: "Residential",
    year: "2025",
    area: "315 m²",
    status: "Completed",
    palette: "Terracotta / Plaster / Olive",
    hero: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=2200&q=88",
    images: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=2200&q=88",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=86",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=86",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1800&q=86",
      "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1800&q=86"
    ],
    intro: "A dense urban house organized around an open-air void. Terracotta, warm plaster and planting create a slow interior landscape.",
    concept: "Existing masonry is treated as memory rather than obstruction. New insertions are quiet and reversible, allowing the courtyard to remain the primary room of the house."
  },
  {
    id: "casa-vela",
    number: "03",
    title: "CASA VELA",
    city: "Mallorca",
    country: "Spain",
    type: "Retreat",
    year: "2026",
    area: "260 m²",
    status: "In Development",
    palette: "White stone / Limewash / Sea glass",
    hero: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2200&q=88",
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2200&q=88",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=86",
      "https://images.unsplash.com/photo-1600566752229-250ed79470f8?auto=format&fit=crop&w=1800&q=86",
      "https://images.unsplash.com/photo-1600607688066-890987f18a86?auto=format&fit=crop&w=1800&q=86",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=86"
    ],
    intro: "A coastal retreat reduced to stone, horizon and breeze. Deep openings frame the sea while white mineral surfaces pull daylight deep into the plan.",
    concept: "The geometry is intentionally quiet. Rooms are arranged around long views and cross ventilation, allowing climate to become part of the architecture."
  },
  {
    id: "monolith",
    number: "04",
    title: "MONOLITH",
    city: "Copenhagen",
    country: "Denmark",
    type: "Cultural",
    year: "2025",
    area: "2,100 m²",
    status: "Competition",
    palette: "Dark concrete / Steel / Northern light",
    hero: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2200&q=88",
    images: [
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2200&q=88",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=86",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=86",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=86",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=86"
    ],
    intro: "A compact cultural building defined by mass and controlled daylight. A dark exterior protects a pale sequence of gallery rooms within.",
    concept: "The building is treated as one carved volume. Public movement cuts through the mass, creating alternating compression and release."
  },
  {
    id: "oasis-house",
    number: "05",
    title: "OASIS HOUSE",
    city: "Dubai",
    country: "UAE",
    type: "Residential",
    year: "2026",
    area: "620 m²",
    status: "Concept",
    palette: "Desert stone / Water / Bronze glass",
    hero: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=2200&q=88",
    images: [
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=2200&q=88",
      "https://images.unsplash.com/photo-1600566752584-e689803bdc9d?auto=format&fit=crop&w=1800&q=86",
      "https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=1800&q=86",
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1800&q=86",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=86"
    ],
    intro: "A desert house organized around shade, water and deep courtyards. The architecture filters brightness instead of competing with it.",
    concept: "Long walls and recessed glazing create a protected microclimate. Water is used as spatial orientation rather than decoration."
  }
];

const materials = [
  {
    name: "TRAVERTINE",
    meta: "Honed / Warm mineral",
    copy: "Used where the building meets sun and landscape; tactile, quiet and intentionally imperfect.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=86"
  },
  {
    name: "OAK",
    meta: "Natural / Brushed",
    copy: "A warmer interior layer that softens mineral surfaces and creates scale at the point of touch.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=86"
  },
  {
    name: "RAW CONCRETE",
    meta: "Board-marked / Structural",
    copy: "Left direct and legible where mass, span and shadow are part of the spatial experience.",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=86"
  }
];

const process = [
  ["01", "OBSERVE", "Site, climate, movement and the existing conditions are read before form is proposed."],
  ["02", "REDUCE", "Noise is removed until the project can be described through a small number of clear spatial moves."],
  ["03", "COMPOSE", "Proportion, structure, material and light are brought into one coherent architectural system."],
  ["04", "BUILD", "Details are resolved so that the finished work retains the clarity of the original idea."]
];

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash || "#/");
  useEffect(() => {
    const handler = () => {
      setHash(window.location.hash || "#/");
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);
  return hash;
}

function useReveal() {
  useEffect(() => {
    const els = [...document.querySelectorAll("[data-reveal]")];
    const io = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function go(hash) {
  window.location.hash = hash;
}

function Header({ inverted = false }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={"site-header " + (inverted ? "is-inverted" : "")}>
      <button className="brand" onClick={() => go("#/")} aria-label="ORVEN home">ORVEN</button>
      <nav className={"nav-links " + (open ? "open" : "")}>
        <button onClick={() => { setOpen(false); go("#/projects"); }}>PROJECTS</button>
        <button onClick={() => { setOpen(false); go("#/studio"); }}>STUDIO</button>
        <button onClick={() => { setOpen(false); go("#/process"); }}>PROCESS</button>
        <button onClick={() => { setOpen(false); go("#/contact"); }}>CONTACT</button>
      </nav>
      <button className="menu-toggle" onClick={() => setOpen(v => !v)}>{open ? "CLOSE" : "MENU"}</button>
    </header>
  );
}

function Reveal({ children, className = "" }) {
  return <div data-reveal className={"reveal " + className}>{children}</div>;
}

function MixedProjectTitle({ title }) {
  const [first, ...rest] = title.split(" ");
  return (
    <>
      <span>{first}</span>
      {rest.length > 0 && <em>{rest.join(" ").toLowerCase()}</em>}
    </>
  );
}

function ProjectAtlas() {
  const [active, setActive] = useState(projects[0]);
  const [mode, setMode] = useState("index");
  return (
    <section className="atlas section-pad" id="projects">
      <div className="section-kicker"><span>02</span><span>SELECTED WORKS / 2025—2026</span></div>
      <div className="atlas-head">
        <div className="atlas-title-wrap">
          <span className="section-watermark">02</span>
          <Reveal className="clip-title">
            <h2 className="mixed-title"><span>SELECTED</span><em>Works</em></h2>
          </Reveal>
          <div className="technical-strip">
            <span>A—02 / ARCHIVE</span>
            <span>05 PROJECTS</span>
            <span>SCALE 1:100</span>
          </div>
        </div>
        <div className="mode-switch" role="group" aria-label="Project view">
          <button className={mode === "grid" ? "active" : ""} onClick={() => setMode("grid")}>GRID</button>
          <span>/</span>
          <button className={mode === "index" ? "active" : ""} onClick={() => setMode("index")}>INDEX</button>
        </div>
      </div>

      {mode === "index" ? (
        <div className="atlas-index">
          <div className="atlas-list">
            {projects.map(p => (
              <button
                key={p.id}
                className={"project-row " + (active.id === p.id ? "active" : "")}
                onMouseEnter={() => setActive(p)}
                onFocus={() => setActive(p)}
                onClick={() => go("#/project/" + p.id)}
              >
                <span>{p.number}</span>
                <strong>{p.title}</strong>
                <span>{p.city}</span>
                <span>{p.type}</span>
                <span>{p.year}</span>
                <i>↗</i>
              </button>
            ))}
          </div>
          <button className="atlas-preview" onClick={() => go("#/project/" + active.id)} aria-label={"View " + active.title}>
            {projects.map(p => (
              <img key={p.id} className={active.id === p.id ? "active" : ""} src={p.hero} alt={p.title} />
            ))}
            <span className="preview-caption">{active.number} / {active.title}</span>
          </button>
        </div>
      ) : (
        <div className="project-grid">
          {projects.map((p, i) => (
            <button className={"grid-project grid-project-" + (i + 1)} key={p.id} onClick={() => go("#/project/" + p.id)}>
              <div className="image-shell"><img src={p.hero} alt={p.title} loading="lazy" /></div>
              <div className="grid-meta"><strong>{p.title}</strong><span>{p.type} / {p.city} / {p.year}</span></div>
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

function FeaturedCaseStudy() {
  const [active, setActive] = useState(0);
  const refs = useRef([]);
  useEffect(() => {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(Number(entry.target.dataset.index));
      });
    }, { rootMargin: "-38% 0px -38% 0px", threshold: 0.01 });
    refs.current.forEach(el => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  const labels = ["Exterior", "Courtyard", "Interior", "Plan", "Material"];
  const p = projects[0];
  return (
    <section className="featured section-pad">
      <div className="featured-info">
        <div className="section-kicker"><span>03</span><span>FEATURED CASE STUDY</span></div>
        <div className="featured-title">
          <span className="featured-ghost">01</span>
          <h3><MixedProjectTitle title={p.title} /></h3>
          <span className="featured-coord">40.4093° N / 49.8671° E</span>
        </div>
        <p>{p.city}, {p.country}<br/>{p.status}<br/>{p.area}<br/>{p.year}</p>
        <div className="sequence-labels">
          {labels.map((l,i)=><span className={active===i?"active":""} key={l}>{String(i+1).padStart(2,"0")} {l}</span>)}
        </div>
        <button className="text-link" onClick={() => go("#/project/" + p.id)}>VIEW FULL PROJECT <span>↗</span></button>
      </div>
      <div className="featured-images">
        {p.images.slice(0,5).map((img,i)=>(
          <figure key={img} ref={el=>refs.current[i]=el} data-index={i} className="case-image reveal" data-reveal>
            <img src={img} alt={p.title + " " + labels[i]} loading="lazy" />
            <figcaption>{String(i+1).padStart(2,"0")} / {labels[i]}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function MaterialStudy() {
  const [active, setActive] = useState(0);
  return (
    <section className="materials section-pad">
      <span className="vertical-tag">MATERIAL / 05</span>
      <div className="section-kicker"><span>05</span><span>MATERIAL STUDY</span></div>
      <div className="materials-layout">
        <div className="materials-list">
          {materials.map((m,i)=>(
            <button key={m.name} className={active===i?"active":""} onMouseEnter={()=>setActive(i)} onClick={()=>setActive(i)}>
              <span>{String(i+1).padStart(2,"0")}</span>
              <strong>{m.name}</strong>
              <small>{m.meta}</small>
            </button>
          ))}
        </div>
        <div className="material-visual">
          {materials.map((m,i)=><img key={m.name} className={active===i?"active":""} src={m.image} alt={m.name}/>)}
          <div className="material-copy">
            <span>{materials[active].meta}</span>
            <p>{materials[active].copy}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessBlock() {
  const [active, setActive] = useState(0);
  const visuals = [
    projects[0].images[1], projects[0].images[3], projects[1].images[2], projects[3].images[3]
  ];
  return (
    <section className="process-block section-pad">
      <div className="process-ruler" aria-hidden="true"><span>0</span><span>25</span><span>50</span><span>75</span><span>100</span></div>
      <div className="section-kicker"><span>06</span><span>METHOD / PROCESS</span></div>
      <div className="process-layout">
        <div className="process-list">
          {process.map((step,i)=>(
            <button key={step[1]} className={active===i?"active":""} onClick={()=>setActive(i)} onMouseEnter={()=>setActive(i)}>
              <span>{step[0]}</span>
              <strong>{step[1]}</strong>
              <p>{step[2]}</p>
            </button>
          ))}
        </div>
        <div className="process-visual">
          {visuals.map((v,i)=><img key={v} className={active===i?"active":""} src={v} alt={process[i][1]} />)}
          <span className="visual-tag">{process[active][0]} / {process[active][1]}</span>
        </div>
      </div>
    </section>
  );
}

function ContactBlock() {
  return (
    <section className="contact-block section-pad" id="contact">
      <div className="section-kicker"><span>08</span><span>NEW PROJECTS / 2026</span></div>
      <div className="contact-title-wrap">
        <span className="contact-ghost" aria-hidden="true">FORM</span>
        <Reveal className="clip-title">
          <h2 className="mixed-title contact-title">
            <span>LET’S</span><em>build</em>
            <span>SOMETHING</span>
            <span>THAT</span><em>belongs.</em>
          </h2>
        </Reveal>
        <div className="contact-coordinates"><span>40°24'N</span><span>NEW COMMISSIONS / 2026</span></div>
      </div>
      <form onSubmit={e=>e.preventDefault()} className="contact-form">
        <label>NAME<input type="text" placeholder="Your name" /></label>
        <label>EMAIL<input type="email" placeholder="name@email.com" /></label>
        <label>LOCATION<input type="text" placeholder="City / Country" /></label>
        <label>PROJECT TYPE<select defaultValue=""><option value="" disabled>Select</option><option>Residential</option><option>Interior</option><option>Cultural</option><option>Hospitality</option></select></label>
        <label className="full">MESSAGE<textarea rows="4" placeholder="Tell us about the space, context and ambition." /></label>
        <button className="submit" type="submit">START A PROJECT <span>→</span></button>
      </form>
    </section>
  );
}

function Footer() {
  return <footer><strong>ORVEN</strong><span>ARCHITECTURE / INTERIORS</span><span>BAKU — BARCELONA</span><span>© 2026</span></footer>;
}

function Home() {
  useReveal();
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="hero-topline"><span>ARCHITECTURE / INTERIORS</span><span>2022—2026</span></div>
            <h1>ORVEN</h1>
            <div className="hero-statement">
              <p>Formed by place.<br/>Defined by proportion.</p>
              <span>BAKU — BARCELONA</span>
            </div>
            <div className="scroll-mark">SCROLL <span>↓</span> / 01</div>
          </div>
          <div className="hero-image">
            <span className="image-coordinate">A—01 / 40.4093°N</span>
            <span className="image-scale">SECTION / 1:50</span>
            <span className="image-crosshair" aria-hidden="true"></span>
            <img src={projects[0].hero} alt="ORVEN architecture" />
          </div>
        </section>

        <ProjectAtlas />
        <FeaturedCaseStudy />

        <section className="manifesto">
          <div className="manifesto-grid" aria-hidden="true"></div>
          <span className="manifesto-outline" aria-hidden="true">SPACE</span>
          <div className="section-kicker light"><span>04</span><span>POSITION / A—A</span></div>
          <div className="manifesto-top">
            <Reveal className="clip-title">
              <h2 className="mixed-title manifesto-title"><span>WE DO NOT</span><em>decorate</em><span>SPACE.</span></h2>
            </Reveal>
            <div className="manifesto-index">
              <span>01 <b>LIGHT</b></span>
              <span>02 <b>MATERIAL</b></span>
              <span>03 <b>PROPORTION</b></span>
            </div>
          </div>
          <Reveal className="clip-title second">
            <h2 className="mixed-title manifesto-title lower"><span>WE DEFINE</span><em>how it is felt.</em></h2>
          </Reveal>
          <p>Architecture begins where proportion, material and light become inseparable.</p>
        </section>

        <MaterialStudy />
        <ProcessBlock />

        <section className="studio-tease section-pad">
          <div className="section-kicker"><span>07</span><span>STUDIO</span></div>
          <div className="studio-grid">
            <div className="studio-image image-shell"><img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=86" alt="ORVEN studio" loading="lazy"/></div>
            <Reveal>
              <p className="studio-lead">ORVEN is an independent architecture and interiors practice interested in light, material, context and the quiet discipline of proportion.</p>
              <div className="stats"><span><b>05</b>Cities</span><span><b>27</b>Projects</span><span><b>11</b>Collaborators</span><span><b>04</b>Countries</span></div>
              <button className="text-link" onClick={()=>go("#/studio")}>ABOUT THE STUDIO <span>↗</span></button>
            </Reveal>
          </div>
        </section>

        <ContactBlock />
      </main>
      <Footer />
    </>
  );
}

function ProjectArchive() {
  useReveal();
  const [filter,setFilter]=useState("ALL");
  const filtered = filter==="ALL" ? projects : projects.filter(p=>p.type.toUpperCase()===filter || (filter==="INTERIORS" && p.type==="Retreat"));
  return (
    <>
      <Header />
      <main className="subpage">
        <section className="archive-intro section-pad">
          <div className="section-kicker"><span>A</span><span>ARCHIVE / 2022—2026</span></div>
          <Reveal className="clip-title"><h1 className="mixed-title page-title"><span>PROJECT</span><em>archive</em></h1></Reveal>
          <p>Five studies in context, climate, permanence and material.</p>
          <div className="filters">{["ALL","RESIDENTIAL","INTERIORS","CULTURAL"].map(f=><button className={filter===f?"active":""} onClick={()=>setFilter(f)} key={f}>{f}</button>)}</div>
        </section>
        <section className="archive-grid section-pad">
          {filtered.map((p,i)=><button key={p.id} className="archive-card" onClick={()=>go("#/project/"+p.id)}>
            <div className="image-shell"><img src={p.hero} alt={p.title}/></div>
            <div className="archive-meta"><span>{p.number}</span><strong>{p.title}</strong><span>{p.city}</span><span>{p.year}</span></div>
          </button>)}
        </section>
      </main>
      <Footer/>
    </>
  );
}

function ProjectPage({ project }) {
  useReveal();
  const next = projects[(projects.findIndex(p=>p.id===project.id)+1)%projects.length];
  const [split,setSplit]=useState(52);
  return (
    <>
      <Header />
      <main className="project-page">
        <section className="project-hero">
          <div className="project-hero-image"><img src={project.hero} alt={project.title}/></div>
          <div className="project-hero-copy">
            <span>{project.number} / {project.type.toUpperCase()}</span>
            <h1 className="project-display"><MixedProjectTitle title={project.title} /></h1>
            <div><span>{project.city}, {project.country}</span><span>{project.year}</span></div>
          </div>
        </section>

        <section className="project-facts section-pad">
          <div className="facts-grid">
            <span>LOCATION<b>{project.city}, {project.country}</b></span>
            <span>TYPOLOGY<b>{project.type}</b></span>
            <span>AREA<b>{project.area}</b></span>
            <span>YEAR<b>{project.year}</b></span>
            <span>STATUS<b>{project.status}</b></span>
            <span>MATERIAL<b>{project.palette}</b></span>
          </div>
          <Reveal><p className="project-intro">{project.intro}</p></Reveal>
        </section>

        <section className="full-image reveal" data-reveal><img src={project.images[1]} alt={project.title + " context"}/></section>

        <section className="concept section-pad">
          <div className="section-kicker"><span>02</span><span>CONCEPT</span></div>
          <Reveal><p>{project.concept}</p></Reveal>
        </section>

        <section className="image-duo section-pad">
          <figure className="reveal" data-reveal><img src={project.images[2]} alt={project.title + " interior"}/><figcaption>INTERIOR / 01</figcaption></figure>
          <figure className="reveal" data-reveal><img src={project.images[3]} alt={project.title + " detail"}/><figcaption>DETAIL / 02</figcaption></figure>
        </section>

        <section className="drawing-section section-pad">
          <div className="section-kicker"><span>03</span><span>PLAN / LOGIC</span></div>
          <div className="diagram">
            <span>ENTRY</span><span>COURTYARD</span><span>LIVING</span><span>PRIVATE</span>
            <i></i><i></i><i></i>
          </div>
          <p>A compact diagram showing the project as a sequence of thresholds, open space and controlled views rather than isolated rooms.</p>
        </section>

        <section className="before-after section-pad">
          <div className="section-kicker"><span>04</span><span>SPATIAL SHIFT</span></div>
          <div className="compare" style={{"--split":split+"%"}}>
            <img src={project.images[0]} alt="Existing / outer reading"/>
            <div className="after"><img src={project.images[4]} alt="Resolved / inner reading"/></div>
            <div className="divider"></div>
            <input aria-label="Before and after comparison" type="range" min="10" max="90" value={split} onChange={e=>setSplit(e.target.value)}/>
            <span className="before-label">CONTEXT</span><span className="after-label">RESOLUTION</span>
          </div>
        </section>

        <button className="next-project" onClick={()=>go("#/project/"+next.id)}>
          <span>NEXT PROJECT / {next.number}</span>
          <strong>{next.title}</strong>
          <div className="next-image"><img src={next.hero} alt={next.title}/></div>
        </button>
      </main>
      <Footer/>
    </>
  );
}

function StudioPage() {
  useReveal();
  return <>
    <Header/>
    <main className="subpage studio-page">
      <section className="studio-hero section-pad">
        <div className="section-kicker"><span>S</span><span>STUDIO / ORVEN</span></div>
        <Reveal className="clip-title"><h1 className="mixed-title page-title studio-title"><span>WE BUILD</span><em>from the</em><span>INSIDE OUT.</span></h1></Reveal>
        <p>ORVEN works across architecture and interiors, treating material, movement and natural light as one continuous problem.</p>
      </section>
      <section className="full-image reveal" data-reveal><img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=88" alt="Studio"/></section>
      <section className="studio-manifesto section-pad">
        <p>We are interested in buildings that become quieter with time. Our work avoids stylistic signatures in favor of proportion, legibility and atmosphere.</p>
        <div className="stats large"><span><b>05</b>Cities</span><span><b>27</b>Projects</span><span><b>11</b>Collaborators</span><span><b>04</b>Countries</span></div>
      </section>
      <ProcessBlock/>
    </main>
    <Footer/>
  </>;
}

function ProcessPage() {
  useReveal();
  return <>
    <Header/>
    <main className="subpage">
      <section className="archive-intro section-pad">
        <div className="section-kicker"><span>P</span><span>PROCESS</span></div>
        <Reveal className="clip-title"><h1 className="mixed-title page-title"><span>FROM SITE</span><em>to detail.</em></h1></Reveal>
        <p>Four phases. One continuous architectural argument.</p>
      </section>
      <ProcessBlock/>
      <MaterialStudy/>
    </main>
    <Footer/>
  </>;
}

function ContactPage() {
  useReveal();
  return <>
    <Header/>
    <main className="subpage">
      <ContactBlock/>
      <section className="contact-aside section-pad"><span>BAKU / AZ</span><span>BARCELONA / ES</span><span>studio@orven.example</span></section>
    </main>
    <Footer/>
  </>;
}

function App() {
  const route = useHashRoute();
  const projectMatch = route.match(/^#\/project\/(.+)$/);
  const project = projectMatch ? projects.find(p=>p.id===projectMatch[1]) : null;
  if (project) return <ProjectPage project={project}/>;
  if (route==="#/projects") return <ProjectArchive/>;
  if (route==="#/studio") return <StudioPage/>;
  if (route==="#/process") return <ProcessPage/>;
  if (route==="#/contact") return <ContactPage/>;
  return <Home/>;
}

createRoot(document.getElementById("root")).render(<App />);
