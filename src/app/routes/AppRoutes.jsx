import { Route, Routes } from "react-router-dom"
import { AppPage } from "../pages/AppPage"



export const AppRoutes = () => {
  return (
    <Routes>
  
      <Route path="/home" element={ <AppPage /> } />
      {/* <Route path="/auth/*" element={ <AuthRoutes /> } />

      <Route path="/*" element={ <Navigate to="/" /> } /> */}
    </Routes>
  )
}
