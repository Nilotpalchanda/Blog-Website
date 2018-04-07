import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import PageStr from './../../../PageStr';
import BreadCrumbes from './breadcrumbs/breadcrumbs'
import axios from 'axios'
import RelatedProduct from './RelatedProduct/RelatedProduct'
import ProductControl from './ProductControl/ProductControl'
class SingleProduct extends Component{

    state={
        loadPost:[],
        totalPrice:0,
        Stock:0
    }

    componentDidMount(){
        console.log(this.props)
        axios.get('http://localhost:8080/products/' +  this.props.match.params.id )
            .then(response =>{
                console.log(response)
                this.setState({
                    loadPost: response.data, 
                    totalPrice:response.data.Price,
                    Stock: response.data.stock
                })
        })
    }
    productAdd=()=>{
        const stock = this.state.loadPost.stock
        const Stock = this.state.Stock 
        const newStock = stock + Stock

        const price = this.state.loadPost.Price
        const pricev = this.state.totalPrice 
        const newPrice = price + pricev
        //console.log(newPrice)
        this.setState({
            totalPrice:newPrice,
            Stock:newStock
        })
    }
    productDelete =() =>{
        const stock = this.state.loadPost.stock
        const Stock = this.state.Stock 
        const newStock =  Stock - stock 

        const price = this.state.totalPrice 
        const pricem = this.state.loadPost.Price
        const newPrice = price - pricem
        //console.log(newPrice)
        if( newStock > 0 ){
        this.setState({
            totalPrice:newPrice,
            Stock:newStock
        })
    }
    }
    render(){
        return(
            <PageStr>
            <div className="container" style={{marginTop : "100px", marginBottom: "100px"}} >
                <BreadCrumbes/>
                 <div className="row">
                    <div className="col-md-6">
                    <img className="card-img-top" src={this.state.loadPost.image} alt=""/>
                  </div>

                  <div className="col-md-6">
                  <hr/>
                    <h3>{this.state.loadPost.ProductName}</h3>
                    <hr/>
                    <p>{this.state.loadPost.Details}</p>
                    <hr/>
                    <h4>Quantity: <strong>{this.state.Stock}</strong> </h4>
                    <h4>Price: $<strong>{this.state.totalPrice.toFixed(2)}</strong> </h4>
                    <ProductControl
                    delete={this.productDelete}
                    added={this.productAdd}
                    />
                    <NavLink className="btn btn-primary" to={'/buy/'+ this.state.loadPost.id } ><i className="fa fa-shopping-cart"></i> Buy Now</NavLink>
                    
                  </div>
               </div>
               <br/>
               <hr/>
               <h3> Related Products </h3>
               <hr/>
                    <RelatedProduct/>
            </div>
        </PageStr>

        )
    }
}


export default SingleProduct