// @ts-check
const {themes: prismThemes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Civil Connection',
  tagline: 'Documentação técnica da plataforma de construção civil',
  favicon: 'img/favicon.png',
  url: process.env.DOCS_URL || 'https://havaianasdestruido.github.io',
  baseUrl: process.env.DOCS_BASE_URL || '/CivilConection/',
  organizationName: 'havaianasdestruido',
  projectName: 'CivilConection',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: {mermaid: true, hooks: {onBrokenMarkdownLinks: 'warn'}},
  themes: ['@docusaurus/theme-mermaid'],
  i18n: {defaultLocale: 'pt-BR', locales: ['pt-BR']},
  presets: [
    ['classic', {
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/havaianasdestruido/CivilConection/edit/CivilConectionV1/website/',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      },
      blog: false,
      theme: {customCss: require.resolve('./src/css/custom.css')},
      sitemap: {changefreq: 'weekly', priority: 0.5},
    }],
  ],
  plugins: [
    [require.resolve('@easyops-cn/docusaurus-search-local'), {
      hashed: true,
      language: ['pt', 'en'],
      docsRouteBasePath: '/docs',
      indexDocs: true,
      indexPages: true,
      indexBlog: false,
      highlightSearchTermsOnTargetPage: true,
    }],
  ],
  themeConfig: {
    image: 'img/social-card.jpg',
    colorMode: {defaultMode: 'light', respectPrefersColorScheme: true},
    navbar: {
      title: 'Civil Connection',
      logo: {alt: 'Civil Connection', src: 'img/logo.png'},
      items: [
        {type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Documentação'},
        {to: '/docs/reference/api', label: 'API', position: 'left'},
        {to: '/docs/architecture/overview', label: 'Arquitetura', position: 'left'},
        {href: 'https://github.com/havaianasdestruido/CivilConection', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Aprenda', items: [
          {label: 'Primeiros passos', to: '/docs/getting-started/installation'},
          {label: 'Referência da API', to: '/docs/reference/api'},
          {label: 'Arquitetura', to: '/docs/architecture/overview'},
        ]},
        {title: 'Desenvolvimento', items: [
          {label: 'Backend', to: '/docs/backend/overview'},
          {label: 'Frontend', to: '/docs/frontend/overview'},
          {label: 'Banco de dados', to: '/docs/database/overview'},
        ]},
        {title: 'Projeto', items: [
          {label: 'GitHub', href: 'https://github.com/havaianasdestruido/CivilConection'},
          {label: 'Contribuir', to: '/docs/contributing/workflow'},
        ]},
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Civil Connection. Projeto acadêmico Etec.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java', 'sql', 'bash', 'properties', 'json'],
    },
  },
};
module.exports = config;
