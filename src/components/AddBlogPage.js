import React from 'react';
import BlogForm from "./BlogForm"
import Header from "./Header";
import {startAddBlogs} from "../actions/blog";
import {connect} from "react-redux";
import Footer from './Footer';

export class AddBlogPage extends React.Component {
    onSubmit = ( blog ) => {
        this.props.startAddBlogs(blog)
        this.props.history.push( "/" )
    }

    render(){
        return (
            <div>
                <Header/>
                <BlogForm
                    onSubmit = {
                        this.onSubmit
                    }
                />
            </div>
        )
    }

} 

const mapDispatchToProps = ( dispatch ) => ({
    startAddBlogs: ( blog ) => dispatch(startAddBlogs(blog))
}) 

export default connect( null, mapDispatchToProps )( AddBlogPage )