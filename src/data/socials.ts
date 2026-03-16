export interface Social {
  name: string;
  platform: string;
  url: string;
  color: string;
}

export interface CompanyLinks {
  github: string;
  googleBusiness: string;
  email: string;
}

export const socials: Social[] = [
  { name: 'GitHub', platform: 'github', url: 'https://github.com/SandurTech', color: '#181717' },
  { name: 'LinkedIn', platform: 'linkedin', url: 'https://www.linkedin.com/in/amogharajsandur/', color: '#0077b5' },
  { name: 'Instagram', platform: 'instagram', url: 'https://www.instagram.com/amogharajsandur/', color: '#E4405F' },
  { name: 'YouTube', platform: 'youtube', url: 'https://www.youtube.com/@amogharajsandur', color: '#FF0000' },
  { name: 'Threads', platform: 'threads', url: 'https://www.threads.net/@amogharajsandur', color: '#000000' },
  { name: 'X', platform: 'x', url: 'https://x.com/amogharajsandur', color: '#14171A' },
  { name: 'Portfolio', platform: 'globe', url: 'https://amogharajsandur.vercel.app/', color: '#FF9800' },
];

export const companyLinks: CompanyLinks = {
  github: "https://github.com/SandurTech",
  googleBusiness: "https://g.page/r/Cfu4mEsl3obZEAI/review",
  email: "amogharaj.sandur@yahoo.com",
};