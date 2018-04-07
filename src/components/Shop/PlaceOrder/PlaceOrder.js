import React ,{Component} from 'react'
import PageStr from '../../PageStr'
import UserDetails from './UserDetails'
import PaymentDetails from './PaymentDetails'
import './PlaceOrder.css'
class PaceOrder extends Component{
    render(){
        const placehoderDiv ={
            marginTop:'70px',
            marginBottom:'70px'
        }
        return(
            <PageStr>
                <div className="container wrapper" style={placehoderDiv} >
            <div className="row cart-head">
                <div className="container">
                <div className="row">
                    <p></p>
                </div>
                <div className="row">
                    <p></p>
                </div>
                </div>
            </div>    
            <div className="row cart-body">
                {/* <form className="form-horizontal" method="post" action=""> */}
                <PaymentDetails/>
                    <UserDetails/>
                {/* </form> */}
            </div>
            <div className="row cart-footer">
        
            </div>
    </div>
            </PageStr>

        )
    }
}

export default PaceOrder