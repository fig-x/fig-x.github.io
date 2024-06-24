






import React, { Component } from 'react';
import { withRouter } from './withRouter.js';
import LabName from './LabName.js';

class Footer extends Component {



    constructor(props) {
        super(props);
    }


    componentDidMount() {
        // this.createVis()
    }

    componentDidUpdate() {
        // this.createVis();
    }




    render() {
        return (
            <footer className="text-muted py-5">
            <div className="container">
                {/* <p className="float-start">
                    <a href="#">Back to top</a>
                </p> */}
                <p>Copyright © <LabName /> | Updated in June 2024</p>
               
            </div>
        </footer>
        )
    }

}


export default Footer;