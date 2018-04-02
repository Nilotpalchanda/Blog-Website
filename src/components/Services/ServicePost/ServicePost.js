import React, { Component } from 'react';
import Aux from '../../../hoc/_Aux'
import ServicePostStyle from './ServicePostStyle'
class ServicePost extends Component {

    state={
        ServicePost:[
            {
                "Title":"Card Title",
                "Description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
            },
            {
                "Title":"Card Title",
                "Description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
            },
            {
                "Title":"Card Title",
                "Description":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque."
            }
        ]
    }

    render(){
        const ServPost = this.state.ServicePost.map(Servicepost =>{
            return <ServicePostStyle title = {Servicepost.Title} description={Servicepost.Description} />
        })


        return(
            <Aux>
             <div className="row">
                        {ServPost}
                </div>
            </Aux>
        )
    }
}

export default ServicePost