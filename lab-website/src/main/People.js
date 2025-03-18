import React, { Component } from 'react';
import Navigator from '../code/Navigator.js';
import HeaderSpan from '../code/HeaderSpan.js';
import { _peoplepath } from '../code/helper.js'
// import * as d3 from 'd3'
import { Col, Card } from 'react-bootstrap';
import { FiExternalLink } from "react-icons/fi";

let sorting = {
    'prof': 0,
    'phd': 1,
    'master': 2,
    'undergrad': 3
}

class People extends Component {
    readyforscrolling = false
    state = { 'loading': true }

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        document.title = "FIGX | People"
        fetch(_peoplepath)
            .then(response => response.json())
            .then(rawdata => {
                this.setState({ peoplemap: rawdata.slice(0, 1) })
                let data = rawdata.slice(1)
                data.sort((a, b) => {

                    if (sorting[a.sorting] - sorting[b.sorting] > 0) return 1
                    if (sorting[a.sorting] - sorting[b.sorting] < 0) return -1

                    if (Math.abs(a.year - b.year) < 0.1) {
                        return a.month - b.month
                    }
                    return a.year - b.year
                })

                this.setState({ 'peopledata': data })

            });

    }

    componentDidUpdate() {
        this.runAfterRender()
    }


    runAfterRender() {
        let id = window.location.href.split('#')[1]
        const element = document.getElementById(id);

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    render() {


        return (
            <div className='page-content'>
                <div className='top-header border-bottom'>
                    <div className="container">
                        <Navigator activeItem='people-nav' showlogo={true} />
                    </div>
                </div>
                {/* <HeaderSpan text='People' /> */}
                <div class="container">
                    <div className='padding-top'></div>
                    <div className='header-span'>People</div>
                    <p>Our lab is made up of a group of <b>researchers</b>, <b>students</b>, and even a few honorary <b>non-human members</b>. We also collaborate with <b>brilliant students</b> and <b>partner labs</b>—meet them all below!</p>

                    {this.state && this.state.peoplemap && this.state.peopledata && Object.keys(this.state.peoplemap[0]).map((c, i) => {

                        let subset = this.state.peopledata.filter(p => p.category === c)

                        return (subset.length > 0 && <div>
                            {/* <div className='padding-top' ></div> */}
                            <h2 className='sub-span padding-top'>{this.state.peoplemap[0][c]}</h2>

                            <br />
                            {c.includes('current') && <div id={'people' + i} class="row">

                                {subset.map(p => {
                                    return (<Card className='people-card' style={{ 'backgroundColor': 'transparent' }} >
                                        <p style={{ padding: '15px' }}><Card.Img variant="top" src={p.headshot} alt={p.name} className='headshot' /></p>
                                        <div style={{ paddingLeft: '10px' }} className='people-text'>
                                            <Card.Title id={p.nickname}>
                                                {p.website != '' && <a href={p.website} target='_blank' className='people-name'>{p.name} &#8202;
                                                    <FiExternalLink className='icon-adjustment' /></a>}
                                                {p.website == '' && <span href={p.website} target='_blank' className='people-name'>{p.name} </span>}
                                            </Card.Title>
                                            <Card.Body>
                                                <p className='people-position'>{p.position}</p>
                                                <p className='people-info' dangerouslySetInnerHTML={{ __html: p.quote }} />
                                                {p.year && <p className='people-info'>{p.year}</p>}
                                            </Card.Body>
                                        </div>
                                    </Card>)
                                })}
                            </div>
                            }

                            {
                                c.includes('alumni') && <div className='row'>

                                    {subset.sort((a, b) => {
                                        return a.name.localeCompare(b.name)
                                    }).sort((a, b) => {
                                        return a.position.localeCompare(b.position)
                                    }).map(p => {
                                        return (<div className='people-friends-card col-sm-6'>

                                            <div className='desktop-only' style={{ 'width': '100px' }}>
                                                <img src={p.headshot} className='friends-logo'></img>
                                            </div>
                                            <div style={{ 'flexGrow': '1' }}>{
                                                p.website != '' &&
                                                <p><Card.Title><a href={p.website} target='_blank' className='people-name'>{p.name} &#8202;
                                                    <FiExternalLink className='icon-adjustment' /></a> </Card.Title>
                                                    <span className='people-position'>{p.position}</span>
                                                </p>
                                            }
                                                {p.website == '' &&
                                                    <span href={p.website} target='_blank' className='people-name'>{p.name}</span>}
                                            </div>
                                        </div>

                                        )
                                    })}

                                </div>
                            }





                            {
                                c.includes('student-col') && <div className='row'>

                                    {subset.sort((a, b) => {
                                        return a.graduated.localeCompare(b.graduated)
                                    }).sort((a, b) => {
                                        let anames = a.name.split(' ')
                                        let bnames = b.name.split(' ')
                                        return anames[anames.length - 1].replace("\"", '').localeCompare(bnames[bnames.length - 1].replace("\"", ''))
                                    }).map(p => {
                                        return (<div className='people-friends-card col-sm-6'>

                                            <div className='desktop-only' style={{ 'width': '100px' }}>
                                                <img src={p.headshot} className='friends-logo'></img>
                                            </div>
                                            <div style={{ 'flexGrow': '1' }}>{

                                                <p><Card.Title><a href={p.website} target='_blank' className='people-name'>{p.name} &#8202;
                                                    {p.website != '' && <FiExternalLink className='icon-adjustment' />}</a> </Card.Title>
                                                    <span className='people-position'>{p.position}</span>
                                                    <p class="people-info">{p.quote}</p>
                                                </p>
                                            }

                                            </div>
                                        </div>


                                        )
                                    })}

                                </div>
                            }

                            {
                                c.includes('partner-lab') && <div className='row'>
                                    {subset.sort((a, b) => {
                                        return a.name.localeCompare(b.name)
                                    }).sort((a, b) => {
                                        return a.position.localeCompare(b.position)
                                    }).map(p => {
                                        return (
                                            <div className='people-friends-card col-sm-6'>
                                                <div className='desktop-only' style={{ 'width': '100px' }}>
                                                    <img src={p.headshot} className='friends-logo'></img>
                                                </div>
                                                <div style={{ 'flexGrow': '1' }}>{
                                                    p.website != '' &&
                                                    <p><Card.Title><a href={p.website} target='_blank' className='people-name'>{p.name} &#8202;
                                                        <FiExternalLink className='icon-adjustment' /></a> </Card.Title>
                                                        <span className='people-position'>{p.position}</span>
                                                        <p class="people-info desktop-only"><br /></p>
                                                    </p>
                                                }

                                                </div>
                                            </div>
                                        )
                                    })}

                                </div>
                            }

                        </div>
                        )
                    })}

                </div>
                <br></br>
            </div>
        )
    }



}




export default People;