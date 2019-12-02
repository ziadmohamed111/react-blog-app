import React from "react";
import {
    Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import LoginPage from "../components/LoginPage"
import Dashboard from "../components/Dashboard"
import AddBlogPage from "../components/AddBlogPage"
import EditBlogPage from "../components/EditBlogPage"
import NotFoundPage from "../components/NotFoundPage"
import ReadPage from "../components/ReadPage"
import ReadBlogPage from "../components/ReadBlogPage"
import PrivateRoute from "./PrivateRoute"
import PublicRoute from "./PublicRoute"

const createHistory = require( "history" ).createBrowserHistory
export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PublicRoute path='/login'  component={LoginPage}/>
                <PrivateRoute path='/create' component={AddBlogPage}/>
                <Route exact path='/' component={ReadPage}/>
                <Route path='/blog/:id' component={ReadBlogPage}/>
                <PrivateRoute path='/edit/:id' component={EditBlogPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
)

export default AppRouter