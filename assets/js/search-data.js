// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "You can find my latest (2025.05) CV with the button on the right.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of my cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "news-my-paper-rapid-aerodynamic-prediction-for-wings-via-physics-embedded-transformer-is-nominated-as-the-top-3-best-papers-in-aerofliphy-cfdmps-flocon-regions-in-eucass-2025",
          title: 'My paper Rapid aerodynamic prediction for wings via physics-embedded Transformer is nominated as...',
          description: "",
          section: "News",},{id: "news-i-m-happy-to-start-working-with-prof-nils-thuerey-as-a-postdoctoral-researcher-at-technical-university-of-munich",
          title: 'I’m happy to start working with Prof. Nils Thuerey as a Postdoctoral Researcher...',
          description: "",
          section: "News",},{id: "projects-multipoint-optimization-for-supercritical-airfoils",
          title: 'Multipoint optimization for supercritical airfoils',
          description: "Reliably speeding up multipoint aerodynamic optimization",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1multipoint/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/YangYunjia", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yunjia-yang-133a3128a", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=ngea1-AAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
