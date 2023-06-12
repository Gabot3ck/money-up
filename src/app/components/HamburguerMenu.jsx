import { useState } from "react";
import { FaBars } from "react-icons/fa"
import { Menu } from "./Menu";


export const HamburguerMenu = () => {

  const [ showMenu, setShowMenu ] = useState(false);

  const handleClick = () => {
    setShowMenu( !showMenu );
  }


  return (<>
      <button 
        className="text-primary-500"
        onClick={ handleClick }
      >
        <FaBars size={ 30 } />
      </button>

      {
        showMenu && <Menu />
      }
    </>
  )
}
