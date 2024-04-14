import { Navigate, Outlet } from "react-router-dom";


const PrivateRoute = () => {
    const user = null;
    let auth = user.currentUser == null ? false : true
    return (
        auth ? <Outlet /> : <Navigate to='/home'/>
    )
}

export default PrivateRoute