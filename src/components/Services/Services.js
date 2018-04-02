import React , {Component} from 'react'
import PageStr from '../PageStr'
import BannerImage from './BannerImage/BannerImage';
import Breadcrumbs from './breadcrumbs/breadcrumbs';
import ServicePost from './ServicePost/ServicePost';
class Services extends Component{
	render(){
		return(
			<PageStr>
			<div className="container" style={{marginTop : "100px"}} >
				<Breadcrumbs/>
				<BannerImage/>
				<ServicePost/>
			</div>
			</PageStr>
			);
	}
}
export default Services

