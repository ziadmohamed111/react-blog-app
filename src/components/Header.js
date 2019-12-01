import React from 'react';
import Filters from "./filters"
import {Link} from "react-router-dom"
import { connect } from "react-redux"
import {startLogout , startLogin} from "../actions/auth"

const Header = (props) => (
    <div className="header">
        <div className="container">
            <div className="header__container">
                <Link to="/">
                    <h1>Zeyad Blogs</h1>
                </Link>
                <div className="header-side">
                    {
                        window.location.href.includes( "create" ) || window.location.href.includes( "blog" ) || window.location.href.includes( "edit" ) ? undefined : < Filters / >
                    }
                    <button className="button-big" onClick={ props.isAuth ? props.startLogout : props.startLogin}>{props.isAuth ? "Logout" : "Login"}</button>
                </div>
            </div>
        </div>
    </div>
)

const mapDispatchToProps = ( dispatch ) => ( {
    startLogout: () => dispatch( startLogout() ),
    startLogin: () => dispatch( startLogin() )
} )

const mapStateToProps = ( state ) => ( {
    isAuth: !!state.auth.uid
} )

export default connect( mapStateToProps, mapDispatchToProps )( Header )