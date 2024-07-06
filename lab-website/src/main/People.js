import React, { Component } from 'react';
import Navigator from '../code/Navigator.js';
import HeaderSpan from '../code/HeaderSpan.js';
import { _peoplepath } from '../code/helper.js'
// import * as d3 from 'd3'
import { Col, Card } from 'react-bootstrap';
import { FiExternalLink } from "react-icons/fi";


class People extends Component {

    state = {}
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        document.title = "People | FIGX"
        fetch(_peoplepath)
            .then(response => response.json())
            .then(rawdata => {
                this.setState({ peoplemap: rawdata.slice(0, 1) })
                let data =    rawdata.slice(1)
                    data.sort((a, b) => {
                    if (Math.abs(a.year - b.year) < 0.1) {
                        return a.month - b.month
                    }
                    return a.year - b.year
                })

                this.setState({ peopledata: data })

            });

    }

    componentDidUpdate() {
    }




    render() {
        return (
            <div className='page-content'>
                <div className='top-header border-bottom'>
                    <div className="container">
                        <Navigator activeItem='people-nav' />
                    </div>
                </div>
                {/* <HeaderSpan text='People' /> */}
                <div class="container">
                    <div id='people' class="row">

                        {this.state && this.state.peoplemap && this.state.peopledata && Object.keys(this.state.peoplemap[0]).map(c => {

                            let subset = this.state.peopledata.filter(p => p.category === c)
                            return (subset.length > 0 && <div>
                                <div className='padding-top' ></div>
                                <h2>{this.state.peoplemap[0][c]}</h2>
                                {subset.map(p => {
                                    return (<Card className='people-card' >
                                        <p style={{padding:'10px'}}><Card.Img variant="top" src={p.headshot} alt={p.name} className='headshot' /></p>
                                        <Card.Title id = {p.nickname}>
                                            {p.website != '' && <a href={p.website} target='_blank' className='people-name'>{p.name} &#8202;
                                                <FiExternalLink className='icon-adjustment' /></a>}
                                            {p.website == '' && <span href={p.website} target='_blank' className='people-name'>{p.name} </span>}
                                        </Card.Title>
                                        <Card.Body>
                                            <p className='people-position'>{p.position}</p>
                                            <p className='people-info' dangerouslySetInnerHTML={{__html: p.quote}}/>
                                            {p.year && <p className='people-info'>Since {p.year}</p>}
                                        </Card.Body>
                                    </Card>)
                                })}
                            </div>
                            )
                        })}



                    </div>
                </div>
            </div>
        )
    }

}


export default People;