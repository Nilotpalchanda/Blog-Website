import React, { Component } from 'react'
import Aux from '../../../hoc/_Aux'
import OurCustomerStyle from './OurCustomersStyle'
class OurCustomer extends Component {
   state={
     TeamMembers:[
       {
         "Name":"Team Member",
         "Position": "Position",
         "Photo" : "http://placehold.it/750x450",
         "Bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.",
         "Email":"name@example.com"
       },
       {
        "Name":"Team Member",
        "Position": "Position",
        "Photo" : "http://placehold.it/750x450",
        "Bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.",
        "Email":"name@example.com"
      },
      {
        "Name":"Team Member",
        "Position": "Position",
        "Photo" : "http://placehold.it/750x450",
        "Bio":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus aut mollitia eum ipsum fugiat odio officiis odit.",
        "Email":"name@example.com"
      }
     ]
   }
    render(){
      const Team = this.state.TeamMembers.map(TeamMember=>{
        return <OurCustomerStyle 
                name={TeamMember.Name}
                position={TeamMember.Position}
                bio={TeamMember.Bio}
                photo={TeamMember.Photo}
                email={TeamMember.Email}
        />
      })
        return(
            <Aux>
            <h2>Our Team</h2>
            <div className="row">
              {Team}
            </div>
            </Aux>  
        )
    }
}

export default OurCustomer