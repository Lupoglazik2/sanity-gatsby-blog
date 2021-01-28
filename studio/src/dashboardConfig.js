export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '6012a047ebf8ffbf4ccb2233',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-wnowjd4e',
                  apiId: 'd42eda7d-969e-4d03-b48e-d342ebf96bd8'
                },
                {
                  buildHookId: '6012a047ebf8ffc4edcb21a9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-9b6wf18n',
                  apiId: '746d52e4-8f25-467b-b8a5-ea7511abcbba'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Lupoglazik2/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-9b6wf18n.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
