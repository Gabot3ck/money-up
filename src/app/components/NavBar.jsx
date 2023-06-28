import { HamburguerMenu } from "./HamburguerMenu";
import Logo from '../../assets/img/Logo Navbar.png';


export const Navbar = ( { showBurger = true }) => {
  return (<>
    <div className="w-full max-w-screen-lg h-[60px] py-2 px-4
                    border-b border-gray-300
                    flex justify-between items-center" >
      <img  className='h-[40px] ' src={ Logo } alt="Logotipo Money App" />

      {
        showBurger && <HamburguerMenu />
      }
    </div>
  </>
  )
}
