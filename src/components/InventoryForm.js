import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCategories } from '../redux/actions/categories';

const InventoryForm = () => {
	const dispatch = useDispatch();
	const categories = useSelector((state) => state.categories);
	const types = useSelector((state) => state.types);
	useEffect(
		() => {
			dispatch(getCategories());
		},
		[ dispatch ]
	);

	console.log(categories);
	console.log(types);
	return (
		<Fragment>
			<div className='row'>
				<div className='col'>
					<h3>Categories</h3>
					<ul className='list-group'>
						{categories.map((category) => (
							<li className='list-group-item' key={category.CategoryId}>
								{category.Category}
							</li>
						))}
					</ul>
				</div>
				<div className='col'>
					<h3>Types</h3>
					<ul className='list-group'>
						{types.map((type) => (
							<li className='list-group-item' key={type.TypeId}>
								{type.Type}
							</li>
						))}
					</ul>
				</div>
			</div>
		</Fragment>
	);
};

export default InventoryForm;
