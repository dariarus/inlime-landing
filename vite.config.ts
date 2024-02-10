import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import vsharp from 'vite-plugin-vsharp';

export default defineConfig({
  plugins: [
    react({
      tsDecorators: true
    }),
    vsharp(),
  ],
  base: "/",
})
