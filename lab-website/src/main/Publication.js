import React, { Component } from 'react';
import Navigator from '../code/Navigator.js';
import HeaderSpan from '../code/HeaderSpan.js';
import { _publicationpath } from '../code/helper.js'
// import { BsFlower1 } from "react-icons/bs";
import { PiFilePdf, PiFiles, PiFile, PiPiggyBank, PiMouse, PiPinwheel, PiWarehouse, PiSparkle, PiMagicWand, PiMedal, PiMedalFill, PiSlideshow, PiMonitorPlay, PiCactus } from "react-icons/pi"
class Publication extends Component {

    state = { }

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        document.title = "Publication | FIGX"
        fetch(_publicationpath)
            .then(response => response.json())
            .then(data => {
                this.setState({ publicationmap: data.slice(0, 1)[0] }, () => {
                    // data = data.slice(1).sort((a, b) => {
                    //     return b.year - a.year
                    // })
                    this.setState({ publicationdata: data.slice(1) })
                })


            });


    }

    componentDidUpdate() {
    }



    render() {

        return (
            <div className='page-content'>

                <div className='top-header border-bottom'>
                    <div className="container">
                        <Navigator activeItem='publication-nav' />
                    </div>
                </div>
                {/* <HeaderSpan text='Publication' /> */}

                <div className="container">
                    <div className='padding-top'></div>
                    <div className='header-span'> Publication</div>

                    <div className='row'>
                        <div className='col-lg-12'>
                           We publish at Visualization, HCI, and Visual Computing journals and conferences, such as {this.state && this.state.publicationmap && this.state.publicationdata && Object.keys(this.state.publicationmap).sort().map((k, i) => {
                            return (
                               <span>{i ==  Object.keys(this.state.publicationmap).length - 1 && ' and'} <span className='paper-short-name'> {k} </span> <span className='paper-description '> ({this.state.publicationdata && this.state.publicationdata.filter(p => p.abbr && p.abbr === k).length})</span>{i <  Object.keys(this.state.publicationmap).length - 1 && ','}</span>
                            )
                           })}.
                           <p style={{'marginTop': '5px'}}>   <font class='figx-name-style'>Names with underline</font> indicate lab members,  
                           and  <sup class='snowflake'>❊</sup> indicates equal contributions.</p>
                         
                        </div>
             

                    </div>

                    {this.state && this.state.publicationdata && this.state.publicationdata.map(pub => {
                        return (
                            <div id={pub.paper_id}>
                                {pub.separator && <h2 className='padding-top'>{pub.separator}</h2>}
                                <div className='row paper-box'>


                                    {!pub.separator && <div className='col-lg-4 paper-thumbnail'><img className="img-thumbnail" src={pub.thumbnail} ></img></div>}
                                    {!pub.separator && <div className='col-lg-8 paper-body'>

                                        <h5 className='paper-title'>{pub.title} </h5>
                                        <p className='paper-people' dangerouslySetInnerHTML={{ __html: pub.people }} />

                                        {pub.description && <p className='paper-description'><q>{pub.description}</q></p>}
                                        <p className='paper-venue'><span className='paper-short-name'>{pub.abbr} {pub.year} </span>  <span className='sep-bar paper-long-name'>  | </span>
                                            <span className='paper-long-name'>{this.state.publicationmap[pub.abbr]} </span>{pub.awards && <span className='sep-bar'>  | </span>}
                                            {pub.awards && pub.awards.includes("Honorable") && <span className='paper-award'> <PiMedal /> {pub.awards}</span>}
                                            {pub.awards && pub.awards.includes("Best") && <span className='paper-award'> <PiMedalFill /> {pub.awards}</span>}</p>

                                        <p className='paper-info'>
                                            <span className='paper-info-inner'> <a href={pub.pdf} target='_blank'><PiFiles /><font className="paper-info-text"> paper</font></a></span>
                                            {pub.demo && <span className='paper-info-inner'> <a href={pub.demo} target='_blank'><PiSparkle /><font className="paper-info-text"> demo</font></a></span>}
                                            {pub.repo && <span className='paper-info-inner'> <a href={pub.repo} target='_blank'><PiMagicWand /><font className="paper-info-text"> suppl</font></a></span>}
                                            {pub.video && <span className='paper-info-inner'> <a href={pub.video} target='_blank'> <PiMonitorPlay /><font className="paper-info-text"> video</font></a></span>}
                                            {pub.doi && <span className='paper-info-inner'> <a href={pub.doi} target='_blank'> <PiPiggyBank /><font className="paper-info-text"> doi</font></a></span>}

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