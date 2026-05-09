/* ═══════════════════════════════════════════════════════════
   script.js — Dynamic Portfolio Website
   ───────────────────────────────────────────────────────────
   HOW THIS FILE WORKS:
   1. PORTFOLIO_DATA  →  All your personal info lives here.
                        Edit ONLY this object to update content.
   2. render*()        →  Functions that read the data and
                          build the HTML automatically.
   3. Event listeners  →  Dark mode, hamburger menu,
                          project filter, contact form,
                          scroll animations.
══════════════════════════════════════════════════════════ */


/* ╔══════════════════��═══════════════════════════════════╗
   ║                                                      ║
   ║   ✏️  YOUR PERSONAL DATA — EDIT EVERYTHING HERE      ║
   ║                                                      ║
   ║   This is the ONLY place you need to make changes.   ║
   ║   The rest of the code reads this and builds the     ║
   ║   website automatically.                             ║
   ║                                                      ║
   ╚══════════════════════════════════════════════════════╝ */

const PORTFOLIO_DATA = {

  /* ──────────── BASIC INFO ──────────── */
  name:       "Bintou Djassi Diakité ",       // ← Your full name
  initials:   "BD",                // ← Shown in the avatar circle
  role:       "Front-End Developer & Marketing Specialist",  // ← Your job title or tagline
  greeting:   "👋 Hello, I'm",
  tagline:    "I craft fast, accessible, and beautiful web experiences — turning complex ideas into clean, working code.",
  location:   "Ariana, Tunisia",
  email:      "bintoudiakite562@gmail.com",
  phone:      "+216 51 514 623",
  availability: "Available for freelance",

  /* Social links — use "#" if you don't have a profile */
  socials: [
    { label: "GitHub",   icon: "🐱", url: "https://github.com/BintouDK" },
    { label: "LinkedIn", icon: "💼", url: "https://www.linkedin.com/in/diakit%C3%A9-bintou-106190278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
    { label: "Twitter",  icon: "🐦", url: "https://twitter.com/" },
  
  ],

  /* CTA buttons on the home screen */
  ctaButtons: [
    { label: "View Projects",   href: "#projects", style: "primary"  },
    { label: "Download CV",     href: "#",         style: "outline"  },
  ],

  /* ──────────── ABOUT ──────────── */
  about: {
    paragraphs: [
      "I'm a passionate full-stack developer with 1 year of experience building web and mobile applications. I love solving hard problems and transforming ideas into polished digital products.",
      "My workflow bridges design and engineering — I care deeply about performance, accessibility, and the tiny details that elevate a good interface to a great one.",
      "When I'm not coding, you'll find me hiking, sketching UI concepts in a notebook, or contributing to open-source projects.",
    ],
    /* Highlight numbers shown beside the bio */
    stats: [
      { number: "04+", label: "Projects Done"     },
      { number: "1+",  label: "Years Experience"  },
      { number: "15+", label: "Happy Clients"     },
      { number: "0",   label: "Awards Won"        },
    ],
  },

  /* ──────────── SERVICES ──────────── */
  services: [
    {
      icon:  "🌐",
      title: "Web Development",
      desc:  "Responsive, accessible websites built with HTML, CSS, JavaScript, and modern frameworks.",
    },
    {
      icon:  "📱",
      title: "Mobile Apps",
      desc:  "Cross-platform mobile applications using React Native with smooth native-feel UX.",
    },
    {
      icon:  "🎨",
      title: "Marketing & Branding",
      desc:  "Promotional materials, editable assets, and brand identity to make your project stand out.",
    },
    {
      icon:  "⚙️",
      title: "Back-End APIs",
      desc:  "RESTful and GraphQL APIs built with Node.js / Express, plus database design.",
    },
    {
      icon:  "🚀",
      title: "Performance",
      desc:  "Audits and optimisations to hit 90+ Lighthouse scores on speed and accessibility.",
    },
    {
      icon:  "☁️",
      title: "DevOps & Cloud",
      desc:  "CI/CD pipelines, Docker containers, and deployments on AWS or Vercel.",
    },
  ],

  /* ──────────── PROJECTS ──────────── */
  /*
     Each project must have a "category" that matches
     one of the filter labels (case-insensitive).
     bannerColor: any valid CSS color for the card top.
  */
  projects: [
    {
      title:       "ShopEase — E-commerce Platform",
      category:    "web",
      desc:        "A full-stack online store with cart, authentication, and Stripe payments.",
      tags:        ["React", "Node.js", "MongoDB", "Stripe"],
      emoji:       "🛒",
      bannerColor: "#1a1a2e",
      liveUrl:     "#",
      repoUrl:     "#",
    },
    {
      title:       "Foodtracker — Nutrition App",
      category:    "web",
      desc:        "Track meals, calories, and macros with a sleek dashboard and barcode scanner.",
      tags:        ["Vue.js", "Socket.io", "PostgreSQL"],
      emoji:       "🍎",
      bannerColor: "#0f2027",
      liveUrl:     "#",
      repoUrl:     "#",
    },
    {
      title:       "portfolio — Personal Website",
      category:    "web",
      desc:        "A responsive personal portfolio website showcasing projects, skills, and contact information.",
      tags:        ["HTML", "CSS", "JavaScript"],
      emoji:       "🌟",
      bannerColor: "#1a0a2e",
      liveUrl:     "#",
      repoUrl:     "#",
    },
    {
      title:       "WeatherNow — Live Forecast",
      category:    "web",
      desc:        "Real-time weather dashboard with animated maps, 7-day forecast, and geolocation.",
      tags:        ["Vanilla JS", "OpenWeather API", "Chart.js"],
      emoji:       "⛅",
      bannerColor: "#0a1628",
      liveUrl:     "#",
      repoUrl:     "#",
    },
    {
      title:       "ChatPal — Messaging App",
      category:    "mobile",
      desc:        "Mobile messaging app with end-to-end encryption, media sharing, and group chats.",
      tags:        ["React Native", "Firebase", "Firestore"],
      emoji:       "💬",
      bannerColor: "#0f1a0a",
      liveUrl:     "#",
      repoUrl:     "#",
    },
    
  ],

  /* ──────────── SKILLS ──────────── */
  /*
     Group your skills into categories.
     'level' is a percentage (0–100) for the progress bar.
  */
  skillGroups: [
    {
      groupName: "Front-End",
      skills: [
        { name: "HTML & CSS",   level: 95 },
        { name: "JavaScript",   level: 88 },
        { name: "React",        level: 85 },
        { name: "WordPress",        level: 85 },
      
      ],
    },
    {
      groupName: "Back-End",
      skills: [
        { name: "Node.js",      level: 82 },
        { name: "Express",      level: 80 },
        { name: "PostgreSQL",   level: 72 },
        { name: "MySQL",      level: 68 },
      ],
    },
    {
      groupName: "Tools & Other",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code",        level: 78 },
        { name: "Adobe Creative Suite",       level: 60 },
        { name: "Canva",          level: 55 },
      ],
    },
  ],

  /* ──────────── EDUCATION ──────────── */
  education: [
    {
      degree:  "DUT. finance and accounting",
      school:  "Tehnolab",
      date:    "2021 – 2024",
      desc:    "Completed. Gained strong analytical skills, financial knowledge, and business acumen. Developed attention to detail and problem-solving abilities through coursework and projects.",
    },
    {
      degree:  "BTS. web development/Maketing digital",
      school:  "CSFT",
      date:    "2024 – 2027",
      desc:    "In progress. Learning full-stack web development, digital marketing, and e-commerce.",
    },
    {
      degree:  "Bachelor's web development",
      school:  "college de paris (Amilcar university)",
      date:    "2027",
      desc:    "Planned. Focus on advanced web technologies, project management, and industry best practices.",
    },
   
  ],




 /* ──────────── CERTIFICATIONS ──────────── */
  /*
     Add as many objects as you like inside this array.
     Each object = one certification card on the timeline.
     verifyUrl: paste the credential URL, or use "#" if you don't have one yet.
  */
  certifications: [
    {
      date:        " 2024",
      title:       "Microsoft Certified: word, Excel, PowerPoint.",
      issuer:      "Microsoft",
      issuerIcon:  "🥈",                // emoji shown in the badge
      desc:        "Certification demonstrating proficiency in Microsoft Word, Excel, and PowerPoint. Validates skills in document creation, data analysis, and presentation design. Issued by Microsoft",
      verifyUrl:   "#",                 // ← paste your credential link here
    },
    {
      date:        "March 2026",
      title:       "Meta certified Digital Marketing Associate",
      issuer:      "Meta",
      issuerIcon:  "🥇",
      desc:        "CBO certification from Meta, validating foundational digital marketing skills across Facebook, Instagram, and Messenger platforms. Covers campaign creation, audience targeting, and more.",
      verifyUrl:   "#",
    },
    /* ── HOW TO ADD MORE ──────────────────────────────────
       Copy the block below, paste it above this comment,
       and fill in your values. That's it!

    {
      date:        "Month Year",
      title:       "Your Certification Title",
      issuer:      "Issuer Name",
      issuerIcon:  "🏅",
      desc:        "Short description of what this certificate covers.",
      verifyUrl:   "#",
    },
    ─────────────────────────────────────────────────── */
  ],

  /* ──────────── CONTACT ──────────── */
  contactIntro: "Have a project in mind? I'd love to hear about it. Drop me a message and I'll get back to you within 24 hours.",

}; // ← end of PORTFOLIO_DATA


