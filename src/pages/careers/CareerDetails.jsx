import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {
    const { id } = useParams()
    const career = useLoaderData()
  return (
    <div className="career-details">
        <h2>Career Details for: {career.title}</h2>
        <p>Starting Salary: {career.salary}</p>
        <p>Location: {career.location}</p>
        <div className="details">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Velit ab enim sed? Quis deleniti temporibus aliquid eveniet 
                nisi repellendus quaerat laudantium! Nobis fugit porro quia 
                quae dolores? Assumenda, illo? Delectus.</p>
        </div>
    </div>
  )
}

//Loader function
export const CarriesDetailsLoader = async({params}) =>{

    const {id} = params
    const res = await fetch("http://localhost:4000/careers/" +id)
    if(!res.ok){
        throw error("you could not fetch");
    }
    return res.json()
}