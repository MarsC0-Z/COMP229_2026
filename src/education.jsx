
const learningTimeline = [
	{
		period: '2026 · In progress',
		title: 'COMP229 coursework',
		institution: 'Add your college or institution',
		detail: 'Current studies and practical work in web application development.',
	},
	{
		period: 'Add dates',
		title: 'Add your degree or qualification',
		institution: 'Add institution',
		detail: 'Include completed qualifications, certificates, and professional training.',
	},
];

export default function Education() {
	return (
		<main className="page-content detail-page">
			<p className="eyebrow">Education & qualifications</p>
			<div className="page-heading-row">
				<h1 className="page-title">Learning is<br /><span>part of the work.</span></h1>
				<p className="page-intro">Formal study and ongoing learning that shape how I build.</p>
			</div>
			<div className="timeline">
				{learningTimeline.map((item, index) => (
					<article className="timeline-item" key={item.title}>
						<span className="timeline-index">0{index + 1}</span>
						<div className="timeline-period">{item.period}</div>
						<div>
							<h2>{item.title}</h2>
							<p className="timeline-institution">{item.institution}</p>
							<p>{item.detail}</p>
						</div>
					</article>
				))}
			</div>
			<p className="helper-note">Replace the marked fields with your complete education and professional qualifications, including dates and awards.</p>
		</main>
	);
};

