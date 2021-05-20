import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'John',
             comments:'', 
             topic:''
        }
    }
    handleusernameChange = (event)=>{
        this.setState({
            username: event.target.value
        })
    }
    handlecommentsChange = (event)=>{
        this.setState({
            comments: event.target.value
        })
    }
    handletopicChange = (event)=>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) =>{
        alert(`${this.state.username} ${this.state.comments}`)
    }
    render() {
        return (
           <form onSubmit={this.handleSubmit}>
                <div>
                    Form Component<hr></hr>
                    <label>Username</label>
                    <input value={this.state.username}
                    onChange={this.handleusernameChange} type="text"/>
                </div>

                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments}></textarea>
                </div>

                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handletopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                    </select>
                </div>

                <button>Submit</button>

           </form>
        )
    }
}

export default Form
