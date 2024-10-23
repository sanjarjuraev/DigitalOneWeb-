/** @format */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';
import { compression } from 'vite-plugin-compression2';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
    }),
    compression(), 
    visualizer(), 
  ],
  build: {
    target: 'esnext', 
    outDir: 'dist',
    sourcemap: true, 
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Code splitting for vendor libraries
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  server: {
    open: true, 
    hmr: {
      overlay: false, 
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], 
  },
});
