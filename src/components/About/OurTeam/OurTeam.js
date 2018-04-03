import React, { Component } from 'react';
import Aux from '../../../hoc/_Aux'
import OurTeamStyle from './OurTeamStyle'
class OurTeam extends Component {
    state = {
        TeamImage:[
            {
                "img" :"https://www.cloudirec.com/blog/wp-content/uploads/2017/07/logo-aws.png",
                "alt" :"AWS"
            },
            {
                "img" :"https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/nodejs-frameworks.png",
                "alt" :"Nodejs"
            },
            {
                "img" :"https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png",
                "alt" :"Reactjs"
            },
            {
                "img" :"https://cdn-images-1.medium.com/max/1600/1*WNPicrz6DJegizpj4VY58Q.jpeg",
                "alt" :"VueJs"
            },
            {
                "img" :"https://cdn-images-1.medium.com/max/1600/1*SFxBtjAaTAC2rsbFW43K0A.png",
                "alt" :"Angularjs"
            },
            {
                "img" :"https://webassets.mongodb.com/_com_assets/cms/mongodb-for-giant-ideas-bbab5c3cf8.png",
                "alt" :"Mongodb"
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