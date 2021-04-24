import React from 'react'
import { buyChocolate } from '../redux/index'
import { connect } from 'react-redux'

function ChocolateContainer(props) {
    return (
        <div>
            <h2>Number of chocolate  {props.numOfChocolate}</h2>
            <button onClick={props.buyChocolate}>buy chocolate</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfChocolate: state.chocolate.numOfChocolate
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyChocolate: () => dispatch(buyChocolate())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChocolateContainer)

