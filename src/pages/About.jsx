import { Navigate } from "react-router-dom"
import React from "react"
import { useState } from "react"
export default function About(){
    const [user, setUser] = useState('Kunda')
    if(!user){
       return <Navigate to = '/' replace={true}/>
    }
    return (
        <div className="about">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quaerat 
                asperiores iste dolorem eveniet laudantium atque adipisci officia. Dolorem 
                laborum itaque, qui repellat labore consequuntur eveniet quod error 
                voluptatibus. Vel.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quaerat 
                asperiores iste dolorem eveniet laudantium atque adipisci officia. Dolorem 
                laborum itaque, qui repellat labore consequuntur eveniet quod error 
                voluptatibus. Vel.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus quaerat 
                asperiores iste dolorem eveniet laudantium atque adipisci officia. Dolorem 
                laborum itaque, qui repellat labore consequuntur eveniet quod error 
                voluptatibus. Vel.</p>

                <button onClick={()=>setUser(null)}>Logout</button>
        </div>
    )
}