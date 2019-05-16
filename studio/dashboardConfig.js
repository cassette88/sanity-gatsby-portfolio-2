export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5cdd99ff6dc69a3c3991f93a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-2-studio-2uwdtm1u',
                  apiId: '65783af0-4e60-4659-b723-ee124f5051e2'
                },
                {
                  buildHookId: '5cdd99fe14feadf9bf3ea64c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-2-web-p6jjkra2',
                  apiId: '3dedfd4b-e440-4d4d-ae55-dcb0fa451e28'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cassette88/sanity-gatsby-portfolio-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-2-web-p6jjkra2.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
