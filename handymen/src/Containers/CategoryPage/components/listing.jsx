import React, { Component, Fragment } from "react"

class Listing extends Component {
    render() {
        const { data } = this.props;
        return (
            <Fragment>
                {data.length && data.map(item => (
                    <div className={`col-md-${item.column !== null || item.column !== "" ? item.column : "4"}`}>
                        <div className="listing-wrapper">
                            <div className="category-image">
                                <img src={require(`../../../Assets/images/category/${item.listingImg}.svg`).default} style={{ width: "100%" }} />
                            </div>
                            <div className="align-self mt-3" style={{ width: "90%" }}>
                                <p><span className="listing-title">{item.title}|{item.reviewPercentage}</span>({item.reviewRating})</p>
                                <p>Handymen:<span className="listing-title color-purple">{item.handymanName}</span></p>
                                <p>Price Range: <span className="listing-title">{`${item.minPrice}-${item.maxPrice}`}</span></p>
                                <button className="listing-btn">Book Service</button>
                            </div>
                        </div>
                    </div>
                ))}
            </Fragment>
        )
    }
}

export default Listing