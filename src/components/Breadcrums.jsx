import { Link, useLocation } from 'react-router-dom'

export default function Breadcrums() {
    const location = useLocation()
    let CurrentLink = ''
    const crumbs = location.pathname.split('/').filter(crumb=> crumb !== '')
    .map(crumb=>{
        CurrentLink =+ `/${crumb}`

        return(
            <div className="crumb" key={crumb}>
                <Link to = {CurrentLink}>{crumb}</Link>
            </div>
        )
    })
  return (
    <div className="breadcrums">
        {crumbs}
    </div>
  )
}
