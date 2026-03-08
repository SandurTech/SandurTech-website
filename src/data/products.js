export const products = [
  {
    id: 1,
    name: "Bulk Barcode Generator",
    category: "Website/WebApp",
    description: "Tailored for large-scale barcoding operations. Generates thousands of barcodes in seconds with customizable formats.",
    image: "/images/bulk-barcode-generator/bulk-barcode-generator-light-mode.png",
    tags: ["React", "High Performance"],
    links: { 
      demo: "https://bulk-barcode-generator.vercel.app/", 
      code: "https://github.com/amogharajsandur/bulk-barcode-generator" 
    },
    featured: true,
    status: "Released"
  },
  {
    id: 2,
    name: "Project Templates",
    category: "Misc/Others",
    description: "A curated collection of production-ready project templates to accelerate development lifecycle for modern web applications.",
    image: "/images/project-templates/project-templates-readme.png",
    tags: ["Boilerplate", "Dev Tools"],
    links: { 
      code: "https://github.com/amogharajsandur/project-templates/" 
    },
    featured: true,
    status: "Released"
  },
  {
    id: 3,
    name: "Sand UI",
    category: "Misc/Others",
    description: "A comprehensive UI/UX Design System for SandurTech.",
    image: "/images/SandUI/SandUI-github-social-preview.png",
    tags: ["Design System", "UI/UX"],
    links: { 
      demo: "https://sandurtech.github.io/SandUI/",
      code: "https://github.com/amogharajsandur/SandUI"
    },
    featured: true,
    status: "In-Development"
  },
];

export const categories = [
  "All", 
  "Website/WebApp", 
  "Mobile App", 
  "Browser Extensions", 
  "Misc/Others"
];