import React, { Component } from 'react';
import { withRouter } from '../code/withRouter.js';
import HeaderSpan from '../code/HeaderSpan.js';
import { GiTurtle } from "react-icons/gi";
import Navigator from '../code/Navigator.js';
import NormalA from '../code/NormalA.js';
import InternalA from '../code/InternalA.js';
import { PiHandshake, PiStudent, PiBarbell } from "react-icons/pi";
import { GiTurtleShell } from "react-icons/gi";
class Workwithus extends Component {



    constructor(props) {
        super(props);
    }


    componentDidMount() {
                document.title = "FIGX | Work with us"
        // this.createVis()
    }

    componentDidUpdate() {
        // this.createVis();
    }



    render() {
        return (
            <div className='page-content'>
                <div className='top-header border-bottom'>
                    <div className="container">
                        <Navigator activeItem='workwithus-nav' showlogo={true}/>
                    </div>
                </div>
                {/* <HeaderSpan text='Work with us'/> */}
                <div class="container">
                    <div class="row">
                        <div className='padding-top' />
                        <div className='header-span'>The <InternalA href="./people#theseaweeds" text="Seaweeds"/> &#x1f422; want  more friends...</div>
                        <p>
                            We are actively seeking talented students and researchers to enrich our group!
                            <br />
                            See below for information for potential postdoctoral scholars, Ph.D. students,
                            and Master's or undergrad research assistants or volunteers.
                        </p>
                        <div className='padding-top' />
                        <div className='col-lg-6'>
                            <div className='flyer'>
                                {/* <span className='side-stick'></span> */}
                                <h2 className='research-title'>Prospective Ph.D. students </h2>
                                <div className='flyer-inner'>
                                    <p>
                                        We encourage applications from candidates with degrees in computer science and related disciplines.
                                        We also welcome applicants from other backgrounds, including but not limited to psychology, communication, and journalism.

                                    </p>
                                    <p>
                                        Our current interests include <b>uncertainty communication</b>, <b>AI literacy</b>, <b>decision-making</b>, and  <b>model explanation</b>.
                                        Other topics related to information visualization, HCI, and visual computing are also possible.
                                        We encourage you to familiarize yourself with our lab's work before applying,
                                        so you can show how your interests or experiences align with ours.
                                    </p>
                                    <p>
                                        Candidates are expected to have <b>at least basic skills in mathematics/statistics and programming</b>.
                                        We are committed to guiding each student toward a path that aligns with their background and goals.
                                        However, a complete lack of programming skills or severe discomfort with mathematics would significantly hinder your progress.
                                        Above all, <b>self-motivation and a keen interest</b> in pursuing research are paramount.

                                    </p>

                                    <p>
                                        The application deadline is <b><NormalA href="https://www.cs.umd.edu/grad/catalog" text="December 20" /></b>.
                                        Make sure to mention Fumeng as the faculty of interest when you apply. 
                                        You could drop Fumeng an email about your application, though it probably won't influence the decision-making process too much.

                                    </p>
                                    <p>
                                        Additionally,  UMD CS students who maintain good standing are typically funded throughout
                                        their Ph.D. program via teaching assistantships (TA), research assistantships (RA), or fellowships.

                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='flyer'>
                                {/* <span className='side-stick'></span> */}
                                <h2 className='research-title'>Existing Masters' or undergraduate students </h2>
                                <div className='flyer-inner'>
                                    <p> If you are a current Master's or undergraduate student at UMD, we would love to have you in our lab.  
                                        We offer opportunities for independent study, paid research positions, and summer internships.
                                        Please <b>fill out <NormalA href="https://forms.gle/3kGiWskRw4zoau5EA" text="this interest form" /></b>.
                                        We will contact you if we think this is a good match.
                                    </p>
                                </div>
                            </div>
                            <div className='flyer'>
                                {/* <span className='side-stick'></span> */}
                                <h2 className='research-title'>Prospective postdoctoral scholars</h2>
                                <div className='flyer-inner'>
                                    <p> If you have your own funding or are interested in co-applying for fundings, please directly contact Fumeng.
                                        Otherwise, we only consider candidates who have previously collaborated with us, and when there is a clear potential for significant synergy. </p>
                                </div></div>
                            <div className='flyer'>
                                {/* <span className='side-stick'></span> */}
                                <h2 className='research-title'>Other opportunities </h2>
                                <div className='flyer-inner'>
                                    <p> We welcome both on-campus and external collaborations. If interested, please reach out directly to the person you want to collaborate with.  <br/>
                                        We are also open to hosting summer or visiting students. Bringing a plan will help ensure a productive experience. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        )
    }

}


export default Workwithus;