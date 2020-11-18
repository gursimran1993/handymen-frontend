import React, { Component, Fragment } from "react";
import Cleaning from "../../../Assets/images/services/cleaning.svg";

class WCU extends Component {
    render() {
        const { data } = this.props;
        return (
            <Fragment>
                {data.length && data.map(item => (
                    <div className="col-4">
                        <div className="box-container" key={item.id}>
                            <img src={require(`../../../Assets/images/wcu/${item.img}.svg`).default} />
                            <p className="wcu-box-title">{item.title}</p>
                            <p className="wcu-box-text">{item.content}</p>
                        </div>
                    </div>
                ))}
            </Fragment>
        )
    }
}
export default WCU;