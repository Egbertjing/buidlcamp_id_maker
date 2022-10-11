import { fileURLToPath, URL } from 'node:url'
import path from "node:path";
import fs from "node:fs";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3610,
    host: '0.0.0.0',
    // https: true,
    // https: {
    //   key: fs.readFileSync('./__web3edu_xyz.p7b'),
    //   cert: fs.readFileSync('./__web3edu_xyz.crt')
    // },
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
