export type ProjectText = {
  id: string;
  title: string;
  tag: string;
  summary: string;
  bullets: string[];
  learned: string;
  stats: { value: string; label: string }[];
};

const lorem_fr =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const lorem_en =
  "This is temporary placeholder text used to test scrolling. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const projectsFr: ProjectText[] = [
  {
    id: "dofus",
    title: "Recoder Dofus en C",
    tag: "Projet d'étude · 2021",
    summary:
      "Un RPG tactique complet, codé en équipe en un mois, juste après avoir appris le langage C.",
    bullets: [
      "Déplacements, sorts, effets, NPC et leur IA, modification de terrain",
      "Travail en équipe avec versionning GitHub",
      "Tous les bonus atteints, attentes du jury largement dépassées",
    ],
    learned:
      "Ce que ça m'a appris : structurer un gros projet en C, se répartir le travail en équipe et aller au bout par passion.",
    stats: [],
  },
  {
    id: "simcity",
    title: "Recoder Sim City en C",
    tag: "Projet d'étude · 2022",
    summary:
      "Un jeu de gestion de ville construit autour de la théorie des graphes, projet de fin de semestre.",
    bullets: [
      "Argent, ressources, alimentation en eau et en électricité de chaque bâtiment",
      "Câblage souterrain : relier les centrales aux habitations grâce aux graphes",
      "Développement en équipe avec GitHub, tous les bonus atteints",
    ],
    learned:
      "Ce que ça m'a appris : appliquer un concept théorique (les graphes) à un problème concret et visuel.",
    stats: [],
  },
  {
    id: "cinema",
    title: "Site de cinéma en Java",
    tag: "Projet d'étude · 2023",
    summary:
      "Un site de réservation de séances entièrement en Java, avec deux interfaces : consommateur et administrateur.",
    bullets: [
      "Espace admin : ajout de films et de séances, modification des horaires, gestion des utilisateurs",
      "Espace consommateur : réservation de séances",
      "Projet de groupe sur 1 mois, versionning GitHub",
    ],
    learned:
      "Ce que ça m'a appris : concevoir une application à plusieurs rôles et travailler proprement en groupe avec Git.",
    stats: [],
  },
  {
    id: "coverage",
    title: "Code Coverage : projet de fin d'études",
    tag: "Projet de fin d'études · 6 mois",
    summary:
      "Comment automatiser la couverture de code exigée par la norme aéronautique DO-178, dans un environnement de développement basé modèle ?",
    bullets: [
      "Contexte : les logiciels embarqués critiques doivent prouver qu'ils sont entièrement testés, une phase aujourd'hui longue et manuelle",
      "Projet proposé par une étudiante ECE en alternance chez Airbus Helicopters",
      "Après l'étude de l'existant, nous avons ciblé MATLAB/Simulink et son outil Simulink Coverage",
      "Résultat : intégrée aux tests unitaires, la couverture est fiable, reproductible et cohérente avec une analyse indépendante",
    ],
    learned:
      "Ce que ça m'a appris : mener une étude sur la durée, cadrer un besoin avec un client et travailler dans un cadre normatif exigeant.",
    stats: [],
  },
  {
    id: "abyssalcraft",
    title: "AbyssalCraft : un animé recréé dans Minecraft",
    tag: "Projet personnel · depuis 2024",
    summary:
      "Recréation de l'univers d'un animé avec des mods et des datapacks, en collaboration avec 6 personnes. Je suis chef de projet et seul développeur.",
    bullets: [
      "Réécriture d'une grande partie du code de base de Minecraft pour en changer les mécaniques",
      "Programmation orientée objet en Java, et code in-game de Minecraft",
      "Gestion de milliers de fichiers JSON et de clés de traduction",
    ],
    learned:
      "Ce que ça m'a appris : piloter un projet de longue durée, lire et modifier un gros code existant, et coordonner artistes et développement.",
    stats: [
      { value: "3 700", label: "followers sur le compte Twitter du projet" },
      { value: "30 000+", label: "lignes de code, toutes écrites par moi" },
      { value: "300+", label: "modèles 3D" },
      { value: "800+", label: "textures" },
    ],
  },
];

