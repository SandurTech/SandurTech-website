import styles from './Blog.module.scss';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';

export default function Blog() {
  return (
    <div className={styles.blogPage}>
      <SEO 
        title="Blog" 
        description="Read thoughts on tech, minimalism, and the future of microservices from the founder of SandurTech."
        canonical="/blog"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sandurtech.vercel.app/" },
              { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://sandurtech.vercel.app/blog" }
            ]
          }
        ]}
      />
      <div className="container">
        <div className={styles.comingSoon}>
          <span className="material-symbols-rounded" style={{ fontSize: '6rem', color: 'orange' }}>edit_note</span>
          <h1>SandurTech <span>Blog</span></h1>
          <p>Thoughts on tech, minimalism, and the future of microservices. Coming soon.</p>
          <Link to="/" className={styles.backBtn}>
            <span className="material-symbols-rounded">arrow_back</span>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
