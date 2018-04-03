import React, { Component } from 'react';
import Aux from '../../../hoc/_Aux'
import ServicePostStyle from './ServicePostStyle'
import axios from 'axios'
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
        //window.location.assign('/app'+ id)
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
            </Aux>
        )
    }
}

export default ServicePost