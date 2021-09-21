import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
	const user = useSelector((state) => state.user.user);
	console.log(user);
	return (
		<div>
			<h1>Home Page</h1>
			<p>Welcome back {user}</p>
		</div>
	);
};

export default Home;
