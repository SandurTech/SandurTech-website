import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import ThemeToggle from "../ThemeToggle";
import SocialIcon from "../../components/SocialIcon";
import { companyLinks } from "../../data/socials";

interface HeaderProps {
    onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
    const location = useLocation();

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link to="/" className={styles.logo}>
                    <img 
                        src="/images/SandurTech-Logo-PNG.png" 
                        alt="SandurTech Logo" 
                        width="45" 
                        height="45" 
                        fetchPriority="high"
                        draggable="false" 
                    />
                    <span>Sandur<strong>Tech</strong></span>
                </Link>
                
                <nav className={styles.nav}>
                    <Link to="/" className={location.pathname === '/' ? styles.active : ''} aria-current={location.pathname === '/' ? 'page' : undefined}>Home</Link>
                    <Link to="/products" className={location.pathname === '/products' ? styles.active : ''} aria-current={location.pathname === '/products' ? 'page' : undefined}>Products</Link>
                    <Link to="/about" className={location.pathname === '/about' ? styles.active : ''} aria-current={location.pathname === '/about' ? 'page' : undefined}>About</Link>
                    <Link to="/blog" className={location.pathname === '/blog' ? styles.active : ''} aria-current={location.pathname === '/blog' ? 'page' : undefined}>Blog</Link>
                </nav>

                <div className={styles.actions}>
                    <ThemeToggle />
                    <a href={companyLinks.github} target="_blank" rel="noopener noreferrer" className={styles.cta}>
                        <SocialIcon platform="github" />
                        <span>GitHub</span>
                    </a>
                </div>

                <button 
                  className={styles.menuButton} 
                  aria-label="Menu"
                  onClick={onMenuClick}
                >
                    <span className="material-symbols-rounded">menu</span>
                </button>
            </div>
        </header>
    )
}