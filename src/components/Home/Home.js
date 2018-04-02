import React, {Component}  from 'react';
import '../../App.css'
import PageStr from '../PageStr'
import Slider from './Slider/Slider'
import ModernBusinessFeatures from './ModernBusinessFeatures/ModernBusinessFeatures';
import CallToAction from './CallToAction/CallToAction';
import PortfolioHeading from './PortfolioHeading/PortfolioHeading';
import MorderBusiness from './ModernBusiness/ModernBusiness'

class Home extends Component {
      state = {
          cards:[
            {
                "userId": 1,
                "id": 1,
                "title": "qui est esse",
                "content": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
              },
              {
                "userId": 2,
                "id": 2,
                "title": "qui est esse",
                "content": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
              },
              {
                "userId": 3,
                "id": 3,
                "title": "qui est esse",
                "content": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
              }
          ]
      }    
    render(){
        const ModernB = this.state.cards.map(card =>{
                return <MorderBusiness key={card.id} title = {card.title} content= {card.content}  />
        })
        const PortfolioHead = this.state.cards.map(card =>{
            return <PortfolioHeading key={card.id} title = {card.title} content= {card.content}  />
         })
        return(
            <PageStr>
   		        <div className="slider">
                    <Slider/>
                </div>
                <div className="container">
                    <h1 className="my-4">Welcome to Modern Business</h1>
                    <div className="row">
                        {ModernB}
                    </div>
                    <h2>Portfolio Heading</h2>
                    <div className="row">
                        {PortfolioHead}
                    </div>

                    <div className="row">
                        <ModernBusinessFeatures/>
                    </div>
                    <hr/>
                    <div className="row mb-4">
                       <CallToAction/>
                    </div>

                    </div>
            </PageStr>
        );
    }
}

export default Home

