import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/api":"http://localhost:3000"  //this will get appended before /api on every request
      //the proxy will also make it look like the request is coming from localhost:3000 and not 5173 etc
      //(instead of using cors in backend)   
    }
  }
})
