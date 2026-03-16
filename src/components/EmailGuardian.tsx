import { useState, ChangeEvent, FormEvent } from 'react';
import styles from './EmailGuardian.module.scss';
import SocialIcon from './SocialIcon';

interface EmailGuardianProps {
    email: string;
}

export default function EmailGuardian({ email }: EmailGuardianProps) {
    const [isVerified, setIsVerified] = useState<boolean>(false);
    const [showChallenge, setShowChallenge] = useState<boolean>(false);
    const [copied, setCopied] = useState<boolean>(false);
    const [sliderValue, setSliderValue] = useState<number>(0);

    const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = parseInt(e.target.value);
        setSliderValue(val);
        if (val >= 100) {
            setIsVerified(true);
            setShowChallenge(false);
        }
    };

    const handleAction = async (e: FormEvent | React.MouseEvent) => {
        e.preventDefault();
        // Fallback for click logic
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
            
            // Show a small toast or just the button change
            if (!copied) {
                window.location.href = `mailto:${email}`;
            }
        } catch {
            window.location.href = `mailto:${email}`;
        }
    };

    if (isVerified) {
        return (
            <div className={styles.revealedContainer}>
                <button 
                    onClick={handleAction} 
                    className={`${styles.combinedBtn} ${copied ? styles.copied : ''}`}
                    title="Click to Send & Copy"
                >
                    <div className={styles.iconBox}>
                        <SocialIcon platform="mail" />
                    </div>
                    <div className={styles.textColumn}>
                        <span className={styles.emailText}>{email}</span>
                        <span className={styles.hintText}>
                            {copied ? 'Copied to Clipboard!' : 'Click to Mail & Copy'}
                        </span>
                    </div>
                    <div className={styles.copyIcon}>
                        <span className="material-symbols-rounded">
                            {copied ? 'done_all' : 'content_copy'}
                        </span>
                    </div>
                </button>
            </div>
        );
    }

    return (
        <div className={styles.guardianContainer}>
            {!showChallenge ? (
                <button 
                    className={styles.verifyBtn} 
                    onClick={() => setShowChallenge(true)}
                >
                    <span className="material-symbols-rounded">shield_person</span>
                    Unlock Professional Contact
                </button>
            ) : (
                <div className={styles.sliderChallenge}>
                    <div className={styles.challengeHeader}>
                        <span>Human Verification</span>
                        <button onClick={() => setShowChallenge(false)}>
                             <span className="material-symbols-rounded">close</span>
                        </button>
                    </div>
                    <p>Slide the key to reveal email</p>
                    <div className={styles.track}>
                        <input 
                            type="range" 
                            min="0" 
                            max="100" 
                            value={sliderValue} 
                            onChange={handleSliderChange}
                            className={styles.slider}
                        />
                        <div 
                            className={styles.progress} 
                            style={{ width: `${sliderValue}%` }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
