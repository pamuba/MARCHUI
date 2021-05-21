import React, { Component } from 'react'

class RegCom extends Component {
    
    render() {
        console.log('Regular Component Render')
        return (
            <div>
                <h1>Regular Component</h1>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default RegCom
