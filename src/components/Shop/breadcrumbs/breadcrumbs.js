import React from 'react'
import Aux from '../../../hoc/_Aux'
import { NavLink } from 'react-router-dom';

const BreadCrumbes = (props) =>(
    <Aux>
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="breadcrumb-item active">Shop</li>
      </ol>
    </Aux>
)

export default BreadCrumbes