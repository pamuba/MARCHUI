import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <>
              <h2>Number Of Cakes:{numOfCakes}</h2>
              <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
        </>
    )
}

export default HooksCakeContainer
