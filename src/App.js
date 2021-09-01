import { BrowserRouter as Router, Route } from 'react-router-dom';

import Inventory from './components/Inventory';
import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Auth from './components/Auth';

function App() {
	return (
		<Router>
			<Navbar />
			<div className='container'>
				<Route path='/auth' component={Auth} />
				<Route path='/' exact component={Home} />
				<Route path='/inventory' component={Inventory} />
				<Route path='/about' component={About} />
			</div>
		</Router>
	);
}

export default App;
