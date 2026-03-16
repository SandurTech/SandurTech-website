import { Link } from "react-router-dom";
import styles from "./Sidebar.module.scss";
import { companyLinks } from "../../data/socials";

import ThemeToggle from "../ThemeToggle";
import SocialIcon from "../../components/SocialIcon";

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
    return (
        <>
            <div 
                className={`${styles.overlay} ${isOpen ? styles.visible : ''}`} 
                onClick={onClose}
                aria-hidden="true"
            ></div>
            <aside 
                className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile Navigation"
            >
                <div className={styles.sidebarTop}>
                    <div className={styles.sidebarLogo}>
                        Sandur<strong>Tech</strong>
                    </div>
                    <div className={styles.topActions}>
                        <ThemeToggle />
                        <button 
                            className={styles.closeBtn} 
                            onClick={onClose}
                            aria-label="Close menu"
                        >
                            <span className="material-symbols-rounded">close</span>
                        </button>
                    </div>
                </div>
                
                <nav className={styles.links}>
                    <Link to="/" onClick={onClose}>Home</Link>
                    <Link to="/products" onClick={onClose}>Products</Link>
                    <Link to="/about" onClick={onClose}>About</Link>
                    <Link to="/blog" onClick={onClose}>Blog</Link>
                    
                    <div className={styles.sidebarFooter}>
                        <a 
                            href={companyLinks.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            onClick={onClose}
                            className={styles.sidebarCta}
                        >
                            <SocialIcon platform="github" />
                            <span>GitHub Portfolio</span>
                        </a>
                    </div>
                </nav>
            </aside>
        </>
    )
}