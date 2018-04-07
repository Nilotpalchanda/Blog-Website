import React from 'react'
import Aux from '../../../../../hoc/_Aux'
const RelatedProductStyle = (props) =>{
    <Aux>
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
    </Aux>
}

export default RelatedProductStyle