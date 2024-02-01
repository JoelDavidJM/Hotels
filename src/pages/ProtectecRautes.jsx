import { Navigate, Outlet } from "react-router-dom"

const ProtectecRautes = () => {
  if(localStorage.getItem('token')) {
    return <Outlet />
  }else {
    return <Navigate to={'/login'} />
  }
}

export default ProtectecRautes