
import React, {useState, useEffect } from 'react'

function HookMouse() {

    const[x, setX] = useState(0)
    const[y, setY] = useState(0)


    useEffect(()=>{
      console.log('useEffect Called')
      window.addEventListener('mousemove', logMousePosition )

      //componentwillunmount
      return () => {
        //clean up code
        window.removeEventListener('mousemove', logMousePosition)
      }
    }, [])

    const logMousePosition = (e) => {
        console.log("Mouse Event")
        setX(e.clientX)
        setY(e.clientY)
    }

    return (
        <>
            X - {x} Y - {y}
        </>
    )
}

export default HookMouse
