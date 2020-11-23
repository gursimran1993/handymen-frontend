import React, { Component, Fragment } from "react"
import Header from "./header";
import Footer from "./footer"

class Layout extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <div className="layout">
                    {this.props.children}
                </div>
                <Footer />
            </Fragment>
        )
    }
}

export default Layout