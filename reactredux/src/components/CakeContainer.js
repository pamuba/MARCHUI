import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function CakeContainer(props) {
    return (
        <>
            <h2>Number Of Cakes:{props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </>
    )
}

//state from the redux store is mapped to our component props
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}
//map dispatch of an action creator to a prop in our component
const mapDispatchToProps = dispatch => {
    return{
        buyCake:() => dispatch(buyCake()) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
