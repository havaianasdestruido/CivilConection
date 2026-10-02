// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {type: 'category', label: 'Primeiros passos', link: {type: 'generated-index', slug: '/getting-started'}, items: [
      'getting-started/prerequisites', 'getting-started/installation', 'getting-started/configuration'
    ]},
    {type: 'category', label: 'Arquitetura', link: {type: 'generated-index', slug: '/architecture'}, items: [
      'architecture/overview', 'architecture/data-flow', 'architecture/domain-model'
    ]},
    {type: 'category', label: 'Backend', link: {type: 'generated-index', slug: '/backend'}, items: [
      'backend/overview', 'backend/layers', 'backend/testing'
    ]},
    {type: 'category', label: 'Frontend', link: {type: 'generated-index', slug: '/frontend'}, items: [
      'frontend/overview', 'frontend/integration', 'frontend/design-system'
    ]},
    {type: 'category', label: 'Banco de dados', link: {type: 'generated-index', slug: '/database'}, items: [
      'database/overview', 'database/supabase', 'database/security'
    ]},
    {type: 'category', label: 'Referência', link: {type: 'generated-index', slug: '/reference'}, items: [
      'reference/api', 'reference/configuration', 'reference/project-structure'
    ]},
    {type: 'category', label: 'Contribuição e operação', link: {type: 'generated-index', slug: '/contributing'}, items: [
      'contributing/workflow', 'contributing/deployment', 'contributing/documentation'
    ]},
  ],
};
module.exports = sidebars;
