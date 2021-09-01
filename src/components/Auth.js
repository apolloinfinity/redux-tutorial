import React from 'react';

const Auth = () => {
	return (
		<div>
			<form>
				<div>
					<label>Email</label>
					<input type='email' />
				</div>
				<div>
					<label>Password</label>
					<input type='password' />
				</div>
			</form>
		</div>
	);
};

export default Auth;
