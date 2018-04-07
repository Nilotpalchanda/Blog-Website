import React from 'react'
import Aux from '../../../../../hoc/_Aux'
import {NavLink} from 'react-router-dom'
const RelatedProductStyle = (props) =>{
    return(
        <Aux>
            <div className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
                            <a href="/"><img className="card-img-top" style={{height: "250px"}}src={props.image} alt=""/></a>
                            <div className="card-body">
                            <h4 className="card-title">
                                <NavLink to={props.link}>{props.name}</NavLink>
                            </h4>
                            <h5>${props.price}</h5>
                            <p className="card-text">{props.details}</p>
                            </div>
                            <div className="card-footer">
                            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                            </div>
        </div>
        </div>
</Aux>
    )
}

export default RelatedProductStyle