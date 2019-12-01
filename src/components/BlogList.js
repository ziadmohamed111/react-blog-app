import React from 'react';
import blogs from "../selectors/blogs"
import BlogItem from './BlogItem';
import { connect } from "react-redux"


export const BlogList = (props) => (
    <div className="container">
        <div className="blog-list">
            {props.blogs.map((blog)=> <BlogItem key={blog.id} {...blog}/> )}
        </div>
    </div>
)

const mapStateIntoProps = (state) => ({
    blogs: blogs(state.blogs , state.filters)
})

export default connect( mapStateIntoProps )( BlogList )