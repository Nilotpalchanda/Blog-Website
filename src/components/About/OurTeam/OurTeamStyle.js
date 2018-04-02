import React  from 'react';
import Aux from '../../../hoc/_Aux'

const OurTeamStyle = (props) =>(
            <Aux>
             <div className="col-lg-2 col-sm-4 mb-4">
                <img className="img-fluid" src={props.images}  alt={props.alt} />
            </div>
            </Aux>
)

export default OurTeamStyle 