const projectsEn: ProjectText[] = [
  {
    id: "dofus",
    title: "Rebuilding Dofus in C",
    tag: "Study project · 2021",
    summary:
      "A complete tactical RPG, built as a team in one month, right after learning the C language.",
    bullets: [
      "Movement, spells, effects, NPCs and their AI, terrain editing",
      "Teamwork with GitHub versioning",
      "All bonuses achieved, jury expectations far exceeded",
    ],
    learned:
      "What I learned: structuring a large C project, sharing work within a team and seeing it through out of passion.",
    stats: [],
  },
  {
    id: "simcity",
    title: "Rebuilding Sim City in C",
    tag: "Study project · 2022",
    summary:
      "A city-management game built around graph theory, end-of-semester project.",
    bullets: [
      "Money, resources, water and electricity supply for every building",
      "Underground cabling: linking power plants to homes using graphs",
      "Team development with GitHub, all bonuses achieved",
    ],
    learned:
      "What I learned: applying a theoretical concept (graphs) to a concrete, visual problem.",
    stats: [],
  },
  {
    id: "cinema",
    title: "Cinema website in Java",
    tag: "Study project · 2023",
    summary:
      "A screening-booking website written entirely in Java, with two interfaces: customer and administrator.",
    bullets: [
      "Admin area: add films and screenings, change schedules, manage users",
      "Customer area: book screenings",
      "Group project over 1 month, GitHub versioning",
    ],
    learned:
      "What I learned: designing an application with several user roles and working cleanly in a group with Git.",
    stats: [],
  },
  {
    id: "coverage",
    title: "Code Coverage: final-year project",
    tag: "Final-year project · 6 months",
    summary:
      "How can the code coverage required by the DO-178 aviation standard be automated in a model-based development environment?",
    bullets: [
      "Context: critical embedded software must prove it is fully tested, a phase that is currently long and manual",
      "Project proposed by an ECE work-study student at Airbus Helicopters",
      "After surveying existing solutions, we focused on MATLAB/Simulink and its Simulink Coverage tool",
      "Result: integrated into unit tests, coverage is reliable, reproducible and consistent with an independent analysis",
    ],
    learned:
      "What I learned: running a study over time, scoping a need with a client and working within a demanding standard.",
    stats: [],
  },
  {
    id: "abyssalcraft",
    title: "AbyssalCraft: an anime recreated in Minecraft",
    tag: "Personal project · since 2024",
    summary:
      "Recreating an anime's universe with mods and datapacks, in collaboration with 6 people. I am the project lead and the only developer.",
    bullets: [
      "Rewrote a large part of Minecraft's base code to change its mechanics",
      "Object-oriented programming in Java, and Minecraft's in-game code",
      "Managing thousands of JSON files and translation keys",
    ],
    learned:
      "What I learned: leading a long-running project, reading and modifying a large existing codebase, and coordinating artists and development.",
    stats: [
      { value: "3,700", label: "followers on the project's Twitter account" },
      { value: "30,000+", label: "lines of code, all written by me" },
      { value: "300+", label: "3D models" },
      { value: "800+", label: "textures" },
    ],
  },
];

