import {  Navigate, Route, Routes } from "react-router-dom";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { AppRoutes } from "../app/routes/AppRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { CheckingAuth } from "../ui";


export const AppRouter = () => {

  const status  = useCheckAuth();

  if( status === 'checking' ) return <CheckingAuth /> 


  return (
    <Routes>

      {
        (status === 'authenticated')
        ? <Route path='/*' element={ <AppRoutes /> } />
        : <Route path="/auth/*" element={ <AuthRoutes /> } />
      }

      <Route path="/*" element={ <Navigate to='/auth/home' /> } />
      
    </Routes>
  )
}
