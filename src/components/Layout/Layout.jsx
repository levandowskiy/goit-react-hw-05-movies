import { Link, Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import "./Layout.css"

const Layout = () => {
	const location = useLocation()

	return (
		<>
			<header>
				<nav>
					<Link to="/">Home</Link>
					<Link to="/movies" state={{ from: location}} >Movies</Link>
				</nav>
			</header>
			<main>
				<Suspense fallback={<div>Loading...</div>}>
					<Outlet />
				</Suspense>
			</main>
		</>
	);
}

export default Layout;
