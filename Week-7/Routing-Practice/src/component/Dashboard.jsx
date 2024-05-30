import { Outlet } from "react-router-dom"

function Dashboard(){
    return (
        <div>
            Hey i am component
            <Outlet/>
        </div>
    )
}

export default Dashboard

