import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig(({command})=>{
//   const config = {
//     base: "/",
//     plugins: [react()],
//     server: {
//       port: 3000,
//     }
//   }
//   if (command !== 'serve') {
//     config.base = '/react-vite-gh-pages/'
//   }
//   return config
// })

export default defineConfig({
  plugins: [react()],
  base:"/ray-bank-app/"
})
