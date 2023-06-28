import {  Navigate, Route, Routes } from "react-router-dom";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { CheckingAuth } from "../ui";
import { AuthHomePage, LoginPage, RegisterPage } from "../auth/pages";
import { AppPage } from "../app/pages/AppPage";


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
        ? <Route path='/*' element={ <AppPage /> } />
        : <>
            <Route path="/" element={ <AuthHomePage /> } />
            <Route path="/login" element={ <LoginPage /> } />
            <Route path="/register" element={ <RegisterPage /> } />
          </>
      }
      

      <Route path="/*" element={ <Navigate to='/' /> } />
      
    </Routes>
  )
}
