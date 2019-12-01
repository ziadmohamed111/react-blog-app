import React from 'react';
import moment from "moment"
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';

export default class BlogForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title: props.blog ? props.blog.title : "",  
            body: props.blog ? props.blog.body : "",
            createdAt: props.blog ? moment( props.blog.createdAt ) : moment(),
            error : "",
            editorState: EditorState.createEmpty()
        }
    }
    onTitleChange = (e) => {
        const title = e.target.value
        this.setState(()=>({
            title
        }))
    }
    
    onBodyChange = ( e = KeyboardEvent ) => {
        const body = e.target.value
        this.setState(()=>({
            body
        }))
    }

    onSubmit = (e) => {
        e.preventDefault()

        if ( !this.state.title || !this.state.body ) {
         
            this.setState( () => ( {
        
                error: "Please provide title or body"
        
            } ) )
        
        } else {
        
            this.setState( () => ( {
        
                error: ""
        
            } ) )
        
            this.props.onSubmit( {
                title: this.state.title,  
                body: this.state.body,
                createdAt: this.state.createdAt.valueOf()
            } )
        }
    }


    render(){
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    { !!this.state.error == true ? <p> {this.state.error} </p> : undefined}

                    <input class="input" 
                        type="text" 
                        autoFocus 
                        placeholder="title" 
                        onChange={this.onTitleChange}
                        value={this.state.title}
                    />

                    <textarea class="textarea"
                        type="text" 
                        placeholder="body" 
                        onChange={this.onBodyChange}
                        value={this.state.body}
                    
                    ></textarea>
                    <button className="button-submit">ADD BLOG</button>
                </form>
            </div>
        )
    }
}