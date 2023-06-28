import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { OrOfButtons } from "../../ui/components/OrOfButtons";
import { ButtonSecondary } from "../../ui/components/buttons";
import { AuthLayoutPage } from "../layout/AuthLayoutPage";
import { FormRegister } from "../../app/components/forms/FormRegister";
import { startGoogleSignIn } from "../../store/auth";
import { useMemo } from "react";



export const RegisterPage = () => {

  const { status } = useSelector( state => state.auth );

  const dispatch = useDispatch();

  const isAuthenticating = useMemo( () => status === 'checking', [status]);

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn() );
  }


  return (
    <AuthLayoutPage >
      <div className="px-4 mt-4 mb-8  
                      w-full md:w-3/4 max-w-[500px]" 
      >
        <h3 className="w-full font-medium text-xl text-start mb-2" >Registrarse</h3>

        <p className="w-[320px] md:w-full text-base" >Te ayudamos a lograr tus metas de la manera más facil y sencilla.</p>
      </div>

      <FormRegister />

      <div className="w-full md:w-3/4 max-w-[500px] px-4 mt-8 
                      flex flex-col gap-8 items-center justify-center " 
      >
        <OrOfButtons />

        <ButtonSecondary
          icon={ <FaGoogle /> }
          title={'Ingresar con Google'}
          onClick= { onGoogleSignIn }
          disabled={ isAuthenticating }
        />

        <ButtonSecondary
          icon={ <FaFacebook /> }
          title={'Ingresar con Facebook'}
        />

        <div className="w-full flex items-center justify-center mb-5">
          <Link  to='/login' className="text-sm text-primary-500 font-medium" >
            Ya estoy registrado
          </Link>
        </div>

      </div>

    </AuthLayoutPage>
  )
}
