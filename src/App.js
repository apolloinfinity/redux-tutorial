import { BrowserRouter as Router, Route } from 'react-router-dom';

import Inventory from './components/Inventory';
import About from './components/About';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import { useSelector, useDispatch } from 'react-redux';

function App() {
	return (
		<Router>
			<Navbar />
			<div className='container'>
				<Route path='/' exact component={Login} />
				<Route path='/home' component={Home} />
				<Route path='/inventory' component={Inventory} />
				<Route path='/about' component={About} />
			</div>
		</Router>
	);
}

export default App;
