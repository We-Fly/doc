import { sidebar } from "vuepress-theme-hope";

export const Sidebar = sidebar({
  "/": [
    "",
    {
      text: "指南",
      icon: "note",
      prefix: "guide/",
      children: "structure",
    },
  ],
});