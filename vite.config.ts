import {resolve} from 'path'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), dts()],
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
          }
        }
      }
    }
})
