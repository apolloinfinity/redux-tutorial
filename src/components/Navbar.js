import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { logOut } from '../store/userSlice';

const Navbar = () => {
	const history = useHistory();
	const dispatch = useDispatch;

	const handleLogOut = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		history.push('/');
	};

	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-secondary'>
			<div className='container'>
				<Link className='navbar-brand' to='/home'>
					Home
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon' />
				</button>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						<li className='nav-item'>
							<Link
								className='nav-link active'
								aria-current='page'
								to='/inventory'>
								Inventory
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link' to='/about'>
								About
							</Link>
						</li>
					</ul>
				</div>
				<div className='d-flex'>
					<button onClick={handleLogOut} className='btn btn-outline-light'>
						Logout
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
