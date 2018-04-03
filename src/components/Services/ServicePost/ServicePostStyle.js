import React  from 'react';
import Aux from '../../../hoc/_Aux'



const ServicePostStyle =(props) =>(
            <Aux>
                <div className="col-lg-4 mb-4">
                    <div className="card h-100">
                        <h4 className="card-header">{props.title}</h4>
                        <div className="card-body">
                        <p className="card-text"> {props.description} </p>
                        </div>
                        <div className="card-footer">
                        <button onClick={props.clicked} className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </Aux>
)


export default ServicePostStyle