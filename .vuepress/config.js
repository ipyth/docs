module.exports = {
  base: '/docs/',
  title: 'Docs',
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      {
        text: 'Develop',
        items: [
          { text: 'Python', link: '/python/' },
          { text: 'Golang', link: '/golang/' },
        ]
      },
      {
        text: 'DevOps',
        items: [
          { text: 'Kubernets', link: '/kubernetes/' },
          { text: 'Docker', link: '/docker/' },
          { text: 'Ansible', link: '/ansible/' },
        ]
      },
    ]
  }
}