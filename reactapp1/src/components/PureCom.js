import React, { PureComponent } from 'react'

class PureCom extends PureComponent {
    render() {
        console.log('Pure Component Render')
        return (
            <div>
                <h1>Pure Compnent</h1>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default PureCom
