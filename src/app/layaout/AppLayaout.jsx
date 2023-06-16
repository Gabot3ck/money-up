import { Navbar } from "../components/NavBar"



export const AppLayaout = ( { children } ) => {


  return (
    <div className="w-screen h-screen
                    flex flex-col items-center justify-between
                    bg-light-500" >

      <Navbar />

      { children }

    </div>
  )
}
