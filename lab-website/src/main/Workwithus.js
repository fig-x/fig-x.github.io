import React, { Component } from 'react';
import { withRouter } from '../code/withRouter.js';
import HeaderSpan from '../code/HeaderSpan.js';
import { GiTurtle } from "react-icons/gi";
import Navigator from '../code/Navigator.js';
import NormalA from '../code/NormalA.js';
import InternalA from '../code/InternalA.js';
import { PiHandshake, PiStudent, PiBarbell, PiCaretLeft, PiCaretRight, PiX } from "react-icons/pi";
import { GiTurtleShell } from "react-icons/gi";

const swagImages = [
    { src: 'swags/stickers logos.png',                caption: 'FIGX logo stickers, a staple at every conference we attend.' },
    { src: 'swags/heat transfer stickers.png',         caption: 'Custom heat-transfer stickers for lab gear and shirts.' },
    { src: 'swags/cap, lanyard, magnet, badge.png',    caption: 'Caps, lanyards, and badges for conference outfits.' },
    { src: 'swags/white tote bags and key chains.png', caption: 'Tote bags and key chains for lab members.' },
    { src: 'swags/more white tote bags.png',           caption: 'You can never have enough tote bags.' },
    { src: 'swags/black tote bags and mugs.png',      caption: 'Black tote bags and mugs for those who have a different taste.' },
    { src: 'swags/badge for paper (ripplet).png',      caption: 'A custom badge for each paper.' },
    { src: 'swags/alternative logo stickers.png',      caption: 'Alternative logo sticker sheets for those who can\'t pick a favorite.' },
]

class Workwithus extends Component {

    swagRef = React.createRef()
    state = { lightbox: null, lightboxClosing: false }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = "FIGX | Work with us"
        this.startScroll()
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.scrollRAF)
    }

    componentDidUpdate() { }

    startScroll = () => {
        const tick = () => {
            const el = this.swagRef.current
            if (el) {
                el.scrollLeft += 0.2
                if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0
            }
            this.scrollRAF = requestAnimationFrame(tick)
        }
        this.scrollRAF = requestAnimationFrame(tick)
    }

    pauseScroll  = () => cancelAnimationFrame(this.scrollRAF)
    resumeScroll = () => this.startScroll()

    scrollBy = (dir) => {
        const el = this.swagRef.current
        if (!el) return
        this.pauseScroll()
        const start = el.scrollLeft
        const target = start + dir * 300
        const duration = 450
        const startTime = performance.now()
        const animate = (now) => {
            const progress = Math.min((now - startTime) / duration, 1)
            const ease = 1 - Math.pow(1 - progress, 3)
            el.scrollLeft = start + (target - start) * ease
            if (progress < 1) {
                requestAnimationFrame(animate)
            } else {
                this.resumeScroll()
            }
        }
        requestAnimationFrame(animate)
    }

    openLightbox = (item) => {
        this.pauseScroll()
        this.setState({ lightbox: item })
    }

    closeLightbox = () => {
        this.setState({ lightboxClosing: true })
    }

    onLightboxAnimEnd = () => {
        if (this.state.lightboxClosing) {
            this.setState({ lightbox: null, lightboxClosing: false })
            this.resumeScroll()
        }
    }

    render() {
        const { lightbox, lightboxClosing } = this.state
        return (
            <div className='page-content'>
                <div className='top-header border-bottom'>
                    <div className="container">
                        <Navigator activeItem='workwithus-nav' showlogo={true}/>
                    </div>
                </div>
                                <div className="container">
                    <div className='swag-header'>
                        <div className='header-span'>Lab Swags</div>
                        <div className='swag-controls'>
                            <button className='swag-arrow' onClick={() => this.scrollBy(-1)}><PiCaretLeft /></button>
                            <button className='swag-arrow' onClick={() => this.scrollBy(1)}><PiCaretRight /></button>
                        </div>
                    </div>
                    <p>
                        Designed by us, for us — official logo pattern aside. Lab membership has perks, but you have to earn them. :-)
                        </p>
                    <div className='swag-marquee-wrapper' ref={this.swagRef}
                        onMouseEnter={this.pauseScroll}
                        onMouseLeave={this.resumeScroll}>
                        <div className='swag-track'>
                            {[...swagImages, ...swagImages].map((item, i) => (
                                <div key={i} className='swag-card' onClick={() => this.openLightbox(item)}>
                                    <img src={item.src} alt='lab swag' className='swag-img' />
                                    <div className='swag-caption'>{item.caption}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <br/>
                </div>

                {lightbox && (
                    <div className={`swag-lightbox${lightboxClosing ? ' closing' : ''}`} onClick={this.closeLightbox}>
                        <button className='swag-lightbox-close' onClick={this.closeLightbox}><PiX /></button>
                        <div className='swag-lightbox-content' onClick={e => e.stopPropagation()} onAnimationEnd={this.onLightboxAnimEnd}>
                            <img src={lightbox.src} alt='lab swag' className='swag-lightbox-img' />
                            <p className='swag-lightbox-caption'>{lightbox.caption}</p>
                        </div>
                    </div>
                )}

                <div className="container">
                    <div className="row">
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
                                <h2 className='research-title'>Prospective Ph.D. students </h2>
                                <div className='flyer-inner'>
                                   <p>
                                   We connect <b>computational models</b>—AI, machine learning, and probabilistic forecasts—with users in domains like <b>education, healthcare, policymaking, and politics</b>. We are particularly interested in  <b>AI literacy, human-AI decision-making, human-AI interaction, and uncertainty visualization</b> (alphabetically).
                                    </p>
                                    <p>
                                    We welcome applicants with degrees in computer science and related disciplines.
                                    Our focus is on HCI and Visualization, so applicants primarily interested in AI/ML/NLP may not find the best fit here.
                                    </p>
                                    <p>
                                        The application deadline for fall27 is <b><NormalA href="https://www.cs.umd.edu/grad/apply" text="December 4, 2026" /></b>.
                                        UMD CS utilizes an admission committee for reviewing applications.
                                        Make sure to mention Fumeng as the faculty of interest when you apply.
                                        Additionally,  UMD CS students who maintain good standing are typically funded throughout
                                        their Ph.D. program via teaching assistantships (TA), research assistantships (RA), or fellowships.
                                    </p>
                                    <p>
                                      <b>About emails</b>: While I welcome emails from prospective students, please be mindful that I receive hundreds of similar inquiries every year.
                                      A single, short email with clear objectives is usually sufficient. I appreciate persistence, but sometimes no answer is an answer.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-6'>
                            <div className='flyer'>
                                <h2 className='research-title'>Existing Masters' or undergraduate students </h2>
                                <div className='flyer-inner'>
                                    <p> If you are a current Master's or undergraduate student at UMD,
                                        please <b><NormalA href="https://forms.gle/3kGiWskRw4zoau5EA" text="fill out this interest form" /></b> and mention your project interests.
                                        We will contact you if we think this is a good match.
                                    </p>
                                </div>
                            </div>
                            <div className='flyer'>
                                <h2 className='research-title'>Prospective postdoctoral scholars</h2>
                                <div className='flyer-inner'>
                                    <p> If you have your own funding or are interested in co-applying for fundings, please directly contact Fumeng.
                                        Otherwise, we only consider candidates who have previously collaborated with us.</p>
                                </div>
                            </div>
                            <div className='flyer'>
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
