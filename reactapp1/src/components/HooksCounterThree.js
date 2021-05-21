import React, {useState} from 'react'

function HooksCounterThree() {
    const [name, setName ] = useState({firstName:'', lastName:''})
    return (
        <form>
            <input value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})} type="text"></input>
            <input value={name.lastName} onChange={e=>setName({...name, lastName:e.target.value})} type="text"></input>
            <h2>First Name:{name.firstName}</h2>
            <h2>Last Name:{name.lastName}</h2>
        </form>
    )
}
// put lastName:name.lastName
export default HooksCounterThree
