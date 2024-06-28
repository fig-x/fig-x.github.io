

import React, { Component } from 'react';
import { withRouter } from './withRouter.js';
import LabName from './LabName.js';
import "bootstrap/js/src/collapse.js";
import { FaCircleRight } from "react-icons/fa6";

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
        <div className="container-fluid" style={{'paddingLeft': 0}}>
            <a className="navbar-brand" href="#"><img src='fig.svg' style={{ 'width': '2rem' }}></img></a>
            {/* <div className="w-100 text-right  "> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#myNavbar" aria-controls="myNavbar" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
   
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="navbar-nav ms-auto flex-nowrap d-flex">
              <li className="nav-item">
                <a href="#"
                  className={this.props.activeItem == 'home-nav' ?
                    "nav-link m-2 menu-item nav-active" : "nav-link m-2 menu-item nav-none"}
                  onClick={() => {
                    // this.setState({ 'activeItem': 'home-nav' })
                    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
                      window.open('/', '_self')
                    } else {
                      window.open('/', '_self')
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
                      window.open('/research', '_self')
                    } else {
                      window.open('/research', '_self')
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
                      window.open('/people', '_self')
                    } else {
                      window.open('/people', '_self')
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
                      window.open('/publication', '_self')
                    } else {
                      window.open('/publication', '_self')
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
                      window.open('/artifact', '_self')
                    } else {
                      window.open('/artifact', '_self')
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
                      window.open('/workwithus', '_self')
                    } else {
                      window.open('/workwithus', '_self')
                    }
                  }}
                >Work with us</a>
              </li>
            </ul>
          </div></div>
      </nav>
    )
  }

}


export default Navigator;