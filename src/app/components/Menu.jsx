import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle, FaCog, FaCalendarAlt } from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import { startLogout } from "../../store/auth";
import { ItemMenuMobile } from "./ItemMenuMobile";



export const Menu = ( ) => {

  const { displayName } = useSelector( state => state.auth )

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch( startLogout() );
  }


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
        <b className="text-lg text-primary-500" >{ displayName }</b>
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
        <ItemMenuMobile 
          icon={ <RiLogoutCircleLine /> }
          text='Cerrar sesión'
          onClick={ onLogout }
        />
      </ul>
    </div>
  )
}
