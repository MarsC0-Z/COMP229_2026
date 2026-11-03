import { NavLink } from 'react-router-dom';

// Keep menu labels and destinations together for consistent navigation.
const navigationItems = [
	{ label: 'Home', path: '/' },
	{ label: 'About', path: '/about' },
	{ label: 'Projects', path: '/project' },
	{ label: 'Education', path: '/education' },
	{ label: 'Services', path: '/services' },
	{ label: 'Contact', path: '/contact' },
];

export default function Layout() {
	return (
		<header className="site-header">
			<NavLink className="brand" to="/" aria-label="Portfolio home">
				<span className="brand-mark" aria-hidden="true">P</span>
				<span className="brand-name">Portfolio<span className="brand-dot">.</span></span>
			</NavLink>
			<nav className="site-nav" aria-label="Main navigation">
				{navigationItems.map(({ label, path }) => (
					<NavLink
						key={path}
						to={path}
						end={path === '/'}
						className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
					>
						{label}
					</NavLink>
				))}
			</nav>
			<NavLink className="header-contact" to="/contact">
				Let&apos;s talk <span aria-hidden="true">↗</span>
			</NavLink>
		</header>
	);
}