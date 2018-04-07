import React , { Component } from 'react';
import Aux from '../../../../../hoc/_Aux'
import RelatedProductStyle from './RelatedProductStyle'
class RelatedProduct extends Component {

    state={
        relatedProduct :[]
    }

    componentDidMount(){
        axios.get('http://localhost:8080/products')
        .then(response =>{
            const latestPosts = response.data.slice(0,3)
            const laProduct = latestPosts.map(LaP =>{
               return(
                   ...LaP
               )
            })
            this.setState({
                relatedProduct:Lap
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
                    details= {pro.Details}
                    
                    />
            )
        })
        return(
            <Aux>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            {product}
                        </div>
                        </div>
                    </div>
               </div>
            </Aux>
            
        )
    }
}

export default RelatedProduct