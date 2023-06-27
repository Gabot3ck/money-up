import { Link } from "react-router-dom";
import { ButtonPrimary } from "../../ui/components/buttons/ButtonPrimary";
import Logo from '../../assets/img/Logo Mobile vertical.png';


export const AuthHomePage = () => {
  return (
    <div className="w-screen min-h-screen px-8 py-8 m-0
                    flex flex-col items-center justify-center
                    bg-light-500" 
    >
      <div className="w-[320px]  h-[60%] mb-3
                      flex items-center justify-center">
        <img src={ Logo } alt="Logotipo Money Up" />
      </div>

      <h1 className="w-[165px] sm:w-[266px]
      font-semibold text-lg text-center mb-2">
        Organicemos juntos tus finanzas
      </h1>

      <p className="text-sm text-center font-normal my-7">
        Ya has dado el primer paso, ¡Enhorabuena! <br /> Déjanos guiárte en este proceso
      </p>

      <Link 
        className="w-full sm:max-w-[160px] h-[40px]
                text-sm sm:text-base text-dark-500 font-semibold
                bg-primary-500  rounded-full 
                hover:bg-primary-400 
                transition-colors duration-300 ease-out"
        to="/register"
      >
        <ButtonPrimary />
      </Link>
      

      <Link
        to='/login'
        className="text-sm text-center font-semibold text-primary-500 mt-3" 
      >
        Ya estoy registrado
      </Link>

    </div>
  )
}
