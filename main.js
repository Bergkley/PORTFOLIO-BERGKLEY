const projects = [
  {
    id: "projeto-social",
    title: "Projeto Social",
    category: "frontend",
    categoryLabel: "Front-End",
    image: "image/project-social-720.jpg",
    alt: "Tela do site institucional do Instituto Doando o que se Recebe",
    summary: "Site institucional para apresentar a missão, atividades e canais de doação de uma ONG.",
    description: "Projeto criado para o Instituto Doando o que se Recebe, desenvolvido por alunos da EEEP Juarez Távora no curso de Redes de Computadores em 2023. A solução apresenta a instituição, suas ações sociais e canais de doação integrados.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    demo: "https://instituto-doando-que-se-recebe.netlify.app/",
    source: "https://github.com/Bergkley/projeto-social---vers-o-BETA"
  },
  {
    id: "portfolio",
    title: "Portfólio",
    category: "frontend",
    categoryLabel: "Front-End",
    image: "image/project-portfolio-720.jpg",
    alt: "Tela do portfólio de Bergkley Ferreira Brasil",
    summary: "Espaço digital para apresentação de projetos, habilidades e serviços de desenvolvimento.",
    description: "Criação do próprio portfólio como um ambiente estruturado para destacar habilidades técnicas, projetos pessoais e profissionais, serviços oferecidos e canais de contato.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    demo: "https://portfolio-bergkley.netlify.app/",
    source: "https://github.com/Bergkley/PORTFOLIO-BERGKLEY"
  },
  {
    id: "canil",
    title: "Projeto Canil",
    category: "fullstack",
    categoryLabel: "Full Stack",
    image: "image/project-canil-720.jpg",
    alt: "Interface do projeto Canil",
    summary: "Aplicação prática para reforçar fundamentos de Node.js, TypeScript, HTML e CSS.",
    description: "Projeto desenvolvido durante estudos na B7Web, com foco em aplicar conceitos de Node.js, TypeScript, HTML e CSS em uma aplicação web organizada e funcional.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Node.js", "TypeScript"],
    source: "https://github.com/Bergkley/CURSOS/tree/master/B7WEB/NodeJs/M%C3%B3dulo%202"
  },
  {
    id: "next-commerce",
    title: "Next-Commerce",
    category: "fullstack",
    categoryLabel: "Full Stack",
    image: "image/project-next-commerce-720.jpg",
    alt: "Tela do projeto Next-Commerce",
    summary: "Loja comercial criada para praticar Next.js, React, TypeScript e ferramentas modernas.",
    description: "Projeto de e-commerce desenvolvido para aplicar conceitos de Next.js com React, Prisma, Tailwind, Clerk, TypeScript e Vercel Postgres em um fluxo de loja comercial.",
    technologies: ["TypeScript", "React", "Next.js", "Prisma"],
    demo: "https://next-commerce-berg.netlify.app/",
    source: "https://github.com/Bergkley/Next---Commerce"
  },
  {
    id: "filmes",
    title: "Projeto Filmes",
    category: "frontend",
    categoryLabel: "Front-End",
    image: "image/project-filmes-720.jpg",
    alt: "Interface da aplicação de filmes",
    summary: "Aplicação React que consome a API do TMDb para explorar informações sobre filmes.",
    description: "Aplicação web dinâmica construída com React para consumir a API The Movie Database, permitindo explorar informações de filmes em uma interface interativa.",
    technologies: ["React", "API TMDb"],
    demo: "https://projetos-filmes-bergkley.netlify.app/",
    source: "https://github.com/Bergkley/Projeto-Filmes"
  },
  {
    id: "api-restful",
    title: "API RESTful",
    category: "backend",
    categoryLabel: "Back-End",
    image: "image/project-api-restful-720.jpg",
    alt: "Imagem de capa do projeto API RESTful",
    summary: "API para operações CRUD usando Node.js e MongoDB.",
    description: "Projeto back-end criado para praticar a construção de uma API RESTful com operações CRUD, integrando Node.js e MongoDB.",
    technologies: ["Node.js", "MongoDB", "REST"],
    source: "https://github.com/Bergkley/BACK-END/tree/master/Projeto%205%20-%20API%20RESTFUL"
  },
  {
    id: "crud-postgres",
    title: "CRUD + PostgreSQL",
    category: "backend",
    categoryLabel: "Back-End",
    image: "image/project-crud-postgres-480.jpg",
    alt: "Imagem de capa do projeto CRUD com PostgreSQL",
    summary: "CRUD com Node.js, Express, TypeORM e PostgreSQL.",
    description: "Projeto criado para praticar operações CRUD com Node.js, Express, TypeORM e PostgreSQL, reforçando integração entre API e banco relacional.",
    technologies: ["Node.js", "Express", "TypeORM", "PostgreSQL"],
    source: "https://github.com/Bergkley/BACK-END/tree/master/Projeto%203%20-%20CRUD"
  },
  {
    id: "api-cliente",
    title: "API Cliente",
    category: "backend",
    categoryLabel: "Back-End",
    image: "image/project-api-cliente-720.jpg",
    alt: "Imagem de capa do projeto API Cliente com Node.js e TypeScript",
    summary: "Back-end para cadastro de clientes com Node.js, Prisma, MongoDB e TypeScript.",
    description: "API desenvolvida para cadastro de clientes, usando Node.js, Prisma, MongoDB e TypeScript para organizar tipos, persistência e regras de negócio.",
    technologies: ["Node.js", "TypeScript", "Prisma", "MongoDB"],
    source: "https://github.com/Bergkley/BACK-END/tree/master/Projeto%204%20-%20API%20%20CLIENT%20BACK%20END"
  },
  {
    id: "autenticacao",
    title: "Sistema de Autenticação",
    category: "backend",
    categoryLabel: "Back-End",
    image: "image/project-autenticacao-626.jpg",
    alt: "Imagem de capa do sistema de autenticação",
    summary: "Back-end para autenticação simples usando Node.js.",
    description: "Projeto back-end criado para praticar os fundamentos de autenticação com Node.js, incluindo fluxo de criação e validação de acesso.",
    technologies: ["Node.js", "Autenticação"],
    source: "https://github.com/Bergkley/BACK-END/tree/master/Projeto%201%20-%20Sistema%20de%20autentica%C3%A7%C3%A3o%20(%20simples)"
  },
  {
    id: "solid-clean",
    title: "SOLID + Clean Architecture",
    category: "backend",
    categoryLabel: "Back-End",
    image: "image/project-solid-clean-720.jpg",
    alt: "Imagem de capa do projeto SOLID e Clean Architecture",
    summary: "Projeto para praticar SOLID e Clean Architecture em uma loja virtual.",
    description: "Projeto criado para aplicar conceitos de SOLID e Clean Architecture em uma loja virtual com criação e listagem de produtos, reforçando organização de camadas e responsabilidade de código.",
    technologies: ["Node.js", "TypeScript", "SOLID"],
    source: "https://github.com/Bergkley/BACK-END/tree/master/Projeto%202%20-%20SOLID%20%2B%20Clean%20Architecture"
  }
];

