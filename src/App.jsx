import React, { useEffect, useMemo, useState } from 'react'
import { CONTACT, navItems, skills, experiences, projects, certificates, stats } from './data/content'

const base = import.meta.env.BASE_URL
const profileSrc = `${base}images/profile.png`

function Icon({ name, size = 18 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  const paths = {
    arrow: <><path d="M5 12h13"/><path d="m13 6 6 6-6 6"/></>,
    external: <><path d="M14 5h5v5"/><path d="M10 14 19 5"/><path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    github: <><path d="M15 22v-4.1c.05-1.1-.43-1.9-1.1-2.4 3.6-.4 7.35-1.75 7.35-7.9 0-1.75-.62-3.2-1.65-4.3.16-.4.72-2.05-.16-4.25 0 0-1.35-.43-4.4 1.65a15.2 15.2 0 0 0-8.1 0C3.9.62 2.55 1.05 2.55 1.05c-.88 2.2-.32 3.85-.16 4.25-1.03 1.1-1.65 2.55-1.65 4.3 0 6.13 3.73 7.5 7.3 7.9-.46.4-.88 1.05-1.04 2.05-.93.43-3.3 1.15-4.76-1.38 0 0-.86-1.56-2.48-1.67 0 0-1.57-.02-.11.98 0 0 1.05.5 1.78 2.4 0 0 1.02 3.14 5.5 2.07V22"/></>,
    linkedin: <><path d="M6 9v12"/><path d="M6 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/><path d="M11 21V9"/><path d="M11 14c0-3.2 2-5 4.7-5 2.7 0 3.3 2 3.3 5v7"/></>,
    menu: <><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></>,
    close: <><path d="M6 6l12 12"/><path d="M18 6 6 18"/></>,
    chevron: <><path d="m6 9 6 6 6-6"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
  }
  return <svg {...common}>{paths[name]}</svg>
}

function Button({ href, children, variant = 'primary', external = false, onClick }) {
  const cls = `btn btn-${variant}`
  if (onClick) return <button className={cls} onClick={onClick}>{children}</button>
  return <a className={cls} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{children}</a>
}

function SectionHeading({ eyebrow, title, text, id }) {
  return <div className="section-heading reveal" id={id}>
    <div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>
    {text && <p>{text}</p>}
  </div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [skillFilter, setSkillFilter] = useState('ALL')
  const [contactOpen, setContactOpen] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })

  useEffect(() => {
    const reveal = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')), { threshold: .08 })
    document.querySelectorAll('.reveal').forEach(el => reveal.observe(el))
    const sections = [...document.querySelectorAll('main section[id]')]
    const spy = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }), { rootMargin: '-25% 0px -65% 0px', threshold: 0 })
    sections.forEach(s => spy.observe(s))
    return () => { reveal.disconnect(); spy.disconnect() }
  }, [])

  const filteredSkills = useMemo(() => skillFilter === 'ALL' ? skills : { [skillFilter]: skills[skillFilter] }, [skillFilter])
  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }
  const contactHref = CONTACT.email.includes('ADD_') ? '#contact' : `mailto:${CONTACT.email}`
  const whatsappHref = CONTACT.whatsapp.includes('ADD_') ? '#contact' : `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}`
  const handleSubmit = (e) => { e.preventDefault(); const subject = encodeURIComponent(formState.subject || 'Portfolio enquiry'); const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`); window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}` }

  return <div className="site-shell">
    <div className="noise" aria-hidden="true" />
    <header className="navbar">
      <div className="nav-inner">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}><span>SAWAIRA IJAZ</span><small>CS • AI • DATA • WEB</small></a>
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
          {navItems.map(([id, label]) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <div className="mobile-actions"><Button href="#contact" onClick={() => setMenuOpen(false)}>HIRE ME <Icon name="arrow" size={15}/></Button></div>
        </nav>
        <div className="nav-actions"><a href={`${base}Sawaira-Ijaz-CV.pdf`} download className="text-link">DOWNLOAD CV</a><Button href="#contact">HIRE ME <Icon name="arrow" size={15}/></Button></div>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(v => !v)}><Icon name={menuOpen ? 'close' : 'menu'} size={23}/></button>
      </div>
    </header>

    <main>
      <section id="home" className="hero section-pad">
        <div className="hero-grid">
          <div className="hero-copy reveal">
            <div className="availability"><span className="status-dot"/> AVAILABLE FOR INTERNSHIPS • RESEARCH • REMOTE PROJECTS • FREELANCE WORK</div>
            <span className="eyebrow">COMPUTER SCIENCE UNDERGRADUATE • RESEARCHER</span>
            <h1>Turning Ideas Into <em>Digital Impact.</em></h1>
            <p className="hero-lead">I'm Sawaira Ijaz, a Computer Science undergraduate and researcher exploring artificial intelligence, data, full stack development, modern web technologies and meaningful digital experiences.</p>
            <div className="hero-actions"><Button href="#projects">VIEW MY WORK <Icon name="arrow"/></Button><Button href="#contact" variant="outline">HIRE ME <Icon name="arrow"/></Button><a className="cv-link" href={`${base}Sawaira-Ijaz-CV.pdf`} download>DOWNLOAD CV <Icon name="external" size={15}/></a></div>
            <div className="contact-mini"><a href={contactHref}>EMAIL ME</a><span>•</span><a href={whatsappHref}>WHATSAPP ME</a><span>•</span><a href={CONTACT.linkedin} target="_blank" rel="noreferrer">LINKEDIN</a></div>
          </div>
          <div className="hero-visual reveal delay-2">
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
            <div className="profile-frame"><div className="profile-glass"/><img src={profileSrc} alt="Sawaira Ijaz"/><span className="corner corner-a"/><span className="corner corner-b"/></div>
            <div className="float-card card-ai"><strong>AI & ML</strong><small>Research direction</small></div>
            <div className="float-card card-stack"><strong>FULL STACK</strong><small>React • Laravel • Node</small></div>
            <div className="float-card card-data"><strong>DATA ANALYTICS</strong><small>Stats • Insights • Viz</small></div>
            <div className="float-card card-research"><strong>RESEARCH</strong><small>Vision • Image Processing</small></div>
            <div className="hero-index">01 / 08</div>
          </div>
        </div>
        <button className="scroll-cue" onClick={() => scrollTo('about')}>SCROLL TO EXPLORE <span>↓</span></button>
      </section>

      <section id="about" className="section-pad section-dark">
        <SectionHeading eyebrow="01 / PROFILE" title="ABOUT ME" text="Computer Science, technology and continuous growth — with a practical, research-oriented direction." />
        <div className="about-grid">
          <div className="about-story reveal"><p className="large-copy">I’m building my path across <strong>software development, AI & data, technical communication and research-oriented learning</strong>.</p><p>Currently in the 7th semester of a BS Computer Science degree at the University of Gujrat, I have developed practical experience through web projects, structured internships and technical training. My work spans responsive interfaces, full stack application workflows, databases, analytics learning and AI/ML foundations.</p><p>Alongside technology, teaching and professional learning have strengthened my communication, presentation, management and teamwork skills. I’m interested in advanced study and opportunities where I can turn disciplined learning into useful technical work.</p></div>
          <div className="academic-card reveal delay-1"><span className="card-label">ACADEMIC SNAPSHOT</span><div className="degree"><strong>BS COMPUTER SCIENCE</strong><span>University of Gujrat</span></div><div className="academic-meta"><div><b>7th</b><span>Semester</span></div><div><b>3.34</b><span>CGPA / 4.0</span></div><div><b>Jul ’27</b><span>Expected</span></div></div><div className="course-tags">{['OOP','Data Structures','Algorithms','DBMS','AI Concepts','Statistics','Web Technologies'].map(x => <span key={x}>{x}</span>)}</div></div>
        </div>
        <div className="stats-grid">{stats.map(([num, label], i) => <div className="stat reveal" style={{'--delay': `${i * 45}ms`}} key={label}><strong>{num}</strong><span>{label}</span></div>)}</div>
        <div className="bring-section"><div className="bring-title reveal"><span className="eyebrow">WHAT I BRING</span><h3>Different skills.<br/><em>One direction.</em></h3></div><div className="bring-grid">{[['01','TECHNICAL DEVELOPMENT','Frontend + backend + database development.'],['02','AI & DATA','Data analytics, AI concepts, machine learning and research-oriented learning.'],['03','COMMUNICATION','Technical writing, teaching, documentation and clear communication.'],['04','LEADERSHIP','Management, project coordination, leadership and teamwork.'],['05','LEARNING MINDSET','Continuous learning through certifications, internships and practical projects.']].map(([n,t,d]) => <article className="bring-card reveal" key={n}><span>{n}</span><h4>{t}</h4><p>{d}</p></article>)}</div></div>
      </section>

      <section id="skills" className="section-pad">
        <SectionHeading eyebrow="02 / TOOLKIT" title="TECHNICAL ARSENAL" text="A broad working toolkit built through coursework, projects, training and continuous practice — without reducing skills to arbitrary percentages." />
        <div className="filter-row reveal">{['ALL','DEVELOPMENT','AI & DATA','TOOLS','PROFESSIONAL'].map(f => <button className={skillFilter === f ? 'filter active' : 'filter'} key={f} onClick={() => setSkillFilter(f)}>{f}</button>)}</div>
        <div className="skills-layout">{Object.entries(filteredSkills).map(([group, items], idx) => <div className="skill-group reveal" key={group} style={{'--delay': `${idx * 60}ms`}}><div className="group-head"><span>0{idx+1}</span><h3>{group}</h3></div><div className="chip-grid">{items.map(item => <span className="skill-chip" key={item}>{item}</span>)}</div></div>)}</div>
      </section>

      <section id="experience" className="section-pad section-dark">
        <SectionHeading eyebrow="03 / JOURNEY" title="EXPERIENCE" text="A timeline of internships, training and teaching — with status labels kept explicit so the record stays accurate." />
        <div className="timeline">{experiences.map((item, i) => <article className="timeline-item reveal" key={`${item.company}-${item.role}`}><div className="timeline-marker"><span>{String(i+1).padStart(2,'0')}</span></div><div className="timeline-card"><div className="timeline-top"><span className={`status-pill ${item.status.toLowerCase()}`}>{item.status}</span><span className="duration">{item.duration}</span></div><div className="timeline-company">{item.company}</div><h3>{item.role}</h3><p>{item.text}</p><div className="tag-row">{item.tags.map(t => <span key={t}>{t}</span>)}</div></div></article>)}</div>
        <div className="education-strip reveal"><div><span className="eyebrow">ACADEMIC TIMELINE</span><h3>BS Computer Science</h3><p>University of Gujrat · 7th Semester · Expected July 2027 · CGPA 3.34 / 4.00</p></div><div className="edu-mark">UoG<br/><small>BSCS</small></div></div>
      </section>

      <section id="projects" className="section-pad projects-section">
        <SectionHeading eyebrow="04 / SELECTED WORK" title="PROJECTS" text="A mix of completed work, current builds and clearly-labelled project concepts — no invented completion claims." />
        <div className="project-list">{projects.map((p, i) => <article className={`project-card reveal ${i % 2 ? 'reverse' : ''}`} key={p.num}>
          
         <div className={`project-visual ${p.tone}`}>
  <div className="browser-bar">
    <span />
    <span />
    <span />
    <b>{p.category}</b>
  </div>

  <div className="project-image">
    <img
      src={p.image}
      alt={p.title}
    />
  </div>

  <div className="project-num">{p.num}</div>
</div>

                <div className="project-info">
                  <div className="project-meta">
                    <span>{p.category}</span><span>{p.type}</span>
                    </div><h3>{p.title}</h3><p>{p.description}</p>
                    <div className="tag-row tech">{p.tech.map(t => <span key={t}>{t}</span>)}</div><ul>{p.features.map(f => <li key={f}><Icon name="check" size={15}/>{f}</li>)}</ul><div className="project-links">{p.github ? <a href={p.github} target="_blank" rel="noreferrer">GITHUB <Icon name="external" size={14}/></a> : null}{p.live ? <a href={p.live} target="_blank" rel="noreferrer">LIVE DEMO <Icon name="external" size={14}/></a> : <span className="coming">{p.github ? 'LIVE DEMO — ADD URL' : 'DEMO / URL — COMING SOON'}</span>}</div></div></article>)}</div>
      </section>

      <section id="certificates" className="section-pad section-dark">
        <SectionHeading eyebrow="05 / LEARNING" title="CERTIFICATIONS" text="Selected professional learning. Certificate files are intentionally not fabricated; add the original PDFs or verification links when available." />
        <div className="cert-grid">{certificates.map(([title, provider, status], i) => <article className="cert-card reveal" key={title}><span className="cert-index">{String(i+1).padStart(2,'0')}</span><span className="cert-status">{status}</span><div className="cert-seal">SI</div><h3>{title}</h3><p>{provider}</p><button className="cert-view" onClick={() => alert('Certificate file / verification link can be added here in src/data/content.js.')}>CERTIFICATE FILE <Icon name="external" size={14}/></button></article>)}</div>
      </section>

      <section id="research" className="section-pad research-section">
        <div className="research-layout"><div className="reveal"><span className="eyebrow">06 / DIRECTION</span><h2>RESEARCH <em>INTERESTS</em></h2><p className="research-lead">I am interested in exploring research at the intersection of artificial intelligence, computer vision, image processing and data-driven systems, with the long-term goal of developing deeper research and technical expertise through advanced study and practical experimentation.</p></div><div className="research-wheel reveal delay-2"><div className="wheel-core">AI<br/><span>RESEARCH</span></div>{[['01','VISION'],['02','DATA'],['03','IMAGE'],['04','LEARNING']].map(([n,t], i) => <div className={`wheel-node node-${i+1}`} key={n}><b>{n}</b><span>{t}</span></div>)}</div></div>
        <div className="research-topics">{['Artificial Intelligence','Machine Learning','Deep Learning','Computer Vision','Image Processing','Visual Computing','Data Analytics','Applied Machine Learning'].map((x,i) => <span className="topic reveal" key={x}><b>0{i+1}</b>{x}</span>)}</div>
      </section>

      <section id="services" className="section-pad services-section section-dark">
        <SectionHeading eyebrow="07 / CAPABILITIES" title="WHAT  I  CAN  BUILD" text="Services and project directions that align with my current technical foundation and learning trajectory." />
        <div className="service-grid">{[['WEB DEVELOPMENT','Responsive websites and modern frontend interfaces.','01'],['FULL STACK APPLICATIONS','React / Node / PHP / Laravel-based applications.','02'],['E-COMMERCE','Product catalogs, carts, orders and management systems.','03'],['DATA ANALYTICS','Data cleaning, analysis, visualization and dashboards.','04'],['AI / ML PROJECTS','Learning-oriented AI, ML and computer vision projects.','05'],['TECHNICAL CONTENT','AI and technology-focused technical writing and documentation.','06']].map(([t,d,n]) => <article className="service-card reveal" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><a href="#contact">HIRE ME <Icon name="arrow" size={15}/></a></article>)}</div>
      </section>

      <section id="contact" className="section-pad contact-section">
        <div className="contact-head reveal"><span className="eyebrow">08 / CONNECT</span><h2>LET’S BUILD<br/><em>SOMETHING MEANINGFUL.</em></h2><p>Open to internships, research opportunities, remote projects and collaborative work.</p></div>
        <div className="contact-grid"><div className="contact-options reveal"><a href={contactHref} className="contact-card"><span>01 / EMAIL</span><strong>{CONTACT.email.includes('ADD_') ? 'ADD YOUR EMAIL' : CONTACT.email}</strong><Icon name="arrow"/></a><a href={whatsappHref} className="contact-card"><span>02 / WHATSAPP</span><strong>{CONTACT.whatsapp.includes('ADD_') ? 'ADD YOUR NUMBER' : CONTACT.whatsapp}</strong><Icon name="arrow"/></a><a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="contact-card"><span>03 / LINKEDIN</span><strong>/in/sawaira-ijaz</strong><Icon name="external"/></a><a href={CONTACT.github} target="_blank" rel="noreferrer" className="contact-card"><span>04 / GITHUB</span><strong>@sa23515193-hash</strong><Icon name="external"/></a></div>
          <form className="contact-form reveal delay-1" onSubmit={handleSubmit}><div className="form-head"><span>START A CONVERSATION</span><small>Frontend-only mailto fallback — no fake submission.</small></div><label>Name<input required value={formState.name} onChange={e=>setFormState({...formState,name:e.target.value})} placeholder="Your name"/></label><label>Email<input required type="email" value={formState.email} onChange={e=>setFormState({...formState,email:e.target.value})} placeholder="you@example.com"/></label><label>Subject<input required value={formState.subject} onChange={e=>setFormState({...formState,subject:e.target.value})} placeholder="Opportunity / project"/></label><label>Message<textarea required rows="5" value={formState.message} onChange={e=>setFormState({...formState,message:e.target.value})} placeholder="Tell me a little about it..."/></label><button className="btn btn-primary" type="submit">OPEN EMAIL <Icon name="arrow"/></button></form>
        </div>
        <div className="contact-bottom reveal"><span>Gujrat, Pakistan</span><span>REMOTE / INTERNATIONAL</span><button onClick={() => setContactOpen(true)}>HIRE ME <Icon name="arrow" size={15}/></button></div>
      </section>
    </main>

    <footer className="footer"><div><strong>SAWAIRA IJAZ</strong><span>Computer Science Undergraduate & Researcher</span></div><div className="footer-social"><a href={CONTACT.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github"/></a><a href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin"/></a><a href={contactHref} aria-label="Email"><Icon name="mail"/></a></div><button onClick={() => scrollTo('home')}>BACK TO TOP ↑</button><small>© 2026 Sawaira Ijaz. All rights reserved.</small></footer>
    {contactOpen && <div className="modal-backdrop" onClick={() => setContactOpen(false)}><div className="hire-modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={() => setContactOpen(false)}><Icon name="close"/></button><span className="eyebrow">HIRE / CONNECT</span><h2>Choose a channel.</h2><p>Use the links below to start a professional conversation. Email and WhatsApp remain configurable until your real contact details are added.</p><div className="modal-links"><a href={contactHref}>EMAIL <Icon name="arrow"/></a><a href={whatsappHref}>WHATSAPP <Icon name="arrow"/></a><a href={CONTACT.linkedin} target="_blank" rel="noreferrer">LINKEDIN <Icon name="external"/></a><a href={CONTACT.github} target="_blank" rel="noreferrer">GITHUB <Icon name="external"/></a></div></div></div>}
  </div>
}

export default App
