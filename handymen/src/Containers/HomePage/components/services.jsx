import React, { Component, Fragment } from "react";
import Cleaning from "../../../Assets/images/services/cleaning.svg";

class Services extends Component {
    render() {
        const { data } = this.props;
        return (
            <Fragment>
                {data.length && data.map(item => (
                    <div className="col-4">
                        <div className="box-container" key={item.id}>
                            <img src={require(`../../../Assets/images/services/${item.img}.svg`).default} />
                            <p className="box-title">{item.title}</p>
                        </div>
                    </div>
                ))}
            </Fragment>
        )
    }
}
export default Services;