/* ═══════════════════════════════════════════════════════════
   RENDER FUNCTIONS
   Each function reads from PORTFOLIO_DATA and creates HTML.
══════════════════════════════════════════════════════════ */


/* ─────────── NAV ─────────── */
function renderNav() {
  // Logo
  const logo = document.getElementById("nav-logo");
  // Split name into first word (normal) + rest (accented)
  const nameParts = PORTFOLIO_DATA.name.split(" ");
  logo.innerHTML = `${nameParts[0]}<span>${nameParts.slice(1).join(" ")}</span>`;

  // Navigation links — each maps to a section id
  const navSections = ["home", "about", "services", "projects", "skills", "education", "certifications", "contact"];
  const navLabels   = ["Home", "About", "Services", "Projects", "Skills", "Education", "Certifications", "Contact"];

  const ul = document.getElementById("nav-links");
  navSections.forEach((id, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#${id}">${navLabels[i]}</a>`;
    ul.appendChild(li);
  });
}


/* ─────────── HOME ─────────── */
function renderHome() {
  document.title = `${PORTFOLIO_DATA.name} — Portfolio`;

  document.getElementById("home-greeting").textContent = PORTFOLIO_DATA.greeting;

  // Highlight the first name in accent color
  const nameParts  = PORTFOLIO_DATA.name.split(" ");
  const nameEl     = document.getElementById("home-name");
  nameEl.innerHTML = `<span class="highlight">${nameParts[0]}</span> ${nameParts.slice(1).join(" ")}`;

  document.getElementById("home-tagline").textContent = PORTFOLIO_DATA.tagline;

  // Initials inside the avatar circle
  document.getElementById("avatar-initials").textContent = PORTFOLIO_DATA.initials;

  // CTA buttons
  const ctaEl = document.getElementById("home-cta");
  PORTFOLIO_DATA.ctaButtons.forEach(btn => {
    const a = document.createElement("a");
    a.href      = btn.href;
    a.className = `btn btn-${btn.style}`;
    a.textContent = btn.label;
    ctaEl.appendChild(a);
  });
}


