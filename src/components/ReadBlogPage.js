import {connect} from 'react-redux';
import React, { Component } from 'react';
import parse from 'html-react-parser';
import Header from "./Header";
import Footer from './Footer';

export class ReadBlogPage extends Component {
    constructor( props ) {
        super( props );
    }
    

    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="readpage_container">
                        <h1 className="margin-b-big">{this.props.blog.title}</h1>
                        < div >
                            {parse( this.props.blog.body )}
                        < /div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ( state, props ) => ( {
    blog: state.blogs.find( ( blog ) => {
        return blog.id == props.match.params.id
    } ),
} )

export default connect( mapStateToProps )( ReadBlogPage )