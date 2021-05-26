import React, { useState } from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function NewCakeContainer(props) {
    const[num, setNum] = useState(1)
    return (
        <>
            <h2>Number Of Cakes:{props.numOfCakes}</h2>
            <input type="text" value={num} onChange={e=>setNum(e.target.value)} />
            <button onClick={()=>props.buyCake(num)}>Buy {num} Cake</button>
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
        buyCake:(num) => dispatch(buyCake(num)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)
