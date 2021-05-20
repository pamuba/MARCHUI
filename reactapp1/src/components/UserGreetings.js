import React, { Component } from 'react'

class UserGreetings extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:true
        }
    }

    render(){
        let messages
        if(this.state.isLoggedIn){
            messages = <div>Logged In</div>
        }else{
            messages = <div>Logged Out</div>
        }
        return <div>{messages}</div>
    }
    
    // render() {
    //     if(this.state.isLoggedIn){
    //         return (
    //             <>
    //                 <div>Logged In</div>
    //             </>
    //         )}
    //     else{
    //         return (
    //             <>
                    
    //                 <div>Logged Out</div>
    //             </>
    //         )
    //     }
       
    // }
}

export default UserGreetings
