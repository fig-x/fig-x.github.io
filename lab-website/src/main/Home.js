import React, { Component } from 'react';
import { withRouter } from '../code/withRouter.js';
import SpecText from '../code/SpecText.js'

import Navigator from '../code/Navigator.js';
import LabName from '../code/LabName.js';
import HeaderSpan from '../code/HeaderSpan.js';
import NormalA from '../code/NormalA.js';
import * as d3 from 'd3';
import * as d3time from 'd3-time-format'
import { isMobile } from 'react-device-detect';
import { _newspath } from '../code/helper.js'

const tParser = d3time.timeParse("%Y-%m-%d")
const oFormat = d3time.timeFormat("%Y %B")

class Home extends Component {




    constructor(props) {
        super(props);
    }


    componentDidMount() {
        // this.createVis()

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
            <div>
                <div className='top-header'>
                    <div className="container">
                        <Navigator activeItem='home-nav' />
                    </div>
                </div>
                <div className="container">
                    <div className="padding-top">
                        <div className="row">

                            {isMobile && <div className='col-lg-4'>
                                <img src="front-page.svg" style={{ 'width': '100%' }} />
                            </div>}
                            <div className='col-lg-8' style={{ 'padding-top': '10px' }}>
                                <p>
                                    We are a research lab within the <NormalA
                                        href="https://www.cs.umd.edu/" text="Department of Computer
                                        Science"/> at the <NormalA href="https://umd.edu/" text="University of
                                            Maryland, College Park" />, specializing in Human-Computer Interaction, Information Visualization, and Visual Computing.
                                    We develop visual representations and interfaces that empower people to understand, interact with, and
                                    develop computional models. These models include probabilistic forecasts, machine learning, and foundation models.
                                    <br />

                                </p>
                            </div>


                            {!isMobile && <div className='col-lg-4'>
                                <img src="front-page.svg" style={{ 'width': '100%' }} />
                            </div>}

                        </div>    </div>
                    <div className="padding-top"></div>
                    <div className="row">
                        <h2>Topics</h2>
                        <div id='topic-frontpage'></div>
                    </div>
                    <div className="padding-top"></div>
                    <div className="row">
                        <h2>News</h2>
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
            </div >
        )
    }

}


export default withRouter(Home);