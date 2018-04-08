import React, { Component } from 'react'
import PageStr from './../PageStr'
import Products from './Products/Products'
import BreadCrumbes from './breadcrumbs/breadcrumbs'
import axios from 'axios'
import NProgress from 'nprogress'
class Shop extends Component{
    state = {
        products:[]
    }

    componentDidMount(){
        NProgress.start(0.0);
        axios.get('https://shopsserver.herokuapp.com/products').then(response =>{
            console.log(response)
            const Pro = response.data
            const prod = Pro.map(pros=>{
                return{
                        ...pros
                }
            })
            this.setState({
                products: prod
            })
            NProgress.done(1.0);
        })


    }




    render(){
        console.log(this.props)
        const Pro= this.state.products.map(product =>{
            return(
                <Products
                image = {product.image}
                ProductName = {product.ProductName}
                Price ={product.Price}
                Details = {product.Details.slice(0,100)}
                productId ={product.id}
                key = {product.id}
                location= {'/products/'+ product.id }
                />
            )
        })

        return(

            <PageStr>
                <div className="container" style={{marginTop : "100px"}} >
                <BreadCrumbes/>
                <div className="row">

                  <div className="col-lg-12">
                      <div className="row">
                      
                         {Pro}
                     </div>
                  </div>
                </div>
                </div>
            </PageStr>
        )
    }
}

export default Shop