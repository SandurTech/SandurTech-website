import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import { products } from '../../data/products';
import { heroSlides } from '../../data/hero';

export default function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 2);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroCarousel}>
          {heroSlides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          ))}
          <div className={styles.overlay} />
        </div>
        
        <div className={styles.heroGlow}></div>
        <div className="container">
          <div className={styles.heroInner}>
            <h1>
              Accessible tools <span>for humans</span>.
            </h1>
            <p>
              Namaste, I’m Amogha. Through SandurTech, I build accessible microservices designed to solve specific problems—keeping your workflow fast, simple, and remarkably clean.
            </p>
            <div className={styles.heroActions}>
              <Link to="/products" className={styles.primaryBtn}>
                Browse Tools
                <span className="material-symbols-rounded">arrow_forward</span>
              </Link>
              <Link to="/about" className={styles.secondaryBtn}>
                About SandurTech
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured" className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.subTitle}>Selected Works</div>
            <h2>Featured Products & Services</h2>
          </div>
          
          <div className={styles.projectsGrid}>
            {featuredProducts.map(product => (
              <div key={product.id} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    width="400"
                    height="250"
                    loading="lazy" 
                    draggable="false" 
                  />
                </div>
                <div className={styles.projectContent}>
                  <div className={styles.projectTags}>
                    <span>{product.category}</span>
                  </div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <Link to="/products" className={styles.projectLink}>
                    View Details <span className="material-symbols-rounded">arrow_right_alt</span>
                  </Link>
                </div>
              </div>
            ))}

            {/* View More Card */}
            <div className={`${styles.projectCard} ${styles.viewMoreCard}`}>
              <div className={styles.viewMoreInner}>
                <div className={styles.viewMoreIcon}>
                    <span className="material-symbols-rounded">auto_awesome</span>
                </div>
                <h3>Want to see more?</h3>
                <p>From browser extensions to mobile experiments, check out the full workbench.</p>
                <Link to="/products" className={styles.primaryBtn} style={{ width: '100%', justifyContent: 'center' }}>
                  See All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
