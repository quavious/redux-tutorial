import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import {actionTriggers} from '../store'

const ToDos = ({text, id, deleteToDo}) => {
    return (
        <li id={id}>
            <Link to={`/${id}`}>
                {text}
            </Link>
            <button onClick={() => deleteToDo(id)}>DELETE</button>
        </li>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps);
    // We Can Use ownProps instead of ToDo Element id.
    // Not Knowing How ownProps Works... :(
    return {
        deleteToDo : (id) => dispatch(actionTriggers.deleteToDo(id))
    }
}

export default connect(null, mapDispatchToProps)(ToDos);