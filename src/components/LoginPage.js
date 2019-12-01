import React from 'react';
import { connect } from "react-redux"
import {startLogin} from "../actions/auth"

export const LoginPage = (props) => (
    <div className="login-container">
        <div className="login-box">
            <h1>Blog App</h1>
            <button className="login-button" onClick={props.startLogin}>Login</button>
        </div>
    </div>
)

const mapDispatchToProps = ( dispatch ) => ( {
    startLogin: () => dispatch( startLogin() )
} )

export default connect( undefined, mapDispatchToProps )( LoginPage )