const i18n = {
  pt: {
    roles: ["Full Stack", "Front-End", "Back-End", "Web"],
    categories: {
      frontend: "Front-End",
      backend: "Back-End",
      fullstack: "Full Stack"
    },
    ui: {
      details: "Detalhes",
      viewOnline: "Ver online",
      code: "Código",
      showMore: (count) => `Mostrar mais projetos (${count})`,
      accessProject: "Acessar Projeto",
      sourceCode: "Código Fonte",
      useDarkTheme: "Usar tema escuro",
      useLightTheme: "Usar tema claro",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu"
    },
    form: {
      sending: "Enviando sua mensagem...",
      sendingButton: "Enviando",
      success: "Mensagem enviada com sucesso. Obrigado pelo contato!",
      error: "Não foi possível enviar agora. Você também pode usar o e-mail ao lado.",
      submitError: "Falha ao enviar o formulário.",
      resumeSubject: "Solicitação de currículo",
      resumeMessage: "Olá, Bergkley. Gostaria de receber seu currículo e conversar sobre uma oportunidade."
    },
    projects: {}
  },
  en: {
    roles: ["Full Stack", "Front-End", "Back-End", "Web"],
    categories: {
      frontend: "Front-End",
      backend: "Back-End",
      fullstack: "Full Stack"
    },
    ui: {
      details: "Details",
      viewOnline: "View live",
      code: "Code",
      showMore: (count) => `Show more projects (${count})`,
      accessProject: "Open Project",
      sourceCode: "Source Code",
      useDarkTheme: "Use dark theme",
      useLightTheme: "Use light theme",
      openMenu: "Open menu",
      closeMenu: "Close menu"
    },
    form: {
      sending: "Sending your message...",
      sendingButton: "Sending",
      success: "Message sent successfully. Thanks for reaching out!",
      error: "It was not possible to send it now. You can also use the email on the side.",
      submitError: "Failed to submit the form.",
      resumeSubject: "Resume request",
      resumeMessage: "Hello, Bergkley. I would like to receive your resume and talk about an opportunity."
    },
    projects: {
      "projeto-social": {
        title: "Social Project",
        alt: "Institutional website screen for Instituto Doando o que se Recebe",
        summary: "Institutional website to present an NGO's mission, activities and donation channels.",
        description: "Project created for Instituto Doando o que se Recebe by students from EEEP Juarez Tavora in the Computer Networks course in 2023. The solution presents the institution, its social actions and integrated donation channels."
      },
      portfolio: {
        title: "Portfolio",
        alt: "Bergkley Ferreira Brasil portfolio screen",
        summary: "Digital space to present projects, skills and development services.",
        description: "Creation of my own portfolio as a structured space to highlight technical skills, personal and professional projects, offered services and contact channels."
      },
      canil: {
        title: "Kennel Project",
        alt: "Kennel project interface",
        summary: "Practical application to reinforce Node.js, TypeScript, HTML and CSS fundamentals.",
        description: "Project developed during B7Web studies, focused on applying Node.js, TypeScript, HTML and CSS concepts in an organized and functional web application."
      },
      "next-commerce": {
        title: "Next-Commerce",
        alt: "Next-Commerce project screen",
        summary: "Commercial store created to practice Next.js, React, TypeScript and modern tools.",
        description: "E-commerce project developed to apply Next.js with React, Prisma, Tailwind, Clerk, TypeScript and Vercel Postgres concepts in a commercial store flow."
      },
      filmes: {
        title: "Movies Project",
        alt: "Movies application interface",
        summary: "React application that consumes the TMDb API to explore movie information.",
        description: "Dynamic web application built with React to consume The Movie Database API, allowing users to explore movie information in an interactive interface."
      },
      "api-restful": {
        title: "RESTful API",
        alt: "RESTful API project cover image",
        summary: "CRUD API using Node.js and MongoDB.",
        description: "Back-end project created to practice building a RESTful API with CRUD operations, integrating Node.js and MongoDB."
      },
      "crud-postgres": {
        title: "CRUD + PostgreSQL",
        alt: "CRUD with PostgreSQL project cover image",
        summary: "CRUD with Node.js, Express, TypeORM and PostgreSQL.",
        description: "Project created to practice CRUD operations with Node.js, Express, TypeORM and PostgreSQL, reinforcing integration between API and relational database."
      },
      "api-cliente": {
        title: "Client API",
        alt: "Client API project cover with Node.js and TypeScript",
        summary: "Back-end for client registration with Node.js, Prisma, MongoDB and TypeScript.",
        description: "API developed for client registration, using Node.js, Prisma, MongoDB and TypeScript to organize types, persistence and business rules."
      },
      autenticacao: {
        title: "Authentication System",
        alt: "Authentication system cover image",
        summary: "Simple authentication back-end using Node.js.",
        description: "Back-end project created to practice authentication fundamentals with Node.js, including access creation and validation flow."
      },
      "solid-clean": {
        title: "SOLID + Clean Architecture",
        alt: "SOLID and Clean Architecture project cover image",
        summary: "Project to practice SOLID and Clean Architecture in a virtual store.",
        description: "Project created to apply SOLID and Clean Architecture concepts in a virtual store with product creation and listing, reinforcing layer organization and code responsibility."
      }
    }
  },
  es: {
    roles: ["Full Stack", "Front-End", "Back-End", "Web"],
    categories: {
      frontend: "Front-End",
      backend: "Back-End",
      fullstack: "Full Stack"
    },
    ui: {
      details: "Detalles",
      viewOnline: "Ver online",
      code: "Código",
      showMore: (count) => `Mostrar más proyectos (${count})`,
      accessProject: "Abrir Proyecto",
      sourceCode: "Código Fuente",
      useDarkTheme: "Usar tema oscuro",
      useLightTheme: "Usar tema claro",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú"
    },
    form: {
      sending: "Enviando tu mensaje...",
      sendingButton: "Enviando",
      success: "Mensaje enviado con éxito. ¡Gracias por el contacto!",
      error: "No fue posible enviarlo ahora. También puedes usar el email al lado.",
      submitError: "Error al enviar el formulario.",
      resumeSubject: "Solicitud de currículum",
      resumeMessage: "Hola, Bergkley. Me gustaría recibir tu currículum y hablar sobre una oportunidad."
    },
    projects: {
      "projeto-social": {
        title: "Proyecto Social",
        alt: "Pantalla del sitio institucional del Instituto Doando o que se Recebe",
        summary: "Sitio institucional para presentar la misión, actividades y canales de donación de una ONG.",
        description: "Proyecto creado para el Instituto Doando o que se Recebe, desarrollado por estudiantes de la EEEP Juarez Tavora en el curso de Redes de Computadores en 2023. La solución presenta la institución, sus acciones sociales y canales de donación integrados."
      },
      portfolio: {
        title: "Portafolio",
        alt: "Pantalla del portafolio de Bergkley Ferreira Brasil",
        summary: "Espacio digital para presentar proyectos, habilidades y servicios de desarrollo.",
        description: "Creación de mi propio portafolio como un espacio estructurado para destacar habilidades técnicas, proyectos personales y profesionales, servicios ofrecidos y canales de contacto."
      },
      canil: {
        title: "Proyecto Canil",
        alt: "Interfaz del proyecto Canil",
        summary: "Aplicación práctica para reforzar fundamentos de Node.js, TypeScript, HTML y CSS.",
        description: "Proyecto desarrollado durante estudios en B7Web, enfocado en aplicar conceptos de Node.js, TypeScript, HTML y CSS en una aplicación web organizada y funcional."
      },
      "next-commerce": {
        title: "Next-Commerce",
        alt: "Pantalla del proyecto Next-Commerce",
        summary: "Tienda comercial creada para practicar Next.js, React, TypeScript y herramientas modernas.",
        description: "Proyecto de e-commerce desarrollado para aplicar conceptos de Next.js con React, Prisma, Tailwind, Clerk, TypeScript y Vercel Postgres en un flujo de tienda comercial."
      },
      filmes: {
        title: "Proyecto Películas",
        alt: "Interfaz de la aplicación de películas",
        summary: "Aplicación React que consume la API de TMDb para explorar información sobre películas.",
        description: "Aplicación web dinámica construida con React para consumir la API The Movie Database, permitiendo explorar información de películas en una interfaz interactiva."
      },
      "api-restful": {
        title: "API RESTful",
        alt: "Imagen de portada del proyecto API RESTful",
        summary: "API para operaciones CRUD usando Node.js y MongoDB.",
        description: "Proyecto back-end creado para practicar la construcción de una API RESTful con operaciones CRUD, integrando Node.js y MongoDB."
      },
      "crud-postgres": {
        title: "CRUD + PostgreSQL",
        alt: "Imagen de portada del proyecto CRUD con PostgreSQL",
        summary: "CRUD con Node.js, Express, TypeORM y PostgreSQL.",
        description: "Proyecto creado para practicar operaciones CRUD con Node.js, Express, TypeORM y PostgreSQL, reforzando la integración entre API y base de datos relacional."
      },
      "api-cliente": {
        title: "API Cliente",
        alt: "Imagen de portada del proyecto API Cliente con Node.js y TypeScript",
        summary: "Back-end para registro de clientes con Node.js, Prisma, MongoDB y TypeScript.",
        description: "API desarrollada para registro de clientes, usando Node.js, Prisma, MongoDB y TypeScript para organizar tipos, persistencia y reglas de negocio."
      },
      autenticacao: {
        title: "Sistema de Autenticación",
        alt: "Imagen de portada del sistema de autenticación",
        summary: "Back-end para autenticación simple usando Node.js.",
        description: "Proyecto back-end creado para practicar los fundamentos de autenticación con Node.js, incluyendo flujo de creación y validación de acceso."
      },
      "solid-clean": {
        title: "SOLID + Clean Architecture",
        alt: "Imagen de portada del proyecto SOLID y Clean Architecture",
        summary: "Proyecto para practicar SOLID y Clean Architecture en una tienda virtual.",
        description: "Proyecto creado para aplicar conceptos de SOLID y Clean Architecture en una tienda virtual con creación y listado de productos, reforzando organización de capas y responsabilidad del código."
      }
    }
  }
};

