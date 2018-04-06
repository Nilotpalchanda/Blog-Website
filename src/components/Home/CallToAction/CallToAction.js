import React,{ Component } from 'react';
import Aux from '../../../hoc/_Aux'
// import { NavLink } from 'react-router-dom';
import Modal from 'react-responsive-modal';
class CallToAction extends Component {
    state = {
        open: false,
      };
      onOpenModal = () => {
        this.setState({ open: true });
      };
    
      onCloseModal = () => {
        this.setState({ open: false });
      };

    render(){
        const { open } = this.state;
        return(
    <Aux>
        <div className="col-md-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, expedita, saepe, vero rerum deleniti beatae veniam harum neque nemo praesentium cum alias asperiores commodi.</p>
        </div>
        <div className="col-md-4">
            <button onClick={this.onOpenModal} className="btn btn-lg btn-secondary btn-block" to="#">Call to Action</button>
        </div>
        <Modal open={open} onClose={this.onCloseModal} little>
        <h2>Simple centered modal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
            hendrerit risus, sed porttitor quam.
          </p>
        </Modal>
    </Aux>
        )
    }
}

export default CallToAction