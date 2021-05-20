import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    increment(){
        //async operration
        this.setState((prevState)=>({
            count: prevState.count + 1
        }), ()=>{console.log('Callback Value:', this.state.count)})

        // console.log(this.state.count)
    }
    incrementFive(){
        this.increment() //0
        this.increment() //1
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <>
                Count - {this.state.count}
                <hr></hr>
                <button onClick={()=>this.incrementFive()}>Increment</button>
            </>
        )
    }
}

export default Counter
