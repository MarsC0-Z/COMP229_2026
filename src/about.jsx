import profilePhoto from './assets/profile-photo.jpg';

// Present the portfolio owner's profile, portrait, and downloadable resume.
export default function About() {
	return (
		<main className="page-content detail-page">
			<p className="eyebrow">A little about me</p>
			<div className="page-heading-row">
				<h1 className="page-title">Curious by nature.<br /><span>Developer in progress.</span></h1>
				<p className="page-intro">A growing practice built on curiosity, consistency, and care for the details.</p>
			</div>
			<section className="about-layout">
				<figure className="portrait-placeholder">
					<img className="portrait-image" src={profilePhoto} alt="Portrait of Amaru Livermore" />
					<figcaption className="portrait-caption">Amaru Livermore</figcaption>
				</figure>
				<div className="about-copy">
					<p className="eyebrow">The person behind the work</p>
					<h2 className="about-name">[Amaru Livermore]</h2>
					<p>I&apos;m a web development student building practical skills through hands-on projects. I enjoy turning a rough idea into a clear, responsive experience, and I&apos;m learning to bring the same care to the code behind it.</p>
					<p>My current focus is front-end development with React, accessible interface patterns, and the fundamentals of connecting applications to data.</p>
					<div className="fact-list">
						<div><span>Currently learning</span><strong>React · JavaScript · Web foundations</strong></div>
						<div><span>Working style</span><strong>Curious, thoughtful, collaborative</strong></div>
					</div>
					<a className="button button-primary" href="/resume.pdf">View my resume <span aria-hidden="true">↗</span></a>
				</div>
			</section>
		</main>
	);
};