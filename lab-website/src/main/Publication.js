import React, { Component } from 'react';
import Navigator from '../code/Navigator.js';
import HeaderSpan from '../code/HeaderSpan.js';

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
        return (
            <div>
                <div className='top-header'>
                    <div className="container">
                        <Navigator activeItem='publication-nav' />
                    </div>
                </div>
                <HeaderSpan text='Publication'/>
                <div className="container">
                    <div className="row">
                        Publication page
                    </div>
                </div>
            </div>
        )
    }

}


export default Publication;