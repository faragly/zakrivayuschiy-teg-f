import { resolve } from 'path';
import { defineConfig } from 'vite';
import stylelint from 'vite-plugin-stylelint';

export default defineConfig({
  base: '/zakrivayuschiy-teg-f/',
  resolve: {
    alias: {
      '@fonts': resolve(__dirname, 'src/fonts'),
    },
  },
  plugins: [
    stylelint({
      fix: true,
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api'],
      },
    },
  },
});
