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


                    {this.state && this.state.peoplemap && this.state.peopledata && Object.keys(this.state.peoplemap[0]).map((c, i) => {

                        let subset = this.state.peopledata.filter(p => p.category === c)

                        return (subset.length > 0 && <div>
                            <div className='padding-top' ></div>
                            <h2 className='header-span'>{this.state.peoplemap[0][c]}</h2>
                            <br />
                            {c.includes('current') && <div id={'people' + i} class="row">

                                {subset.map(p => {
                                    return (<Card className='people-card' style={{ 'backgroundColor': 'transparent' }} >
                                        <p style={{ padding: '15px' }}><Card.Img variant="top" src={p.headshot} alt={p.name} className='headshot' /></p>
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
                                    </Card>)
                                })}
                            </div>
                            }
                            {
                                !c.includes('current') && <div>

                                    {subset.sort((a, b) => {
                                        return a.position.localeCompare(b.position)
                                    }).map(p => {
                                        return (<div className='people-friends-card containter'>
                                         <div className='row'>
                                            <div className='col-sm-1 desk-only'>
                                            <img src={p.headshot} className='friends-logo'></img>
                                            </div>
                                            <div className='col-sm-11' >{
                                                p.website != '' &&
                                                <p><a href={p.website} target='_blank' className='paper-title people-name'>{p.name} &#8202;
                                                    <FiExternalLink className='icon-adjustment' /></a> <br />
                                                    <span className='people-position'>{p.position}</span>
                                                </p>
                                            }
                                                {p.website == '' &&
                                                    <span href={p.website} target='_blank' className='people-name'>{p.name}</span>}
                                            </div>


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