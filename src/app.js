import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import LoginPage from './components/LoginPage';
import Loading from './components/Loading';
import AppRouter ,{history} from "./routes/AppRouter.js";
import configureStore from "./store/configureStore"
import { firebase } from "./firebase/firebase";
import { startSetBlogs } from "./actions/blog"
import { login , logout } from "./actions/auth"


import "./styles/styles.scss";
const store = configureStore();
let hasRendered = false

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

const renderApp = () => {
    if ( !hasRendered ) {
        ReactDOM.render( jsx, document.getElementById( 'root' ) );
        hasRendered = true
    }
}

ReactDOM.render( <Loading/>, document.getElementById( 'root' ) );

firebase.auth().onAuthStateChanged( ( user ) => {
    if ( user ) {
        store.dispatch( login( user.uid ) )
        store.dispatch( startSetBlogs() ).then( () => {
            renderApp()
            if ( history.location.pathname === "/login" ) {
                history.push( "/" )
            }
        } )
    } else {
        store.dispatch( logout() )
        store.dispatch( startSetBlogs()).then(()=>{
            renderApp()
        })
    }
} )