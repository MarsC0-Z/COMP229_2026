
// Project content and matching CSS art classes are kept together for each card.
const portfolioProjects = [
	{
		number: '01',
		title: 'Personal portfolio',
		type: 'WEB DESIGN · REACT',
		description: 'A multi-page portfolio that brings coursework, skills, and contact information together in one responsive site.',
		role: 'Role: design and front-end development.',
		outcome: 'Outcome: a clear home for selected work and a working contact-form flow.',
		art: 'project-art--portfolio',
		mark: 'P/',
	},
	{
		number: '02',
		title: 'Interactive learning widgets',
		type: 'JAVASCRIPT · UI',
		description: 'Small browser exercises exploring counters, controlled inputs, checkboxes, and dropdown interactions.',
		role: 'Role: component development and interaction logic.',
		outcome: 'Outcome: focused examples for practicing state and form behavior.',
		art: 'project-art--widgets',
		mark: '{ }',
	},
	{
		number: '03',
		title: 'Data-connected app concept',
		type: 'NODE.JS · MONGODB',
		description: 'A learning project exploring how a web application can connect its interface to a document database.',
		role: 'Role: technical exploration and setup.',
		outcome: 'Outcome: a foundation for learning full-stack application patterns.',
		art: 'project-art--data',
		mark: '↗',
	},
];

export default function Project() {
	return (
		<main className="page-content detail-page">
			<p className="eyebrow">Selected work · 2026</p>
			<div className="page-heading-row">
				<h1 className="page-title">Projects that turn<br /><span>practice into progress.</span></h1>
				<p className="page-intro">A few experiments and coursework projects, each one a chance to learn by making.</p>
			</div>
			<div className="project-grid">
				{portfolioProjects.map((project) => (
					<article className="project-card" key={project.number}>
						<div className={`project-art ${project.art}`} aria-hidden="true">
							<span className="project-art-grid" />
							<span className="project-art-mark">{project.mark}</span>
							<span className="project-number">{project.number}</span>
						</div>
						<div className="project-card-body">
							<p className="eyebrow">{project.type}</p>
							<h2>{project.title}</h2>
							<p>{project.description}</p>
							<div className="project-meta"><span>{project.role}</span><span>{project.outcome}</span></div>
						</div>
					</article>
				))}
			</div>
			<p className="helper-note">Project descriptions are starter copy. Update them with your exact role, tools, and outcomes before submitting.</p>
		</main>
	);
};
