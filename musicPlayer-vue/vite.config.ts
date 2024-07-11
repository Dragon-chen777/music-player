import { createVuePlugin } from 'vite-plugin-vue2';

export default {
  plugins: [createVuePlugin()],
  server: {
    port: 3000
  }
};
