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
        console.log(this.state.peopledata)
        return (
            <div className='page-content'>
                <div className='top-header border-bottom'>
                    <div className="container">
                        <Navigator activeItem='people-nav' showlogo={true} />
                    </div>
                </div>
                <div className="container">
                    <div className='padding-top'></div>
                    <div className='header-span'>People</div>

                    {this.state && this.state.peoplemap && this.state.peopledata && Object.keys(this.state.peoplemap[0]).map((c, i) => {
                        let subset = this.state.peopledata.filter(p => p.category === c)
                        if (subset.length === 0) return null

                        // Sort logic
                        if (c.includes('alumni') || c.includes('partner-lab')) {
                            subset.sort((a, b) => a.position.localeCompare(b.position) || a.name.localeCompare(b.name))
                        } else if (c.includes('student-col')) {
                            subset.sort((a, b) => {
                                if (a.graduated && b.graduated) return a.graduated.localeCompare(b.graduated)
                                const aLast = a.name.split(' ').pop().replace(/"/g, '')
                                const bLast = b.name.split(' ').pop().replace(/"/g, '')
                                return aLast.localeCompare(bLast)
                            })
                        }

                        return (
                            <div key={c}>
                                <h2 className='sub-span padding-top'>{this.state.peoplemap[0][c]}</h2>
    

                                {c.includes('current') ? (
                                    <div id={c} className="row">
                                        {subset.map(p => (
                                            <Card key={p.nickname || p.name} className='people-card'>
                                                <p style={{ padding: '15px' }}>
                                                    <Card.Img variant="top" src={p.headshot} alt={p.name} className='headshot' />
                                                </p>
                                                <div style={{ paddingLeft: '10px' }} className='people-text'>
                                                    <Card.Title id={p.nickname}>
                                                        {p.website ? (
                                                            <a href={p.website} target='_blank' rel='noopener noreferrer' className='people-name'>
                                                                {p.name} <FiExternalLink className='icon-adjustment' />
                                                            </a>
                                                        ) : (
                                                            <span className='people-name'>{p.name}</span>
                                                        )}
                                                    </Card.Title>
                                                    <Card.Body>
                                                        <p className='people-position'>{p.position}</p>
                                                        {p.quote && <p className='people-info' dangerouslySetInnerHTML={{ __html: p.quote }} />}
                                                        {p.year && <p className='people-info'>{p.year}</p>}
                                                    </Card.Body>
                                                </div>
                                            </Card>
                                        ))}
                                    </div>
                                ) : (
                                    <div className='row'>
                                        {subset.map(p => (
                                            <div key={p.name} className='people-friends-card col-sm-6'>
                                                <div className='desktop-only' style={{ width: '100px' }}>
                                                    <img src={p.headshot} alt={p.name} className='friends-logo' />
                                                </div>
                                                <div style={{ flexGrow: 1 }}>
                                                    {p.website ? (
                                                        <p>
                                                            <Card.Title>
                                                                <a href={p.website} target='_blank' rel='noopener noreferrer' className='people-name'>
                                                                    {p.name} <FiExternalLink className='icon-adjustment' />
                                                                </a>
                                                            </Card.Title>
                                                            <span className='people-position'>{p.position}</span>
                                                            {p.quote && !c.includes('partner-lab') && <p className="people-info">{p.quote}</p>}
                                                            {c.includes('partner-lab') && <p className="people-info desktop-only"><br /></p>}
                                                        </p>
                                                    ) : (
                                                        <span className='people-name'>{p.name}</span>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
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
