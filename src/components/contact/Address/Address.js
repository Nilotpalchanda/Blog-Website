import React from 'react';
import Aux from '../../../hoc/_Aux'
import { NavLink } from 'react-router-dom';
const Address = (props) =>(
    <Aux>
        <div className="col-lg-4 mb-4">
          <h3>Contact Details</h3>
          <p>
            3481 Melrose Place
            <br/>Beverly Hills, CA 90210
            <br/>
          </p>
          <p>
            <abbr title="Phone">P</abbr>: (123) 456-7890
          </p>
          <p>
            <abbr title="Email">E</abbr>:
            <NavLink to="mailto:name@example.com">name@example.com
            </NavLink>
          </p>
          <p>
            <abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 5:00 PM
          </p>
        </div>
    </Aux>
)
export default Address