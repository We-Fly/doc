import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";
import { photoSwipePlugin } from "vuepress-plugin-photo-swipe";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "开飞机文档",
      description: "Just for Fun",
    },
  },

  theme,

  shouldPrefetch: false,

  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索..",
        },
      },
    }),
    photoSwipePlugin({
      // your options
    }),
  ]
});
