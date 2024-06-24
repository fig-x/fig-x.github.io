

import React, { Component } from 'react';
import { withRouter } from './withRouter.js';

class SpecText extends Component {



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
            <text className='spec-text'>
                {this.props.text}
            </text>
        )
    }

}


export default SpecText;