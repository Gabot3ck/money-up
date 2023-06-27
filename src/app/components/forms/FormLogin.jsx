import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaFacebook, FaGoogle } from "react-icons/fa"
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../../store/auth"
import { useForm } from "../../../hooks/useForm"
import { OrOfButtons } from "../../../ui/components/OrOfButtons"
import { ButtonPrimary, ButtonSecondary } from "../../../ui/components/buttons"
import { MessageErrorFirebase } from "../";





export const FormLogin = () => {

  const { status, errorMessage } = useSelector( state => state.auth );


  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: '',
    password: '',
  });

  const isAuthenticating = useMemo( () => status === 'checking', [status]);


  const onSubmit = (e) => {
    e.preventDefault();

    dispatch( startLoginWithEmailPassword( { email, password } ) );
  }

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn() );
  }

  const onFacebookSignIn = () => {
  }


  return (<>
    <form 
      className="w-full md:w-3/4 max-w-[500px]
                flex px-4 flex-col justify-center items-center gap-8"
      onSubmit={ onSubmit }
    >
      <input
        className="w-full h-10 rounded py-2 px-4 
                  border-2  border-primary-300 focus:border-primary-500 focus:ring-primary-500 focus:outline-none
                  font-medium
                  bg-primary-300 placeholder-gray-500"
        type="email" 
        placeholder="Email"
        name="email"
        value={ email }
        onChange={ onInputChange }
      />
      <input
        className="w-full h-10 rounded py-2 px-4 
                  border-2  border-primary-300 focus:border-primary-500 focus:ring-primary-500 focus:outline-none
                  font-medium
                  bg-primary-300 placeholder-gray-500"
        type="password" 
        placeholder="Contraseña"
        name="password"
        value={ password }
        onChange={ onInputChange }
      />

      <MessageErrorFirebase errorMessage={ errorMessage } />

      <ButtonPrimary title="Ingresar" type='submit' />
    </form>

    <div className="w-full md:w-3/4 max-w-[500px] px-4 my-8
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
        onClick= { onFacebookSignIn }
        disabled={ isAuthenticating }
      />

      <div className="w-full flex items-center justify-center gap-3 mt-6">
        <p className="text-sm" >¿No está registrado?</p>
        <Link to='/register' className="text-sm text-primary-500 font-medium" >
          Regístrese aquí
        </Link>
      </div>

    </div>
  </>

  )
}
