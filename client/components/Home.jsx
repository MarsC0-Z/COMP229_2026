
import { Link, useLocation } from 'react-router-dom';
import stackArtwork from '../src/assets/hero.png';

export default function Home() {
    // The contact form puts its confirmation data in the current route state.
    const { state } = useLocation();
    const submission = state?.contactSubmission;

    return (
        <div className="home-page">
            {submission && (
                <div className="submission-notice" role="status">
                    Thanks, {submission.firstName}. Your message has been captured on this page.
                </div>
            )}
            <section className="home-hero page-content">
                <div className="hero-copy">
                    <p className="eyebrow"><span className="status-dot" /> Available for new opportunities</p>
                    <h1 className="home-title">Welcome.<br /><span>Let&apos;s make</span><br />something useful.</h1>
                    <p className="hero-description">
                        I&apos;m building a foundation in web development and creating clear, thoughtful digital experiences one project at a time.
                    </p>
                    <div className="hero-actions">
                        <Link className="button button-primary" to="/project">Explore my work <span aria-hidden="true">↗</span></Link>
                        <Link className="text-link" to="/about">A little about me <span aria-hidden="true">→</span></Link>
                    </div>
                    <div className="hero-note"><span>01</span><p>Good technology should feel human: useful, considered, and easy to understand.</p></div>
                </div>
                <div className="hero-art-wrap">
                    <div className="hero-art-label"><span>DESIGN / BUILD</span><span>001—2026</span></div>
                    <img className="hero-art" src={stackArtwork} alt="Abstract illustration of two layered, rounded platforms" />
                    <span className="hero-art-caption">Ideas, layer by layer.</span>
                </div>
            </section>
            <section className="home-band">
                <div className="page-content band-inner">
                    <p className="eyebrow">A practical approach</p>
                    <h2>Learn deeply.<br />Build with purpose.</h2>
                    <Link className="text-link" to="/services">See how I can help <span aria-hidden="true">→</span></Link>
                </div>
            </section>
        </div>
    );
};
