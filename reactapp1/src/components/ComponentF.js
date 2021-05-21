import React, { Component } from 'react'
import {UserConsumer} from './userContext'


class ComponentF extends Component {
    render() {
        return (
            <div>
              <UserConsumer>
                {
                    (username) => {
                        return <h1>{username}</h1>
                    }
                }
              </UserConsumer>
            </div>
        )
    }
}

export default ComponentF
