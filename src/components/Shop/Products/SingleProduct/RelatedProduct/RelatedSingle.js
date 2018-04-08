import React,{Component} from 'react'
// import Aux from '../../../../hoc/_Aux'
import {NavLink} from 'react-router-dom'
import PageStr from './../../../../PageStr';
// import './relatedScript'
import axios from 'axios'

class RelatedSingle extends Component{

    state={
        loadPost:[]
    }

    componentDidMount(){
        console.log(this.props)
        axios.get('https://shopsserver.herokuapp.com/products' +  this.props.match.params.id )
            .then(response =>{
                console.log(response)
                this.setState({loadPost: response.data})
        })
    }

    render(){
        return(
            <PageStr>
            <div className="container" style={{marginTop : "100px", marginBottom: "100px"}} >
                {/* <BreadCrumbes/> */}
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
            </div>
        </PageStr>

        )
    }
}


export default RelatedSingle