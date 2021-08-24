import { BrowserRouter as Router, Route } from 'react-router-dom';

import Inventory from './components/Inventory';
import About from './components/About';
import Navbar from './components/Navbar';

function App() {
	return (
		<Router>
			<Navbar />
			<div className='container'>
				<Route path='/' exact component={Inventory} />
				<Route path='/about' component={About} />
			</div>
		</Router>
	);
}

export default App;
