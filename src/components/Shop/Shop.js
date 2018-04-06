import React, { Component } from 'react'
import PageStr from './../PageStr'
import Products from './Products/Products'
import BreadCrumbes from './breadcrumbs/breadcrumbs'
class Shop extends Component{

    state = {
        products:[
            {
                "id":1,
                "image":"http://ksassets.timeincuk.net/wp/uploads/sites/54/2017/11/DSCF9432-920x613.jpg",
                "ProductName": "Iphone X",
                "Price":1149,
                "Details":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
            },
            {
                "id":2,
                "image":"https://cnet2.cbsistatic.com/img/qXtNjgDyxHKguoNFyL19bD8Nl0M=/770x433/2017/06/27/89beef22-ceb9-49c1-8f30-cd6c47018ba4/apple-macbook-pro-15-inch-2017-03.jpg",
                "ProductName": "The MacBook Pro",
                "Price":2799,
                "Details":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
            },
            {
                "id":3,
                "image":"https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2017/06/105-ipad-pro-review-hero.jpg?itok=M3NE-T4q",
                "ProductName": "iPad",
                "Price":329,
                "Details":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
            },
            {
                "id":4,
                "image":"http://placehold.it/700x400",
                "ProductName": "Item One",
                "Price":24.99,
                "Details":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
            },
            {
                "id":5,
                "image":"http://placehold.it/700x400",
                "ProductName": "Item One",
                "Price":24.99,
                "Details":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
            },
            {
                "id":6,
                "image":"http://placehold.it/700x400",
                "ProductName": "Item One",
                "Price":24.99,
                "Details":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!"
            }
        ]
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
                location= {'/product/'+ product.id }
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