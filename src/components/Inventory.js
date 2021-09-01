import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getItemTypes } from '../redux/actions/itemTypes';

import InventoryForm from './InventoryForm';

const Inventory = () => {
	const dispatch = useDispatch();
	useEffect(
		() => {
			dispatch(getItemTypes());
		},
		[ dispatch ]
	);

	return (
		<div>
			<h1>Inventory</h1>
			<section>
				<div className='row'>
					<InventoryForm />
				</div>
			</section>
		</div>
	);
};

export default Inventory;
