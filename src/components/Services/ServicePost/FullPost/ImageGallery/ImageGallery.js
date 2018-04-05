import React,{Component} from 'react'
import Aux from '../../../../../hoc/_Aux'
import { NavLink } from 'react-router-dom'
class ImageGallery extends Component{

  state={
    images:[
      {
        "img0":"https://unsplash.it/1200/768.jpg?image=251"
      }
    ]
  }

  render(){

    return(
      <Aux>
        <div className="row justify-content-center">
         <div className="row">
            <NavLink to="https://unsplash.it/1200/768.jpg?image=251" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-4">
                <img src="https://unsplash.it/600.jpg?image=251" alt="" className="img-fluid"/>
            </NavLink>
            <a href="https://unsplash.it/1200/768.jpg?image=252" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-4">
                <img src="https://unsplash.it/600.jpg?image=252" alt="" className="img-fluid"/>
            </a>
            <a href="https://unsplash.it/1200/768.jpg?image=253" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-4">
                <img src="https://unsplash.it/600.jpg?image=253" alt="" className="img-fluid"/>
            </a>
        </div>
        <div className="row" style={{marginTop: "15px"}}  >
            <a href="https://unsplash.it/1200/768.jpg?image=254" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-4">
                <img src="https://unsplash.it/600.jpg?image=254" alt="" className="img-fluid"/>
            </a>
            <a href="https://unsplash.it/1200/768.jpg?image=255" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-4">
                <img src="https://unsplash.it/600.jpg?image=255" alt="" className="img-fluid"/>
            </a>
            <a href="https://unsplash.it/1200/768.jpg?image=256" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-4">
                <img src="https://unsplash.it/600.jpg?image=256" alt="" className="img-fluid"/>
            </a>
        </div>
        </div>
      </Aux>

    )
  }
}
export default ImageGallery