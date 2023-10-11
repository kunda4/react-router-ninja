import { Outlet } from 'react-router-dom'

export default function CarrersLayout() {
  return (
    <div className="Careers-layout">
        <h2>Careers</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

        <Outlet/>
    </div>
  )
}
