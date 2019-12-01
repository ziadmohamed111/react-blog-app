import React from 'react'
import { connect } from 'react-redux';
import {
    setTextFilter,
    sortByNewest,
    sortByOldest
} from '../actions/filters';


export class Filters extends React.Component {
    
    onChangeText= (e)=>{
        this.props.setTextFilter( e.target.value )
    }

    onChangeSelect = (e) => {
        console.log(e.target.value)
        if(e.target.value === "Newest"){
            this.props.sortByNewest( e.target.value )
        } else if ( e.target.value === "Oldest" ){
            this.props.sortByOldest( e.target.value )
        }
    }

    
    
    render(){
        return (
            <div className="filters">
                <input placeholder="search blogs" onChange={this.onChangeText} type='text'/>

                <select onChange={this.onChangeSelect}>
                    <option>Newest</option>
                    <option> Oldest </option>
                </select>
            </div>
        )
    }

}

const mapStateToProps = (state) => ({
    filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: ( text ) => dispatch( setTextFilter( text ) ),
    sortByNewest : () => dispatch( sortByNewest() ),
    sortByOldest : () => dispatch( sortByOldest() )
})

export default connect( mapStateToProps, mapDispatchToProps )( Filters )
