import React, { Component } from 'react';
import Aux from '../../../hoc/_Aux'
import ServicePostStyle from './ServicePostStyle'
import axios from 'axios'
import NProgress from 'nprogress'
class ServicePost extends Component {

    state={
        ServicePost:[],
        selectDiv: null
    }

    componentDidMount(){
        NProgress.start(0.0);
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
            NProgress.done(1.0);
            //console.log(ServicePost)

        })
    }
    divclicked=(id)=>{
        this.setState({selectDiv:id})
        console.log(id)
        //window.location.assign('/services/'+ id)
    }

    render(){
        const ServPost = this.state.ServicePost.map(Servicepost =>{

            return(<ServicePostStyle 
            key={Servicepost.id}  
            title = {Servicepost.title} 
            description={Servicepost.body.slice(0,100)}
            link={'/service/fullpost/' + Servicepost.id} 
            // clicked={()=>this.divclicked(Servicepost.id)}
            />
            )
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