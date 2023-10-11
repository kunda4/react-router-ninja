import { Link } from "react-router-dom"
export default function NotFound() {
  return (
    <div className="page-notfound">
        <h3>Page Not Found!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Assumenda placeat, quidem soluta sint neque quisquam dolorem 
            iste autem alias ducimus impedit distinctio officia obcaecati 
            fugit. Ab consectetur repellat odio dicta.</p>

            <p>Go to the <Link to="./">HomePage</Link>.</p>
    </div>

  )
}
