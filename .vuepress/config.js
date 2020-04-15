const fs = require('fs')
const path = require('path')

module.exports = {
  // base: '/docs/',
  title: 'Docs',
  themeConfig: {
    logo: '/assets/img/logo.png',
    repo: 'luohu1/docs',
    lastUpdated: 'Last Updated',
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
    ],
    sidebar: getSidebar(),
  }
}

function getSidebar() {
  var sidebarObj = {}
  const groups = fs
    .readdirSync(path.resolve(__dirname, '..'))
    .filter(filename => filename.match(/^[a-z]+$/))

  for (const group of groups) {
    var subSidebarObj = {}
    const childrens = fs
      .readdirSync(path.resolve(__dirname, '..', group))
      .filter(name => name != 'README.md')
      .map(name => name.slice(0, -3))
    subSidebarObj['/' + group + '/'] = [
      {
        title: group,
        collapsable: false,
        children: [''].concat(childrens)
      }
    ]
    Object.assign(sidebarObj, subSidebarObj)
  }
  return sidebarObj
}