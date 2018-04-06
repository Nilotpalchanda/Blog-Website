import React,{Component} from 'react'
import axios from 'axios'
import PageStr from '../../../PageStr'
import NProgress from 'nprogress'
import LatestPost from './LatestPost'
import BreadCrums from './breadcrumbs/breadcrumbs'
// import { Link } from 'react-router-dom'
import ImageGallery from './ImageGallery/ImageGallery';
class FullPost extends Component{

    state= {
        loadedPost:[]
    }
    componentDidMount(){
        console.log(this.props)
        NProgress.start(0.0);
        axios.get('/posts/' +  this.props.match.params.id)
        .then(response=>{
          this.setState({loadedPost: response.data})
          //console.log(response)
          NProgress.done(1.0);
        })
    }

    render(){

        return(
            <PageStr>
                
                   <div className="container" style={{marginTop : "100px"}} >
                         <BreadCrums/>
                         <div className="row">
                            <div className="col-lg-8">
                                <img className="img-fluid rounded" src="http://freelinkedinbackgrounds.com/wp-content/uploads/2015/01/Technology-007.jpg" alt=""/>
                                <hr/>
                                <p>Posted on January 1, 2017 at 12:00 PM</p>
                                <hr/>
                                <h3>{this.state.loadedPost.title}</h3>
                                <p >{this.state.loadedPost.body}</p>
                            </div>
                            <div className="col-lg-4">
                               <h4>Latest Posts</h4>
                               <hr/>
                                <LatestPost/>
                                <hr/>
                                <h4>Image Gallery</h4>
                                <hr/>
                                <ImageGallery/>
                                <br/>
                            </div>
                        </div>
                    </div>
           </PageStr>

        )
    }
}

export default FullPost