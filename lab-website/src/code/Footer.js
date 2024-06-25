






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
            <footer className="text-muted py-5">
            <div className="container">
                {/* <p className="float-start">
                    <a href="#">Back to top</a>
                </p> */}
                <p>Copyright © <LabName /> | Updated in <span id='lastUpdate'>x 2024</span></p>
               
            </div>
        </footer>
        )
    }

}


export default Footer;