function getLocale() {
  const lang = document.documentElement.lang.toLowerCase();
  if (lang.startsWith("en")) return "en";
  if (lang.startsWith("es")) return "es";
  return "pt";
}

function getCopy() {
  return i18n[getLocale()] || i18n.pt;
}

function getLocalizedProject(project) {
  const copy = getCopy();
  const projectCopy = copy.projects[project.id] || {};

  return {
    ...project,
    ...projectCopy,
    categoryLabel: copy.categories[project.category] || project.categoryLabel
  };
}

function getLocalizedProjects() {
  return projects.map(getLocalizedProject);
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let revealObserver;

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  initMobileNavigation();
  initLanguageMenu();
  initActiveNavigation();
  initRevealAnimations();
  initTechMarquee();
  initTypewriter();
  initSkillFilters();
  initProjects();
  initContactForm();
  initResumeCta();
});

function initThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  const themeMeta = document.querySelector("meta[name='theme-color']");
  const storedTheme = localStorage.getItem("portfolio-theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  const copy = getCopy();

  function setTheme(theme) {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);

    if (themeToggle) {
      const isLight = theme === "light";
      themeToggle.setAttribute("aria-pressed", String(isLight));
      themeToggle.setAttribute("aria-label", isLight ? copy.ui.useDarkTheme : copy.ui.useLightTheme);
      themeToggle.innerHTML = `<i class="bx ${isLight ? "bx-sun" : "bx-moon"}" aria-hidden="true"></i>`;
    }

    if (themeMeta) {
      themeMeta.setAttribute("content", theme === "light" ? "#f7f8fb" : "#101114");
    }
  }

  setTheme(storedTheme || systemTheme);

  themeToggle?.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme;
    setTheme(currentTheme === "light" ? "dark" : "light");
  });
}

