import React from "react"
import Search from "../../../Assets/images/search.svg"

const searchByCode = () => {
    return (
        <div className="postal-code-container">
            <div className="dropdown float-left">
                <div className="dropdown-postal dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <p className="postal-main-heading">Postal Code</p>
                    <p className="postal-sub-heading">Munich, Germany 80331</p>
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <div className="divider">
            </div>
            <div className="dropdown float-left" style={{ width: "50%" }}>
                <div className="dropdown-postal dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <p className="postal-main-heading">Pick A Service</p>
                    <p className="postal-sub-heading">What Can We Assist You With?</p>
                </div>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </div>
            <div className="search-button-container float-left">
                <button className="search-button">
                    <img src={Search} alt="Search" />
                </button>
            </div>
        </div>
    )
}

export default searchByCode