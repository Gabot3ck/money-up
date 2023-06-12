import { FaUserCircle, FaCog, FaCalendarAlt } from "react-icons/fa";
import { ItemMenuMobile } from "./ItemMenuMobile";


export const Menu = ( ) => {


  return (
    <div className="w-[85%] h-full p-6
                  border-r-2 border-gray-300
                  flex flex-col items-start
                  absolute top-0 left-0 z-30
                  bg-light-500" 
    >
      <div className="w-full 
                      flex flex-col items-start" 
      >
        <FaUserCircle size={ 80 }/>
        <b className="text-lg text-primary-500" >Nombre de Usuario</b>
        <p className='text-sm  text-light-600' >
          Cuenta personal
        </p>
      </div>


      <ul className="mt-8" >
        <ItemMenuMobile 
          icon={ <FaUserCircle /> }
          text='Mi perfil'
        />
        <ItemMenuMobile 
          icon={ <FaCog /> }
          text='Configuración'
        />
        <ItemMenuMobile 
          icon={ <FaCalendarAlt /> }
          text='Calendario'
        />
      </ul>
    </div>
  )
}
