






import React, { Component } from 'react';
import { withRouter } from './withRouter.js';
import LabName from './LabName.js';
import * as d3 from 'd3';
import { VscGithub } from "react-icons/vsc";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

class Footer extends Component {

  state = {diff:0}

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        // this.createVis()
        Date.prototype.getMonthName = function () {
            let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            return months[this.getMonth()];
        };


        var x = new Date(document.lastModified)
        this.setState({ 'last': x.getMonthName() + " " + x.getFullYear() })

    }

    componentDidUpdate() {
       
    }




    render() {
    //     console.log(document.body.clientHeight + ',' +  window.innerHeight)
    //    if(document.body.clientHeight <  window.innerHeight)
    //         this.setState({'diff': document.body.clientHeight-window.innerHeight})
    //     else if(document.body.clientHeight > 10 + window.innerHeight) {
    //         this.setState({'diff': 0})
    //     }
    
        return (
            <div className=''>
                <div className='padding-top'></div>
                <footer className=" border-top d-flex flex-wrap bg-dark justify-content-between align-items-center py-3 ">
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-3 footer-bottom'>
                                Github <VscGithub className='icon-adjustment' /> 
                                <a href="https://github.com/fig-x" target='blank' className='plain-a'> fig-x</a>  <br />
                               Copyright © <LabName /> <br />
                                    Last update in {this.state && <span id='lastUpdate'>{this.state.last}</span>}
                                </div>   <div className='col-lg-3 footer-bottom'>
                                  Brendan Iribe Center 
                                  <br />8125 Paint Branch Drive
                                  <br />College Park, MD 20742 

                            </div>
                        </div>
                    </div>
                </footer >
              
                </div >


        )
    }

}


export default Footer;