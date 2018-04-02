import React , {Component} from 'react'
import PageStr from '../PageStr'
import BreadCrumbs from "./breadcrumbs/breadcrumbs"
import Map from './Map/Map'
import Address from './Address/Address'
import Form from './Form/Form'
class Contact extends Component{
	render(){
		return(
			<PageStr>
			<div className="container" style={{marginTop:"100px"}}>
				<BreadCrumbs/>
				<div className="row">
					<Map/>
					<Address/>
				</div>
				<Form/>
			</div>
			</PageStr>
			);
	}
}
export default Contact
