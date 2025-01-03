import { defineConfig } from 'vite';  
import react from '@vitejs/plugin-react';  

export default defineConfig({  
  plugins: [react()],  
  server: {  
    proxy: {  
      '/api': {  
        target: 'https://be-c0pw.onrender.com', // URL của API  
        changeOrigin: true,  
        rewrite: (path) => path.replace(/^\/api/, '/api/v1'), // Nếu cần chỉnh sửa đường dẫn  
      },  
    },  
  },  
});
