const fs = require('fs')
const path = require('path')

module.exports = {
  base: '/docs/',
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
          {
            text: 'System Admin',
            items: [
              { text: 'Ansible', link: '/ansible/' },
              { text: 'SaltStack', link: '/saltstack/' },
            ]
          },
          {
            text: 'Container',
            items: [
              { text: 'Docker', link: '/docker/' },
              { text: 'Kubernets', link: '/kubernetes/' },
            ]
          },
          {
            text: 'CI/CD',
            items: [
              { text: 'Jenkins', link: '/jenkins/' },
              { text: 'GitLab CI', link: '/gitlab-ci/' },
            ]
          },
          {
            text: 'Monitor',
            items: [
              { text: 'Zabbix', link: '/zabbix/' },
              { text: 'Prometheus', link: '/prometheus/' },
              { text: 'Grafana', link: '/grafana/' },
            ]
          },
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
    .filter(filename => filename.match(/^[a-z-]+$/))

  for (const group of groups) {
    var subSidebarObj = {}
    const childrens = fs
      .readdirSync(path.resolve(__dirname, '..', group))
      .filter(name => name.match(/\.md$/) && (name != 'README.md'))
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