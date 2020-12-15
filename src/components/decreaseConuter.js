import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decreaseCounter } from '../redux/actions/counterActions'
import { bindActionCreators } from 'redux'
class DecreaseConuter extends Component {
    render() {
        return (
            <div>
                <button onClick={e => this.props.dispatch(decreaseCounter()) }>1 azalt</button>
            </div>
        )
    }
}

function mapToDispatchProps(dispatch) {
    return { action: bindActionCreators(decreaseCounter, dispatch) }
}

export default connect(mapToDispatchProps)(DecreaseConuter)