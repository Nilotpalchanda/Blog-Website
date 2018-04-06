import React,{Component} from 'react'
// import Aux from '../../../../hoc/_Aux'
import {NavLink} from 'react-router-dom'
import PageStr from './../../../PageStr';
import BreadCrumbes from './breadcrumbs/breadcrumbs'
class SingleProduct extends Component{


    render(){
        return(
            <PageStr>
            <div className="container" style={{marginTop : "100px", marginBottom: "100px"}} >
                <BreadCrumbes/>
                 <div className="row">
                    <div className="col-md-6">
                    <img className="card-img-top" src="https://cnet2.cbsistatic.com/img/qXtNjgDyxHKguoNFyL19bD8Nl0M=/770x433/2017/06/27/89beef22-ceb9-49c1-8f30-cd6c47018ba4/apple-macbook-pro-15-inch-2017-03.jpg" alt=""/>
                  </div>

                  <div className="col-md-6">
                  <hr/>
                    <h3>Product Name</h3>
                    <hr/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                    <hr/>
                    <h4>Price: <strong>$1000</strong> </h4>
                    <NavLink className="btn btn-primary" to='/' >Buy Now</NavLink>
                  </div>
               </div>
               <br/>
               <hr/>
               <h3> Related Products </h3>
               <hr/>
               <div className="row">
                 <div className="col-lg-12">
                      <div className="row">
                      <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <a href="/"><img className="card-img-top" style={{height: "250px"}}src="http://ksassets.timeincuk.net/wp/uploads/sites/54/2017/11/DSCF9432-920x613.jpg" alt=""/></a>
                                <div className="card-body">
                                <h4 className="card-title">
                                    <a href="/">Item Two</a>
                                </h4>
                                <h5>$24.99</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="card-footer">
                                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <a href="/"><img className="card-img-top" style={{height: "250px"}}src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2017/06/105-ipad-pro-review-hero.jpg?itok=M3NE-T4q" alt=""/></a>
                                <div className="card-body">
                                <h4 className="card-title">
                                    <a href="/">Item Two</a>
                                </h4>
                                <h5>$24.99</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="card-footer">
                                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-6 mb-4">
                            <div className="card h-100">
                                <a href="/"><img className="card-img-top" style={{height: "250px"}}src="https://cnet2.cbsistatic.com/img/qXtNjgDyxHKguoNFyL19bD8Nl0M=/770x433/2017/06/27/89beef22-ceb9-49c1-8f30-cd6c47018ba4/apple-macbook-pro-15-inch-2017-03.jpg" alt=""/></a>
                                <div className="card-body">
                                <h4 className="card-title">
                                    <a href="/">Item Two</a>
                                </h4>
                                <h5>$24.99</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="card-footer">
                                <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                                </div>
                            </div>
                            </div>
                      </div>
                 </div>
               </div>
            </div>
        </PageStr>

        )
    }
}


export default SingleProduct