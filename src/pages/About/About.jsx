import styles from './About.module.scss';
import mainStyles from '../Home/Home.module.scss';
import { socials, companyLinks } from '../../data/socials';
import { companyInfo } from '../../data/company';
import SocialIcon from '../../components/SocialIcon';
import EmailGuardian from '../../components/EmailGuardian';

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.avatar}>
            <img 
              src="/images/SandurTech-Logo-PNG.png" 
              alt="SandurTech Founder" 
              width="80" 
              height="80" 
              fetchpriority="high"
              draggable="false" 
            />
          </div>
          <h1>About Sandur<span>Tech</span></h1>
          <p>Founded {companyInfo.founded}. From a solo hustle to a pursuit of digital elegance.</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.biography}>
              {/* <div className={styles.badge}>Our Core Philosophy</div> */}
              <h2>Built for humans, <br/>by a human & AI.</h2>
              <p>{companyInfo.description}</p>
              {/* <p>
                Every tool I build starts with a simple "What if this was easier?" question. SandurTech isn't just a business; it's my personal contribution to the open-source and digital ecosystem, focusing on quality over corporate fluff.
              </p> */}
              
              <div className={mainStyles.aboutStats} style={{ marginTop: '2.5rem' }}>
                <div className={mainStyles.stat}>
                  <h4>2026</h4>
                  <span>EST.</span>
                </div>
                <div className={mainStyles.stat}>
                  <h4>2</h4>
                  <span>TOOLS BUILT</span>
                </div>
                <div className={mainStyles.stat}>
                  <h4>50+</h4>
                  <span>HOURS SPENT BUILDING</span>
                </div>
                {/* <div className={mainStyles.stat}>
                  <h4>100%</h4>
                  <span>Independent</span>
                </div> */}
                {/* <div className={mainStyles.stat}>
                  <h4>0</h4>
                  <span>Placeholders</span>
                </div> */}
              </div>
              <div className={styles.card} style={{ marginTop: '2.5rem' }}>
                <h3>Let's Chat</h3>
                <p>Always open for coffee chats, collaborations, or feedback on my tools.</p>
                <EmailGuardian email={companyLinks.email} />
              </div>
            </div>

            <div className={styles.connectSide}>
              <div className={styles.card}>
                <h3>My Socials</h3>
                <div className={styles.socialGrid}>
                  {socials.map(social => (
                    <a 
                      key={social.name} 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.socialItem}
                    >
                      <div className={styles.socialIcon}>
                        <SocialIcon platform={social.platform} />
                      </div>
                      <div className={styles.socialInfo}>
                        <span className={styles.name}>{social.name}</span>
                        <span className={styles.handle}>@amogharajsandur</span>
                      </div>
                      <span className="material-symbols-rounded" style={{ fontSize: '1.1rem', opacity: 0.2 }}>north_east</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
