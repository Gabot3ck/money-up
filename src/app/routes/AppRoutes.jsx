import { Navigate, Route, Routes } from "react-router-dom"
import { AppPage } from "../pages/AppPage"
import { AuthRoutes } from "../../auth/routes/AuthRoutes"


export const AppRoutes = () => {
  return (
    <Routes>
  
      <Route path="/" element={ <AppPage /> } />
      <Route path="/auth/*" element={ <AuthRoutes /> } />

      <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
