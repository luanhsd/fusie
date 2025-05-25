export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'FUSIE - A Metrics Catalog for User Experience',
      description: 'FUSIE is a metrics catalog designed to help teams and organizations track and improve user experience through standardized metrics and insights.',
    },
    theme: {
      customizable: true,
      color: 'Blue',
      radius: 0.5,
    },
    header: {
      title: '',
      showTitle: true,
      darkModeToggle: true,
      showLoadingIndicator: true,
      languageSwitcher: {
        enable: true,
      },
      logo: {
        light: '/fusie-favicon.png',
        dark: '/fusie-favicon.png',
      },
      nav: [],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/luanhsd/fusie',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'Made with ❤️ by XpeeR for All Your User Experience Needs.',
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/luanhsd/fusie',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      title: 'On This Page',
      links: [{
        title: 'Star on GitHub',
        icon: 'lucide:star',
        to: 'https://github.com/luanhsd/fusie',
        target: '_blank',
      }, {
        title: 'Create Issues',
        icon: 'lucide:circle-dot',
        to: 'https://github.com/luanhsd/fusie/issues',
        target: '_blank',
      }],
    },
    search: {
      enable: true,
      inAside: false,
    }
  }
});