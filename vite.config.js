import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: new URL('./index.html', import.meta.url).pathname,
        home: new URL('./src/pages/home/index.html', import.meta.url).pathname,
        catalog: new URL('./src/pages/catalog/index.html', import.meta.url).pathname,
        library: new URL('./src/pages/library/index.html', import.meta.url).pathname,
      },
      output: {
        entryFileNames: 'js/[name].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'css/[name][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})
