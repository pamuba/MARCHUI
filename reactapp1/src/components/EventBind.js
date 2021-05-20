import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:"Hello World"
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         message:'Hii World!!'
    //     })

    //     console.log('Pointing to:',this);
    // }

    clickHandler = () => {
        this.setState({
            message:'Hii World!!'
        })

        console.log('Pointing to:',this);
    }
    render() {
        return (
            <>
                <p>{this.state.message}</p>
                {/* <button onClick={this.clickHandler.bind(this)}>CLICK</button> */}
                {/* <button onClick={()=>this.clickHandler()}>CLICK</button> */}
                <button onClick={this.clickHandler}>CLICK</button>
            </>
        )
    }
}

export default EventBind
