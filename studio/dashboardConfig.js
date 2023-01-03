export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '63b466c1b73b3b176e6b8df7',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-5j9qjf3z',
                  apiId: '2c87c49e-a937-4319-a7d0-d62e035bfd84'
                },
                {
                  buildHookId: '63b466c1fa98b71ce453a79f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-vpcodtha',
                  apiId: '5e119a28-cb56-4eb7-8642-5aa033f85188'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stephenjgray/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-vpcodtha.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
