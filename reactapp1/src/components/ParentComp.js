import React, { Component } from 'react'
import RegCom from './RegCom'
import PureCom from './PureCom'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"John"
        }
    }
    

    componentDidMount() {
        setInterval(()=>{
            this.setState({
                name:"John"
            })
        }, 2000)
    }

    render() {
        console.log('******************************Parent Component render****************************')
        return (
            <div>
                <h1>Parent Component</h1>
                <RegCom name={this.state.name}></RegCom>
                <PureCom name={this.state.name}></PureCom>
            </div>
        )
    }
}

export default ParentComp
