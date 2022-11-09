import { navbar } from "vuepress-theme-hope";

export const Navbar = navbar([
  "/",
  {
    text: "指南",
    icon: "note",
    prefix: "/guide/",
    children: [
    {
      text: "快速上手",
      icon: "config",
      link: "",
    },
    {
      text: "前置知识",
      icon: "config",
      link: "preknowledge",
    },
    { 
      text: "...", 
      icon: "more", 
      link: "" 
    }],      
  },
  {
    text: "飞控",
    icon: "config",
    prefix: "/flight/",
    children: ["", { text: "...", icon: "more", link: "" }],
  },
  {
    text: "视觉",
    icon: "creative",
    prefix: "/opencv/",
    children: ["", { text: "...", icon: "more", link: "" }],
  }
]);
