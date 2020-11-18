import React from "react";
import BannerImg from "../../../Assets/images/banner.svg";
const Banner = ({ children }) => {
    return (
        <div className="banner">
            <img src={BannerImg} />
            {children}
        </div>
    )
}
export default Banner;