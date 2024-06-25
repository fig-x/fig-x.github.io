import React, { Component } from 'react';
import { withRouter } from '../code/withRouter.js';
import SpecText from '../code/SpecText.js'

import Navigator from '../code/Navigator.js';
import LabName from '../code/LabName.js';
import HeaderSpan from '../code/HeaderSpan.js';
import NormalA from '../code/NormalA.js';
import * as d3 from 'd3';
import * as d3time from 'd3-time-format'

const tParser = d3time.timeParse("%Y-%m-%d")
const oFormat = d3time.timeFormat("%Y %B")

class Home extends Component {




    constructor(props) {
        super(props);
        this.createNews = this.createNews.bind(this)
    }


    componentDidMount() {
        // this.createVis()

        d3.json('https://raw.githubusercontent.com/fig-one/fig-one-data/main/news.json', (newsdata) => {
            this.createNews(newsdata)

        })
    }

    componentDidUpdate() {
        // this.createVis();
    }


    createNews(newsdata) {
        if (newsdata) {
            // console.log(newsdata)
            newsdata.sort((a, b) => {
                a.timeFormatted = tParser(a.time)
                b.timeFormatted = tParser(b.time)
                return b.timeFormatted - a.timeFormatted
            })

            let allnews = d3.select('#news-containter')
                .selectAll('news')
                .data(newsdata)
                .enter().append("div")
                .attr('class', 'row')

            allnews
                // .forEach()
                .append('div')
                .attr('class', 'col-1 newsdate')
                .text(d => {
                    return oFormat(d.timeFormatted)
                })

            allnews
                .append('div')
                .attr('class', 'col-10 newscontent')
                .html(d => {
                    return d.htmlContent
                })

        }
    }

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

                            <div className='col-lg-3'>
                                <img src="front-page.svg" style={{ 'width': '100%' }} />
                            </div>
                            <div className='col-lg-9' style={{ 'padding-top': '10px' }}>
                                <p>
                                    Hello! We are a research lab within the <NormalA
                                        href="https://www.cs.umd.edu/" text="Department of Computer
                                        Science"/> at the <NormalA href="https://umd.edu/" text="University of
                                            Maryland, College Park" />.
                                    We specialize in Human-Computer Interaction, Information Visualization, and Visual Computing.
                                    Our research develops visual representations and interfaces that empower people to understand, interact with, and
                                    develop computional models, such as probabilistic forecasts, machine learning, and foundation models.
                                    Topics we like include model explanation, uncertainty communication, decision-making, and data and AI literacy.
                                    <br />

                                </p>
                            </div>

                        </div>    </div>
                    <div className="padding-top"></div>
                    <div className="row">
                        <div id='home-slide-show'></div>
                    </div>
                    <div className="padding-top"></div>
                    <div className="row">
                        <h2>News</h2>
                        <div id='news-containter'></div>
                    </div>
                </div>
            </div>

        )
    }

}


export default withRouter(Home);