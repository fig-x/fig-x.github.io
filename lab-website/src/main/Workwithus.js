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
                                        Our primary areas are <b>Human-Computer Interaction</b> (HCI)  and <b>Information Visualization</b>.
                                        Current interests include <b>uncertainty communication</b>, <b>AI literacy</b>, <b>decision-making</b>, and  <b>model explanation</b>.
                                        We encourage you to familiarize yourself with our lab's work before applying,
                                        so you can show how your interests or experiences align with ours.
                                    </p>
                                    <p>
                                    We welcome applications from candidates with degrees in computer science and related disciplines. 
                                    Candidates are expected to have <b>at least basic skills in mathematics/statistics and programming</b>.
                                        We are committed to guiding each student toward a path that aligns with their background and goals.
                                        However, a complete lack of programming skills or severe discomfort with mathematics would significantly hinder your progress.
                                        Above all, <b>self-motivation and a keen interest</b> in pursuing research are paramount.

                                    </p>

                                    <p>
                                        The application deadline is <b><NormalA href="https://www.cs.umd.edu/grad/apply" text="December 20" /></b>.
                                        UMD CS utilizes an admission committee for reviewing applications. 
                                        Make sure to mention Fumeng as the faculty of interest when you apply. 
                                     
                                    </p>
                                
                                    <p>
                                        Additionally,  UMD CS students who maintain good standing are typically funded throughout
                                        their Ph.D. program via teaching assistantships (TA), research assistantships (RA), or fellowships.

                                    </p>
                                    <p>
                                      <b>About emails</b>: While I welcome emails from prospective students, please be mindful that I receive hundreds of similar inquiries. 
                                      I read all but may not be able to respond to each. 
                                      A single, short email with clear objectives is sufficient. There's no need for many follow-ups about the same inquiry. 
                                      
                                    </p>
                                </div>
                            </div>

                            </div>

                        <div className='col-lg-6'>
                            <div className='flyer'>
                                {/* <span className='side-stick'></span> */}
                                <h2 className='research-title'>Existing Masters' or undergraduate students </h2>
                                <div className='flyer-inner'>
                                    <p> If you are a current Master's or undergraduate student at UMD, we can discuss opportunities for independent study, paid research positions, or summer internships.</p><p>
                                    We are currently seeking students for two projects:<br/>
                                    (1) <b>Election data analytics</b>, compiling and analyzing historical election datasets; and <br/>
                                    (2) <b> Medical AI explainability</b>, applying explainable AI techniques to cancer prediction models.
                                   </p>
                                   <p>
                                        Please <b><NormalA href="https://forms.gle/3kGiWskRw4zoau5EA" text="fill out this interest form" /></b> and mention your project interests.
                                        We will contact you if we think this is a good match. Expect a turnaround time of 2 to 6 weeks.
                                    </p>
                                </div>
                            </div>
                            <div className='flyer'>
                                {/* <span className='side-stick'></span> */}
                                <h2 className='research-title'>Prospective postdoctoral scholars</h2>
                                <div className='flyer-inner'>
                                    <p> If you have your own funding or are interested in co-applying for fundings, please directly contact Fumeng.
                                        Otherwise, we only consider candidates who have previously collaborated with us.</p>
                                        {/* , and when there is a clear potential for significant synergy.  */}
                                </div>
                            </div>
                           
               
                      
                      
                            <div className='flyer'>
                                {/* <span className='side-stick'></span> */}
                                <h2 className='research-title'>Other opportunities </h2>
                                <div className='flyer-inner'>
                                    <p> We welcome both on-campus and external collaborations. If interested, please reach out directly via emails.  
                                        We are also open to hosting summer or visiting students. </p>
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