import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'https://TadeoParmigiani.github.io/mi-portafolio',
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@purecomponents': path.resolve(__dirname, 'src/purecomponents'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@sections': path.resolve(__dirname, 'src/sections'),
      '@files': path.resolve(__dirname, 'src/files'),
    },
  },
})
