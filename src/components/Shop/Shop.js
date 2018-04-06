import React, { Component } from 'react'
import PageStr from './../PageStr'
import Products from './Products/Products'
import BreadCrumbes from './breadcrumbs/breadcrumbs'
import axios from 'axios'
class Shop extends Component{
    state = {
        products:[]
    }

    componentDidMount(){
        axios.get('http://localhost:8080/products').then(response =>{
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
                Details = {product.Details}
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