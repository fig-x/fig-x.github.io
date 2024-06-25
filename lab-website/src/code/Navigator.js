

import React, { Component } from 'react';
import { withRouter } from './withRouter.js';
import LabName from './LabName.js';


class Navigator extends Component {

    // state = {'activeItem': 'home-nav'}

    constructor(props) {
        super(props);


    }


    componentDidMount() {
        // this.createVis()
    }

    componentDidUpdate() {
        // $(".nav .nav-link").on("click", function(){
        //     $(".nav").find(".active").removeclassName("active");
        //     $(this).addclassName("active");
        //  });
    }




    render() {
        // https://www.codeply.com/p/zzFC5XoyUm
        return (
            <nav className="navbar navbar-expand-lg">
                <div className="d-flex flex-grow-1">
                    <span className="w-100 d-lg-none d-block"></span>
                    <a className="navbar-brand d-none d-lg-inline-block" href="#"> <LabName /></a>
                    <div className="w-100 text-right">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
                <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
                    <ul className="navbar-nav ms-auto flex-nowrap">
                        <li className="nav-item">
                            <a href="#"
                                className={this.props.activeItem == 'home-nav' ?
                                    "nav-link m-2 menu-item nav-active" : "nav-link m-2 menu-item nav-none"}
                                onClick={() => {
                                    // this.setState({ 'activeItem': 'home-nav' })
                                    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
                                        window.open('/react-gh-pages/', '_self')
                                    } else {
                                        window.open('/Home', '_self')
                                    }

                                    //  this.forceUpdate()
                                }}
                            >Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className={this.props.activeItem == 'research-nav' ?
                                "nav-link m-2 menu-item nav-active" : "nav-link m-2 menu-item nav-none"}
                                onClick={() => {
                                    // this.setState({ 'activeItem': 'research-nav'})
                                    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
                                        window.open('/react-gh-pages/Research', '_self')
                                    } else {
                                        window.open('/Research', '_self')
                                    }
                                }}
                            >Research</a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className={this.props.activeItem == 'people-nav' ?
                                "nav-link m-2 menu-item nav-active" : "nav-link m-2 menu-item nav-none"}
                                onClick={() => {
                                    // this.setState({ 'activeItem': 'people-nav' })
                                    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
                                        window.open('/react-gh-pages/People', '_self')
                                    } else {
                                        window.open('/People', '_self')
                                    }
                                }}
                            >People</a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className={this.props.activeItem == 'publication-nav' ?
                                "nav-link m-2 menu-item nav-active" : "nav-link m-2 menu-item nav-none"}
                                onClick={() => {
                                    // this.setState({ 'activeItem': 'publication-nav' })
                                    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
                                        window.open('/react-gh-pages/Publication', '_self')
                                    } else {
                                        window.open('/Publication', '_self')
                                    }
                                }}
                            >Publication</a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className={this.props.activeItem == 'artifact-nav' ?
                                "nav-link m-2 menu-item nav-active" : "nav-link m-2 menu-item nav-none"}
                                onClick={() => {
                                    // this.setState({ 'activeItem': 'artifact-nav' })
                                    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
                                        window.open('/react-gh-pages/Artifact', '_self')
                                    } else {
                                        window.open('/Artifact', '_self')
                                    }
                                }}
                            >Artifact</a>
                        </li>

                        <li className="nav-item">
                            <a href="#" className={this.props.activeItem == 'workwithus-nav' ?
                                "nav-link m-2 menu-item nav-active" : "nav-link m-2 menu-item nav-none"}
                                onClick={() => {
                                    // this.setState({ 'activeItem': 'workwithus-nav' })
                                    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
                                        window.open('/react-gh-pages/Workwithus', '_self')
                                    } else {
                                        window.open('/Workwithus', '_self')
                                    }
                                }}
                            >Work with us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }

}


export default Navigator;