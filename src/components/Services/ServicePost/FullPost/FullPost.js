import React,{Component} from 'react'
import axios from 'axios'
import PageStr from '../../../PageStr'
import NProgress from 'nprogress'
import BreadCrums from './breadcrumbs/breadcrumbs'
class FullPost extends Component{

    state= {
        loadedPost:[]
    }
    componentDidMount(){
        NProgress.start(0.0);
        axios.get('/posts/' +  this.props.match.params.id)
        .then(response=>{
          this.setState({loadedPost: response.data})
          console.log(response)
          NProgress.done(1.0);
        })
    }

    render(){
        return(
            <PageStr>
                
                   <div className="container" style={{marginTop : "100px"}} >
                         <BreadCrums/>
                         <div className="row">
                            <div className="col-lg-12">
                                <img className="img-fluid rounded" src="http://placehold.it/900x300" alt=""/>
                                <hr/>
                                <p>Posted on January 1, 2017 at 12:00 PM</p>
                                <hr/>
                                <h3>{this.state.loadedPost.title}</h3>
                                <p >{this.state.loadedPost.body}</p>
                            </div>
                        </div>
                    </div>
           </PageStr>

        )
    }
}

export default FullPost