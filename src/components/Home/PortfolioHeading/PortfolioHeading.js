import React from 'react';
import Aux from '../../../hoc/_Aux'
import { NavLink } from 'react-router-dom';

 const PortfolioHeading = (props) =>(
            <Aux>
                    <div className="col-lg-4 col-sm-6 portfolio-item">
                        <div className="card h-100">
                        <NavLink to="/"><img className="card-img-top" src="http://placehold.it/700x400" alt=""/></NavLink>
                        <div className="card-body">
                            <h4 className="card-title">
                            <a href="/">{props.title}</a>
                            </h4>
                            <p className="card-text">{props.content}</p>
                        </div>
                        </div>
                    </div>
            </Aux>

        )

export default PortfolioHeading