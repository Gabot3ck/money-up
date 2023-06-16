import { HamburguerMenu } from "./HamburguerMenu";
import Logo from '../../assets/img/Logo Navbar.png';


export const Navbar = ( { showBurger= true }) => {
  return (<>
    <div className="w-full h-[60px] p-2
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
