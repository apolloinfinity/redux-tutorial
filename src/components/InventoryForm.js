import React, { Fragment } from 'react';

const InventoryForm = () => {
	return (
		<Fragment>
			<div className='row'>
				<div className='col'>
					<h3>Categories</h3>
					{/* <ul className='list-group'>
						{categories.map((category) => (
							<li
								className='list-group-item'
								key={category.CategoryId}
							>
								{category.Category}
							</li>
						))}
					</ul> */}
				</div>
				<div className='col'>
					<h3>Types</h3>
					{/* <ul className='list-group'>
						{types.map((type) => (
							<li className='list-group-item' key={type.TypeId}>
								{type.Type}
							</li>
						))}
					</ul> */}
				</div>
			</div>
		</Fragment>
	);
};

export default InventoryForm;