function initMobileNavigation() {
  const nav = document.getElementById("primary-navigation");
  const toggle = document.getElementById("navToggle");
  const copy = getCopy();

  if (!nav || !toggle) return;

  function setOpen(isOpen) {
    nav.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? copy.ui.closeMenu : copy.ui.openMenu);
    toggle.innerHTML = `<i class="bx ${isOpen ? "bx-x" : "bx-menu"}" aria-hidden="true"></i>`;
  }

  toggle.addEventListener("click", () => {
    setOpen(!nav.classList.contains("is-open"));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("click", (event) => {
    if (!nav.classList.contains("is-open")) return;
    if (nav.contains(event.target) || toggle.contains(event.target)) return;
    setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1040) setOpen(false);
  });
}

function initLanguageMenu() {
  const toggle = document.getElementById("languageToggle");
  const menu = document.getElementById("languageMenu");

  if (!toggle || !menu) return;

  function setOpen(isOpen) {
    menu.hidden = !isOpen;
    toggle.setAttribute("aria-expanded", String(isOpen));
  }

  toggle.addEventListener("click", (event) => {
    event.stopPropagation();
    setOpen(menu.hidden);
  });

  document.addEventListener("click", (event) => {
    if (menu.hidden) return;
    if (menu.contains(event.target) || toggle.contains(event.target)) return;
    setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });
}

