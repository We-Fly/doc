import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "We-Fly",
      description: "A UAV hobbyist organization",
    },
    "/zh/": {
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
          placeholder: "Search..",
        },
      },
    })
  ]
});
