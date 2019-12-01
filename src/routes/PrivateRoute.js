import React from "react"
import { connect } from "react-redux"
import { Route , Redirect} from "react-router-dom"
import { firebase } from "../firebase/firebase";


export const PrivateRoute = ( { 
    isAuth,
    component : Component ,
    ...rest
}) => (
    <Route 
        {...rest} 
        component = { (props) => (
            isAuth && firebase.auth().currentUser.email == "ziadm3950@gmail.com" ? (
                <div>
                    <Component {...props}/>
                </div>
            ) : (
                <Redirect to="/"/>
            )
        )} 

    />

) 

const mapStateToProps = (state) => ( {
    isAuth : !!state.auth.uid
} )

export default connect(mapStateToProps)(PrivateRoute)