function initActiveNavigation() {
  const navLinks = Array.from(document.querySelectorAll(".site-nav a[href^='#']"));
  const sections = Array.from(document.querySelectorAll("main section[id]"));

  if (!navLinks.length || !sections.length) return;

  const setActiveLink = (sectionId) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute("href") === `#${sectionId}`;
      link.classList.toggle("active", isActive);
    });
  };

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveLink(entry.target.id);
      });
    },
    {
      rootMargin: "-35% 0px -55% 0px",
      threshold: 0
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

function initRevealAnimations() {
  const revealElements = document.querySelectorAll(".reveal");

  if (prefersReducedMotion) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}

function observeRevealElements(root = document) {
  const elements = root.querySelectorAll(".reveal:not(.is-visible)");

  if (prefersReducedMotion || !revealObserver) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  elements.forEach((element) => revealObserver.observe(element));
}

function initTechMarquee() {
  const marquee = document.querySelector(".tech-marquee");
  const content = marquee?.querySelector(".tech-marquee__content");
  const firstTrack = content?.querySelector(".tech-marquee__track");

  if (!marquee || !content || !firstTrack || prefersReducedMotion) return;

  function syncMarquee() {
    const contentStyles = window.getComputedStyle(content);
    const gap = Number.parseFloat(contentStyles.columnGap || contentStyles.gap) || 0;
    const step = firstTrack.getBoundingClientRect().width + gap;

    if (step <= gap) return;

    content.style.setProperty("--marquee-step", `${step}px`);

    while (content.scrollWidth - step < marquee.clientWidth + step) {
      const clone = firstTrack.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      content.appendChild(clone);
    }
  }

  syncMarquee();
  window.addEventListener("resize", syncMarquee);
}

function initTypewriter() {
  const target = document.querySelector(".text");
  const phrases = getCopy().roles;

  if (!target) return;

  if (prefersReducedMotion) {
    target.textContent = phrases[0];
    return;
  }

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const phrase = phrases[phraseIndex];
    target.textContent = phrase.slice(0, charIndex);

    if (!isDeleting && charIndex < phrase.length) {
      charIndex += 1;
      window.setTimeout(type, 90);
      return;
    }

    if (!isDeleting && charIndex === phrase.length) {
      isDeleting = true;
      window.setTimeout(type, 1300);
      return;
    }

    if (isDeleting && charIndex > 0) {
      charIndex -= 1;
      window.setTimeout(type, 48);
      return;
    }

    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    window.setTimeout(type, 220);
  }

  type();
}

