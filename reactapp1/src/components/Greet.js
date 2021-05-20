// import React from 'react'

// function Greet(){
//     return <h1>Heelo World</h1>
// }

const Greet = (props) => {
    console.log(props)

    return (
            <div>
                 <h1>Hello {props.name} aka {props.heroName}</h1>
                 {/* {props.children[2].props.children} */}
                 {/* console.log(props.children) */}
                 {/* {props.children} */}
            </div>
          )
}

export default Greet;