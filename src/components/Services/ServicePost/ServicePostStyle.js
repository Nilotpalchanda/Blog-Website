import React  from 'react';
import Aux from '../../../hoc/_Aux'
import { Link } from 'react-router-dom'


const ServicePostStyle =(props) =>(
            <Aux>
                <div className="col-lg-4 mb-4">
                    <div className="card h-100">
                        <h4 className="card-header"><Link to={props.link}>{props.title}</Link></h4>
                        <div className="card-body">
                        <p className="card-text"> {props.description} </p>
                        </div>
                        <div className="card-footer">
                        <Link to={props.link} className="btn btn-primary">Learn More</Link>
                        </div>
                    </div>
                </div>
            </Aux>
)


export default ServicePostStyle