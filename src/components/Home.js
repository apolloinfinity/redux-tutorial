import React from 'react';
import { useSelector } from 'react-redux';

import { userSelector } from '../store/userSlice';

const Home = () => {
	const { username } = useSelector(userSelector);
	return (
		<div>
			<h1>Home Page</h1>
			<p>Welcome back {username}</p>
		</div>
	);
};

export default Home;