function initSkillFilters() {
  const filterButtons = document.querySelectorAll(".skill-filter");
  const skillCards = document.querySelectorAll(".skill-card");

  if (!filterButtons.length || !skillCards.length) return;

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((filterButton) => {
        const isActive = filterButton === button;
        filterButton.classList.toggle("active", isActive);
        filterButton.setAttribute("aria-pressed", String(isActive));
      });

      skillCards.forEach((card) => {
        const shouldShow = filter === "all" || card.dataset.category === filter;
        card.hidden = !shouldShow;
      });
    });
  });
}

function initProjects() {
  const grid = document.getElementById("projectGrid");
  const template = document.getElementById("project-card-template");
  const showMoreButton = document.getElementById("showMoreButton");
  const filterButtons = document.querySelectorAll(".portfolio-filter-btn");
  const initialProjectCount = 6;
  const copy = getCopy();
  let activeFilter = "all";
  let visibleProjectCount = initialProjectCount;

  if (!grid || !template || !showMoreButton) return;

  function getFilteredProjects() {
    const localizedProjects = getLocalizedProjects();
    if (activeFilter === "all") return localizedProjects;
    return localizedProjects.filter((project) => project.category === activeFilter);
  }

  function createProjectCard(project) {
    const card = template.content.firstElementChild.cloneNode(true);
    const media = card.querySelector(".project-card__media");
    const image = card.querySelector("img");
    const title = card.querySelector("h3");
    const summary = card.querySelector("p");
    const category = card.querySelector(".project-card__category");
    const tagList = card.querySelector(".tag-list");
    const detailsButton = card.querySelector(".show-details-btn");
    const externalLink = card.querySelector(".project-card__demo");
    const primaryUrl = project.demo || project.source;

    card.dataset.category = project.category;
    media.href = primaryUrl || "#portfolio";
    media.setAttribute("aria-label", `${copy.ui.accessProject}: ${project.title}`);
    image.src = project.image;
    image.alt = project.alt;
    title.textContent = project.title;
    summary.textContent = project.summary;
    category.textContent = project.categoryLabel;
    detailsButton.textContent = copy.ui.details;
    detailsButton.dataset.projectId = project.id;

    project.technologies.forEach((technology) => {
      const tag = document.createElement("li");
      tag.textContent = technology;
      tagList.appendChild(tag);
    });

    if (project.demo) {
      externalLink.href = project.demo;
      externalLink.textContent = copy.ui.viewOnline;
    } else if (project.source) {
      externalLink.href = project.source;
      externalLink.textContent = copy.ui.code;
    } else {
      externalLink.hidden = true;
    }

    detailsButton.addEventListener("click", () => openProjectModal(project.id));

    return card;
  }

  function renderProjects() {
    const filteredProjects = getFilteredProjects();
    const visibleProjects = filteredProjects.slice(0, visibleProjectCount);

    grid.innerHTML = "";
    visibleProjects.forEach((project) => {
      grid.appendChild(createProjectCard(project));
    });

    showMoreButton.hidden = visibleProjectCount >= filteredProjects.length;
    showMoreButton.textContent = copy.ui.showMore(filteredProjects.length - visibleProjects.length);
    observeRevealElements(grid);
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      visibleProjectCount = initialProjectCount;

      filterButtons.forEach((filterButton) => {
        const isActive = filterButton === button;
        filterButton.classList.toggle("active", isActive);
        filterButton.setAttribute("aria-pressed", String(isActive));
      });

      renderProjects();
    });
  });

  showMoreButton.addEventListener("click", () => {
    visibleProjectCount += initialProjectCount;
    renderProjects();
  });

  renderProjects();
}

