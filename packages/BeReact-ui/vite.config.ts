import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react() ,
    dts({ insertTypesEntry: true})
  ],
  build: {
    lib: {
      entry: {
        'Button': path.resolve(__dirname, 'src/Button'),
        'Input': path.resolve(__dirname, 'src/Input'),
        'Text': path.resolve(__dirname, 'src/Text'),
        'Card': path.resolve(__dirname, 'src/Card'),
        '': path.resolve(__dirname, 'src/index.ts')
      },
      name: 'bereact-ui',
      formats: [ 'es', 'cjs' ],
      fileName: (format,entryName)=> `${entryName ? entryName+'/':''}bereact-ui.${format}.js`,
    },
    rollupOptions:{
        external: ['react', 'react-dom'],
      output: {
          globals:{
            react: 'React',
            'react-dom': 'ReactDOM',
          }
      }
    }
  }
});

