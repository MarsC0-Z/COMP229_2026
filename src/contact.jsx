
import { useNavigate } from 'react-router-dom';

export default function Contact() {
	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		// Read all named controls at once before routing the captured values to Home.
		const formValues = Object.fromEntries(new FormData(event.currentTarget));

		// This demo confirms the message in the browser; it does not email or store it.
		navigate('/', { state: { contactSubmission: formValues } });
	}

	return (
		<main className="page-content detail-page contact-page">
			<p className="eyebrow">Get in touch</p>
			<div className="page-heading-row">
				<h1 className="page-title">Have a good<br /><span>idea in mind?</span></h1>
				<p className="page-intro">Questions, project ideas, or just saying hello are all welcome.</p>
			</div>
			<div className="contact-layout">
				<aside className="contact-panel">
					<p className="eyebrow">Contact details</p>
					<h2>Let&apos;s start<br />a conversation.</h2>
					<div className="contact-detail"><span className="contact-icon" aria-hidden="true">@</span><div><span>Email</span><strong>Add your email address</strong></div></div>
					<div className="contact-detail"><span className="contact-icon" aria-hidden="true">+</span><div><span>Phone</span><strong>Add your contact number</strong></div></div>
					<div className="contact-detail"><span className="contact-icon" aria-hidden="true">⌖</span><div><span>Location</span><strong>Add your city or region</strong></div></div>
					<p className="contact-aside-note">Your contact details are yours to add. Nothing is sent until you connect this form to a service.</p>
				</aside>
				<form className="contact-form" onSubmit={handleSubmit}>
					<div className="form-heading"><span>01 / YOUR DETAILS</span><p>Tell me how to reach you.</p></div>
					<div className="form-row">
						<label>First name<input name="firstName" autoComplete="given-name" required /></label>
						<label>Last name<input name="lastName" autoComplete="family-name" required /></label>
					</div>
					<div className="form-row">
						<label>Email address<input name="email" type="email" autoComplete="email" required /></label>
						<label>Contact number<input name="phone" type="tel" autoComplete="tel" /></label>
					</div>
					<label>Message<textarea name="message" rows="5" required /></label>
					<button className="button button-primary form-submit" type="submit">Send message <span aria-hidden="true">↗</span></button>
					<p className="helper-note">Demo form: your entries are carried to the Home page for confirmation, not emailed or stored.</p>
				</form>
			</div>
		</main>
	);
}