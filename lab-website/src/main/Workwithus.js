import React, { Component } from 'react';
import { withRouter } from '../code/withRouter.js';
import HeaderSpan from '../code/HeaderSpan.js';

import Navigator from '../code/Navigator.js';

class Workwithus extends Component {



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
            <div>
                <div className='top-header'>
                    <div className="container border-bottom">
                        <Navigator activeItem='workwithus-nav' />
                    </div>
                </div>
                <HeaderSpan text='Work with us'/>
                <div class="container">
                    <div class="row">
                        workwithus page
                    </div>
                </div>

            </div>
        )
    }

}


export default Workwithus;