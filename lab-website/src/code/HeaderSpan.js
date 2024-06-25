

import React, { Component } from 'react';
import { withRouter } from './withRouter.js';

class HeaderSpan extends Component {



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
            <div className='header-span'>
                <div className='container'>{this.props.text}</div>
            </div>
       
        )
    }

}


export default HeaderSpan;