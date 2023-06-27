import { Navbar } from "../../app/components/NavBar";




export const AuthLayoutPage = ( { children } ) => {


  return (
    <div className="min-w-screen min-h-screen
                    flex flex-col items-center justify-start
                    bg-light-500" 
    >

      <Navbar showBurger={ false } />

      { children }      

    </div>
  )
}
