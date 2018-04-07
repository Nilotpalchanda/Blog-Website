import React,{ Component }from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './index.css';
import axios from 'axios'
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/Services'
import Contact from './components/contact/Contact'
import registerServiceWorker from './registerServiceWorker';
import FullPost from './components/Services/ServicePost/FullPost/FullPost'
import FullPosts from './components/Services/ServicePost/FullPost/FullPosts'
import Shop from './components/Shop/Shop'
import SingleProduct from './components/Shop/Products/SingleProduct/SingleProduct';
import RelatedSingle from './components/Shop/Products/SingleProduct/RelatedProduct/RelatedSingle'
import Checkout from './components/Shop/Checkout/Checkout'
import PlaceOrder from './components/Shop/PlaceOrder/PlaceOrder'
axios.defaults.baseURL='https://jsonplaceholder.typicode.com'


class App extends Component{



	render(){
		return(
			<Router>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route path="/about" component={About}/>
					<Route path="/services" component={Services}/>
					<Route path="/contact" component={Contact}/>
					<Route path="/service/fullpost/:id" component={FullPost}/>
					<Route path="/latestpost/:id" component={FullPosts}/>
					<Route path="/shop" component={Shop}/>
					<Route path="/products/:id" component={SingleProduct}/>
					<Route path="/relatedproduct/:id" component={RelatedSingle}/>
					<Route path="/buy/:id" component={Checkout}/>
					<Route path="/placeorder" component={PlaceOrder}/>
				</Switch>
			</Router>



			);
	}
}



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