let lastFocusedElement = null;

function openProjectModal(projectId) {
  const copy = getCopy();
  const project = getLocalizedProjects().find((item) => item.id === projectId);
  const modal = document.getElementById("projectModal");
  const dialog = modal?.querySelector(".modal__dialog");
  const image = document.getElementById("modalImage");
  const category = document.getElementById("modalCategory");
  const title = document.getElementById("modalTitle");
  const description = document.getElementById("modalDescription");
  const tags = document.getElementById("modalTags");
  const actions = document.getElementById("modalActions");

  if (!project || !modal || !dialog || !image || !category || !title || !description || !tags || !actions) return;

  lastFocusedElement = document.activeElement;
  image.src = project.image;
  image.alt = project.alt;
  category.textContent = project.categoryLabel;
  title.textContent = project.title;
  description.textContent = project.description;
  tags.innerHTML = "";
  actions.innerHTML = "";

  project.technologies.forEach((technology) => {
    const tag = document.createElement("li");
    tag.textContent = technology;
    tags.appendChild(tag);
  });

  if (project.demo) {
    actions.appendChild(createModalLink(project.demo, copy.ui.accessProject, "bx-link-external"));
  }

  if (project.source) {
    actions.appendChild(createModalLink(project.source, copy.ui.sourceCode, "bxl-github"));
  }

  modal.hidden = false;
  document.body.classList.add("modal-open");
  window.requestAnimationFrame(() => dialog.focus());
}

function createModalLink(url, label, iconClass) {
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.className = "button button--secondary";
  link.innerHTML = `<i class="bx ${iconClass}" aria-hidden="true"></i> ${label}`;
  return link;
}

function closeProjectModal() {
  const modal = document.getElementById("projectModal");

  if (!modal || modal.hidden) return;

  modal.hidden = true;
  document.body.classList.remove("modal-open");

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-modal]")) {
    closeProjectModal();
  }
});

document.addEventListener("keydown", (event) => {
  const modal = document.getElementById("projectModal");
  const dialog = modal?.querySelector(".modal__dialog");

  if (!modal || modal.hidden) return;

  if (event.key === "Escape") {
    closeProjectModal();
    return;
  }

  if (event.key !== "Tab" || !dialog) return;

  const focusable = Array.from(
    dialog.querySelectorAll("a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])")
  );

  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

function initContactForm() {
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const copy = getCopy();

  if (!form || !status) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const submitButton = form.querySelector("button[type='submit']");
    const originalButtonContent = submitButton?.innerHTML;
    const formData = new FormData(form);

    setFormStatus(status, copy.form.sending, "");

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.innerHTML = `<i class="bx bx-loader-alt bx-spin" aria-hidden="true"></i> ${copy.form.sendingButton}`;
    }

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) throw new Error(copy.form.submitError);

      form.reset();
      setFormStatus(status, copy.form.success, "success");
    } catch (error) {
      setFormStatus(status, copy.form.error, "error");
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonContent;
      }
    }
  });
}

function setFormStatus(element, message, type) {
  element.textContent = message;
  element.classList.toggle("is-success", type === "success");
  element.classList.toggle("is-error", type === "error");
}

function initResumeCta() {
  const resumeLinks = document.querySelectorAll("[data-resume-cta]");
  const copy = getCopy();

  resumeLinks.forEach((link) => {
    link.addEventListener("click", () => {
      window.setTimeout(() => {
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");

        if (subject && !subject.value) {
          subject.value = copy.form.resumeSubject;
        }

        if (message && !message.value) {
          message.value = copy.form.resumeMessage;
        }

        subject?.focus({ preventScroll: true });
      }, 250);
    });
  });
}
