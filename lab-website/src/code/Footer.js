






import React, { Component } from 'react';
import { withRouter } from './withRouter.js';
import LabName from './LabName.js';
import * as d3 from 'd3';


class Footer extends Component {



    constructor(props) {
        super(props);
    }


    componentDidMount() {
        // this.createVis()
        Date.prototype.getMonthName = function () {
            let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            return months[this.getMonth()];
        };

        d3.select("#lastUpdate")
            .html(function () {
                var x = new Date(document.lastModified)
                return x.getMonthName() + " " + x.getFullYear()
            })
    }

    componentDidUpdate() {
        // this.createVis();
    }




    render() {
        return (

            <div className="container">
                <footer className="footer-bottom d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className=''>
                        {/* <hr style={{'width': '80%'}} className='float-center'/> */}
                        <p className='footer-span'>Copyright © <LabName /> <br />Last updated in <span id='lastUpdate'>x 2024</span></p></div>
                </footer >
            </div>

        )
    }

}


export default Footer;