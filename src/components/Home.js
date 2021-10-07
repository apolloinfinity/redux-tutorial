import React from 'react';
import { useSelector } from 'react-redux';

import { userSelector } from '../store/userSlice';

const Home = () => {
	const { user } = useSelector(userSelector);
	return (
		<div>
			<h1>Home Page</h1>
			<p>Welcome back {user.displayName}</p>
		</div>
	);
};

export default Home;
