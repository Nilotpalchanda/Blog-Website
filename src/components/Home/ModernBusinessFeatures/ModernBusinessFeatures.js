import React, { Component } from 'react';
import Aux from '../../../hoc/_Aux'
class ModernBusinessFeatures extends Component {
    render(){
        return(
            <Aux>
            <div className="col-lg-6">
            <h2>Modern Business Features</h2>
            <p>The Modern Business template by Start Bootstrap includes:</p>
            <ul>
            <li>
                <strong>Bootstrap v4</strong>
            </li>
            <li>jQuery</li>
            <li>Font Awesome</li>
            <li>Working contact form with validation</li>
            <li>Unstyled page elements for easy customization</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde.<br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, omnis doloremque non cum id reprehenderit, quisquam totam aspernatur tempora minima unde aliquid ea culpa sunt. Reiciendis quia dolorum ducimus unde</p>
             </div>
            <div className="col-lg-6">
            <img className="img-fluid rounded" src="http://www.businessnewsdaily.com/images/i/000/007/874/original/free-business-plan-templates.jpg?1421856207" alt=""/>
            </div>
        </Aux>
        )
    }
}

export default ModernBusinessFeatures