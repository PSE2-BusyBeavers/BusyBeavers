import { defineConfig } from 'vite';
import alias from '@rollup/plugin-alias';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import WindiCSS from 'vite-plugin-windicss';

const projectRootDir = resolve(__dirname);
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    proxy: {
      '/v1': 'http://localhost:8124/',
    },
    hmr: {
      clientPort: process.env.GITPOD_HOST ? 443 : undefined,
    },
  },
  plugins: [
    react(),
    WindiCSS(),
    alias({
      entries: [
        {
          find: '@src',
          replacement: resolve(projectRootDir, 'src'),
        },
      ],
    }),
  ],
});
