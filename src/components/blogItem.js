import React from 'react';
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import parse from 'html-react-parser';
import moment from 'moment';

export const BlogItem = ( {title, body , createdAt ,id }  ) => (
    <div className="blog-item">
        <div className="blog-item__container">
            <Link to={`/blog/${id}`}>
                <h2>{title}</h2>
            </Link>
            <p>{moment(createdAt).format('ll')}</p>  
        </div>
            {window.location.href.split( '/' )[ 3 ] === "dashboard" ? <Link to={`/edit/${id}`} className="button-small">edit</Link> : undefined}
    </div>
    
)

export default BlogItem