import React ,{ Component } from 'react'
// import Aux from '../../../hoc/_Aux'
import PageStr from '../../PageStr'
import './Checkout.css'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import NProgress from 'nprogress'
class Checkout extends Component {

    state={
        checkoutProduct:[],
        checkoutDetail:[],
        productHide:'show',
        Checkoutprice:0
    }

    componentDidMount(){
		NProgress.start(0.0);
        axios.get('https://shopsserver.herokuapp.com/products/' +  this.props.match.params.id)
        .then(response=>{
            console.log(response)
            const CheckoutPro = response.data
            const CheckoutPrice = response.data.Price
            const checkoutDetails = response.data.Details.slice(0,100)
            this.setState({
                checkoutProduct: CheckoutPro,
                checkoutDetail: checkoutDetails,
                Checkoutprice:CheckoutPrice
            })
		})
		NProgress.done(1.0);
    }
    hideProduct=()=>{
        this.setState({
            productHide:'hide',
            Checkoutprice: 0
        })
    }


    render(){
        const stylecon ={
            marginTop:'100px',
            marginBottom:'110px'
        }
        const checkoutImage ={
            height:'100px',
            width:'100px'
        }
        return(
            <PageStr>
                <div className="container" style={stylecon}>
	                <table id="cart" className="table table-hover table-condensed">
    				<thead>
						<tr>
							<th style={{width:"50%"}}>Product</th>
							<th style={{width:"10%"}}>Price</th>
							<th style={{width:"8%"}}>Quantity</th>
							<th style={{width:"22%"}} className="text-center">Subtotal</th>
							<th style={{width:"10%"}}></th>
						</tr>
					</thead>
					<tbody className={this.state.productHide}>
						<tr>
							<td data-th="Product">
								<div className="row">
									<div className="col-sm-3 hidden-xs"><img src={this.state.checkoutProduct.image} style={checkoutImage}  alt={this.state.checkoutProduct.ProductName} className="img-responsive"/></div>
									<div className="col-sm-9">
										<h4 className="nomargin">{this.state.checkoutProduct.ProductName}</h4>
										<p>{this.state.checkoutDetail}</p>
									</div>
								</div>
							</td>
							<td data-th="Price">${this.state.Checkoutprice}</td>
							<td data-th="Quantity">
								<input className="form-control text-center" defaultValue="1"/>
							</td>
							<td data-th="Subtotal" className="text-center">${this.state.Checkoutprice}</td>
							<td className="actions" data-th="">
								<button className="btn btn-danger btn-sm" onClick={this.hideProduct}><i className="fa fa-trash-o"></i></button>								
							</td>
						</tr>
					</tbody>
					<tfoot>
						<tr className="visible-xs">
							<td className="text-center"><strong>Total ${this.state.Checkoutprice}</strong></td>
						</tr>
						<tr>
							<td><NavLink to="/shop" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</NavLink></td>
							<td colSpan="2" className="hidden-xs"></td>
							<td className="hidden-xs text-center"><strong>Total ${this.state.Checkoutprice}</strong></td>
							<td><NavLink to="/placeorder" className="btn btn-success btn-block">Checkout <i className="fa fa-angle-right"></i></NavLink></td>
						</tr>
					</tfoot>
				</table>
</div>
            </PageStr>
        )
    }
}

export default Checkout