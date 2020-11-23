import React, { Component, Fragment } from "react"
import PostalCode from "../HomePage/components/searchByCode"
import Listing from "./components/listing"
import Service from "../HomePage/components/services"
const data = [
    { title: "Service Title Goes Here", handymanName: "Erika Hans", minPrice: "250", maxPrice: "450", reviewRating: "110", reviewPercentage: "4.68 ", listingImg: "tiles", column: "4", id: "1" },
    { title: "Service Title Goes Here", handymanName: "Erika Hans", minPrice: "250", maxPrice: "450", reviewRating: "110", reviewPercentage: "4.68 ", listingImg: "tiles", column: "4", id: "1" },
    { title: "Service Title Goes Here", handymanName: "Erika Hans", minPrice: "250", maxPrice: "450", reviewRating: "110", reviewPercentage: "4.68 ", listingImg: "tiles", column: "4", id: "1" }
]
const services = [
    { title: "Cleaning Services", img: "cleaning", id: 1 },
    { title: "Roof Services", img: "roof", id: 2 },
    { title: "Bathroom Installation & Repair", img: "bathroom", id: 3 },
    { title: "Computer Setup & Repair", img: "computer", id: 4 },
    { title: "Restoration Services", img: "restoration", id: 5 },
    { title: "Electronic Installation & Repair", img: "electrical", id: 6 },
]
class CategoryPage extends Component {
    render() {
        return (
            <Fragment>
                <div className="category-postal-section">
                    <div className="container">
                        <div className="row">
                            <div className="postal-code-category mb-4">
                                <PostalCode border={true} />
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-12">
                                <h4 className="listing-page-sub-heading"> 150+ Services Found In Your Area</h4>
                            </div>
                            <div className="col-12 mb-4">
                                <h2 className="listing-page-heading"> Handymen Near You</h2>
                            </div>
                            <div className="col-3"><button className="listing-btn">+ Cancellation</button></div>
                            <div className="col-3"><button className="listing-btn">+ Budget</button></div>
                            <div className="col-3"><button className="listing-btn">+ Language</button></div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-md-12">
                                <h4 className="listing-page-sub-heading">Moving Out Services</h4>
                            </div>
                            <Listing data={data} />
                        </div>

                        <div className="row">
                            <div className="col-12 mb-4">
                                <h2 className="listing-page-heading">Other Services</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2"></div>
                            <div className="col-8">
                                <div className="row">
                                    <Service data={services} />
                                </div>
                            </div>
                            <div className="col-2"></div>
                        </div>
                    </div>
                </div>
            </Fragment >
        )
    }
}

export default CategoryPage