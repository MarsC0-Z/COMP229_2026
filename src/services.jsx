import { Link } from 'react-router-dom';

const serviceOffers = [
  { number: '01', name: 'Front-end development', detail: 'Responsive web pages built with semantic HTML, CSS, and modern JavaScript.', tag: 'WEB' },
  { number: '02', name: 'React interfaces', detail: 'Reusable components and approachable interactions for small web applications.', tag: 'REACT' },
  { number: '03', name: 'UI implementation', detail: 'Turning a visual direction into a tidy, accessible interface across screen sizes.', tag: 'DESIGN TO CODE' },
  { number: '04', name: 'Learning prototypes', detail: 'Small proof-of-concept builds to test an idea and make the next step concrete.', tag: 'PROTOTYPE' },
];

export default function Services() {
  return (
    <main className="page-content detail-page">
      <p className="eyebrow">What I can help with</p>
      <div className="page-heading-row">
        <h1 className="page-title">Small teams.<br /><span>Thoughtful solutions.</span></h1>
        <p className="page-intro">Practical web development support for clear ideas that need a thoughtful first build.</p>
      </div>
      <div className="service-list">
        {serviceOffers.map((service) => (
          <article className="service-row" key={service.number}>
            <span className="service-number">{service.number}</span>
            <div><span className="service-tag">{service.tag}</span><h2>{service.name}</h2><p>{service.detail}</p></div>
            <span className="service-arrow" aria-hidden="true">↗</span>
          </article>
        ))}
      </div>
      <div className="services-cta"><p>Have something in mind?</p><Link className="button button-primary" to="/contact">Tell me about it <span aria-hidden="true">↗</span></Link></div>
    </main>
  );
};