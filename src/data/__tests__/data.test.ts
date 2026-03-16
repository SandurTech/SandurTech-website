import { describe, it, expect } from 'vitest';
import { companyInfo } from '../company';
import { heroSlides } from '../hero';
import { products, categories } from '../products';
import { socials, companyLinks } from '../socials';

describe('Project Data Structures', () => {
  it('companyInfo should have the expected structure', () => {
    expect(companyInfo).toHaveProperty('name');
    expect(companyInfo).toHaveProperty('fullName');
    expect(companyInfo).toHaveProperty('founded');
    expect(companyInfo).toHaveProperty('founder');
    expect(companyInfo.name).toBe('SandurTech');
  });

  it('heroSlides should be an array with valid slides', () => {
    expect(Array.isArray(heroSlides)).toBe(true);
    expect(heroSlides.length).toBeGreaterThan(0);
    heroSlides.forEach(slide => {
      expect(slide).toHaveProperty('id');
      expect(slide).toHaveProperty('name');
      expect(slide).toHaveProperty('image');
    });
  });

  it('products should have featured items and valid links', () => {
    expect(Array.isArray(products)).toBe(true);
    expect(products.length).toBeGreaterThan(0);
    const featured = products.filter(p => p.featured);
    expect(featured.length).toBeGreaterThan(0);
    
    products.forEach(product => {
      expect(product).toHaveProperty('links');
      expect(typeof product.links).toBe('object');
    });
  });

  it('categories should include "All"', () => {
    expect(categories).toContain('All');
  });

  it('socials and companyLinks should be correctly defined', () => {
    expect(socials.length).toBeGreaterThan(0);
    expect(companyLinks).toHaveProperty('email');
    expect(companyLinks.email).toContain('@');
  });
});
