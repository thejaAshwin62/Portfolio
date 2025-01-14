import React from "react";
import { IconCloud } from "./IconCloud";

// Updated slugs array with removed logos
const slugs = [
  "javascript",
  "python",
  "java",
  "react",
  "html5",
  "css3",
  "express",
  "prisma",
  "amazonwebservices",
  "coursera",
  "shadcnui",
  "mui",
  "notion",
  "vite",
  "nodedotjs",
  "postgresql",
  "vercel",
  "daisyui",
  "nodemon",
  "eclipseide",
  "styledcomponents",
  "kalilinux",
  "tailwindcss",
  "stripe",
  "namecheap",
  "docker",
  "nextdotjs",
  "git",
  "github",
  "gitlab",
  "intellijidea",
  "kubernetes",
  "discord",
  "1password",
  "openai",
  "anydesk",
  "clerk",
  "claude",
  "cloudinary",
  "figma",
  "unity",
  "blender",
  "mongodb",
  "render",
  "netlify",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative flex h-[500px] w-full max-w-4xl items-center justify-center overflow-hidden bg-background sm:h-[700px]">
      <div className="scale-[1.5] transform">
        <IconCloud images={images} />
      </div>
    </div>
  );
}
