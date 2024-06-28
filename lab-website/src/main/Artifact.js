import React, { Component } from 'react';
import { withRouter } from '../code/withRouter.js';
import HeaderSpan from '../code/HeaderSpan.js';

import Navigator from '../code/Navigator.js';

class Artifact extends Component {



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
                <div className='top-header border-bottom'>
                    <div className="container">
                        <Navigator activeItem='artifact-nav' />
                    </div>
                </div>
                <HeaderSpan text='Artifact'/>
                <div class="container">
                    <div class="row">
                        Artifact page
                    </div>
                </div>
            </div>

        )
    }

}


export default Artifact;