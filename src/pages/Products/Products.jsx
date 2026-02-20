import { useState } from 'react';
import styles from './Products.module.scss';
import mainStyles from '../Home/Home.module.scss';
import { products, categories } from '../../data/products';

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={styles.productsPage}>
      <section className={styles.hero}>
        <div className="container">
          <h1>Products & <span>Services</span></h1>
          <p>Explore our full catalogue of niche tools and microservices built for everyone.</p>
        </div>
      </section>

      <section className={styles.listingSection}>
        <div className="container">
          <div className={styles.controlsRow}>
            <div className={styles.searchContainer}>
              <span className="material-symbols-rounded">search</span>
              <input 
                type="text" 
                placeholder="Find a product..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className={styles.dropdownContainer}>
              <button 
                className={styles.dropdownToggle}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                aria-haspopup="listbox"
                aria-expanded={isDropdownOpen}
              >
                <span>{selectedCategory}</span>
                <span className="material-symbols-rounded">
                  {isDropdownOpen ? 'expand_less' : 'expand_more'}
                </span>
              </button>
              
              {isDropdownOpen && (
                <div className={styles.dropdownMenu} role="listbox">
                  {categories.map(cat => (
                    <button 
                      key={cat}
                      className={`${styles.dropdownItem} ${selectedCategory === cat ? styles.active : ''}`}
                      role="option"
                      aria-selected={selectedCategory === cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className={mainStyles.projectsGrid}>
            {filteredProducts.map(product => (
              <div key={product.id} className={mainStyles.projectCard}>
                <div className={mainStyles.projectImage}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    width="400" 
                    height="250" 
                    loading="lazy" 
                    draggable="false" 
                  />
                </div>
                <div className={mainStyles.projectContent}>
                  <div className={mainStyles.projectTags}>
                    <span>{product.category}</span>
                  </div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                    {product.links.demo && (
                      <a href={product.links.demo} target="_blank" rel="noopener noreferrer" className={mainStyles.projectLink}>
                        Live Demo <span className="material-symbols-rounded">open_in_new</span>
                      </a>
                    )}
                    <a href={product.links.code} target="_blank" rel="noopener noreferrer" className={mainStyles.projectLink}>
                      Source <span className="material-symbols-rounded">code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredProducts.length === 0 && (
              <div className={styles.noResults}>
                <div className={styles.optimisticIcon}>
                  <span className="material-symbols-rounded">construction</span>
                </div>
                <h3>We're still building...</h3>
                <p>We haven't launched anything in this category yet, but we're working on some exciting new tools! Check back soon.</p>
                <button 
                  className={mainStyles.secondaryBtn} 
                  onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                  style={{ marginTop: '1.5rem' }}
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
