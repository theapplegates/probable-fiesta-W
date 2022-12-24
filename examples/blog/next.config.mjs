import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.jsx',
  staticImage: true,
  defaultShowCopyCode: true,
  readingTime: true
})

export default withNextra({
  reactStrictMode: true,
    images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['nextra-blog.paulapplegate.com'],
  },
})
