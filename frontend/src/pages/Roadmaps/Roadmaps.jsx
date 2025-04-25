import { useState } from 'react';
import './Roadmaps.css';

const techInfo = {
  'JSX': {
    description: 'A syntax extension for JavaScript that allows you to write HTML-like code in JavaScript.',
    features: [
      'XML-like syntax in JavaScript',
      'Component-based structure',
      'Expression embedding',
      'Attribute specification',
      'Element nesting'
    ],
    resources: [
      { name: 'React JSX Docs', url: 'https://react.dev/learn/writing-markup-with-jsx' },
      { name: 'JSX In Depth', url: 'https://legacy.reactjs.org/docs/jsx-in-depth.html' },
      { name: 'JSX Specification', url: 'https://facebook.github.io/jsx/' }
    ]
  },
  'Components': {
    description: 'The building blocks of modern web applications that encapsulate logic and UI.',
    features: [
      'Reusable code structure',
      'Props and state management',
      'Lifecycle methods',
      'Event handling',
      'Composition patterns'
    ],
    resources: [
      { name: 'React Components', url: 'https://react.dev/learn/your-first-component' },
      { name: 'Vue Components', url: 'https://vuejs.org/guide/essentials/component-basics.html' },
      { name: 'Angular Components', url: 'https://angular.io/guide/component-overview' }
    ]
  },
  'Context API': {
    description: 'Reacts built-in state management solution for passing data through the component tree.',
    features: [
      'Global state management',
      'Prop drilling prevention',
      'Context providers and consumers',
      'Dynamic context updates',
      'Multiple contexts'
    ],
    resources: [
      { name: 'React Context', url: 'https://react.dev/learn/passing-data-deeply-with-context' },
      { name: 'Context API Guide', url: 'https://legacy.reactjs.org/docs/context.html' },
      { name: 'Advanced Context Patterns', url: 'https://kentcdodds.com/blog/how-to-use-react-context-effectively' }
    ]
  },
  'Redux': {
    description: 'A predictable state container for JavaScript applications.',
    features: [
      'Centralized state management',
      'Predictable state updates',
      'Developer tools',
      'Middleware support',
      'Large ecosystem'
    ],
    resources: [
      { name: 'Redux Documentation', url: 'https://redux.js.org/' },
      { name: 'Redux Toolkit', url: 'https://redux-toolkit.js.org/' },
      { name: 'Redux Essentials', url: 'https://redux.js.org/tutorials/essentials/part-1-overview-concepts' }
    ]
  },
  'MobX': {
    description: 'Simple, scalable state management through reactive programming.',
    features: [
      'Observable state',
      'Computed values',
      'Automatic reactions',
      'Actions for state modification',
      'Minimal boilerplate'
    ],
    resources: [
      { name: 'MobX Documentation', url: 'https://mobx.js.org/' },
      { name: 'MobX with React', url: 'https://mobx.js.org/react-integration.html' },
      { name: 'MobX State Tree', url: 'https://mobx-state-tree.js.org/' }
    ]
  },
  'Zustand': {
    description: 'A small, fast, and scalable state management solution.',
    features: [
      'Simple and unopinionated',
      'Hook-based API',
      'Middleware support',
      'Devtools integration',
      'TypeScript support'
    ],
    resources: [
      { name: 'Zustand GitHub', url: 'https://github.com/pmndrs/zustand' },
      { name: 'Zustand Tutorial', url: 'https://docs.pmnd.rs/zustand/getting-started/introduction' },
      { name: 'Zustand Examples', url: 'https://github.com/pmndrs/zustand/tree/main/examples' }
    ]
  },
  'Jotai': {
    description: 'Primitive and flexible state management for React.',
    features: [
      'Atomic state management',
      'Derived atoms',
      'Async atoms',
      'TypeScript support',
      'React Suspense integration'
    ],
    resources: [
      { name: 'Jotai Documentation', url: 'https://jotai.org/' },
      { name: 'Jotai Tutorial', url: 'https://jotai.org/docs/introduction' },
      { name: 'Jotai Examples', url: 'https://jotai.org/docs/examples' }
    ]
  },
  'Sass/Less': {
    description: 'CSS preprocessors that extend CSS with additional features and capabilities.',
    features: [
      'Variables and mixins',
      'Nested selectors',
      'Functions and calculations',
      'Import and modularization',
      'Color manipulation'
    ],
    resources: [
      { name: 'Sass Documentation', url: 'https://sass-lang.com/documentation/' },
      { name: 'Less Documentation', url: 'https://lesscss.org/' },
      { name: 'Sass Guidelines', url: 'https://sass-guidelin.es/' }
    ]
  },
  'Vuetify': {
    description: 'Material Design component framework for Vue.js with rich features and customization.',
    features: [
      'Material Design components',
      'Responsive grid system',
      'Theme customization',
      'RTL support',
      'Enterprise support'
    ],
    resources: [
      { name: 'Vuetify Documentation', url: 'https://vuetifyjs.com/en/' },
      { name: 'Components', url: 'https://vuetifyjs.com/en/components/all/' },
      { name: 'Styles and Animations', url: 'https://vuetifyjs.com/en/styles/colors/' }
    ]
  },
  'PrimeVue': {
    description: 'Rich set of open source UI components for Vue.js.',
    features: [
      'Extensive component library',
      'Theme designer',
      'Accessibility support',
      'Premium templates',
      'Enterprise support'
    ],
    resources: [
      { name: 'PrimeVue Documentation', url: 'https://primevue.org/documentation/' },
      { name: 'Components', url: 'https://primevue.org/autocomplete' },
      { name: 'Themes', url: 'https://primevue.org/theming/' }
    ]
  },
  'Naive UI': {
    description: 'A Vue 3 component library with TypeScript support and customizable themes.',
    features: [
      'TypeScript support',
      'Theme customization',
      'Tree-shakeable',
      'Internationalization',
      'Dark mode'
    ],
    resources: [
      { name: 'Naive UI Documentation', url: 'https://www.naiveui.com/en-US/os-theme' },
      { name: 'Components', url: 'https://www.naiveui.com/en-US/os-theme/components/button' },
      { name: 'Themes', url: 'https://www.naiveui.com/en-US/os-theme/docs/customize-theme' }
    ]
  },
  'CSS Modules': {
    description: 'A CSS file in which all class names and animation names are scoped locally by default.',
    features: [
      'Local scoping',
      'Composition',
      'Build tool integration',
      'CSS importing',
      'Name conflicts prevention'
    ],
    resources: [
      { name: 'CSS Modules GitHub', url: 'https://github.com/css-modules/css-modules' },
      { name: 'CSS Modules Guide', url: 'https://css-tricks.com/css-modules-part-1-need/' },
      { name: 'CSS Modules with React', url: 'https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/' }
    ]
  },
  'Styled Components': {
    description: 'Visual primitives for the component age, utilizing tagged template literals.',
    features: [
      'CSS-in-JS',
      'Dynamic styling',
      'Theming support',
      'Server-side rendering',
      'Automatic vendor prefixing'
    ],
    resources: [
      { name: 'Styled Components Docs', url: 'https://styled-components.com/docs' },
      { name: 'Styled System', url: 'https://styled-system.com/' },
      { name: 'Styled Components Patterns', url: 'https://www.joshwcomeau.com/css/styled-components/' }
    ]
  },
  'Tailwind CSS': {
    description: 'A utility-first CSS framework for rapidly building custom user interfaces.',
    features: [
      'Utility-first approach',
      'JIT compilation',
      'Responsive design',
      'Dark mode',
      'Custom plugins'
    ],
    resources: [
      { name: 'Tailwind CSS Docs', url: 'https://tailwindcss.com/docs' },
      { name: 'Tailwind UI', url: 'https://tailwindui.com/' },
      { name: 'Tailwind Play', url: 'https://play.tailwindcss.com/' }
    ]
  },
  'Material UI': {
    description: 'A comprehensive suite of UI tools and components implementing Googles Material Design.',
    features: [
      'Ready-to-use components',
      'Customization options',
      'Theming system',
      'Responsive design',
      'Accessibility support'
    ],
    resources: [
      { name: 'Material UI Docs', url: 'https://mui.com/' },
      { name: 'Material UI Components', url: 'https://mui.com/components/' },
      { name: 'Material UI Templates', url: 'https://mui.com/templates/' }
    ]
  },
  'Chakra UI': {
    description: 'A simple, modular and accessible component library for React applications.',
    features: [
      'Accessible components',
      'Theme customization',
      'Color mode support',
      'Responsive styles',
      'Component composition'
    ],
    resources: [
      { name: 'Chakra UI Docs', url: 'https://chakra-ui.com/' },
      { name: 'Component Library', url: 'https://chakra-ui.com/docs/components' },
      { name: 'Style Props', url: 'https://chakra-ui.com/docs/styled-system/style-props' }
    ]
  },
  'Radix UI': {
    description: 'Unstyled, accessible components for building high‑quality design systems.',
    features: [
      'Headless components',
      'WAI-ARIA compliance',
      'Keyboard navigation',
      'Focus management',
      'Composable primitives'
    ],
    resources: [
      { name: 'Radix UI Docs', url: 'https://www.radix-ui.com/docs/primitives' },
      { name: 'Primitives', url: 'https://www.radix-ui.com/primitives' },
      { name: 'Colors', url: 'https://www.radix-ui.com/colors' }
    ]
  },
  'Ember.js': {
    description: 'A framework for ambitious web developers, focusing on convention over configuration.',
    features: [
      'Convention over configuration',
      'Built-in testing tools',
      'Strong community',
      'Stable releases',
      'Comprehensive documentation'
    ],
    resources: [
      { name: 'Ember.js Guides', url: 'https://guides.emberjs.com/' },
      { name: 'Ember CLI', url: 'https://cli.emberjs.com/' },
      { name: 'Ember Addons', url: 'https://emberobserver.com/' }
    ]
  },
  'Alpine.js': {
    description: 'A rugged, minimal framework for composing JavaScript behavior in your markup.',
    features: [
      'Lightweight framework',
      'Simple directives',
      'No build step required',
      'Progressive enhancement',
      'Browser-native implementation'
    ],
    resources: [
      { name: 'Alpine.js Documentation', url: 'https://alpinejs.dev/' },
      { name: 'Alpine.js Examples', url: 'https://alpinejs.dev/start-here' },
      { name: 'Alpine.js Plugins', url: 'https://alpinejs.dev/plugins' }
    ]
  },
  'Lit': {
    description: 'A simple library for building fast, lightweight web components.',
    features: [
      'Web Components',
      'Reactive properties',
      'Template literals',
      'Small bundle size',
      'Framework agnostic'
    ],
    resources: [
      { name: 'Lit Documentation', url: 'https://lit.dev/' },
      { name: 'Lit Playground', url: 'https://lit.dev/playground/' },
      { name: 'Lit Tutorial', url: 'https://lit.dev/tutorials/' }
    ]
  },
  'Stimulus': {
    description: 'A modest JavaScript framework for the HTML you already have.',
    features: [
      'HTML-first approach',
      'Data attributes API',
      'Controller pattern',
      'Simple state management',
      'Progressive enhancement'
    ],
    resources: [
      { name: 'Stimulus Handbook', url: 'https://stimulus.hotwired.dev/handbook/introduction' },
      { name: 'Stimulus Reference', url: 'https://stimulus.hotwired.dev/reference/controllers' },
      { name: 'Stimulus Examples', url: 'https://stimulus.hotwired.dev/handbook/installing' }
    ]
  },
  'Deno': {
    description: 'A secure runtime for JavaScript and TypeScript with built-in developer tools.',
    features: [
      'Secure by default',
      'Built-in TypeScript support',
      'Modern ES modules',
      'Standard library',
      'Built-in testing'
    ],
    resources: [
      { name: 'Deno Manual', url: 'https://deno.land/manual' },
      { name: 'Deno Standard Library', url: 'https://deno.land/std' },
      { name: 'Deno by Example', url: 'https://examples.deno.land/' }
    ]
  },
  'Fastify': {
    description: 'Fast and low overhead web framework for Node.js.',
    features: [
      'Highly performant',
      'Ecosystem of plugins',
      'Schema based',
      'TypeScript support',
      'Logging included'
    ],
    resources: [
      { name: 'Fastify Documentation', url: 'https://www.fastify.io/docs/latest/' },
      { name: 'Fastify Plugins', url: 'https://www.fastify.io/ecosystem' },
      { name: 'Getting Started', url: 'https://www.fastify.io/docs/latest/Guides/Getting-Started/' }
    ]
  },
  'AdonisJS': {
    description: 'A fully featured web framework for Node.js.',
    features: [
      'MVC architecture',
      'Authentication system',
      'Database ORM',
      'Testing tools',
      'CLI tool'
    ],
    resources: [
      { name: 'AdonisJS Documentation', url: 'https://docs.adonisjs.com/' },
      { name: 'AdonisJS Guides', url: 'https://docs.adonisjs.com/guides/introduction' },
      { name: 'AdonisJS Tutorial', url: 'https://docs.adonisjs.com/guides/quick-start' }
    ]
  },
  'Strapi': {
    description: 'The leading open-source headless CMS for building APIs.',
    features: [
      'Content management',
      'API generation',
      'Plugin system',
      'Role-based access',
      'Self-hosted'
    ],
    resources: [
      { name: 'Strapi Documentation', url: 'https://docs.strapi.io/' },
      { name: 'Strapi User Guide', url: 'https://docs.strapi.io/user-docs/intro' },
      { name: 'Developer Guide', url: 'https://docs.strapi.io/developer-docs/intro' }
    ]
  },
  'Mocha': {
    description: 'Feature-rich JavaScript test framework running on Node.js.',
    features: [
      'Flexible testing',
      'Asynchronous support',
      'Rich reporting',
      'Browser support',
      'Plugin ecosystem'
    ],
    resources: [
      { name: 'Mocha Documentation', url: 'https://mochajs.org/' },
      { name: 'Getting Started', url: 'https://mochajs.org/#getting-started' },
      { name: 'Mocha Wiki', url: 'https://github.com/mochajs/mocha/wiki' }
    ]
  },
  'Jasmine': {
    description: 'Behavior-Driven Development testing framework for JavaScript.',
    features: [
      'No external dependencies',
      'Built-in assertions',
      'Test doubles',
      'Async testing',
      'Custom matchers'
    ],
    resources: [
      { name: 'Jasmine Documentation', url: 'https://jasmine.github.io/' },
      { name: 'Getting Started', url: 'https://jasmine.github.io/pages/getting_started.html' },
      { name: 'Jasmine Examples', url: 'https://jasmine.github.io/tutorials/your_first_suite' }
    ]
  },
  'Selenium': {
    description: 'Tool for browser automation and testing web applications.',
    features: [
      'Cross-browser testing',
      'Multiple language bindings',
      'Record and playback',
      'Grid for parallel testing',
      'Extensive API'
    ],
    resources: [
      { name: 'Selenium Documentation', url: 'https://www.selenium.dev/documentation/' },
      { name: 'WebDriver', url: 'https://www.selenium.dev/documentation/webdriver/' },
      { name: 'Grid', url: 'https://www.selenium.dev/documentation/grid/' }
    ]
  },
  'Rollup': {
    description: 'Module bundler for JavaScript libraries.',
    features: [
      'Tree-shaking',
      'Code splitting',
      'Plugin architecture',
      'ES module support',
      'Small bundle size'
    ],
    resources: [
      { name: 'Rollup Guide', url: 'https://rollupjs.org/guide/en/' },
      { name: 'Configuration', url: 'https://rollupjs.org/configuration-options/' },
      { name: 'Plugin List', url: 'https://github.com/rollup/awesome' }
    ]
  },
  'Parcel': {
    description: 'Zero configuration build tool for the web.',
    features: [
      'Zero config',
      'Fast builds',
      'Automatic transforms',
      'Hot reloading',
      'Code splitting'
    ],
    resources: [
      { name: 'Parcel Documentation', url: 'https://parceljs.org/docs/' },
      { name: 'Getting Started', url: 'https://parceljs.org/getting-started/webapp/' },
      { name: 'Plugin System', url: 'https://parceljs.org/plugin-system/overview/' }
    ]
  },
  'esbuild': {
    description: 'An extremely fast JavaScript bundler.',
    features: [
      'Extreme speed',
      'ES6 and CommonJS',
      'Tree shaking',
      'Source maps',
      'TypeScript support'
    ],
    resources: [
      { name: 'esbuild Documentation', url: 'https://esbuild.github.io/' },
      { name: 'API', url: 'https://esbuild.github.io/api/' },
      { name: 'Getting Started', url: 'https://esbuild.github.io/getting-started/' }
    ]
  },
  'Mantine': {
    description: 'A fully featured React components library.',
    features: [
      'Modern components',
      'Hooks library',
      'Dark theme support',
      'TypeScript based',
      'Accessibility'
    ],
    resources: [
      { name: 'Mantine Documentation', url: 'https://mantine.dev/' },
      { name: 'Components', url: 'https://mantine.dev/core/button/' },
      { name: 'Hooks', url: 'https://mantine.dev/hooks/use-form/' }
    ]
  },
  'DaisyUI': {
    description: 'Tailwind CSS component library with semantic class names.',
    features: [
      'Tailwind CSS based',
      'Theme system',
      'Semantic classes',
      'Responsive design',
      'Customizable'
    ],
    resources: [
      { name: 'DaisyUI Documentation', url: 'https://daisyui.com/' },
      { name: 'Components', url: 'https://daisyui.com/components/' },
      { name: 'Themes', url: 'https://daisyui.com/docs/themes/' }
    ]
  },
  'Headless UI': {
    description: 'Completely unstyled, fully accessible UI components.',
    features: [
      'Framework agnostic',
      'Accessibility focus',
      'Zero styling',
      'React & Vue support',
      'Composable components'
    ],
    resources: [
      { name: 'Headless UI Documentation', url: 'https://headlessui.com/' },
      { name: 'React Components', url: 'https://headlessui.com/react/menu' },
      { name: 'Vue Components', url: 'https://headlessui.com/vue/menu' }
    ]
  },
  'npm/yarn/pnpm': {
    description: 'Package managers for JavaScript and Node.js applications.',
    features: [
      'Dependency management',
      'Script running',
      'Package publishing',
      'Workspace support',
      'Lock file generation'
    ],
    resources: [
      { name: 'npm Documentation', url: 'https://docs.npmjs.com/' },
      { name: 'Yarn Documentation', url: 'https://yarnpkg.com/' },
      { name: 'pnpm Documentation', url: 'https://pnpm.io/' }
    ]
  },
  'Webpack': {
    description: 'A static module bundler for modern JavaScript applications.',
    features: [
      'Module bundling',
      'Code splitting',
      'Asset management',
      'Hot module replacement',
      'Plugin system'
    ],
    resources: [
      { name: 'Webpack Documentation', url: 'https://webpack.js.org/' },
      { name: 'Webpack Guides', url: 'https://webpack.js.org/guides/' },
      { name: 'Webpack Configuration', url: 'https://webpack.js.org/configuration/' }
    ]
  },
  'Vite': {
    description: 'Next generation frontend tooling with instant server start and hot module replacement.',
    features: [
      'Dev server with HMR',
      'Out-of-the-box TypeScript',
      'Plugin system',
      'Production optimization',
      'Framework agnostic'
    ],
    resources: [
      { name: 'Vite Documentation', url: 'https://vitejs.dev/' },
      { name: 'Vite Guide', url: 'https://vitejs.dev/guide/' },
      { name: 'Vite Config', url: 'https://vitejs.dev/config/' }
    ]
  },
  'RxJS': {
    description: 'Reactive Extensions Library for JavaScript, essential for Angular applications.',
    features: [
      'Observable streams',
      'Powerful operators',
      'Error handling',
      'Subscription management',
      'Multicasting'
    ],
    resources: [
      { name: 'RxJS Documentation', url: 'https://rxjs.dev/' },
      { name: 'Learn RxJS', url: 'https://www.learnrxjs.io/' },
      { name: 'RxJS Operators', url: 'https://rxjs.dev/guide/operators' }
    ]
  },
  'NgRx': {
    description: 'Reactive State Management for Angular applications inspired by Redux.',
    features: [
      'Store management',
      'Effects for side effects',
      'Entity management',
      'DevTools integration',
      'Immutable updates'
    ],
    resources: [
      { name: 'NgRx Documentation', url: 'https://ngrx.io/' },
      { name: 'Getting Started', url: 'https://ngrx.io/guide/store' },
      { name: 'Architecture Guide', url: 'https://ngrx.io/guide/store/architecture' }
    ]
  },
  'NGXS': {
    description: 'State management pattern for Angular applications with simple syntax.',
    features: [
      'Simple state management',
      'Action patterns',
      'Plugins architecture',
      'State operators',
      'Dependency injection'
    ],
    resources: [
      { name: 'NGXS Documentation', url: 'https://www.ngxs.io/' },
      { name: 'Concepts', url: 'https://www.ngxs.io/concepts' },
      { name: 'Plugins', url: 'https://www.ngxs.io/plugins' }
    ]
  },
  'Akita': {
    description: 'State Management for Angular applications with powerful entity management.',
    features: [
      'Entity collections',
      'Query capabilities',
      'Powerful devtools',
      'Active state',
      'Persistence'
    ],
    resources: [
      { name: 'Akita Documentation', url: 'https://datorama.github.io/akita/' },
      { name: 'Entity Store', url: 'https://datorama.github.io/akita/docs/entities/entity-store' },
      { name: 'Angular Integration', url: 'https://datorama.github.io/akita/docs/angular/integration' }
    ]
  },
  'Angular Material': {
    description: 'Material Design components for Angular applications.',
    features: [
      'Material Design components',
      'Theming system',
      'Accessibility support',
      'Responsive layouts',
      'Angular integration'
    ],
    resources: [
      { name: 'Angular Material Docs', url: 'https://material.angular.io/' },
      { name: 'Components', url: 'https://material.angular.io/components/categories' },
      { name: 'Theming Guide', url: 'https://material.angular.io/guide/theming' }
    ]
  },
  'PrimeNG': {
    description: 'Rich set of open source UI components for Angular.',
    features: [
      'Extensive component library',
      'Theme designer',
      'Templates',
      'Accessibility',
      'Enterprise support'
    ],
    resources: [
      { name: 'PrimeNG Documentation', url: 'https://primeng.org/' },
      { name: 'Components', url: 'https://primeng.org/setup' },
      { name: 'Themes', url: 'https://primeng.org/theming' }
    ]
  },
  'Turbopack': {
    description: 'An incremental bundler optimized for JavaScript and TypeScript, written in Rust.',
    features: [
      'Incremental compilation',
      'Rust-powered performance',
      'TypeScript support',
      'Hot module replacement',
      'Asset optimization'
    ],
    resources: [
      { name: 'Turbopack Documentation', url: 'https://turbo.build/pack' },
      { name: 'Turbopack Features', url: 'https://turbo.build/pack/docs/features' },
      { name: 'Getting Started', url: 'https://turbo.build/pack/docs/getting-started' }
    ]
  },
  'Jest': {
    description: 'A delightful JavaScript testing framework with a focus on simplicity.',
    features: [
      'Zero config',
      'Snapshot testing',
      'Code coverage',
      'Parallel testing',
      'Watch mode'
    ],
    resources: [
      { name: 'Jest Documentation', url: 'https://jestjs.io/' },
      { name: 'Jest Getting Started', url: 'https://jestjs.io/docs/getting-started' },
      { name: 'Jest API Reference', url: 'https://jestjs.io/docs/api' }
    ]
  },
  'React Testing Library': {
    description: 'Simple and complete testing utilities that encourage good testing practices.',
    features: [
      'DOM testing',
      'User-centric queries',
      'Accessibility checks',
      'Event firing',
      'Async utilities'
    ],
    resources: [
      { name: 'Testing Library Docs', url: 'https://testing-library.com/docs/' },
      { name: 'React Testing Library', url: 'https://testing-library.com/docs/react-testing-library/intro/' },
      { name: 'Common Recipes', url: 'https://testing-library.com/docs/recipes' }
    ]
  },
  'Cypress': {
    description: 'Next generation front end testing tool built for the modern web.',
    features: [
      'Real-time reloads',
      'Time travel',
      'Automatic waiting',
      'Network stubbing',
      'Screenshot and video'
    ],
    resources: [
      { name: 'Cypress Documentation', url: 'https://docs.cypress.io/' },
      { name: 'Cypress Guides', url: 'https://docs.cypress.io/guides/overview/why-cypress' },
      { name: 'Best Practices', url: 'https://docs.cypress.io/guides/references/best-practices' }
    ]
  },
  'Playwright': {
    description: 'Reliable end-to-end testing for modern web apps.',
    features: [
      'Cross-browser testing',
      'Auto-wait capabilities',
      'Network interception',
      'Mobile emulation',
      'Test generator'
    ],
    resources: [
      { name: 'Playwright Docs', url: 'https://playwright.dev/' },
      { name: 'Getting Started', url: 'https://playwright.dev/docs/intro' },
      { name: 'Test Generator', url: 'https://playwright.dev/docs/codegen' }
    ]
  },
  'Next.js': {
    description: 'The React Framework for Production, offering hybrid static & server rendering.',
    features: [
      'Hybrid rendering',
      'Automatic routing',
      'API routes',
      'Image optimization',
      'Zero config'
    ],
    resources: [
      { name: 'Next.js Documentation', url: 'https://nextjs.org/docs' },
      { name: 'Learn Next.js', url: 'https://nextjs.org/learn' },
      { name: 'Next.js Examples', url: 'https://github.com/vercel/next.js/tree/canary/examples' }
    ]
  },
  'Remix': {
    description: 'Full stack web framework that lets you focus on the user interface.',
    features: [
      'Server-side rendering',
      'Nested routing',
      'Error boundaries',
      'Form handling',
      'Data loading'
    ],
    resources: [
      { name: 'Remix Docs', url: 'https://remix.run/docs/en/main' },
      { name: 'Remix Tutorial', url: 'https://remix.run/docs/en/main/tutorials/blog' },
      { name: 'Remix Stacks', url: 'https://remix.run/docs/en/main/pages/stacks' }
    ]
  },
  'PWA': {
    description: 'Progressive Web Apps that combine the best of web and mobile apps.',
    features: [
      'Offline functionality',
      'Push notifications',
      'Home screen installation',
      'Native-like features',
      'Background sync'
    ],
    resources: [
      { name: 'Web.dev PWA Guide', url: 'https://web.dev/progressive-web-apps/' },
      { name: 'MDN PWA Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps' },
      { name: 'PWA Builder', url: 'https://www.pwabuilder.com/' }
    ]
  },
  'Server Components': {
    description: 'React components that run on the server for improved performance.',
    features: [
      'Zero bundle size',
      'Direct backend access',
      'Automatic code splitting',
      'SEO optimization',
      'Streaming rendering'
    ],
    resources: [
      { name: 'React Server Components', url: 'https://react.dev/blog/2020/12/21/data-fetching-with-react-server-components' },
      { name: 'RSC Docs', url: 'https://nextjs.org/docs/getting-started/react-essentials#server-components' },
      { name: 'Server Components RFC', url: 'https://github.com/reactjs/rfcs/blob/main/text/0188-server-components.md' }
    ]
  },
  'Vue CLI': {
    description: 'Standard tooling for Vue.js development with project scaffolding and build tools.',
    features: [
      'Project scaffolding',
      'Plugin management',
      'Build optimization',
      'Development server',
      'GUI interface'
    ],
    resources: [
      { name: 'Vue CLI Documentation', url: 'https://cli.vuejs.org/' },
      { name: 'Vue CLI Config Reference', url: 'https://cli.vuejs.org/config/' },
      { name: 'Vue CLI Plugins', url: 'https://cli.vuejs.org/core-plugins/' }
    ]
  },
  'Vue Router': {
    description: 'The official router for Vue.js applications.',
    features: [
      'Dynamic route matching',
      'Nested routes',
      'Route guards',
      'Lazy loading',
      'Navigation control'
    ],
    resources: [
      { name: 'Vue Router Guide', url: 'https://router.vuejs.org/' },
      { name: 'Vue Router API', url: 'https://router.vuejs.org/api/' },
      { name: 'Navigation Guards', url: 'https://router.vuejs.org/guide/advanced/navigation-guards.html' }
    ]
  },
  'Composition API': {
    description: 'A set of APIs that allows flexible composition of component logic in Vue.',
    features: [
      'Composable functions',
      'Reactive state management',
      'Lifecycle hooks',
      'Dependencies injection',
      'TypeScript support'
    ],
    resources: [
      { name: 'Composition API Guide', url: 'https://vuejs.org/guide/extras/composition-api-faq.html' },
      { name: 'Composition API RFC', url: 'https://github.com/vuejs/rfcs/blob/master/active-rfcs/0013-composition-api.md' },
      { name: 'Vue Use', url: 'https://vueuse.org/' }
    ]
  },
  'Vuex': {
    description: 'State management pattern and library for Vue.js applications.',
    features: [
      'Centralized state',
      'Mutations and actions',
      'Modules system',
      'DevTools integration',
      'Plugin system'
    ],
    resources: [
      { name: 'Vuex Documentation', url: 'https://vuex.vuejs.org/' },
      { name: 'Vuex Guide', url: 'https://vuex.vuejs.org/guide/' },
      { name: 'Core Concepts', url: 'https://vuex.vuejs.org/guide/state.html' }
    ]
  },
  'Pinia': {
    description: 'The intuitive store for Vue.js with TypeScript support.',
    features: [
      'Composable stores',
      'DevTools support',
      'Hot module replacement',
      'TypeScript support',
      'Actions and getters'
    ],
    resources: [
      { name: 'Pinia Documentation', url: 'https://pinia.vuejs.org/' },
      { name: 'Getting Started', url: 'https://pinia.vuejs.org/getting-started.html' },
      { name: 'Core Concepts', url: 'https://pinia.vuejs.org/core-concepts/' }
    ]
  },
  'VueUse': {
    description: 'Collection of essential Vue Composition Utilities.',
    features: [
      'Composable functions',
      'State utilities',
      'Sensors and DOM',
      'Network utilities',
      'Animation helpers'
    ],
    resources: [
      { name: 'VueUse Documentation', url: 'https://vueuse.org/' },
      { name: 'Functions List', url: 'https://vueuse.org/functions.html' },
      { name: 'Best Practices', url: 'https://vueuse.org/guide/' }
    ]
  },
  'Vitest': {
    description: 'Next generation testing framework powered by Vite.',
    features: [
      'Native ESM support',
      'Vue component testing',
      'Watch mode',
      'Snapshot testing',
      'Code coverage'
    ],
    resources: [
      { name: 'Vitest Documentation', url: 'https://vitest.dev/' },
      { name: 'Getting Started', url: 'https://vitest.dev/guide/' },
      { name: 'API Reference', url: 'https://vitest.dev/api/' }
    ]
  },
  'Nuxt.js': {
    description: 'The intuitive Vue framework for building modern web applications.',
    features: [
      'Server-side rendering',
      'Static site generation',
      'Auto imports',
      'File-based routing',
      'Module system'
    ],
    resources: [
      { name: 'Nuxt Documentation', url: 'https://nuxt.com/' },
      { name: 'Getting Started', url: 'https://nuxt.com/docs/getting-started/introduction' },
      { name: 'Modules', url: 'https://nuxt.com/modules' }
    ]
  },
  'HTML5': {
    description: 'The latest version of the standard markup language for creating web pages and applications.',
    features: [
      'Semantic elements for better structure',
      'Audio and video support',
      'Canvas for 2D graphics',
      'Local storage and offline capabilities',
      'Improved form controls'
    ],
    resources: [
      { name: 'MDN Web Docs - HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'W3Schools HTML Tutorial', url: 'https://www.w3schools.com/html/' },
      { name: 'freeCodeCamp HTML Course', url: 'https://www.freecodecamp.org/learn/responsive-web-design/' }
    ]
  },
  'CSS3': {
    description: 'The latest standard of Cascading Style Sheets for styling and laying out web pages.',
    features: [
      'Flexbox and Grid layouts',
      'Animations and transitions',
      'Media queries for responsive design',
      'Custom properties (variables)',
      'Advanced selectors'
    ],
    resources: [
      { name: 'MDN Web Docs - CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { name: 'CSS-Tricks', url: 'https://css-tricks.com/' },
      { name: 'Web.dev CSS Course', url: 'https://web.dev/learn/css/' }
    ]
  },
  'JavaScript ES6+': {
    description: 'Modern JavaScript with enhanced features and capabilities for web development.',
    features: [
      'Arrow functions',
      'Destructuring assignment',
      'Modules and classes',
      'Promises and async/await',
      'Template literals'
    ],
    resources: [
      { name: 'JavaScript.info', url: 'https://javascript.info/' },
      { name: 'MDN JavaScript Guide', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide' },
      { name: 'Eloquent JavaScript', url: 'https://eloquentjavascript.net/' }
    ]
  },
  'React': {
    description: 'A JavaScript library for building user interfaces with a component-based architecture.',
    features: [
      'Virtual DOM for performance',
      'Component-based architecture',
      'Unidirectional data flow',
      'JSX syntax',
      'Rich ecosystem'
    ],
    resources: [
      { name: 'React Official Docs', url: 'https://react.dev/' },
      { name: 'React Course on Scrimba', url: 'https://scrimba.com/learn/learnreact' },
      { name: 'React Patterns', url: 'https://reactpatterns.com/' }
    ]
  },
  'Vue.js': {
    description: 'Progressive JavaScript framework for building user interfaces with a gentle learning curve.',
    features: [
      'Reactive data binding',
      'Component system',
      'Template syntax',
      'Vue CLI',
      'Built-in state management'
    ],
    resources: [
      { name: 'Vue.js Official Guide', url: 'https://vuejs.org/guide/introduction.html' },
      { name: 'Vue Mastery', url: 'https://www.vuemastery.com/' },
      { name: 'Vue School', url: 'https://vueschool.io/' }
    ]
  },
  'Vue SSR': {
    description: 'Server-Side Rendering capabilities in Vue.js for improved performance and SEO.',
    features: [
      'Universal application support',
      'Pre-rendering capabilities',
      'Hydration process',
      'Bundle renderer',
      'Client-server data handling'
    ],
    resources: [
      { name: 'Vue SSR Guide', url: 'https://vuejs.org/guide/scaling-up/ssr.html' },
      { name: 'Nuxt.js Documentation', url: 'https://nuxt.com/docs' },
      { name: 'Vue SSR API Reference', url: 'https://vuejs.org/api/ssr.html' }
    ]
  },
  'Angular': {
    description: 'A comprehensive framework for building scalable web applications with TypeScript.',
    features: [
      'Dependency Injection',
      'RxJS Integration',
      'Angular CLI',
      'Component Architecture',
      'Built-in Testing Tools'
    ],
    resources: [
      { name: 'Angular Documentation', url: 'https://angular.io/docs' },
      { name: 'Angular Tutorial', url: 'https://angular.io/tutorial' },
      { name: 'Angular CLI Guide', url: 'https://angular.io/cli' }
    ]
  },
  'Svelte': {
    description: 'A radical new approach to building user interfaces with minimal runtime code.',
    features: [
      'No Virtual DOM',
      'True reactivity',
      'Built-in animations',
      'Scoped styling',
      'Server-side rendering'
    ],
    resources: [
      { name: 'Svelte Documentation', url: 'https://svelte.dev/docs' },
      { name: 'Svelte Tutorial', url: 'https://svelte.dev/tutorial' },
      { name: 'SvelteKit', url: 'https://kit.svelte.dev/docs' }
    ]
  },
  'Solid.js': {
    description: 'A declarative JavaScript library for creating user interfaces with fine-grained reactivity.',
    features: [
      'Fine-grained reactivity',
      'No Virtual DOM',
      'JSX compilation',
      'SSR support',
      'Suspense and concurrent rendering'
    ],
    resources: [
      { name: 'Solid.js Documentation', url: 'https://www.solidjs.com/docs/latest' },
      { name: 'Solid.js Tutorial', url: 'https://www.solidjs.com/tutorial' },
      { name: 'Solid Start', url: 'https://start.solidjs.com/getting-started' }
    ]
  },
  'Node.js': {
    description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine for server-side development.',
    features: [
      'Event-driven architecture',
      'Non-blocking I/O',
      'NPM ecosystem',
      'Built-in modules',
      'Cross-platform support'
    ],
    resources: [
      { name: 'Node.js Documentation', url: 'https://nodejs.org/docs/latest/api/' },
      { name: 'Node.js Guides', url: 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs' },
      { name: 'Express.js', url: 'https://expressjs.com/' }
    ]
  },
  'MongoDB': {
    description: 'A popular NoSQL database for modern applications with flexible schema design.',
    features: [
      'Document-oriented storage',
      'High scalability',
      'Rich query language',
      'Aggregation framework',
      'Atlas cloud platform'
    ],
    resources: [
      { name: 'MongoDB Documentation', url: 'https://www.mongodb.com/docs/' },
      { name: 'MongoDB University', url: 'https://learn.mongodb.com/' },
      { name: 'Mongoose ODM', url: 'https://mongoosejs.com/docs/' }
    ]
  },
  'GraphQL': {
    description: 'A query language for APIs that provides a complete description of the data in your API.',
    features: [
      'Declarative data fetching',
      'Single endpoint',
      'Type system',
      'Real-time subscriptions',
      'Introspection'
    ],
    resources: [
      { name: 'GraphQL Documentation', url: 'https://graphql.org/learn/' },
      { name: 'Apollo Platform', url: 'https://www.apollographql.com/docs/' },
      { name: 'GraphQL Tools', url: 'https://www.graphql-tools.com/docs/introduction' }
    ]
  }
,}

const pathsData = {
  webdev: {
    title: 'Web Development',
    description: 'Choose your path in web development',
    paths: {
      react: {
        name: 'React Development',
        description: 'Modern UI development with React ecosystem',
        steps: [
          { title: 'Fundamentals', items: ['HTML5', 'CSS3', 'JavaScript ES6+'] },
          { title: 'React Basics', items: ['React', 'JSX', 'Components'] },
          { title: 'State Management', items: ['Context API', 'Redux', 'MobX', 'Zustand', 'Jotai'] },
          { title: 'Styling', items: ['CSS Modules', 'Styled Components', 'Tailwind CSS', 'Material UI', 'Chakra UI', 'Radix UI'] },
          { title: 'Build Tools', items: ['npm/yarn/pnpm', 'Webpack', 'Vite', 'Turbopack'] },
          { title: 'Testing', items: ['Jest', 'React Testing Library', 'Cypress', 'Playwright'] },
          { title: 'Advanced Concepts', items: ['TypeScript', 'Next.js', 'Remix', 'PWA', 'Server Components'] }
        ]
      },
      vue: {
        name: 'Vue Development',
        description: 'Progressive framework for building user interfaces',
        steps: [
          { title: 'Fundamentals', items: ['HTML5', 'CSS3', 'JavaScript ES6+'] },
          { title: 'Vue Basics', items: ['Vue.js', 'Vue CLI', 'Vue Router', 'Composition API'] },
          { title: 'State Management', items: ['Vuex', 'Pinia', 'VueUse'] },
          { title: 'Styling', items: ['Sass/Less', 'Tailwind CSS', 'Vuetify', 'PrimeVue', 'Naive UI'] },
          { title: 'Build Tools', items: ['npm/yarn/pnpm', 'Vite', 'Webpack'] },
          { title: 'Testing', items: ['Jest', 'Vue Test Utils', 'Cypress', 'Vitest'] },
          { title: 'Advanced Concepts', items: ['TypeScript', 'Nuxt.js', 'PWA', 'SSR'] }
        ]
      },
      angular: {
        name: 'Angular Development',
        description: 'Enterprise-ready framework with powerful features',
        steps: [
          { title: 'Fundamentals', items: ['HTML5', 'CSS3', 'TypeScript'] },
          { title: 'Angular Basics', items: ['Angular', 'Components', 'Services', 'Dependency Injection'] },
          { title: 'State Management', items: ['RxJS', 'NgRx', 'NGXS', 'Akita'] },
          { title: 'Styling', items: ['Sass/Less', 'Angular Material', 'PrimeNG', 'Bootstrap', 'Tailwind'] },
          { title: 'Build Tools', items: ['npm/yarn', 'Angular CLI', 'Nx'] },
          { title: 'Testing', items: ['Jasmine', 'Karma', 'Cypress', 'Playwright'] },
          { title: 'Advanced Concepts', items: ['PWA', 'Universal', 'Micro Frontends', 'Web Components'] }
        ]
      },
      svelte: {
        name: 'Svelte Development',
        description: 'Compile-time framework for building efficient web applications',
        steps: [
          { title: 'Fundamentals', items: ['HTML5', 'CSS3', 'JavaScript ES6+'] },
          { title: 'Svelte Basics', items: ['Svelte', 'Components', 'Reactivity', 'Stores'] },
          { title: 'State Management', items: ['Svelte Stores', 'Svelte Context'] },
          { title: 'Styling', items: ['CSS-in-JS', 'Tailwind CSS', 'Svelte Material UI', 'Carbon Components'] },
          { title: 'Build Tools', items: ['npm/yarn', 'Vite', 'SvelteKit'] },
          { title: 'Testing', items: ['Jest', 'Testing Library', 'Playwright'] },
          { title: 'Advanced Concepts', items: ['TypeScript', 'SvelteKit', 'PWA', 'SSR'] }
        ]
      },
      solidjs: {
        name: 'Solid.js Development',
        description: 'High-performance, reactive JavaScript library',
        steps: [
          { title: 'Fundamentals', items: ['HTML5', 'CSS3', 'JavaScript ES6+'] },
          { title: 'Solid Basics', items: ['Solid.js', 'Components', 'Signals', 'Effects'] },
          { title: 'State Management', items: ['Signals', 'Stores', 'Context'] },
          { title: 'Styling', items: ['CSS Modules', 'Tailwind CSS', 'Solid UI', 'Hope UI'] },
          { title: 'Build Tools', items: ['npm/yarn', 'Vite', 'SolidStart'] },
          { title: 'Testing', items: ['Jest', 'Testing Library', 'Vitest'] },
          { title: 'Advanced Concepts', items: ['TypeScript', 'SolidStart', 'SSR'] }
        ]
      }
    }
  },
  backend: {
    title: 'Backend Development',
    description: 'Choose your path in backend development',
    paths: {
      node: {
        name: 'Node.js Development',
        description: 'Server-side JavaScript development',
        steps: [
          { title: 'Fundamentals', items: ['JavaScript ES6+', 'Node.js', 'npm/yarn'] },
          { title: 'Web Framework', items: ['Express', 'Fastify', 'NestJS', 'Koa', 'Hapi'] },
          { title: 'Database', items: ['MongoDB', 'PostgreSQL', 'Redis', 'Prisma', 'TypeORM'] },
          { title: 'API Development', items: ['REST', 'GraphQL', 'WebSockets', 'gRPC', 'tRPC'] },
          { title: 'Testing', items: ['Jest', 'Mocha', 'Supertest', 'Cypress'] },
          { title: 'DevOps', items: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Monitoring'] }
        ]
      },
      python: {
        name: 'Python Development',
        description: 'Backend development with Python',
        steps: [
          { title: 'Fundamentals', items: ['Python', 'pip', 'virtualenv', 'Poetry'] },
          { title: 'Web Framework', items: ['Django', 'Flask', 'FastAPI', 'aiohttp', 'Pyramid'] },
          { title: 'Database', items: ['PostgreSQL', 'MongoDB', 'SQLAlchemy', 'Alembic', 'Redis'] },
          { title: 'API Development', items: ['REST', 'GraphQL', 'WebSockets', 'Pydantic'] },
          { title: 'Testing', items: ['pytest', 'unittest', 'Selenium', 'Locust'] },
          { title: 'DevOps', items: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Monitoring'] }
        ]
      },
      java: {
        name: 'Java Development',
        description: 'Enterprise backend development with Java',
        steps: [
          { title: 'Fundamentals', items: ['Java', 'Maven/Gradle', 'Spring Core'] },
          { title: 'Web Framework', items: ['Spring Boot', 'Spring MVC', 'Spring WebFlux'] },
          { title: 'Database', items: ['PostgreSQL', 'MongoDB', 'Hibernate', 'JPA', 'Redis'] },
          { title: 'API Development', items: ['REST', 'GraphQL', 'WebSockets', 'gRPC'] },
          { title: 'Testing', items: ['JUnit', 'Mockito', 'TestContainers'] },
          { title: 'DevOps', items: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Monitoring'] }
        ]
      },
      go: {
        name: 'Go Development',
        description: 'High-performance backend development with Go',
        steps: [
          { title: 'Fundamentals', items: ['Go', 'Go Modules', 'Goroutines'] },
          { title: 'Web Framework', items: ['Gin', 'Echo', 'Fiber', 'Chi'] },
          { title: 'Database', items: ['PostgreSQL', 'MongoDB', 'GORM', 'Redis'] },
          { title: 'API Development', items: ['REST', 'GraphQL', 'gRPC', 'WebSockets'] },
          { title: 'Testing', items: ['Go Testing', 'Testify', 'GoMock'] },
          { title: 'DevOps', items: ['Docker', 'Kubernetes', 'CI/CD', 'AWS', 'Monitoring'] }
        ]
      }
    }
  }
};

function Roadmaps() {
  const [selectedCategory, setSelectedCategory] = useState('webdev');
  const [selectedPath, setSelectedPath] = useState('react');
  const [selectedTech, setSelectedTech] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="roadmaps-container">
      <h1 className="roadmaps-title">Learning Roadmaps</h1>
      
      <div className="category-selector">
        {Object.entries(pathsData).map(([key, category]) => (
          <button
            key={key}
            className={`category-button ${selectedCategory === key ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategory(key);
              setSelectedPath(Object.keys(category.paths)[0]);
            }}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="path-selector">
        {Object.entries(pathsData[selectedCategory].paths).map(([key, path]) => (
          <button
            key={key}
            className={`path-button ${selectedPath === key ? 'active' : ''}`}
            onClick={() => setSelectedPath(key)}
          >
            {path.name}
          </button>
        ))}
      </div>

      <div className="roadmap-content">
        <h2 className="roadmap-title">{pathsData[selectedCategory].paths[selectedPath].name}</h2>
        <p className="roadmap-description">{pathsData[selectedCategory].paths[selectedPath].description}</p>
        
        <div className="roadmap-steps">
          {pathsData[selectedCategory].paths[selectedPath].steps.map((step, index) => (
            <div key={index} className="step-card">
              <h3 className="step-title">{step.title}</h3>
              <ul className="step-items">
                {step.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <button 
                      className={`tech-button ${techInfo[item] ? 'has-modal' : ''}`}
                      onClick={() => {
                        setSelectedTech(item);
                        setIsModalOpen(true);
                      }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && selectedTech && techInfo[selectedTech] && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>&times;</button>
            <h2 className="modal-title">{selectedTech}</h2>
            <p className="modal-description">{techInfo[selectedTech].description}</p>
            
            <h3>Key Features</h3>
            <ul className="modal-features">
              {techInfo[selectedTech].features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <h3>Learning Resources</h3>
            <div className="modal-resources">
              {techInfo[selectedTech].resources.map((resource, index) => (
                <a 
                  key={index} 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="resource-link"
                >
                  {resource.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Roadmaps;