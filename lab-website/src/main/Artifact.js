import React, { Component } from 'react';
import { withRouter } from '../code/withRouter.js';
import HeaderSpan from '../code/HeaderSpan.js';
import { Col, Card } from 'react-bootstrap';
import Navigator from '../code/Navigator.js';
import { _artifactpath } from '../code/helper.js';
import NormalA from '../code/NormalA.js';

import { PiUsers, PiCodeBold, PiCubeBold, PiDatabaseBold, PiGlobeBold, PiWrenchBold, PiPackageBold, PiPlugBold, PiScrewdriverBold } from "react-icons/pi";
class Artifact extends Component {

    state = {}

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        fetch(_artifactpath)
            .then(response => response.json())
            .then(data => {
                this.setState({ artifactmap: data.slice(0, 1)[0] }, () => {
                    this.setState({ artifactdata: data.slice(1) })
                })


            });

    }

    componentDidUpdate() {
        // this.createVis();
    }



    render() {
        return (
            <div className='page-content'>
                <div className='top-header border-bottom'>
                    <div className="container">
                        <Navigator activeItem='artifact-nav' />
                    </div>
                </div>
                <div className='padding-top'></div>
                <HeaderSpan text='Artifact' />
                <div class="container">
                {/* <div className='padding-top'></div> */}

                    We have released the following demos and datasets.
                    <div className='padding-top'></div>
                    <div className='padding-top'></div>
                    {this.state && this.state.artifactmap && this.state.artifactmap.sort().map(art => {

                        if (this.state.artifactdata && this.state.artifactdata.filter(a => a.what === art).length > 0)
                            return (
                                <div class="row">
                                    <div className='col-lg-2'> <h2>
                                        {art === 'model' && <PiCubeBold />}
                                        {art === 'dataset' && <PiDatabaseBold />}
                                        {art === 'website' && <PiGlobeBold />}
                                        {art === 'library' && <PiWrenchBold />}
                                        {art === 'package' && <PiWrenchBold />}
                                        {art === 'tool' && <PiScrewdriverBold />}
                                        {art === 'interface' && <PiPlugBold />}
                                        {' ' + art}</h2></div>
                                    <div className='col-lg-10'>
                                        <div className='row'> {
                                            this.state.artifactdata && this.state.artifactdata.filter(a => a.what === art).map(a => {
                                                return (

                                                    <div className='col-lg-4'>
                                                   <a className='plain-a' target="_blank" href={a.link}>     <Card className='artifact-card'>
                                                          
                                                         <p className='artifact-small-title' dangerouslySetInnerHTML={{__html: a.title}}></p>
                                                           
                                                            <Card.Body className='artifact-card-inner'>
                                                                <p className="paper-people" style={{ 'marginTop': '-20px' }}> <PiUsers /> {a.people}</p>
                                                                <p className='research-description' style={{ 'marginTop': '-10px' }}> {a.description}</p>

                                                            </Card.Body>
                                                        </Card></a> 
                                                    </div>

                                                )
                                            })
                                        }</div>    </div>
                                </div>)
                    })}

                </div>
            </div>

        )
    }

}


export default Artifact;