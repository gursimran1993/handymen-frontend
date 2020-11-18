import React, { Component } from "react"
import Banner from "./components/banner"
import SearchByCode from "./components/searchByCode"
import Services from "./components/services"
import WCU from "./components/wcu"
import About from "./components/about"
import Faq from "./components/faq"
import SpotlightBanner1 from "../../Assets/images/spotlight/1.svg"
import SpotlightBanner2 from "../../Assets/images/spotlight/2.svg"
import SpotlightBanner3 from "../../Assets/images/spotlight/3.svg"
import SpotlightBanner4 from "../../Assets/images/spotlight/4.svg"
import SpotlightBanner5 from "../../Assets/images/spotlight/5.svg"

const services = [
    { title: "Cleaning Services", img: "cleaning", id: 1 },
    { title: "Roof Services", img: "roof", id: 2 },
    { title: "Bathroom Installation & Repair", img: "bathroom", id: 3 },
    { title: "Computer Setup & Repair", img: "computer", id: 4 },
    { title: "Restoration Services", img: "restoration", id: 5 },
    { title: "Electronic Installation & Repair", img: "electrical", id: 6 }
]
const wcu = [
    { title: "Trustworthy Handymen", img: "trustworthy", content: "Our handymen are not only skillful, but also very trustworthy and commited to a good customer experience.", id: 1 },
    { title: "Customer First Business Model", img: "businessModel", content: "We value our customers and ensure that they have a good experience with our premium handymen services!", id: 2 },
    { title: "Quick Turnarounds", img: "quickTurnaround", content: "Get quick turnaround with regards to quotations, sharing requirements and getting your work done.", id: 3 }
]
class Home extends Component {
    render() {
        return (
            <div>
                <Banner>
                    <SearchByCode />
                </Banner>
                <div className="service-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-4">
                                <div className="service-content-wrapper">
                                    <div className="serv-divider"></div>
                                    <h2 className="service-heading ml-3">
                                        WE GIVE <br></br>
                                        OUR BEST SERVICES<br></br>
                                        FOR YOU
                                    </h2>
                                    <p className="service-text">
                                        Meet your service experts. Regardless of the size of your home, forget about any worries that come with maintaining it.
                                    </p>
                                    <button type="button" className="btn btn-outline-service">VIEW MORE SERVICES</button>
                                </div>
                            </div>
                            <div className="col-8">
                                <div className="row">
                                    <Services data={services} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="whyChooseUs-section">
                    <div className="container">
                        <div className="heading-container">
                            <h2 className="wcu-heading">Why Choose Us?</h2>
                            <p className="wcu-sub-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum nunc eu urna pulvinar vehicula. Donec molestie quam leo, eget tempus odio mollis in.</p>
                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8">
                                <div className="row">
                                    <WCU data={wcu} />
                                </div>
                            </div>
                            <div className="col-2"></div>
                        </div>
                    </div>
                </div>


                <div className="spotlight-section">
                    <div className="container">
                        <div className="heading-container">
                            <h2 className="wcu-heading">Services In Spotlight</h2>
                            <p className="wcu-sub-heading">Here are some of our spotlight services that are favoured a tad bit more  by our customers, be sure to check them out!</p>
                        </div>
                        <div className="row">
                            <div className="col-8">
                                <img src={SpotlightBanner1} style={{ width: "100%" }} />
                            </div>
                            <div className="col-4">
                                <img src={SpotlightBanner2} style={{ height: "278px" }} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <img src={SpotlightBanner3} style={{ width: "100%" }} />
                            </div>
                            <div className="col-4">
                                <img src={SpotlightBanner4} style={{ width: "100%" }} />
                            </div>
                            <div className="col-4">
                                <img src={SpotlightBanner5} style={{ width: "100%" }} />
                            </div>
                        </div>
                    </div>
                </div>
                <About />
                <Faq />
            </div>
        )
    }
}
export default Home