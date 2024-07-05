import React, { Component } from 'react';
import { withRouter } from '../code/withRouter.js';

import HeaderSpan from '../code/HeaderSpan.js';
import Navigator from '../code/Navigator.js';
import InternalA from '../code/InternalA.js';
import { _publicationpath, _researchpath } from '../code/helper.js'
import { Col, Card } from 'react-bootstrap';
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

//     render() {
//         if (this.state.researchdata) console.log(this.state.researchdata)
//         return (
//             <div className='page-content'>
//                 <div className='top-header border-bottom'>
//                     <div className="container">
//                         <Navigator activeItem='research-nav' />
//                     </div>
//                 </div>
//                 <div class="container">
//                     <div className='padding-top' />
//                     <div className='header-span'> Research area</div>
//                     <p>Our research lab has broad interests and extensive collaborations. Below we summarize a few focused research areas. </p>
//                     <div className='padding-top' />
//                     <div className='row'>
//                         {this.state.researchdata && this.state.publicationdata &&

//                             this.state.researchdata.map((area, i) => {
//                                 let papers = this.state.publicationdata.filter(p => {
//                                     return p.paper_id && area.paper.includes(p.paper_id)
//                                 })

//                                 return (
//                                     <div >
                            
//                                         <h2 className='research-title'>{area.area.includes('AI') && <PiRobot className='icon-right-adjustment ' />}
//                                             {area.area.includes('Trust') && <PiHandshake className='icon-right-adjustment ' />}
//                                             {area.area.includes('Uncertainty') && <PiBrain className='icon-right-adjustment ' />}
//                                             {area.area.includes('Visualization Literacy') && <PiChartBar className='icon-right-adjustment ' />}
//                                             {area.area.includes('Immersive') && <PiButterfly className='icon-right-adjustment ' />}
//                                             {area.area.includes('Perception') && <PiEye className='icon-right-adjustment ' />} {area.area} </h2>
//                                         <div className='row'>
//                                             {papers.length > 0 && <div style={{'height': '35px'}}/>}

//                                             <div className='col-lg-6'>
//                                                 {papers.reverse().map(p => { return (<img className='imagecard' src={p.thumbnail} />) })}
//                                             </div>
                                          
                                          
//                                             <div className='col-lg-6'>

//                                             <p className='research-description'>{area.description}</p>

//                                             {papers.sort((a, b) => { return (a - b) }).reverse().map(p => {
//                                                 return (<p className='paper-small-title'>  <font className='paper-short-name'>{p.abbr + ' ' + p.year}</font>
//                                                     <span className='sep-bar paper-short-name'>  | </span>

//                                                     <InternalA className="" text={p.title} href={"./publication/#" + p.paper_id} />

//                                                     <br />   </p>)
//                                             })}
//  <br />   
// </div> <br />   
//                                     </div>   <br />   </div>
//                                 )
//                             })
//                         }
//                     </div>
//                 </div>
//             </div>

//         )
//     }

// }



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
                    <div className='padding-top' />
                    <div className='row'>
                        {this.state.researchdata && this.state.publicationdata &&

                            this.state.researchdata.map((area, i) => {
                                let papers = this.state.publicationdata.filter(p => {
                                    return p.paper_id && area.paper.includes(p.paper_id)
                                })

                                return (
                                    <div className={'research-area-card-' + (i%2)}>
                                        <h2 className='research-title'>{area.area.includes('AI') && <PiRobot className='icon-right-adjustment ' />}
                                            {area.area.includes('Trust') && <PiHandshake className='icon-right-adjustment ' />}
                                            {area.area.includes('Uncertainty') && <PiBrain className='icon-right-adjustment ' />}
                                            {area.area.includes('Visualization Literacy') && <PiChartBar className='icon-right-adjustment ' />}
                                            {area.area.includes('Immersive') && <PiButterfly className='icon-right-adjustment ' />}
                                            {area.area.includes('Perception') && <PiEye className='icon-right-adjustment ' />} {area.area} </h2>
                                        <Card className={'research-area-card-inner'}>
                                            {/* <span className='side-stick-long'></span> */}
                                            {/* <div className=''>
                                                {area.area.includes('AI') && <PiRobot className='icon-right-adjustment ' />}
                                                {area.area.includes('Trust') && <PiHandshake className='icon-right-adjustment ' />}
                                                {area.area.includes('Uncertainty') && <PiBrain className='icon-right-adjustment ' />}
                                                {area.area.includes('Visualization Literacy') && <PiChartBar className='icon-right-adjustment ' />}
                                                {area.area.includes('Immersive') && <PiButterfly className='icon-right-adjustment ' />}
                                                {area.area.includes('Perception') && <PiEye className='icon-right-adjustment ' />}
                                            </div> */}
                                            {papers.length > 0 && <div style={{'height': '5px'}}/>}

                                            <div className='container'>
                                                {papers.reverse().map(p => { return (<img className='imagecard' src={p.thumbnail} />) })}
                                            </div>
                                            {papers.length > 0 && <br />}

                                            <p className='research-description'>{area.description}</p>

                                            {papers.sort((a, b) => { return (a - b) }).reverse().map(p => {
                                                return (<p className='paper-small-title'>  <font className='paper-short-name'>{p.abbr + ' ' + p.year}</font>
                                                    <span className='sep-bar paper-short-name'>  | </span>

                                                    <InternalA className="" text={p.title} href={"./publication/#" + p.paper_id} />

                                                    <br />   </p>)
                                            })}

                                        </Card >
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        )
    }

}


export default Research;