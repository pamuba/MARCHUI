import React , {useState, useEffect} from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(10)
    const [name, setName] = useState('')
    //Conditionally run an effect 
    useEffect(()=>{
        console.log("useEffect - Updating Document Title")
        document.title = `Tou clicked ${count} times`
    },[count])
    return (
        <div>
            <input type="text" value={name} onChange={e=>{
                    setName(e.target.value)
                }}></input>

            <button onClick={()=>setCount( count + 1 )}>Click {count} times</button>
        </div> 
    )
}

export default HookCounterOne