/* ─────────── ABOUT ─────────── */
function renderAbout() {
  // Bio paragraphs
  const textEl = document.getElementById("about-text");
  PORTFOLIO_DATA.about.paragraphs.forEach(para => {
    const p = document.createElement("p");
    p.textContent = para;
    textEl.appendChild(p);
  });

  // Stat cards
  const statsEl = document.getElementById("about-stats");
  PORTFOLIO_DATA.about.stats.forEach(stat => {
    const card = document.createElement("div");
    card.className = "stat-card";
    card.innerHTML = `
      <span class="stat-number">${stat.number}</span>
      <span class="stat-label">${stat.label}</span>
    `;
    statsEl.appendChild(card);
  });
}


/* ─────────── SERVICES ─────────── */
function renderServices() {
  const grid = document.getElementById("services-grid");
  PORTFOLIO_DATA.services.forEach(service => {
    const card = document.createElement("div");
    card.className = "service-card fade-in-section";
    card.innerHTML = `
      <span class="service-icon">${service.icon}</span>
      <h3 class="service-title">${service.title}</h3>
      <p class="service-desc">${service.desc}</p>
    `;
    grid.appendChild(card);
  });
}


/* ─────────── PROJECTS ─────────── */
function renderProjects() {

  // 1. Build filter buttons from unique categories
  const categories = ["all", ...new Set(PORTFOLIO_DATA.projects.map(p => p.category))];
  const filterBar  = document.getElementById("filter-bar");

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className   = "filter-btn" + (cat === "all" ? " active" : "");
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1); // capitalize
    btn.dataset.filter = cat;

    // When a filter button is clicked:
    btn.addEventListener("click", () => {
      // Remove 'active' from all filter buttons
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      // Show/hide project cards
      document.querySelectorAll(".project-card").forEach(card => {
        const matches = cat === "all" || card.dataset.category === cat;
        card.classList.toggle("hidden", !matches);
      });
    });

    filterBar.appendChild(btn);
  });

  // 2. Build project cards
  const grid = document.getElementById("projects-grid");
  PORTFOLIO_DATA.projects.forEach(project => {
    const card = document.createElement("div");
    card.className      = "project-card";
    card.dataset.category = project.category;  // used by filter

    // Tags HTML
    const tagsHtml = project.tags
      .map(tag => `<span class="tag">${tag}</span>`)
      .join("");

    card.innerHTML = `
      <div class="project-banner" style="background:${project.bannerColor}">
        <span>${project.emoji}</span>
      </div>
      <div class="project-body">
        <p class="project-category">${project.category}</p>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.desc}</p>
        <div class="project-tags">${tagsHtml}</div>
        <div class="project-links">
          <a href="${project.liveUrl}" target="_blank">🚀 Live Demo</a>
          <a href="${project.repoUrl}" target="_blank">💻 Source Code</a>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}


/* ─────────── SKILLS ─────────── */
function renderSkills() {
  const container = document.getElementById("skills-container");

  PORTFOLIO_DATA.skillGroups.forEach(group => {
    const groupEl = document.createElement("div");
    groupEl.className = "skill-group fade-in-section";

    // Group heading
    const heading = document.createElement("h3");
    heading.textContent = group.groupName;
    groupEl.appendChild(heading);

    // Individual skill bars
    group.skills.forEach(skill => {
      const item = document.createElement("div");
      item.className = "skill-item";
      item.innerHTML = `
        <div class="skill-header">
          <span class="skill-name">${skill.name}</span>
          <span class="skill-pct">${skill.level}%</span>
        </div>
        <div class="skill-bar">
          <!-- data-level stores the target width; animated by animateSkillBars() -->
          <div class="skill-fill" data-level="${skill.level}"></div>
        </div>
      `;
      groupEl.appendChild(item);
    });

    container.appendChild(groupEl);
  });
}


/* ─────────── EDUCATION ─────────── */
function renderEducation() {
  const timeline = document.getElementById("timeline");

  PORTFOLIO_DATA.education.forEach(item => {
    const entry = document.createElement("div");
    entry.className = "timeline-item fade-in-section";
    entry.innerHTML = `
      <p class="timeline-date">${item.date}</p>
      <h3 class="timeline-degree">${item.degree}</h3>
      <p class="timeline-school">${item.school}</p>
      <p class="timeline-desc">${item.desc}</p>
    `;
    timeline.appendChild(entry);
  });
}

/* ─────────── CERTIFICATIONS ─────────── */

/* ────────────────────────────────────────────
     Modal logic — clean & self-contained
  ──────────────────────────────────────────── */
  const modal        = document.getElementById('cert-modal');
  const modalTitle   = document.getElementById('modal-title');
  const modalImgWrap = document.getElementById('modal-img-wrap');
  const modalClose   = document.getElementById('modal-close');
  const modalCloseBtn= document.getElementById('modal-close-btn');
  const modalDownload= document.getElementById('modal-download');

  // Elements that had focus before opening (for a11y restore)
  let previousFocus = null;

  /**
   * openModal(triggerBtn)
   * Reads data attributes from the clicked button and
   * populates + opens the modal.
   */
  function openModal(triggerBtn) {
    const imgSrc  = triggerBtn.getAttribute('data-img');
    const imgAlt  = triggerBtn.getAttribute('data-img-alt') || 'Certificate image';
    const title   = triggerBtn.getAttribute('data-title')   || 'Certificate';

    // Update modal content
    modalTitle.textContent = title;

    if (imgSrc) {
      // Resolve image path: if it's a relative path (certif1, certif2, etc.),
      // keep it as-is; if it's a full URL, use it directly
      const fullImgPath = imgSrc.startsWith('http') ? imgSrc : imgSrc;
      
      modalImgWrap.innerHTML = `
        <img
          src="${fullImgPath}"
          alt="${imgAlt}"
          loading="lazy"
          onerror="this.parentElement.innerHTML = window.fallbackHTML()"
        />`;
      modalDownload.href = fullImgPath;
      modalDownload.style.display = 'inline-flex';
    } else {
      modalImgWrap.innerHTML = fallbackHTML();
      modalDownload.style.display = 'none';
    }

    // Open
    modal.classList.add('open');
    previousFocus = document.activeElement;
    modal.focus();
    document.body.style.overflow = 'hidden';
  }

  /**
   * closeModal()
   * Closes the modal and restores scroll + focus.
   */
  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    if (previousFocus) previousFocus.focus();
  }

  /**
   * fallbackHTML()
   * Returns placeholder markup when no image is available.
   */
  function fallbackHTML() {
    return `
      <div class="cert-placeholder">
        <div class="cert-seal">🏅</div>
        <p><strong>Certificate Preview</strong><br/>
        Unable to load image. Please check the file path.</p>
      </div>`;
  }

  // Expose fallbackHTML globally for onerror attribute
  window.fallbackHTML = fallbackHTML;

  /* ── Event Listeners ── */

  // Open modal when any "View Certificate" button is clicked
  document.querySelectorAll('[data-modal="cert-modal"]').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn));
  });

  // Close via X button
  modalClose.addEventListener('click', closeModal);

  // Close via footer Close button
  modalCloseBtn.addEventListener('click', closeModal);

  // Close by clicking outside the modal box (on the overlay)
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  // Close on Escape key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  // Trap focus inside modal while open
  modal.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    const focusable = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
    }
  });

/* ═══════════════════════════════════════════════════════════
   FEATURE: FADE-IN ON SCROLL
   Elements with class "fade-in-section" animate in when
   they enter the viewport.
══════════════════════════════════════════════════════════ */
function initScrollAnimations() {
  // Add the class to all section containers too
  document.querySelectorAll(".section").forEach(section => {
    section.classList.add("fade-in-section");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // animate only once
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".fade-in-section").forEach(el => observer.observe(el));
}


/* ═══════════════════════════════════════════════════════════
   FEATURE: SKILL BAR ANIMATION
   Fills bars to their target width when section scrolls in.
══════════════════════════════════════════════════════════ */
function animateSkillBars() {
  const skillsSection = document.getElementById("skills");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Find all fill bars and animate them
          document.querySelectorAll(".skill-fill").forEach(bar => {
            const level = bar.dataset.level;
            // Small delay so fade-in finishes first
            setTimeout(() => {
              bar.style.width = level + "%";
            }, 300);
          });
          observer.unobserve(entry.target); // only animate once
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(skillsSection);
}


/* ═══════════════════════════════════════════════════════════
   FEATURE: CONTACT FORM (front-end only)
   No server needed — just validates and shows a message.
══════════════════════════════════════════════════════════ */
function initContactForm() {
  const form     = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // stop the page from reloading

    const name    = document.getElementById("cf-name").value.trim();
    const email   = document.getElementById("cf-email").value.trim();
    const message = document.getElementById("cf-message").value.trim();

    // Basic validation
    if (!name || !email || !message) {
      feedback.textContent = "⚠️ Please fill in your name, email, and message.";
      feedback.className   = "form-feedback error";
      return;
    }

    // Simple email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      feedback.textContent = "⚠️ Please enter a valid email address.";
      feedback.className   = "form-feedback error";
      return;
    }

    // ✅ In a real project, you would send the data to a server here.
    //    e.g. using fetch() to call a backend API or a service like Formspree.
    //    For now we just show a success message.

    feedback.textContent = `✅ Thanks ${name}! I'll reply to ${email} soon.`;
    feedback.className   = "form-feedback success";
    form.reset();

    // Clear the message after 6 seconds
    setTimeout(() => { feedback.textContent = ""; }, 6000);
  });
}


