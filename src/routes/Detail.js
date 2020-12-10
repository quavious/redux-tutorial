import React from 'react';
import { connect } from 'react-redux'

const Detail = ({toDo}) => {
    return <h1>{toDo.text}</h1>
}

const mapStateToProps = (state, ownProps) => {
    const {match: {params: {id}}} = ownProps
    return {
        toDo: state.find(el => el.id === parseInt(id))
    }
}

export default connect(mapStateToProps)(Detail);