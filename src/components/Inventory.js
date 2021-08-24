import { useSelector } from 'react-redux';

import InventoryForm from './InventoryForm';

const Inventory = () => {
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
