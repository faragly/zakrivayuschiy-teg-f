import { defineConfig } from 'vite';
import stylelint from 'vite-plugin-stylelint';

export default defineConfig({
  base: '/zakrivayuschiy-teg-f/',
  plugins: [
    stylelint({
      fix: true,
    })
  ],
  css: {
    preprocessorOptions: {
        scss: {
            silenceDeprecations: ['legacy-js-api'],
        },
    },
  },
})