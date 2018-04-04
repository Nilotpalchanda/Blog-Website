import React, {Component} from 'react'
import Aux from '../../../../hoc/_Aux'
import axios from 'axios'
class FullPost extends Component  {

    state= {
        loadedPost:null
    }
    componentDidUpdate(){
        if ( this.props.id ) {
        if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost === this.props.id)){
        axios.get('/posts/' + this.props.id)
        .then(response=>{
          this.setState({loadedPost: response.data})
          //console.log(response)
        })
        }
      }
    
      }




    render(){
        //one
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        //two
        if(this.props.id){
            post = <p style={{ textAlign: 'center' }}>Loading.......</p>;
    
        }
        //three
        if(this.state.loadedPost){
            post =(
                <Aux>

                <div className="col-lg-12 mb-12">
                    <div className="card h-100">
                        <h4 className="card-header">{this.state.loadedPost.title}</h4>
                        <div className="card-body">
                        <p className="card-text"> {this.state.loadedPost.body} </p>
                        </div>
                    </div>
                </div>
               </Aux>
            )
        }
        return post
    }
}

export default FullPost