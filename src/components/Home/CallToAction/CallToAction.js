import React,{ Component } from 'react';
import Aux from '../../../hoc/_Aux'
import { NavLink } from 'react-router-dom';
class CallToAction extends Component {
    render(){
        return(
    <Aux>
        <div className="col-md-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
        </div>
        <div className="col-md-4">
            <NavLink className="btn btn-lg btn-secondary btn-block" to="#">Call to Action</NavLink>
        </div>
    </Aux>
        )
    }
}

export default CallToAction