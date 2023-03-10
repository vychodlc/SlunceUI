import { fileURLToPath, URL } from "node:url";
import {resolve} from 'path'
import path from 'path'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { svgBuilder } from './src/plugins/svgBuilder';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
      vue(), 
      dts(),
      svgBuilder('./packages/assets/svgs/')
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      lib: {
        entry: resolve(__dirname, 'packages/index.ts'),
        name: 'slunce-ui',
        fileName: 'slunce-ui'
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          },
        }
      }
    }
})
