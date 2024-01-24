import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: env.NODE_ENV === "production" ? "/tailwind-components" : "/",
    plugins: [react()],
    esbuild: {
      jsxFactory: "h",
      jsxFragment: "Fragment",
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      assetsInlineLimit: 8 * 1024,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          // 静态资源分类打包
          chunkFileNames: (chunkInfo) => {
            // 文件名方便debug
            const facadeModuleId = chunkInfo.facadeModuleId
              ? chunkInfo.facadeModuleId.split('/')
              : [];
            const fileName =
              facadeModuleId[facadeModuleId.length - 2] || '[name]';
            return `assets/js/${fileName}-[name]-[hash].js`;
          },
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
          manualChunks: {
            react: ['react', 'react-dom', 'react-router-dom']
          }
        }
      }
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    server: {
      port: 8000
    }
  };
});
