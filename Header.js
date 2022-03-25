import React from 'react';

function Header(){
	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
		<div className="container">
			<a href="/" className="navbar-brand">My Contact Manager</a>
		</div>
		<div>
            <ul className="navbar-nav mr-auto">
	 			<li className="nav-item"> <a href="/" className="nav-link">Login</a></li>	
			</ul>
		</div>
	</nav>
	);
}
export default Header;
