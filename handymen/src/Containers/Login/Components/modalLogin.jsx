import React from "react";
import { Component } from "react";

class LoginModal extends Component {
    render() {
        return (
            <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                        </div>
                        <div className="modal-body">
                            <form className="form-login">
                                <div style={{ padding: "0px 15px" }}>
                                    <label className="form-label" for="exampleFormControlInput1">Country/Region</label>
                                    <input type="text" class="form-input form-control" id="exampleFormControlInput1" placeholder="Germany (+49)" />
                                </div>
                                <div class="form-divider"></div>
                                <div style={{ padding: "0px 15px" }}>
                                    <label className="form-label" for="exampleFormControlInput1">Phone Number</label>
                                    <input type="number" class="form-input form-control" id="exampleFormControlInput1" placeholder="+49 9967 440723" />
                                </div>
                            </form>
                            <p>We will call you to confirm your number. Standard message and data rates may apply.</p>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginModal;