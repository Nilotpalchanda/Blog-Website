import React,{Component} from 'react'
import axios from 'axios'
import Aux from '../../../../hoc/_Aux'
import {Link } from 'react-router-dom'
class LatestPost extends Component{

    state= {
        loadedPost:[]
    }
    componentDidMount(){
        axios.get('/posts')
        .then(response=>{
          const laP = response.data.slice(0,7)
          const latestP = laP.map(LatP =>{
              return{
                ...LatP
              }
          })


          this.setState({loadedPost: latestP})
          console.log(response)

        })
    }

    render(){
            const LatestP = this.state.loadedPost.map(loadP =>{
                return (
                    <Link to={'/latestpost/' + loadP.id} key={loadP.id} ><p>{loadP.title}</p></Link>
                )
            })
        return(
            <Aux>
                  {LatestP}
                               
           </Aux>

        )
    }
}

export default LatestPost