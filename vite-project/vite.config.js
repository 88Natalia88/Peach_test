import { defineConfig } from 'vite';
import viteImagemin from 'vite-plugin-imagemin';
import imageminWebp from 'imagemin-webp';


export default defineConfig({
  base: '/Peach_test/',
    plugins: [
      viteImagemin({
        plugins: [
          imageminWebp({
            include: ['public/images/**/*.{jpg,png}'],
            exclude: [],
            quality: 75,
            outputPath: 'public/images', 
          }),
        ],
        onEnd: () => {
          console.log('All images converted to WebP');
        },
      }),
    ],
  });