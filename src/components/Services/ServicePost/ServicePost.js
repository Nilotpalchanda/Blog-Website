import React, { Component } from 'react';
import Aux from '../../../hoc/_Aux'
import ServicePostStyle from './ServicePostStyle'
import axios from 'axios'
import FullPost from './FullPost/FullPost'
class ServicePost extends Component {

    state={
        ServicePost:[],
        selectDiv: null
    }

    componentDidMount(){


        axios.get('/posts').then(response=>{
            const serpost = response.data.slice(0,3)
            const serviceposts = serpost.map(posts=>{
                return{
                        ...posts
                }
            })


        

            this.setState({
                ServicePost:serviceposts
            })
        })
    }
    divclicked=(id)=>{
        this.setState({selectDiv:id})
        console.log(id)
        //window.location.assign('/services/'+ id)
    }

    render(){
        const ServPost = this.state.ServicePost.map(Servicepost =>{
            return <ServicePostStyle 
            key={Servicepost.id}  
            title = {Servicepost.title} 
            description={Servicepost.body} 
            clicked={()=>this.divclicked(Servicepost.id)}
            />
        })
        return(
            <Aux>
             <div className="row">
                        {ServPost}
                </div>
                <div className="row FullPost">
                       <FullPost id ={this.state.selectDiv}/>
                </div>
            </Aux>
        )
    }
}

export default ServicePost