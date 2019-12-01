import React from 'react';
import BlogForm from "./BlogForm"
import {startEditBlog , startRemoveBlogs} from "../actions/blog";
import {connect} from "react-redux";
import Header from './Header';
import Footer from './Footer';

export class EditBlogPage extends React.Component {
    onSubmit = ( blog ) => {
        this.props.startEditBlog( this.props.blog.id , blog ) // id , updates
        this.props.history.push( "/" )
    }
    onRemove = ( blog ) => {
        this.props.startRemoveBlogs( this.props.blog.id ) // id , updates
        this.props.history.push( "/" )
    }

    render(){
        return (
            <div>
                <Header/>
                <BlogForm
                    blog={this.props.blog}
                    onSubmit = {this.onSubmit}
                />
                    
                <div className='container'>
                    <button className="button-remove"onClick={this.onRemove}>remove</button>
                </div>
            </div>
        )
    }

} 

const mapStateToProps = ( state ,props ) => ({
    blog : state.blogs.find((blog)=>{
        return blog.id == props.match.params.id
    })
})

const mapDispatchToProps = ( dispatch ) => ({
    startEditBlog: ( id, blog ) => dispatch( startEditBlog( id, blog ) ),
    startRemoveBlogs: ( id ) => dispatch( startRemoveBlogs( id ) )
}) 

export default connect( mapStateToProps, mapDispatchToProps )( EditBlogPage )