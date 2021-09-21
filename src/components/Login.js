import React, { Fragment } from 'react';
import { useFormState } from 'react-use-form-state';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { signIn } from '../store/userSlice';

const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [ formState, { email, password, label } ] = useFormState();

	const handleLogin = (e) => {
		e.preventDefault();
		// console.log(formState.values);
		dispatch(signIn(formState.values));
		history.push('/home');
	};
	return (
		<Fragment>
			<form
				className='w-50 shadow-sm p-5 mt-5 mx-auto bg-light'
				onSubmit={handleLogin}>
				<h1 className='text-center'>Login</h1>
				<div className='mb-3'>
					<label
						className='form-label text-uppercase fw-bold'
						{...label('email')}>
						Email
					</label>
					<input className='form-control' {...email('email')} required />
				</div>
				<div className='mb-3'>
					<label
						className='form-label text-uppercase fw-bold'
						{...label('password')}>
						Password
					</label>
					<input
						className='form-control'
						type='password'
						{...password('password')}
						required
					/>
				</div>
				<button className='btn btn-secondary'>Login</button>
			</form>
		</Fragment>
	);
};

export default Login;
