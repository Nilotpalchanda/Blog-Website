import React , {Component} from 'react'
import PageStr from '../PageStr'
import BreadCrumbes from './breadcrumbs/breadcrumbs';
import AboutModernBusiness from './AboutModernBusiness/AboutModernBusiness';
import OurCustomer from './OurCustomers/OurCustomers';
import OurTeam from './OurTeam/OurTeam';
class About extends Component{
	render(){
		return(
			<PageStr>
			<div className="container" style={{marginTop:"100px"}} >
				<BreadCrumbes/>
				<AboutModernBusiness/>
				<OurCustomer/>
				<OurTeam/>
			</div>
			</PageStr>
			);
	}
}
export default About