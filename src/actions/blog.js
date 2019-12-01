import uuid from 'uuid'
import database from "../firebase/firebase"


// adding blog 
export const addBlog = ( blog ) => ({
    type: "ADD_BLOG",
    blog
})

export const startAddBlogs = (blogData = {}) => {

    return ( dispatch, setState ) => {
        
        const {
            title = "",
            body = "",
            createdAt = 0
        } = blogData

        const blog = {
            title,
            body,
            createdAt,
        }

        return database.ref( "blogs" )
            .push(blog)
            .then( ( ref ) => {
                dispatch( addBlog({
                    id: ref.key,
                    ...blog
                }) )
            } )
    }
}

//removing blog
export const removeBlog = ( id ) => ( {
    type: 'REMOVE_BLOG',
    id
} );

export const startRemoveBlogs = (id) => {
    return ( dispatch, setState ) => {
        return database.ref( `blogs/${id}` )
            .remove()
            .then( () => dispatch( removeBlog(id)))
    }
}

export const editBlog = ( id, updates ) => ( {
    type: "EDIT_BLOG",
    id,
    updates
} )

export const startEditBlog = ( id, updates ) => {

    return ( dispatch, setState ) => {

        return database.ref( `blogs/${id}` )
            .update({...updates})
            .then( () => {
                dispatch( editBlog(id , updates) )
            } )
    }
}


// seting blogs 
export const setBlogs = (blogs)=>({
    type: "SET_BLOGS",
    blogs
})

export const startSetBlogs = () => {
    return (dispatch  , setState ) => {
        return database.ref( "blogs" )
            .once( "value" )
            .then( ( snapshot ) => {
                const blogs = []
                snapshot.forEach( ( childSnapshot ) => {
                    blogs.push( {
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    } )
                } )
                dispatch( setBlogs( blogs ) )
            } )
    }
}
