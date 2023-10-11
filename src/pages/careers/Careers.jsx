import { useLoaderData, Link } from "react-router-dom"

export default function Careers() {
    const careers = useLoaderData()
  return (
    <div className="careers">
        {
            careers.map(career=>(
                <Link to={career.id.toString()} key={career.id}>
                    <p>{career.title}</p>
                    <p>Based in {career.location}</p>
                </Link>
            ))
        }
    </div>
  )
}

//Loader function

export const careersLoader = async ()=> {
    const response = await fetch("http://localhost:4000/careers")
    if(!response.ok){
        throw Error("could not fetch career");
    }
    const data = await response.json()
    return data
}

