import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import { heroSlides } from '../../data/hero';
import { products } from '../../data/products';
import { companyInfo } from '../../data/company';
import SEO from '../../components/SEO';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const featuredProducts = products.filter(p => p.featured);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.main}>
      <SEO 
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://sandurtech.vercel.app/#organization",
            "name": "SandurTech",
            "url": "https://sandurtech.vercel.app/",
            "logo": "https://sandurtech.vercel.app/images/SandurTech-Logo-PNG.png"
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://sandurtech.vercel.app/#website",
            "url": "https://sandurtech.vercel.app/",
            "name": "SandurTech",
            "publisher": { "@id": "https://sandurtech.vercel.app/#organization" }
          }
        ]}
      />
      {/* Hero Section */}
      <section className={styles.hero} aria-label="Hero">
        <div className={styles.heroCarousel} role="region" aria-roledescription="carousel" aria-label="Background images">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
              aria-hidden={index !== currentSlide}
            />
          ))}
          <div className={styles.overlay} />
        </div>
        
        <div className={styles.heroGlow} />

        <div className={`container ${styles.heroInner}`}>
          <div className={styles.personalBadge}>
            Built by {companyInfo.founder}
          </div>
          <h1 id="hero-title">
            Handcrafted niche products <br /> 
            <span>for humans.</span>
          </h1>
          <p>
            {companyInfo.description} From high-performance developer tools to elegant design systems.
          </p>
          <div className={styles.heroActions}>
            <Link to="/products" className={styles.primaryBtn}>
              Explore Products
              <span className="material-symbols-rounded">arrow_forward</span>
            </Link>
            <Link to="/about" className={styles.secondaryBtn}>
              About SandurTech
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.subTitle}>Featured Work</span>
            <h2>Digital Excellence</h2>
          </div>

          <div className={styles.projectsGrid}>
            {featuredProducts.map((product) => (
              <div key={product.id} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <img src={product.image} alt={product.name} loading="lazy" />
                </div>
                <div className={styles.projectContent}>
                  <div className={styles.projectTags}>
                    <span>{product.category}</span>
                    <span>{product.status}</span>
                  </div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <Link to="/products" className={styles.projectLink}>
                    View Details
                    <span className="material-symbols-rounded">east</span>
                  </Link>
                </div>
              </div>
            ))}

            <Link to="/products" className={`${styles.projectCard} ${styles.viewMoreCard}`}>
              <div className={styles.viewMoreInner}>
                <div className={styles.viewMoreIcon}>
                  <span className="material-symbols-rounded">category</span>
                </div>
                <h3>Explore All</h3>
                <p>View our full library of tools, templates, and services.</p>
                <div className={styles.projectLink}>
                  Open Catalog
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick About */}
      <section className={styles.section} style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ 
            backgroundColor: 'var(--theme-surface)', 
            padding: '4rem', 
            borderRadius: '32px', 
            border: '1px solid var(--theme-border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '4rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ maxWidth: '500px' }}>
              <h2 style={{ fontSize: '2.4rem', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-1px' }}>
                Simple tools. <br />
                Remarkable <span>impact.</span>
              </h2>
              <p style={{ color: 'var(--theme-text-muted)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2.5rem', fontWeight: 500 }}>
                {companyInfo.mission}
              </p>
              <Link to="/about" className={styles.projectLink} style={{ fontSize: '1.1rem' }}>
                The Story Behind SandurTech
                <span className="material-symbols-rounded">arrow_right_alt</span>
              </Link>
            </div>

            <div className={styles.aboutStats}>
              <div className={styles.stat}>
                <h4>3+</h4>
                <span>Live Products</span>
              </div>
              <div className={styles.stat}>
                <h4>10k+</h4>
                <span>Happy Users</span>
              </div>
              <div className={styles.stat}>
                <h4>100%</h4>
                <span>Independent</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
