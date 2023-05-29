import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "sharmin lin",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '设计模式',
        collapsed: true,
        items: [
          { text: '策略模式', link: '/designPattern/strategy' }
        ],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sharminlin' }
    ]
  }
})
