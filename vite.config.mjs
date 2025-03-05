import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
import autoprefixer from 'autoprefixer'
import dotenv from 'dotenv'

export default defineConfig(({ mode }) => {
  // Load environment variables from .env file
  const env = loadEnv(mode, process.cwd(), '')

  dotenv.config() // Ensure dotenv is loaded

  return {
    plugins: [vue()],
    base: './',
    css: {
      postcss: {
        plugins: [
          autoprefixer({}), // add options if needed
        ],
      },
    },
    resolve: {
      alias: [
        {
          find: /^~(.*)$/,
          replacement: '$1',
        },
        {
          find: '@/',
          replacement: `${path.resolve(__dirname, 'src')}/`,
        },
        {
          find: '@',
          replacement: path.resolve(__dirname, '/src'),
        },
      ],
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.scss'],
    },
    server: {
      port: 3000,
      proxy: {},
    },
    define: {
      'process.env': env, // Ensure environment variables are accessible
    },
  }
})