/* ═══════════════════════════════════════════════════════════
   INITIALISE EVERYTHING
   This function runs once the page HTML is ready.
══════════════════════════════════════════════════════════ */
function init() {
  // 1. Build HTML content from data
  renderNav();
  renderHome();
  renderAbout();
  renderServices();
  renderProjects();
  renderSkills();
  renderEducation();
  

  // 2. Activate interactive features
  initScrollAnimations();
  animateSkillBars();
  initContactForm();
}

// Run init when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", init);


/* ═══════════════════════════════════════════════════════════

   📖  INSTRUCTIONS FOR BEGINNERS
   ─────────────────────────────────────────────────────────

   ✏️  WHERE TO EDIT YOUR PERSONAL DATA
   ──────────────────────────────────────
   Everything you need to change is inside the big
   PORTFOLIO_DATA object at the top of this file (line ~25).

   • name, role, tagline     → personal branding
   • about.paragraphs        → your bio text
   • about.stats             → numbers (projects, years, etc.)
   • services                → add / remove service cards
   • projects                → add / remove project cards
     ↳ To add a project, copy one { ... } block and change the values.
     ↳ category must match a filter you want (e.g. "web", "mobile").
   • skillGroups             → change skill names & levels (0–100)
   • education               → degrees, schools, dates
   • email, phone, location  → contact details
   • socials                 → update the URL for each social link

   DO NOT edit index.html structure or the render functions
   unless you know what you're doing.

   ─────────────────────────────────────────────────────────
   🖥️  HOW TO RUN IN VISUAL STUDIO CODE
   ──────────────────────────────────────
   1. Open VS Code.
   2. Go to File → Open Folder and select the project folder
      (the folder containing index.html, style.css, script.js).
   3. Install the "Live Server" extension:
      • Click the Extensions icon (left sidebar, looks like 4 squares)
      • Search for "Live Server" by Ritwick Dey
      • Click Install
   4. Right-click index.html in the Explorer panel.
   5. Select "Open with Live Server".
   6. Your browser opens at http://127.0.0.1:5500 — done! 🎉
      The page auto-reloads whenever you save a file.

   ─────────────────────────────────────────────────────────
   🌍  HOW TO DEPLOY ON GITHUB PAGES (free hosting)
   ──────────────────────────────────────────────────────────
   Step 1 — Create a GitHub repository
     • Go to https://github.com and sign in (or create an account).
     • Click the "+" icon → "New repository".
     • Name it:  your-username.github.io
       (replace "your-username" with your actual GitHub username)
     • Set it to Public.
     • Click "Create repository".

   Step 2 — Upload your files
     Option A (easiest — drag & drop):
       • Open your new repo on GitHub.
       • Click "uploading an existing file".
       • Drag in:  index.html,  style.css,  script.js
       • Click "Commit changes".

     Option B (using Git in the terminal):
       git init
       git add .
       git commit -m "Initial portfolio"
       git branch -M main
       git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
       git push -u origin main

   Step 3 — Enable GitHub Pages
     • Go to your repo → Settings → Pages.
     • Under "Branch" select "main" and click Save.
     • Wait ~2 minutes.
     • Your site is live at:  https://your-username.github.io 🚀

   ─────────────────────────────────────────────────────────
   💡  TIPS
   • Press Ctrl + S (Cmd + S on Mac) to save files in VS Code.
   • Use browser DevTools (F12) to debug CSS/JS.
   • Want to add a custom domain? Check GitHub Pages docs.
   ─────────────────────────────────────────────────────────
══════════════════════════════════════════════════════════ */
