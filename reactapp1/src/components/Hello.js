import React from 'react'

function Hello() {
    // return (
    //     <div>
    //         <h1>Hello from Hello Component</h1>
    //     </div>
    // )

    return React.createElement('div', 
    {id:'div'}, React.createElement('h1', null,'Hello from Hello Component'))
}

export default Hello
