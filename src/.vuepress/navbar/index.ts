import { navbar } from "vuepress-theme-hope";

export const Navbar = navbar([
  "/",
  {
    text: "指南",
    icon: "creative",
    prefix: "/guide/",
    children: [
      {
        text: "飞控",
        icon: "creative",
        prefix: "flight/",
        children: ["guide-flight-control-computer", { text: "...", icon: "more", link: "" }],
      },
      {
        text: "视觉",
        icon: "config",
        prefix: "opencv/",
        children: ["intro-opencv", { text: "...", icon: "more", link: "" }],
      },
    ],
  },
]);
