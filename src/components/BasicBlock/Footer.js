import React,{Component} from 'react'
import '../../App.css'
import {NavLink} from 'react-router-dom'
class Footer extends Component{
	render(){
		return(
			<footer className="py-5 bg-dark">
		      <div className="container">
		        <p className="m-0 text-center text-white">Copyright &copy; React Website 2018</p>
						<p className="m-0 text-center text-white">Develop By <NavLink to="https://www.linkedin.com/in/nilotpalchanda/" target="_blank">Nilotpal</NavLink></p>
		      </div>
		    </footer>
			);
	}
}

export default Footer