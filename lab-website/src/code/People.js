import React, { Component } from 'react';
import Navigator from './Navigator.js';

class People extends Component {



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
                        <Navigator activeItem='people-nav' />
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        people page
                    </div>
                </div>

            </div>
        )
    }

}


export default People;