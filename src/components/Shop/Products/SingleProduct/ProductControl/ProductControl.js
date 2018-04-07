import React from 'react';
import Aux from '../../../../../hoc/_Aux'
const ProductControl = (props) => (
    <Aux>
    <button className="btn btn-danger" onClick={props.delete} ><i class="fa fa-minus" aria-hidden="true"></i> Less</button>&nbsp;
    <button className="btn btn-warning" onClick={props.added} ><i class="fa fa-plus" aria-hidden="true"></i> More</button>&nbsp;
    </Aux>
);

export default ProductControl