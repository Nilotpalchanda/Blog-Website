import React, {Component}  from 'react';
import '../../App.css'
import PageStr from '../PageStr'
import Slider from './Slider/Slider'
import axios from 'axios'
import ModernBusinessFeatures from './ModernBusinessFeatures/ModernBusinessFeatures';
import CallToAction from './CallToAction/CallToAction';
import PortfolioHeading from './PortfolioHeading/PortfolioHeading';
import MorderBusiness from './ModernBusiness/ModernBusiness'
import NProgress from 'nprogress'
class Home extends Component {

    state={
        posts:[]
    }

    componentDidMount(){
        axios.get('/posts').then(response=>{
            console.log(response)
            NProgress.start(0.0);
            const data = response.data.slice(0,3)
            console.log(data)
            const some = data.map(datas=>{
                return {
                    ...datas
                }

            })
            this.setState({
                posts: some
            })
            NProgress.done(1.0);
        })
    }


    render(){
        const ModernB = this.state.posts.map(card =>{
                return <MorderBusiness key={card.id} link={'/service/fullpost/'+ card.id} title = {card.title} content= {card.body.slice(0,100)}  />
        })
        const PortfolioHead = this.state.posts.map(card =>{
            return <PortfolioHeading key={card.id} link={'/service/fullpost/'+ card.id} title = {card.title} content= {card.body.slice(0,100)}  />
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

