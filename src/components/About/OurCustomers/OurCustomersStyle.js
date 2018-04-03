import React from 'react';
import Aux from '../../../hoc/_Aux'
import { NavLink } from 'react-router-dom';
const OurCustomerStyle =(props) =>(
            <Aux>
              <div className="col-lg-4 mb-4">
                <div className="card h-100 text-center">
                  <img style={{height: "50%"}}  className="card-img-top" src={props.photo} alt=""/>
                  <div className="card-body">
                    <h4 className="card-title">{props.name}</h4>
                    <h6 className="card-subtitle mb-2 text-muted"> {props.position} </h6>
                    <p className="card-text">{props.bio}</p>
                  </div>
                  <div className="card-footer">
                    <NavLink to="/">{props.email}</NavLink>
                  </div>
                </div>
              </div>
            </Aux>  
)
export default OurCustomerStyle