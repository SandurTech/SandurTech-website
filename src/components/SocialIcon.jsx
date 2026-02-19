import { 
  FaLinkedin, 
  FaGithub, 
  FaInstagram, 
  FaThreads, 
  FaXTwitter, 
  FaYoutube 
} from 'react-icons/fa6';
import { FiGlobe, FiMail } from 'react-icons/fi';

export default function SocialIcon({ platform, className }) {
  const icons = {
    linkedin: <FaLinkedin className={className} aria-hidden="true" />,
    github: <FaGithub className={className} aria-hidden="true" />,
    instagram: <FaInstagram className={className} aria-hidden="true" />,
    threads: <FaThreads className={className} aria-hidden="true" />,
    x: <FaXTwitter className={className} aria-hidden="true" />,
    youtube: <FaYoutube className={className} aria-hidden="true" />,
    globe: <FiGlobe className={className} aria-hidden="true" />,
    mail: <FiMail className={className} aria-hidden="true" />,
  };

  return icons[platform] || <FiGlobe className={className} aria-hidden="true" />;
}