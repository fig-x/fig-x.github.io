

import React, { Component } from 'react';
import { withRouter } from './withRouter.js';
import { FiExternalLink } from "react-icons/fi";
class InternalA extends Component {



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
            <a href={this.props.href} className='normal-a'>{this.props.text}</a>
       
        )
    }

}


export default InternalA;