import {  Navigate, Route, Routes } from "react-router-dom";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { AppRoutes } from "../app/routes/AppRoutes";
import { CheckingAuth } from "../ui";
import { AuthHomePage } from "../auth/pages";


export const AppRouter = () => {

  const status  = useCheckAuth();

  if( status === 'checking' ) return <CheckingAuth /> 


  return (
    <Routes>

      {/* {
        (status === 'authenticated')
        ? <Route path='/*' element={ <AppRoutes /> } />
        : <Route path="/auth/*" element={ <AuthRoutes /> } />
      } */}

      {
        (status === 'authenticated')
        ? <Route path='/*' element={ <AppRoutes /> } />
        : <Route path="/" element={ <AuthHomePage /> } />
      }

      <Route path="/*" element={ <Navigate to='/' /> } />
      
    </Routes>
  )
}
