import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
import { companyLinks, socials } from "../../data/socials";
import { companyInfo } from "../../data/company";
import SocialIcon from "../../components/SocialIcon";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const footerSocials = socials.filter(s => ['GitHub', 'LinkedIn'].includes(s.name));
    const [emailShown, setEmailShown] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleEmailAction = async (e) => {
        if (!emailShown) {
            e.preventDefault();
            const challenge = window.confirm("Human Check: Unlock professional email?");
            if (challenge) {
                setEmailShown(true);
            }
        } else {
            // Already shown, so copy + trigger mailto
            e.preventDefault();
            try {
                await navigator.clipboard.writeText(companyLinks.email);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
                window.location.href = `mailto:${companyLinks.email}`;
            } catch {
                window.location.href = `mailto:${companyLinks.email}`;
            }
        }
    };

    return (
        <footer id="contact" className={styles.footer}>
            <div className="container">
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <Link to="/" className={styles.logo} title="SandurTech Home">
                            <img 
                                src="/images/SandurTech-Logo-SVG.svg" 
                                alt="SandurTech Logo" 
                                width="56"
                                height="56"
                                loading="lazy" 
                                draggable="false" 
                            />
                            <span>Sandur<strong>Tech</strong></span>
                        </Link>
                        <p>{companyInfo.description}</p>
                    </div>

                    <div className={styles.links}>
                        <div>
                            <h4>Navigation</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/products">Products</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4>Legal & Support</h4>
                            <ul>
                                <li>
                                    <a 
                                        href={emailShown ? `mailto:${companyLinks.email}` : '#'} 
                                        onClick={handleEmailAction}
                                        style={copied ? { color: '#2e7d32' } : {}}
                                    >
                                        {emailShown ? (copied ? 'Copied & Opening Mail...' : `Mail: ${companyLinks.email}`) : 'Connect Directly'}
                                    </a>
                                </li>
                                <li><a href={companyLinks.googleBusiness} target="_blank" rel="noopener noreferrer">Review on Google Business?</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear} {companyInfo.founder} & {companyInfo.name} ({companyInfo.fullName}).</p>
                    <div className={styles.socials}>
                        {footerSocials.map(social => (
                            <a 
                                key={social.name}
                                href={social.url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label={social.name}
                            >
                                <SocialIcon platform={social.platform} />
                            </a>
                        ))}
                        <button 
                            onClick={handleEmailAction} 
                            className={copied ? styles.copiedBtn : ''}
                            aria-label="Email"
                        >
                            <SocialIcon platform={emailShown && copied ? 'check' : 'mail'} />
                        </button>
                    </div>
                </div>

                <div className={styles.bigTextContainer}>
                    <div className={styles.bigText}>
                        SANDURTECH
                    </div>
                </div>
            </div>
        </footer>
    );
}