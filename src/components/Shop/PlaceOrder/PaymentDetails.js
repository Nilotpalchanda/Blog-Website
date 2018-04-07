import React from 'react'
import Aux from '../../../hoc/_Aux'
const PaymentDetails =(props) =>{
    return(
        <Aux>
                            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 col-md-pull-6 col-sm-pull-6">
                    <div className="panel panel-info" style={{border:"1px solid"}} >
                        <div className="panel-heading" style={{padding: "10px"}} >Address</div>
                        <div className="panel-body">
                            <div className="form-group">
                                <div className="col-md-12">
                                    <h4>Shipping Address</h4>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>Country:</strong></div>
                                <div className="col-md-12">
                                    <input type="text" className="form-control" name="country" value="" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-6 col-xs-12">
                                    <strong>First Name:</strong>
                                    <input type="text" name="first_name" className="form-control" value="" />
                                </div>
                                <div className="span1"></div>
                                <div className="col-md-6 col-xs-12">
                                    <strong>Last Name:</strong>
                                    <input type="text" name="last_name" className="form-control" value="" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>Address:</strong></div>
                                <div className="col-md-12">
                                    <input type="text" name="address" className="form-control" value="" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>City:</strong></div>
                                <div className="col-md-12">
                                    <input type="text" name="city" className="form-control" value="" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>State:</strong></div>
                                <div className="col-md-12">
                                    <input type="text" name="state" className="form-control" value="" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>Zip / Postal Code:</strong></div>
                                <div className="col-md-12">
                                    <input type="text" name="zip_code" className="form-control" value="" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>Phone Number:</strong></div>
                                <div className="col-md-12"><input type="text" name="phone_number" className="form-control" value="" /></div>
                            </div>
                            <div className="form-group">
                                <div className="col-md-12"><strong>Email Address:</strong></div>
                                <div className="col-md-12"><input type="text" name="email_address" className="form-control" value="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
        </Aux>
    )
}

export default PaymentDetails