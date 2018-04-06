import React from 'react';
import Aux from '../../../hoc/_Aux'
import { NavLink } from 'react-router-dom';

 const PortfolioHeading = (props) =>(
            <Aux>
                    <div className="col-lg-4 col-sm-6 portfolio-item">
                        <div className="card h-100">
                        <NavLink to="/"><img className="card-img-top" style={ {height: "150px"}}src="http://freelinkedinbackgrounds.com/wp-content/uploads/2015/01/Technology-007.jpg" alt=""/></NavLink>
                        <div className="card-body">
                            <h4 className="card-title">
                            <NavLink to={props.link}>{props.title}</NavLink>
                            </h4>
                            <p className="card-text">{props.content}</p>
                        </div>
                        </div>
                    </div>
            </Aux>

        )

export default PortfolioHeading