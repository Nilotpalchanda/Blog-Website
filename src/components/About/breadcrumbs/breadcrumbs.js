import React from 'react'
import Aux from '../../../hoc/_Aux'
import { NavLink } from 'react-router-dom';
const BreadCrumbes = (props) => (
        <Aux>
        <h1 className="mt-4 mb-3">About
            &nbsp;<small>Subheading</small>
        </h1>

        <ol className="breadcrumb">
          <li className="breadcrumb-item">
              <NavLink to="/">Home</NavLink>
          </li>
            <li className="breadcrumb-item active">About</li>
        </ol>
        </Aux>
)

export default BreadCrumbes