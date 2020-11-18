import React, { Component } from "react"
import About1 from "../../../Assets/images/about/about1.svg"
import About2 from "../../../Assets/images/about/about2.svg"
import About3 from "../../../Assets/images/about/about3.svg"

class About extends Component {
    render() {
        return (
            <div className="service-section">
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <div className="row">
                                <div className="col-4 pr-0">
                                    <img src={About1} style={{ width: "inherit" }} />
                                </div>
                                <div className="col-4 pr-0 pl-0">
                                    <img src={About2} style={{ width: "inherit" }} />
                                </div>
                                <div className="col-4 pl-0">
                                    <img src={About3} style={{ width: "inherit" }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="service-content-wrapper">
                                <div className="serv-divider"></div>
                                <h2 className="service-heading ml-3">
                                    ABOUT <br></br>
                                    DEIN HAUSMAN<br></br>
                                </h2>
                                <p className="service-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum nunc eu urna pulvinar vehicula. Donec molestie quam leo, eget tempus odio mollis in.
                            </p>
                                <button type="button" className="btn btn-outline-service">GET IN TOUCH</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default About