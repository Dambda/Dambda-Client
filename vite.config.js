import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [
    react(),
    svgr({
      svgrOptions: {},
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
=======
  plugins: [react(), svgr(
    {
      svgrOptions : {

      }
  }
  )],
  resolve : {
    alias : [
      { find: "@", replacement: "/src" }
    ]
  },
})
>>>>>>> 24bafde60d876bbbc9125d2e520e2ab88bb803a2
