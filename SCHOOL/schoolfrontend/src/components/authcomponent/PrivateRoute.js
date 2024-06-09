import { Navigate, Outlet  } from "react-router-dom";


const PrivateRoute = () =>{

    const isAuthenticated = !!localStorage.getItem('idtoken')

    return isAuthenticated ? (
        <Outlet/>
    ):(
        <Navigate to="/"/>
    )
}

export default PrivateRoute