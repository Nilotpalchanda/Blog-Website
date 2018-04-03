import React, { Component } from 'react'
import Aux from '../../../hoc/_Aux'
import OurCustomerStyle from './OurCustomersStyle'
class OurCustomer extends Component {
   state={
     TeamMembers:[
       {
         "Name":"Facebook",
         "Position": "Founder",
         "Photo" : "https://secure.meetupstatic.com/photos/event/6/0/0/4/600_465804580.jpeg",
         "Bio":"The working principles of React Native are basically the same as ReactJS except that it's not manipulating the DOM via the VirtualDom but some native views.",
         "Email":"Facebook.com"
       },
       {
        "Name":"Ryan Dahl",
        "Position": "Founder",
        "Photo" : "https://www.mappingthejourney.com/wp-content/uploads/2017/08/image.jpg",
        "Bio":"Ryan Dahl, the hacker who brought the world Node.js, is turning over the reins to Joyent's Isaac Schlueter. Dahl, who started working on the Node project in 2009.",
        "Email":"Nodejs.org"
      },
      {
        "Name":"Amazon Web Services",
        "Position": "AWS",
        "Photo" : "https://yt3.ggpht.com/a-/AJLlDp3AN_FRnPIImoadrgiM7Q9ANlcQPIE5VeO6wA=s900-mo-c-c0xffffffff-rj-k-no",
        "Bio":"Amazon Web Services (AWS) is a subsidiary of Amazon.com that provides on-demand cloud computing platforms to individuals, companies and governments, on a paid subscription basis.",
        "Email":"Amazon.com"
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