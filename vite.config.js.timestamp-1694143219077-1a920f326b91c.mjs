// vite.config.js
import { defineConfig } from "file:///C:/Users/Barret/Desktop/Albee/%E9%81%8A%E8%89%87/QueenLong_git/node_modules/vite/dist/node/index.js";
import { ViteEjsPlugin } from "file:///C:/Users/Barret/Desktop/Albee/%E9%81%8A%E8%89%87/QueenLong_git/node_modules/vite-plugin-ejs/index.js";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { glob } from "file:///C:/Users/Barret/Desktop/Albee/%E9%81%8A%E8%89%87/QueenLong_git/node_modules/glob/dist/mjs/index.js";
import liveReload from "file:///C:/Users/Barret/Desktop/Albee/%E9%81%8A%E8%89%87/QueenLong_git/node_modules/vite-plugin-live-reload/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///C:/Users/Barret/Desktop/Albee/%E9%81%8A%E8%89%87/QueenLong_git/vite.config.js";
function moveOutputPlugin() {
  return {
    name: "move-output",
    enforce: "post",
    apply: "build",
    async generateBundle(options, bundle) {
      for (const fileName in bundle) {
        if (fileName.startsWith("pages/")) {
          const newFileName = fileName.slice("pages/".length);
          bundle[fileName].fileName = newFileName;
        }
      }
    }
  };
}
var vite_config_default = defineConfig({
  base: "/Queen-Long/",
  plugins: [
    liveReload(["./layout/**/*.ejs", "./pages/**/*.ejs", "./pages/**/*.html"]),
    ViteEjsPlugin(),
    moveOutputPlugin()
  ],
  server: {
    open: "pages/index.html"
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        glob.sync("pages/**/*.html").map((file) => [
          path.relative("pages", file.slice(0, file.length - path.extname(file).length)),
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ])
      )
    },
    outDir: "dist"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxCYXJyZXRcXFxcRGVza3RvcFxcXFxBbGJlZVxcXFxcdTkwNEFcdTgyNDdcXFxcUXVlZW5Mb25nX2dpdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQmFycmV0XFxcXERlc2t0b3BcXFxcQWxiZWVcXFxcXHU5MDRBXHU4MjQ3XFxcXFF1ZWVuTG9uZ19naXRcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0JhcnJldC9EZXNrdG9wL0FsYmVlLyVFOSU4MSU4QSVFOCU4OSU4Ny9RdWVlbkxvbmdfZ2l0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB7IFZpdGVFanNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1lanMnO1xyXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnO1xyXG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xyXG5pbXBvcnQgeyBnbG9iIH0gZnJvbSAnZ2xvYic7XHJcblxyXG5pbXBvcnQgbGl2ZVJlbG9hZCBmcm9tICd2aXRlLXBsdWdpbi1saXZlLXJlbG9hZCc7XHJcblxyXG5mdW5jdGlvbiBtb3ZlT3V0cHV0UGx1Z2luKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBuYW1lOiAnbW92ZS1vdXRwdXQnLFxyXG4gICAgZW5mb3JjZTogJ3Bvc3QnLFxyXG4gICAgYXBwbHk6ICdidWlsZCcsXHJcbiAgICBhc3luYyBnZW5lcmF0ZUJ1bmRsZShvcHRpb25zLCBidW5kbGUpIHtcclxuICAgICAgZm9yIChjb25zdCBmaWxlTmFtZSBpbiBidW5kbGUpIHtcclxuICAgICAgICBpZiAoZmlsZU5hbWUuc3RhcnRzV2l0aCgncGFnZXMvJykpIHtcclxuICAgICAgICAgIGNvbnN0IG5ld0ZpbGVOYW1lID0gZmlsZU5hbWUuc2xpY2UoJ3BhZ2VzLycubGVuZ3RoKTtcclxuICAgICAgICAgIGJ1bmRsZVtmaWxlTmFtZV0uZmlsZU5hbWUgPSBuZXdGaWxlTmFtZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuXHJcbiAgYmFzZTogJy9RdWVlbi1Mb25nLycsXHJcbiAgcGx1Z2luczogW1xyXG4gICAgbGl2ZVJlbG9hZChbJy4vbGF5b3V0LyoqLyouZWpzJywgJy4vcGFnZXMvKiovKi5lanMnLCAnLi9wYWdlcy8qKi8qLmh0bWwnXSksXHJcbiAgICBWaXRlRWpzUGx1Z2luKCksXHJcbiAgICBtb3ZlT3V0cHV0UGx1Z2luKCksXHJcbiAgXSxcclxuICBzZXJ2ZXI6IHtcclxuICAgIG9wZW46ICdwYWdlcy9pbmRleC5odG1sJyxcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGlucHV0OiBPYmplY3QuZnJvbUVudHJpZXMoXHJcbiAgICAgICAgZ2xvYlxyXG4gICAgICAgICAgLnN5bmMoJ3BhZ2VzLyoqLyouaHRtbCcpXHJcbiAgICAgICAgICAubWFwKChmaWxlKSA9PiBbXHJcbiAgICAgICAgICAgIHBhdGgucmVsYXRpdmUoJ3BhZ2VzJywgZmlsZS5zbGljZSgwLCBmaWxlLmxlbmd0aCAtIHBhdGguZXh0bmFtZShmaWxlKS5sZW5ndGgpKSxcclxuICAgICAgICAgICAgZmlsZVVSTFRvUGF0aChuZXcgVVJMKGZpbGUsIGltcG9ydC5tZXRhLnVybCkpLFxyXG4gICAgICAgICAgXSlcclxuICAgICAgKSxcclxuICAgIH0sXHJcbiAgICBvdXREaXI6ICdkaXN0JyxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwVixTQUFTLG9CQUFvQjtBQUN2WCxTQUFTLHFCQUFxQjtBQUM5QixTQUFTLHFCQUFxQjtBQUM5QixPQUFPLFVBQVU7QUFDakIsU0FBUyxZQUFZO0FBRXJCLE9BQU8sZ0JBQWdCO0FBTjBMLElBQU0sMkNBQTJDO0FBUWxRLFNBQVMsbUJBQW1CO0FBQzFCLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJQUNQLE1BQU0sZUFBZSxTQUFTLFFBQVE7QUFDcEMsaUJBQVcsWUFBWSxRQUFRO0FBQzdCLFlBQUksU0FBUyxXQUFXLFFBQVEsR0FBRztBQUNqQyxnQkFBTSxjQUFjLFNBQVMsTUFBTSxTQUFTLE1BQU07QUFDbEQsaUJBQU8sUUFBUSxFQUFFLFdBQVc7QUFBQSxRQUM5QjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBRUEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFFMUIsTUFBTTtBQUFBLEVBQ04sU0FBUztBQUFBLElBQ1AsV0FBVyxDQUFDLHFCQUFxQixvQkFBb0IsbUJBQW1CLENBQUM7QUFBQSxJQUN6RSxjQUFjO0FBQUEsSUFDZCxpQkFBaUI7QUFBQSxFQUNuQjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLE9BQU8sT0FBTztBQUFBLFFBQ1osS0FDRyxLQUFLLGlCQUFpQixFQUN0QixJQUFJLENBQUMsU0FBUztBQUFBLFVBQ2IsS0FBSyxTQUFTLFNBQVMsS0FBSyxNQUFNLEdBQUcsS0FBSyxTQUFTLEtBQUssUUFBUSxJQUFJLEVBQUUsTUFBTSxDQUFDO0FBQUEsVUFDN0UsY0FBYyxJQUFJLElBQUksTUFBTSx3Q0FBZSxDQUFDO0FBQUEsUUFDOUMsQ0FBQztBQUFBLE1BQ0w7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsRUFDVjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
