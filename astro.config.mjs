import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import vue from '@astrojs/vue';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';
import node from '@astrojs/node';
import InjectJSCSS from './src/_intergration/InjectJSCSS';

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://127.0.0.1',
  integrations: [mdx(), sitemap(), vue(), image({
    serviceEntryPoint: '@astrojs/image/squoosh'
  }), InjectJSCSS()],
  vite: {
    resolve: {
      alias: [{
        find: '@/',
        replacement: 'src/'
      }]
    },
    server: {
      host: true
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      langs: [],
      wrap: true
    }
  },
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
});