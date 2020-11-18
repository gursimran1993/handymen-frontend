import React from "react"
import LogoWhite from "../../Assets/images/logoWhite.svg"

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-5">
                        <img src={LogoWhite} alt="Logo" />
                        <p className="footer-logo-title">
                            For the best handymen service experiences in Deutschland.
                        </p>
                    </div>
                    <div className="col-2">
                        <h4 className="footer-title">Services</h4>
                        <ul className="ul-footer">
                            <li className="li-footer">Cleaning</li>
                            <li className="li-footer">Electronic</li>
                            <li className="li-footer">Restoration</li>
                            <li className="li-footer">Computer Setup</li>
                            <li className="li-footer">Other Services</li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <h4 className="footer-title">Follow Us</h4>
                        <ul className="ul-footer">
                            <li className="li-footer">Facebook</li>
                            <li className="li-footer">Twitter</li>
                            <li className="li-footer">Instagram</li>
                            <li className="li-footer">Linkedln</li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h4 className="footer-title">Contact Us</h4>
                        <ul className="ul-footer">
                            <li className="li-footer">contact@deinhausman.de</li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-6">
                        <p className="all-right">Service with love © Dein Hausman 2020. All Rights Reserved</p>
                    </div>
                    <div className="col-6">
                        <ul className="ul-footer mt-0">
                            <li className="li-footer float-left ml-4">Facebook</li>
                            <li className="li-footer float-left ml-4">Twitter</li>
                            <li className="li-footer float-left ml-4">Instagram</li>
                            <li className="li-footer float-left ml-4">Linkedln</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer