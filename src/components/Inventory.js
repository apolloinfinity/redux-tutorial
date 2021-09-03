import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItemTypes } from '../store/services';
import { getCategories } from '../store/services';

import InventoryForm from './InventoryForm';

const Inventory = () => {
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(getItemTypes());
			dispatch(getCategories());
		},
		[ dispatch ]
	);
	const itemTypes = useSelector((state) => state.itemTypes.itemTypes);
	const categories = useSelector((state) => state.categories.categories);
	console.log(categories);

	return (
		<div>
			<h1>Inventory</h1>
			<section>
				<div className='row'>
					{/* <InventoryForm /> */}
					<div className='col'>
						<ul className='list-group'>
							{categories.map((category) => (
								<li
									className='list-group-item'
									key={category.CategoryId}
								>
									{category.Category}
								</li>
							))}
						</ul>
					</div>
					<div className='col'>
						<h3>Types</h3>
						<ul className='list-group'>
							{itemTypes.map((type) => (
								<li
									className='list-group-item'
									key={type.TypeId}
								>
									{type.Type}
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Inventory;
