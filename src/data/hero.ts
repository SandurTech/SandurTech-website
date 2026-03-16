export interface HeroSlide {
  id: number;
  name: string;
  image: string;
  description: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    name: "Bulk Barcode Generator",
    image: "/images/bulk-barcode-generator/bulk-barcode-generator-light-mode.png",
    description: "High-performance barcode generation"
  },
  {
    id: 2,
    name: "Project Templates",
    image: "/images/project-templates/project-templates-readme.png",
    description: "Accelerate your development"
  },
  {
    id: 3,
    name: "Sand UI",
    image: "/images/SandUI/SandUI-github-social-preview.png",
    description: "Pure design elegance"
  }
];
