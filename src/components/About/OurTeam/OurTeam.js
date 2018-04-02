import React, { Component } from 'react';
import Aux from '../../../hoc/_Aux'
import OurTeamStyle from './OurTeamStyle'
class OurTeam extends Component {
    state = {
        TeamImage:[
            {
                "img" :"http://placehold.it/500x300",
                "alt" :"TeamIcon"
            },
            {
                "img" :"http://placehold.it/500x300",
                "alt" :"TeamIcon"
            },
            {
                "img" :"http://placehold.it/500x300",
                "alt" :"TeamIcon"
            },
            {
                "img" :"http://placehold.it/500x300",
                "alt" :"TeamIcon"
            },
            {
                "img" :"http://placehold.it/500x300",
                "alt" :"TeamIcon"
            },
            {
                "img" :"http://placehold.it/500x300",
                "alt" :"TeamIcon"
            }
        ]
    }
    render(){
        const TeamImg = this.state.TeamImage.map(image =>{
            return <OurTeamStyle images={image.img} alt={image.alt} />
        })
        return(
            <Aux>

            <h2>Our Customers</h2>
            <div className="row abc">
                   
                {TeamImg}
                
            </div>
            </Aux>
        )
    }
}

export default OurTeam 