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
    {
      text: "飞控",
      icon: "config",
      prefix: "flight/",
      children: "structure",
    },
    {
      text: "视觉",
      icon: "creative",
      prefix: "opencv/",
      children: "structure",
    }
  ],
});