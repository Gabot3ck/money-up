import { Navigate, Route, Routes } from "react-router-dom";
import { AuthHomePage, LoginPage, RegisterPage } from "../pages";


export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="auth" element={ <AuthHomePage /> } />
      <Route path="login" element={ <LoginPage /> } />
      <Route path="register" element={ <RegisterPage /> } />
      {/* <Route path='/*' element={ <Navigate to="/auth/login" /> } /> */}
    </Routes>
  )
}
