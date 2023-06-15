import {  Route, Routes } from "react-router-dom"
import { AppRoutes } from "../app/routes/AppRoutes"
import { AuthRoutes } from "../auth/routes/AuthRoutes"

export const AppRouter = () => {



  return (
    <Routes>
      <Route path="/auth/*" element={ <AuthRoutes /> } />
      <Route path='/*' element={ <AppRoutes /> } />

    </Routes>
  )
}
