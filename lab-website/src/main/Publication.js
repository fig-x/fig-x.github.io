import React, { Component } from 'react';
import Navigator from '../code/Navigator.js';
import HeaderSpan from '../code/HeaderSpan.js';
import { _publicationpath } from '../code/helper.js'
// import { BsFlower1 } from "react-icons/bs";
import { PiFilePdf, PiFiles, PiFile, PiPiggyBank, PiMouse, PiPinwheel, PiWarehouse, PiSparkle, PiMagicWand, PiMedal, PiMedalFill, PiSlideshow, PiMonitorPlay, PiCactus } from "react-icons/pi"
class Publication extends Component {

    state = { 'saidthat': false }

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        fetch(_publicationpath)
            .then(response => response.json())
            .then(data => {
                this.setState({ publicationmap: data.slice(0, 1)[0] }, () => {
                    data = data.slice(1).sort((a, b) => {
                        return b.year - a.year
                    })
                    this.setState({ publicationdata: data })
                })


            });


    }

    componentDidUpdate() {
    }



    render() {

        return (
            <div>

                <div className='top-header'>
                    <div className="container border-bottom">
                        <Navigator activeItem='publication-nav' />
                    </div>
                </div>
                {/* <HeaderSpan text='Publication' /> */}

                <div className="container">
                    <div className='padding-top'></div>
                    <p>   <font class='figx-name-style'>Names with  underline</font> indicate lab members.</p>
                    {this.state && this.state.publicationdata && this.state.publicationdata.map(pub => {
                        return (
                            <div>
                                {pub.separator && <h2 className='padding-top'>{pub.separator}</h2>}
                                <div className='row paper-box'>


                                    {!pub.separator && <div className='col-lg-4 paper-thumbnail'><img src={pub.thumbnail} className='img-thumbnail'></img></div>}
                                    {!pub.separator && <div className='col-lg-8 paper-body'>

                                        <h5 className='paper-title'>{pub.title} </h5>
                                        <p className='paper-people' dangerouslySetInnerHTML={{ __html: pub.people }} />

                                        {pub.description && <p className='paper-description'><q>{pub.description}</q></p>}
                                        <p className='paper-venue'><span className='paper-short-name'>{pub.abbr} {pub.year} </span>  <span className='sep-bar paper-long-name'>  | </span>
                                            <span className='paper-long-name'>{this.state.publicationmap[pub.abbr]} </span>{pub.awards && <span className='sep-bar'>  | </span>}
                                            {pub.awards && !pub.awards.includes("Best") && <span className='paper-award'> <PiMedal /> {pub.awards}</span>}
                                            {pub.awards && pub.awards.includes("Best") && <span className='paper-award'> <PiMedalFill /> {pub.awards}</span>}</p>

                                        <p className='paper-info'>
                                            <span> <a href={pub.pdf}><PiFiles /> <font className="paper-info-text">paper</font></a> </span>
                                            {pub.demo && <span> <a href={pub.demo}><PiSparkle /> <font className="paper-info-text">demo</font></a> </span>}
                                            {pub.repo && <span> <a href={pub.repo}><PiMagicWand /> <font className="paper-info-text">suppl</font></a> </span>}
                                            {pub.video && <span> <a href={pub.video}> <PiMonitorPlay /> <font className="paper-info-text">video</font></a> </span>}
                                            {pub.doi && <span> <a href={pub.doi}> <PiPiggyBank /> <font className="paper-info-text">doi</font></a> </span>}

                                        </p>
                                        {/* {<p className='paper-header'>  <font className="paper-info-text">{pub.nickname}</font> </p>} */}
                                    </div>}
                                </div>   </div>
                        )

                    })}
                </div>
            </div>
        )
    }

}


export default Publication;