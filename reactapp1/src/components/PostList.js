import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: []
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({posts:response.data})
        })
        .catch(err =>{

        })
    }
    
    render() {
        
        return (
            <div>
                List of Posts
            </div>
        )
    }
}

export default PostList
