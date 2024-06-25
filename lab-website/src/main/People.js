import React, { Component } from 'react';
import Navigator from '../code/Navigator.js';
import HeaderSpan from '../code/HeaderSpan.js';
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
                <HeaderSpan text='People'/>
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