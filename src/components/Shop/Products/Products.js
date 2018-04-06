import React from 'react'
import Aux from '../../../hoc/_Aux'
import {NavLink} from 'react-router-dom'
const Products = (props) =>(
    <Aux>
        
        <div className="col-lg-4 col-md-6 mb-4" id={props.productId} >
                <div className="card h-100">
                    <a href="/"><img className="card-img-top" style={{height: "250px"}} src={props.image} alt=""/></a>
                    <div className="card-body">
                    <h4 className="card-title">
                        <NavLink to={props.location}>{props.ProductName}</NavLink>
                    </h4>
                    <h5>Price :${props.Price}</h5>
                    <p className="card-text">{props.Details}</p>
                    </div>
                    <div className="card-footer">
                    <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                    <NavLink className="btn btn-primary" style={{float: "right"}} to={props.location} >Show More</NavLink>
                    </div>
                </div>
        </div>
    </Aux>
)

export default Products