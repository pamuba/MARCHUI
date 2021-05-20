import React, {Component} from 'react'

class Welcome extends Component{
    constructor(props) {
        super(props)
        this.state = {
             message:'Welcome To React'
        }
    }
    render() {
        return (
            <>
                <h1> {this.props.name} aka {this.props.heroName} </h1>
                <p>{this.state.message}</p>
            </>
        )

    }
}

export default Welcome