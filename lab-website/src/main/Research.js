import React, { Component } from 'react';
import { withRouter } from '../code/withRouter.js';

import HeaderSpan from '../code/HeaderSpan.js';
import Navigator from '../code/Navigator.js';
import InternalA from '../code/InternalA.js';
import { _publicationpath, _researchpath } from '../code/helper.js'
import { PiRobot, PiRobotFill, PiEye, PiCloudSnow, PiBrain, PiHandshake, PiChartBar, PiHeadCircui, PiEyesFill, PiButterfly, PiBookOpen, PiMedal, PiMedalFill } from "react-icons/pi";

class Research extends Component {

    state = {}

    constructor(props) {
        super(props);
    }


    componentDidMount() {

        fetch(_researchpath)
            .then(response => response.json())
            .then(data => {

                this.setState({ researchdata: data })
            });

        fetch(_publicationpath)
            .then(response => response.json())
            .then(data => {
                this.setState({ publicationmap: data.slice(0, 1)[0] }, () => {
                    this.setState({ publicationdata: data.slice(1) })
                })

            });
    }

    componentDidUpdate() {
        // this.createVis();
    }



    render() {
        if (this.state.researchdata) console.log(this.state.researchdata)
        return (
            <div className='page-content'>
                <div className='top-header border-bottom'>
                    <div className="container">
                        <Navigator activeItem='research-nav' />
                    </div>
                </div>
                <div class="container">
                <div className='padding-top' />
                   <div className='header-span'> Research area</div>
                    <p>Our research lab has broad interests and extensive collaborations. Below we summarize a few focused research areas. </p> 
                    <p className='small-note'>The text on this page is mostly generated by GPT and subject to rewriting.</p>
                    <br/>
                    {this.state.researchdata && this.state.publicationdata &&

                        this.state.researchdata.map(area => {
                            let papers = this.state.publicationdata.filter(p => {
                                return p.paper_id && area.paper.includes(p.paper_id)
                            })

                            return (
                                <div className='reserach-area'>
                                    <div className='row '>
                                        <div className='col-lg-7'>

                                            <div className='side-stick-long'>
                                                {area.area.includes('AI') && <PiRobot className='icon-right-adjustment desktop-only' />}
                                                {area.area.includes('Trust') && <PiHandshake className='icon-right-adjustment desktop-only' />}
                                                {area.area.includes('Uncertainty') && <PiBrain className='icon-right-adjustment desktop-only' />}
                                                {area.area.includes('Visualization Literacy') && <PiChartBar className='icon-right-adjustment desktop-only' />}
                                                {area.area.includes('Immersive') && <PiButterfly className='icon-right-adjustment desktop-only' />}
                                                {area.area.includes('Perception') && <PiEye className='icon-right-adjustment desktop-only' />}
                                            </div>

                                            <h3 className='research-title'>


                                                {area.area} </h3>
                                            {/* <p style={{'marginBottom': '2px'}}>{area.core} </p> */}
                                            <p className='paper-description'>{area.description}</p>

                                        </div>

                                        <div className='col-lg-5'>
                                            <img className="img-thumbnail img-thumbnail-no-border" src={area.figure} />
                                        </div>
                                        <p>
                                            {/* {papers.length > 0 && <font class="">Publication:<br/></font>}   */}
                                            {papers.map(p => {
                                                return (<span className='paper-small-title'>  <font className='paper-short-name'>{p.abbr + ' ' + p.year}</font>
                                                    <span className='sep-bar paper-short-name'>  | </span>
                                                    <InternalA text={p.title} href={"./publication/#" + p.paper_id} />
                                                    {/* {p.awards && p.awards.includes("Honorable") && <span className='paper-award'> <PiMedal /></span>}
                                                    {p.awards && p.awards.includes("Best") && <span className='paper-award'> <PiMedalFill /></span>} */}
                                                    <br /></span>)
                                            })}
                                        </p>
                                    </div >         </div >
                            )
                        })
                    }
                </div>
            </div>

        )
    }

}


export default Research;