import React, { Component } from 'react';
import { withRouter } from '../code/withRouter.js';

import Navigator from '../code/Navigator.js';
import LabName from '../code/LabName.js';
import NormalA from '../code/NormalA.js';
import * as d3time from 'd3-time-format'
import { isMobile } from 'react-device-detect';
import { _newspath } from '../code/helper.js'
import { Col, Card } from 'react-bootstrap';
import { PiCaretDoubleDownLight } from "react-icons/pi";
const tParser = d3time.timeParse("%Y-%m-%d")
const oFormat = d3time.timeFormat("%Y %B")

class Home extends Component {




    constructor(props) {
        super(props);
    }


    componentDidMount() {
        // this.createVis()
        document.title = "Home | FIGX"
        fetch(_newspath)
            .then(response => response.json())
            .then(data => {
                data.sort((a, b) => {
                    a.timeFormatted = tParser(a.time)
                    b.timeFormatted = tParser(b.time)
                    return b.timeFormatted - a.timeFormatted
                })
                this.setState({ 'newsdata': data })
            });
    }

    componentDidUpdate() {
        // this.createVis();
    }


    //     createNews(newsdata) {


    //         let allnews = d3.select('#news-containter')
    //             .selectAll('news')
    //             .data(newsdata)
    //             .enter().append("div")
    //             .attr('class', 'row')

    //         allnews
    //             // .forEach()
    //             .append('div')
    //             .attr('class', 'col-2 newsdate')
    //             .text(d => {
    //                 return oFormat(d.timeFormatted)
    //             })

    //         allnews
    //             .append('div')
    //             .attr('class', 'col-10 newscontent')
    //             .html(d => {
    //                 return d.htmlContent
    //             })

    //     }
    // }

    render() {
        return (
            <div className='page-content'>
                <div className='top-header border-bottom' style={{ 'marginBottom': 0 }}>
                    <div className="container">
                        <Navigator activeItem='home-nav' />
                    </div>
                </div>

                <div className='welcome-block-outside border-bottom'>
                    <div className='welcome-block-inside '>
                        <div className="container">
                            <div className="paddingTop">
                                <div className="row">
                                    <div className='col-lg-7' style={{ 'paddingTop': '10px' }}>
                                    <div class="bounce"><PiCaretDoubleDownLight /></div>
                                    <a className="navbar-brand" href="#"><img src='figx.png' style={{ 'height': '7rem' }}></img></a> 
                                        <p className='welcome-text'>Welcome to the FIGX  Research Lab!</p>
                                        <p >
                                            Our lab locates within the <NormalA
                                                href="https://www.cs.umd.edu/" text="Department of Computer
                                        Science"/> at the <NormalA href="https://umd.edu/" text="University of
                                            Maryland, College Park" />, and specializes in Human-Computer Interaction, Information Visualization, and Visual Computing. We create visual representations and interfaces designed to enhance understanding, interaction, and development of computational models, focusing on probabilistic forecasts, machine learning, and foundational models.



                                            <br /> <br />
                                            {/* <p className='small-note'> This tentative image is generated by Midjourney.</p> */}
                                        </p>
                                        <h2>About FIGX</h2>
                                {/* <div style={{'paddingRight': '20%'}}> */}
                                <div id='topic-frontpage'  style={{ 'paddingTop': '10px' }}>
                                FIGX is an acronym for the <b>F</b>uture <b>I</b>ntelligent <b>G</b>raphical e<b>X</b>perience. It can be thought of as the <b>Fig. X</b>&#8212;the graphic representation that comes to mind when you are writing an article or explaining an idea, where visuals are as expressive as a thousand words. We chose this name to reflect our lab's commitment to pushing the boundaries of innovation and exploration in graphical experiences.
                          
                                </div>
                                    </div>
                                    <div className='col-lg-5'> 
                                            {/* <img src="full-1.png" style={{'height': '14rem'}}></img> */}
                                        </div>
                                </div>
                            </div>

                        </div>    </div>   </div>
                <div className="container">
                    <div className="padding-top">
                        {/* <div className="row"> */}
                            <div className="padding-top"></div>
                            <div className="row">
                            

                            {/* </div> */}
                            <div className="padding-top"></div>
                            <div className="padding-top"></div>
                            <div className="row">
                                <h2>Lab news</h2>
                                <div id='news-containter'>

                                    {this.state && this.state.newsdata && this.state.newsdata.map(d => {
                                        return (
                                            <div className='row'>
                                                <div className='col-2 newsdate'>{oFormat(d.timeFormatted)}</div><div className='col-10 newscontent' dangerouslySetInnerHTML={{ __html: d.htmlContent }} />

                                            </div>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                        </div>
          
                    </div>
                </div>
<br></br><br/>

            </div >
        )
    }

}


export default withRouter(Home);