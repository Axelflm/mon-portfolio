const lorem_fr =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const lorem_en =
  "This is temporary placeholder text used to test scrolling. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

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
      mobility: "Toute la France · Permis de conduire",
    },
    ui: {
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      switchLanguage: "Passer le site en anglais",
    },
    about: {
      tags: ["🎓 Ingénieur ECE Paris", "🎂 23 ans", "🇬🇧 Anglais B2 · TOEIC 850"],
      paragraphs: [
        "Ingénieur diplômé de l'ECE Paris, passionné d'informatique, de développement, de création et d'innovation.",
        "Sur mon temps libre, je développe des jeux et des mods. Je suis débrouillard, j'apprends vite, et je suis bilingue à l'écrit (TOEIC B2).",
      ],
      punchline: "Bref, le nerd par défaut. 🤓",
      valueLabel: "Ma valeur ajoutée :",
      value:
        "transformer une idée en logiciel qui fonctionne, et apprendre vite tout ce que je ne connais pas encore.",
    },
    situation: {
      status: "🔎 À la recherche de mon premier emploi",
      availability: "Disponible dès maintenant",
      domainsLabel: "Domaines visés",
      domains: [
        "Développement logiciel",
        "Conception d'applications",
        "Systèmes techniques",
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
          company: "Thales SIX GTS",
          bullets: [
            "Logiciel interne de génération de rapports d'audit (LiCASI)",
            "Génération automatisée des PDF d'audit",
            "Passage en Inner Source : restructuration de l'architecture et des packages",
            "Intégration d'APIs REST et saisie automatique de données",
          ],
          tech: ["Python", "Django", "REST", "Scripts batch"],
        },
        {
          period: "Avril – août 2025",
          role: "Développeur logiciel & IHM",
          company: "Thales DMS",
          bullets: [
            "Démonstrateur de modélisation flexible de l'architecture SPECTRA, en équipe avec deux autres stagiaires",
            "Interface en C++ et SDL3, intégrée au back-end",
          ],
          tech: ["C++", "SDL3"],
        },
        {
          period: "Janvier – février 2024",
          role: "Assistant informatique",
          company: "Mairie",
          bullets: [
            "Programme Python générant des PDF à partir de fichiers Excel",
            "Automatisation de tâches administratives, pour un net gain de temps",
          ],
          tech: ["Python", "Excel"],
        },
        {
          period: "Janvier – février 2023",
          role: "Développeur web",
          company: "LOXAM, La Défense",
          bullets: [
            "Logiciel interne générant des certificats de conformité",
          ],
          tech: ["Web", "Bootstrap"],
        },
      ],
      education: [
        {
          icon: "🎓",
          title: "Ingénieur ECE Paris",
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
          title: "Baccalauréat",
          subtitle: "Spécialités Maths Expertes et NSI",
          desc: "",
        },
      ],
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
      location: "Paris 17, Île-de-France",
      mobility: "All over France · Driving licence",
    },
    ui: {
      openMenu: "Open menu",
      closeMenu: "Close menu",
      switchLanguage: "Switch the site to French",
    },
    about: {
      tags: [
        "🎓 ECE Paris Engineer",
        "🎂 23 years old",
        "🇬🇧 English B2 · TOEIC 850",
      ],
      paragraphs: [
        "Engineering graduate from ECE Paris, passionate about computing, development, creation and innovation.",
        "In my free time, I develop games and mods. I'm resourceful, I learn fast, and I'm bilingual in writing (TOEIC B2).",
      ],
      punchline: "In short, the default nerd. 🤓",
      valueLabel: "My added value:",
      value:
        "turning an idea into working software, and quickly learning everything I don't know yet.",
    },
    situation: {
      status: "🔎 Looking for my first job",
      availability: "Available right now",
      domainsLabel: "Target fields",
      domains: [
        "Software development",
        "Application design",
        "Technical systems",
      ],
      experience: "💼 1 year of internship experience, notably at Thales",
      downloadCv: "Download my CV",
      downloadLetter: "Recommendation letter (latest internship)",
    },
    skills: {
      groups: {
        languages: "Languages",
        frameworks: "Frameworks & libraries",
        tools: "Tools & software",
      },
      languagesTitle: "Spoken languages",
      english: "English",
      englishLevel: "B2 level",
      toeic: "TOEIC: 850 / 990",
    },
    career: {
      experiencesTitle: "Work experience",
      educationTitle: "Education",
      latest: "Latest internship",
      experiences: [
        {
          period: "February – August 2026",
          role: "End-of-studies internship",
          company: "Thales SIX GTS",
          bullets: [
            "Internal software generating audit reports (LiCASI)",
            "Automated generation of audit PDFs",
            "Move to Inner Source: restructuring of the architecture and packages",
            "REST API integration and automatic data entry",
          ],
          tech: ["Python", "Django", "REST", "Batch scripts"],
        },
        {
          period: "April – August 2025",
          role: "Software & UI developer",
          company: "Thales DMS",
          bullets: [
            "Demonstrator for flexible modelling of the SPECTRA architecture, as a team with two other interns",
            "Interface built in C++ and SDL3, integrated with the back-end",
          ],
          tech: ["C++", "SDL3"],
        },
        {
          period: "January – February 2024",
          role: "IT assistant",
          company: "City hall",
          bullets: [
            "Python program generating PDFs from Excel files",
            "Automated administrative tasks, for a clear time saving",
          ],
          tech: ["Python", "Excel"],
        },
        {
          period: "January – February 2023",
          role: "Web developer",
          company: "LOXAM, La Défense",
          bullets: ["Internal software generating compliance certificates"],
          tech: ["Web", "Bootstrap"],
        },
      ],
      education: [
        {
          icon: "🎓",
          title: "ECE Paris Engineering degree",
          subtitle: "Defence and Technology major",
          desc: "Defence sector, computing: Cloud, AI, cybersecurity…",
        },
        {
          icon: "🗽",
          title: "Baruch College, New York",
          subtitle: "4-month stay · 2023",
          desc: "Studied AI development and robotics.",
        },
        {
          icon: "📘",
          title: "French Baccalauréat",
          subtitle: "Advanced Maths and Computer Science (NSI)",
          desc: "",
        },
      ],
    },
    lorem: lorem_en,
  },
};

export type Lang = keyof typeof translations;
export type Dict = (typeof translations)["fr"];