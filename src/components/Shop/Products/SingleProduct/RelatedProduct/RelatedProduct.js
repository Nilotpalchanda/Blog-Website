import React , { Component } from 'react';
import Aux from '../../../../../hoc/_Aux'
import RelatedProductStyle from './RelatedProductStyle'
import axios from 'axios'
class RelatedProduct extends Component {

    state={
        relatedProduct :[]
    }

    componentDidMount(){
        axios.get('https://shopsserver.herokuapp.com/products')
        .then(response =>{
            const latestPosts = response.data.slice(0,3)
            const laProduct = latestPosts.map(LaP =>{
               return{
                   ...LaP
               }
            })
            this.setState({
                relatedProduct:laProduct
            })
        })
    }

    render(){
        const product = this.state.relatedProduct.map(pro=>{
            return(
                    <RelatedProductStyle
                    name={pro.ProductName}
                    image ={pro.image}
                    price ={pro.Price}
                    details= {pro.Details.slice(0,100)}
                    link={'/relatedproduct/'+ pro.id}
                    key={pro.id}
                    />
            )
        })
        return(
            <Aux>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                        
                            {product}
                      
                        </div>
                    </div>
               </div>
            </Aux>
            
        )
    }
}

export default RelatedProduct