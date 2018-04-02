import React  from 'react';
import Aux from '../../../hoc/_Aux'
import { NavLink } from 'react-router-dom';

const ServicePostStyle =(props) =>(
            <Aux>
                <div className="col-lg-4 mb-4">
                    <div className="card h-100">
                        <h4 className="card-header">{props.title}</h4>
                        <div className="card-body">
                        <p className="card-text"> {props.description} </p>
                        </div>
                        <div className="card-footer">
                        <NavLink to="/" className="btn btn-primary">Learn More</NavLink>
                        </div>
                    </div>
                </div>
            </Aux>
)


export default ServicePostStyle