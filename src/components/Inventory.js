import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../store/categoriesSlice';
import { categorySelector } from '../store/categoriesSlice';

const Inventory = () => {
	const dispatch = useDispatch();

	useEffect(
		() => {
			dispatch(getCategories());
		},
		[ dispatch ]
	);
	const { categories } = useSelector(categorySelector);

	return (
		<div>
			<h1>Inventory</h1>
			<section>
				<div className='row'>
					{/* <InventoryForm /> */}
					<div className='col'>
						<ul className='list-group'>
							{categories.map((category) => (
								<li className='list-group-item' key={category.CategoryId}>
									{category.Category}
								</li>
							))}
						</ul>
					</div>
					{/* <div className='col'>
						<h3>Types</h3>
						<ul className='list-group'>
							{itemTypes.map((type) => (
								<li className='list-group-item' key={type.TypeId}>
									{type.Type}
								</li>
							))}
						</ul>
					</div> */}
				</div>
			</section>
		</div>
	);
};

export default Inventory;
