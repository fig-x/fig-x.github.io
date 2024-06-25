

import React, { Component } from 'react';
import { withRouter } from './withRouter.js';
import { FiExternalLink } from "react-icons/fi";
class NormalA extends Component {



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
            <a href={this.props.href} target='_blank' className='normal-a'>{this.props.text} <FiExternalLink className='icon-adjustment'/></a>
       
        )
    }

}


export default NormalA;