// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { remarkHeadingId } from 'remark-custom-heading-id';

// https://astro.build/config
export default defineConfig({
  site: 'https://docs.b-cubed-eu',
  integrations: [
    starlight({
      title: 'B-Cubed documentation',
      logo: {
        src: './src/assets/b3-logo.svg',
      },
      customCss: [
        './src/styles/custom.css',
      ],
      social: {
        github: 'https://github.com/b-cubed-eu/documentation/',
      },
      editLink: {
        baseUrl: 'https://github.com/b-cubed-eu/documentation/edit/main/',
      },
      sidebar: [
        {
          label: 'Guides',
          autogenerate: { directory: 'guides' },
        },
        {
          label: 'Software',
          // autogenerate: { directory: 'software' },
          items: [
            'software/gbif-api',
            'software/gcube'
          ],
          collapsed: true,
        },
        {
          label: 'Tutorials',
          autogenerate: { directory: 'tutorials' },
          collapsed: true,
        },
        // {
        //   label: 'Training',
        //   autogenerate: { directory: 'training' },
        //   collapsed: true,
        // },
        // {
        //   label: 'FAQ',
        //   autogenerate: { directory: 'faq' },
        //   collapsed: true,
        // },
      ],
    }),
  ],
  markdown: {
    remarkPlugins: [remarkHeadingId]
  }
});