export const translations = {
  fr: {
    nav: {
      about: "Qui suis-je ?",
      situation: "Situation",
      skills: "Mes Compétences",
      career: "Mon Parcours",
      projects: "Projets Réalisés",
      interests: "Centres d'intérêt",
    },
    contact: {
      location: "Paris 17, Île-de-France",
      mobility: "Mobilité:  Toute la France · Permis de conduire",
    },
    ui: {
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      switchLanguage: "Passer le site en anglais",
    },
    about: {
      tags: ["🎓 Ingénieur informatique (Bac+5)", "🎂 23 ans", "🇬🇧 Anglais B2 · TOEIC 850", "🚗 Permis de conduire, véhiculé"],
      paragraphs: [
        "Ingénieur très récemment diplômé de l'ECE Paris, spécialisé en \'Défense et Technologies\', passionné d'informatique, de développement, de création et d'innovation en général.",
        "Sur mon temps libre, je développe des jeux ou des mods ces derniers temps.",
      ],
      punchline: "(En bref, je suis le nerd par défaut)",
      valueLabel: "Ma valeur ajoutée :",
      value: "J'apprend vite, autonome, et surtout j'aime le travail bien fait.",
      valueLabel2: "Un atout :",
      value2: "Je préfère prendre de l'avance que travailler sous pression au dernier moment",
    },
    situation: {
      status: "🔎 À la recherche de mon premier emploi",
      availability: "Disponible dès maintenant",
      domainsLabel: "Domaines visés",
      domains: [
        "Développement logiciel",
        "Conception d'applications",
        "Systèmes techniques",
        "Analyste-programmeur",
        "Développeur full-stack",
        "Ingénieur DevOps",
        "QA / Test logiciel",
        "Base de données / data",
        "Systèmes et réseaux",
        "Production informatique"
      ],
      experience: "💼 1 an d'expérience en stages, notamment chez Thales",
      downloadCv: "Télécharger mon CV",
      downloadLetter: "Lettre de recommandation (dernier stage)",
    },
    skills: {
      groups: {
        languages: "Langages",
        frameworks: "Frameworks & bibliothèques",
        tools: "Outils & logiciels",
      },
      languagesTitle: "Langues",
      english: "Anglais",
      englishLevel: "Niveau B2",
      toeic: "TOEIC : 850 / 990",
    },
    career: {
      experiencesTitle: "Expériences professionnelles",
      educationTitle: "Formation",
      latest: "Dernier stage",
      experiences: [
        {
          period: "Février – août 2026",
          role: "Stage de fin d'études",
          company: "Thales SIX GTS — Gennevilliers",
          bullets: [
            "Logiciel interne de génération de rapports d'audit (LiCASI)",
            "Génération automatisée des PDF d'audit",
            "Passage en Inner Source : restructuration de l'architecture et des packages",
            "Intégration d'APIs REST et saisie automatique de données",
          ],
          tech: ["Python", "Django", "REST", "Scripts batch", "Full Stack", "GitLab"],
        },
        {
          period: "Avril – août 2025",
          role: "Développeur logiciel & IHM",
          company: "Thales DMS — Élancourt",
          bullets: [
            "Démonstrateur de modélisation flexible de l'architecture SPECTRA (Avion RAFALE), en équipe avec deux autres stagiaires",
            "Interface en C++ et SDL3, intégrée au back-end",
          ],
          tech: ["C++", "SDL3", "GIT", "Travail en équipe", "Full Stack", "Bash", "CMake", "Défense nationale"],
        },
        {
          period: "Janvier – février 2024",
          role: "Assistant informatique",
          company: "Mairie de Villers St Sépulcre",
          bullets: [
            "Programme Python générant des PDF à partir de fichiers Excel",
            "Automatisation de tâches administratives, pour un net gain de temps",
          ],
          tech: ["Python", "Excel"],
        },
        {
          period: "Janvier – février 2023",
          role: "Développeur web",
          company: "LOXAM — La Défense",
          bullets: ["Logiciel interne générant des certificats de conformité"],
          tech: ["Web", "HTML", "CSS", "JS", "Bootstrap"],
        },
      ],
      education: [
        {
          icon: "🎓",
          title: "Ingénieur ECE Paris (Bac+5)",
          subtitle: "Majeure Défense et Technologie",
          desc: "Secteur de la Défense, informatique : Cloud, IA, cybersécurité…",
        },
        {
          icon: "🗽",
          title: "Baruch College, New York",
          subtitle: "Séjour de 4 mois · 2023",
          desc: "Études en développement d'IA et en robotique.",
        },
        {
          icon: "📘",
          title: "Baccalauréat - Maths / Informatique",
          subtitle: "Spécialités Maths Expertes et NSI (Numérique Sciences Informatiques)",
          desc: "",
        },
      ],
    },
    projects: {
      items: projectsFr,
      ongoing: "En cours",
      downloads: {
        rar: "Télécharger le projet (.RAR)",
        zip: "Télécharger le projet (.ZIP)",
        pdf: "Télécharger la synthèse (.PDF)",
      },
      prev: "Image précédente",
      next: "Image suivante",
      goTo: "Aller à l'image",
    },
    interests: {
      intro:
        "La section qui regroupe les sujets et actualités qui éveillent ma curiosité... (à lire quand on s'ennuit)",
      loading: "Chargement…",
      unavailable: "Actualités momentanément indisponibles.",
      visitSite: "Voir le site",
      categories: {
        cyber: "Cybersécurité",
        ai: "Intelligence artificielle",
        defense: "Secteur de la Défense",
        dev: "Développement",
      } as Record<string, string>,
      feeds: {
        certfr: {
          name: "Alertes de cybersécurité (CERT-FR)",
          desc: "Menaces immédiates, failles critiques et vulnérabilités récemment exploitées.",
        },
        mistral: {
          name: "Mistral AI",
          desc: "L'acteur européen majeur de l'IA, utilisé par les entreprises et ministères français.",
        },
        thales: {
          name: "Thales",
          desc: "Le groupe où j'ai effectué mes deux derniers stages.",
        },
        dassault: {
          name: "Dassault Aviation",
          desc: "Avions de combat Rafale et jets d'affaires Falcon.",
        },
        safran: {
          name: "Safran",
          desc: "Moteurs et équipements pour l'aéronautique, le spatial et la défense.",
        },
        github: {
          name: "GitHub Blog",
          desc: "L'actualité de la plateforme et des outils que j'utilise pour coder.",
        },
      } as Record<string, { name: string; desc: string }>,
    },
    lorem: lorem_fr,
  },
  en: {
    nav: {
      about: "About me",
      situation: "Current situation",
      skills: "My Skills",
      career: "My Career",
      projects: "Projects",
      interests: "Interests",
    },
    contact: {
      location: "Paris 17th, Île-de-France",
      mobility: "Mobility: Anywhere in France · Driving license",
    },
    ui: {
      openMenu: "Open menu",
      closeMenu: "Close menu",
      switchLanguage: "Switch website to French",
    },
    about: {
      tags: [
        "🎓 Computer Science Engineer (Master's degree)",
        "🎂 23 years old",
        "🇬🇧 English B2 · TOEIC 850",
        "🚗 Driving license, own vehicle",
      ],
      paragraphs: [
        "Recently graduated from ECE Paris as a Computer Science Engineer, specializing in 'Defense and Technologies', with a passion for computer science, software development, creation, and innovation in general.",
        "In my free time, I've recently been developing games and mods.",
      ],
      punchline: "(Basically, I'm your default nerd)",
      valueLabel: "What I bring to the table:",
      value: "I learn quickly, work independently, and above all, I take pride in doing things right.",
      valueLabel2: "One of my strengths:",
      value2: "I prefer to stay ahead of schedule rather than work under last-minute pressure.",
    },
    situation: {
      status: "🔎 Looking for my first full-time position",
      availability: "Available immediately",
      domainsLabel: "Target fields",
      domains: [
        "Software development",
        "Application design",
        "Technical systems",
        "Software analyst / programmer",
        "Full-stack developer",
        "DevOps engineer",
        "QA / Software testing",
        "Databases / Data",
        "Systems and networks",
        "IT operations",
      ],
      experience: "💼 1 year of internship experience, notably at Thales",
      downloadCv: "Download my CV",
      downloadLetter: "Letter of recommendation (most recent internship)",
    },
    skills: {
      groups: {
        languages: "Programming languages",
        frameworks: "Frameworks & libraries",
        tools: "Tools & software",
      },
      languagesTitle: "Languages",
      english: "English",
      englishLevel: "B2 level",
      toeic: "TOEIC: 850 / 990",
    },
    career: {
      experiencesTitle: "Professional Experience",
      educationTitle: "Education",
      latest: "Latest internship",
      experiences: [
        {
          period: "February – August 2026",
          role: "Final-year Internship",
          company: "Thales SIX GTS — Gennevilliers, France",
          bullets: [
            "Internal audit report generation software (LiCASI)",
            "Automated generation of audit PDF reports",
            "Transition to Inner Source: architecture and package restructuring",
            "REST API integration and automated data entry",
          ],
          tech: ["Python", "Django", "REST", "Batch scripts"],
        },
        {
          period: "April – August 2025",
          role: "Software & UI Developer",
          company: "Thales DMS — Élancourt, France",
          bullets: [
            "Developed a flexible architecture modeling demonstrator for SPECTRA, working in a team with two other interns",
            "C++ and SDL3 interface integrated with the back-end",
          ],
          tech: ["C++", "SDL3"],
        },
        {
          period: "January – February 2024",
          role: "IT Assistant",
          company: "Villers-Saint-Sépulcre Town Hall, France",
          bullets: [
            "Python program generating PDF files from Excel spreadsheets",
            "Automated administrative tasks, resulting in significant time savings",
          ],
          tech: ["Python", "Excel"],
        },
        {
          period: "January – February 2023",
          role: "Web Developer",
          company: "LOXAM — La Défense, France",
          bullets: ["Internal software for generating certificates of compliance"],
          tech: ["Web", "Bootstrap"],
        },
      ],
      education: [
        {
          icon: "🎓",
          title: "ECE Paris — Engineering Degree (Master's level)",
          subtitle: "Major in Defense and Technology",
          desc: "Defense sector and computer science: Cloud, AI, cybersecurity…",
        },
        {
          icon: "🗽",
          title: "Baruch College, New York",
          subtitle: "4-month exchange program · 2023",
          desc: "Studies in AI development and robotics.",
        },
        {
          icon: "📘",
          title: "French Baccalauréat — Mathematics / Computer Science",
          subtitle: "Advanced Mathematics and NSI (Digital and Computer Science) specializations",
          desc: "",
        },
      ],
    },
    projects: {
      items: projectsEn,
      ongoing: "Ongoing",
      downloads: {
        rar: "Download project (.RAR)",
        zip: "Download project (.ZIP)",
        pdf: "Download project summary (.PDF)",
      },
      prev: "Previous image",
      next: "Next image",
      goTo: "Go to image",
    },
    interests: {
      intro:
        "A section dedicated to topics and news that spark my curiosity... (for when you have some time to kill)",
      loading: "Loading…",
      unavailable: "News temporarily unavailable.",
      visitSite: "Visit website",
      categories: {
        cyber: "Cybersecurity",
        ai: "Artificial Intelligence",
        defense: "Defense Industry",
        dev: "Software Development",
      } as Record<string, string>,
      feeds: {
        certfr: {
          name: "Cybersecurity Alerts (CERT-FR)",
          desc: "Immediate threats, critical security flaws, and recently exploited vulnerabilities.",
        },
        mistral: {
          name: "Mistral AI",
          desc: "A leading European AI company, whose technology is used by French businesses and government ministries.",
        },
        thales: {
          name: "Thales",
          desc: "The company where I completed my two most recent internships.",
        },
        dassault: {
          name: "Dassault Aviation",
          desc: "Rafale fighter jets and Falcon business jets.",
        },
        safran: {
          name: "Safran",
          desc: "Engines and equipment for the aerospace, space, and defense industries.",
        },
        github: {
          name: "GitHub Blog",
          desc: "The latest news about the platform and tools I use for coding.",
        },
      } as Record<string, { name: string; desc: string }>,
    },
    lorem: lorem_en,
  },
};

export type Lang = keyof typeof translations;
export type Dict = (typeof translations)["fr"];