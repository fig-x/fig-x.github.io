import React, { Component } from 'react';
import { withRouter } from '../code/withRouter.js';
import HeaderSpan from '../code/HeaderSpan.js';
import { GiTurtle } from "react-icons/gi";
import Navigator from '../code/Navigator.js';
import NormalA from '../code/NormalA.js';

class Workwithus extends Component {



    constructor(props) {
        super(props);
    }


    componentDidMount() {
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
                        <Navigator activeItem='workwithus-nav' />
                    </div>
                </div>
                {/* <HeaderSpan text='Work with us'/> */}
                <div class="container">
                    <div class="row">
                        <div className='padding-top' />
                        <h1>The Seaweeds &#x1f422; want  more friends...</h1>
                        <p>
                            We are actively seeking talented students and researchers to enrich our lab!
                            <br />
                            See below for information for potential postdoctoral scholars, Ph.D. students, 
                            and Master's or undergrad research assistants or volunteers.
                        </p>

                        <div className=''>
                            <h2>Existing Masters' or undergraduate students</h2>

                            <p> If you are a current Master's or undergraduate student at UMD, we would love you to work with us.
                                You are likely to take on your own project(s).
                                We offer opportunities for independent study, paid research positions, and summer internships.
                                Please <b>fill out <NormalA href="https://forms.gle/3kGiWskRw4zoau5EA" text="this interest form" /></b>. 
                                We will contact you if we think this is a good match.
                            </p>
                        </div>
                        <div className=''>
                            <h2>Prospective Ph.D. students</h2>
                            <p>


                                We encourage applications from candidates with degrees in computer science and related disciplines. 
                                Applicants from diverse academic backgrounds, such as statistics, communication, or journalism, are also welcome to apply.

                            </p>
                            <p>
                                Our current interests include <b>uncertainty communication</b>, <b>AI literacy</b>, and <b>decision-making</b>.
                                We encourage you to familiarize yourself with our lab's work before applying, 
                                so you can demonstrate how your interests or experiences align with ours.
                            </p>
                            <p>
                                Candidates are expected to have <b>at least basic skills in mathematics/statistics and programming</b>. 
                                We are committed to guiding each student toward a trajectory that aligns with their own background and professional goals. 
                                Please note, a complete lack of programming skills or significant discomfort with mathematics would hinder your progress.
                                 Above all, <b>a strong motivation and a keen interest</b>  in pursuing research are paramount.

                            </p>

                            <p>
                                The application deadline is <b><NormalA href="https://www.cs.umd.edu/grad/catalog" text="December 20" /></b>. 
                                You can drop Fumeng an email about your application, though it probably won't influence the decision-making process too much.
                                Additionally, in the U.S. academic system, students who maintain good standing are typically funded throughout 
                                their Ph.D. program via teaching assistantships (TA), research assistantships (RA), or fellowships.

                            </p>
                        </div>
                        <div className=''>
                            <h2>Prospective postdoctoral scholars</h2>
                            <p> If you have your own funding or are interested in co-applying for fundings, please directly contact Fumeng. 
                                Otherwise, we only consider candidates who have previously collaborated with us, and when there is a clear potential for significant synergy. </p>
                        </div>
                        {/* 
                        <div className=''>
                            <h2>Collabration</h2>
                            <p> If you want to invite our lab member to work on a project, please direct </p>
                        </div> */}
                    </div>
                </div>
                <br />
            </div>
        )
    }

}


export default Workwithus;