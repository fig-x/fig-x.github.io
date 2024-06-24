import React, { Component } from 'react';
import { withRouter } from './withRouter.js';


import Navigator from './Navigator.js';

class Publication extends Component {



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
        return (<div>
           <div className='top-header'>
                    <div className="container">
                        <Navigator activeItem='publication-nav' />
                    </div>
                </div>
            <div class="container">
                <div class="row">
                    Publication page
                </div>
            </div>
        </div>

        )
    }

}


export default Publication;