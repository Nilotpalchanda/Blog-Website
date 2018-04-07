import React,{Component} from 'react'
// import Aux from '../../../../hoc/_Aux'
import {NavLink} from 'react-router-dom'
import PageStr from './../../../PageStr';
import BreadCrumbes from './breadcrumbs/breadcrumbs'
import axios from 'axios'
import RelatedProduct from './RelatedProduct/RelatedProduct'
class SingleProduct extends Component{

    state={
        loadPost:[]
    }

    componentDidMount(){
        console.log(this.props)
        axios.get('http://localhost:8080/products/' +  this.props.match.params.id )
            .then(response =>{
                console.log(response)
                this.setState({loadPost: response.data})
        })
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
                    <h4>Price: <strong>{this.state.loadPost.Price}</strong> </h4>
                    <NavLink className="btn btn-primary" to='/' >Buy Now</NavLink>
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