import React, { Component } from 'react';
import Navigator from '../code/Navigator.js';
import HeaderSpan from '../code/HeaderSpan.js';
import { _peoplepath } from '../code/helper.js'
// import * as d3 from 'd3'
import { Col, Card } from 'react-bootstrap';
import { FiExternalLink } from "react-icons/fi";

let arr = ['current', 'current-non-human', 'alumni']

let nameMap = {
    'current': 'Current',
    'current-non-human': 'Non-human',
    'alumni': 'Alumni'
}

class People extends Component {


    constructor(props) {
        super(props);
    }


    componentDidMount() {

        fetch(_peoplepath)
            .then(response => response.json())
            .then(data => {
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
            <div>
                <div className='top-header'>
                    <div className="container border-bottom">
                        <Navigator activeItem='people-nav' />
                    </div>
                </div>
                {/* <HeaderSpan text='People' /> */}
                <div class="container">
                    <div id='people' class="row">

                        {this.state && this.state.peopledata && arr.map(c => {

                            let subset = this.state.peopledata.filter(p => p.catergory === c)
    
                            return (subset.length > 0 && <div>
                                <div className='padding-top' ></div>
                                <h2>{nameMap[c]}</h2>
                                {subset.map(p => {
                                    return (<Card className='people-card'>

                                        <Card.Img variant="top" src={p.headshot} alt={p.name} className='headshot' />
                                        <Card.Title>
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