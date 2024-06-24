import React, { Component } from 'react';
import { withRouter } from './withRouter.js';
import SpecText from './SpecText.js'

import Navigator from './Navigator.js';
import LabName from './LabName.js';
import Footer from './Footer.js';
class Home extends Component {



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
            <div >
                <div className='top-header'>
                    <div className="container">
                        <Navigator activeItem='home-nav' />
                    </div>
                </div>
                <div className="container">
                    <div className="">
                        <h1 className="homepage-logo"><LabName /></h1>
                        <p>An Innovation Research Group of Interaction, Visualization, and Computing</p>
                        {/* <p><SpecText text='F'/>umeng's Research <SpecText text='G'/>roup of <SpecText text='i'/>nteraction, V<SpecText text='i'/>sualization, and Comput<SpecText text='i'/>ng, the first</p> */}
                    </div>
                    <div className="row">
                        {/* <div class="col-md-4">
                        <h2>Section 1</h2>
                        <p>Some example text some example text. John Doe is an architect and engineer.</p>
                    </div>
                    <div class="col-md-4">
                        <h2>Section 2</h2>
                        <p>Some example text some example text. John Doe is an architect and engineer.</p>
                    </div>
                    <div class="col-md-4">
                        <h2>Section 3</h2>
                        <p>Some example text some example text. John Doe is an architect and engineer.</p>
                    </div> */}
                    </div>
                </div>

                <Footer />
            </div>
        )
    }

}


export default withRouter(Home);