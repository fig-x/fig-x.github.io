import React, { Component } from 'react';
import { withRouter } from '../code/withRouter.js';

import HeaderSpan from '../code/HeaderSpan.js';
import Navigator from '../code/Navigator.js';

class Research extends Component {



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
                    <div className="container">
                        <Navigator activeItem='research-nav' />
                    </div>
                </div>
                <HeaderSpan text='Research'/>
                <div class="container">
                    <div class="row">
                        Research page
                    </div>
                </div>
            </div>

        )
    }

}


export default Research;