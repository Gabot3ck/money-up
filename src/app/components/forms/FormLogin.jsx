import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaFacebook, FaGoogle } from "react-icons/fa"
import { checkingAuthentication, startGoogleSignIn } from "../../../store/auth"
import { useForm } from "../../../hooks/useForm"
import { OrOfButtons } from "../../../ui/components/OrOfButtons"
import { ButtonPrimary, ButtonSecondary } from "../../../ui/components/buttons"



export const FormLogin = () => {

  const { status } = useSelector( state => state.auth );


  const dispatch = useDispatch();
  const { email, password, onInputChange } = useForm({
    email: 'fernando@google.com',
    password: '123456',
  });

  const isAuthenticating = useMemo( () => status === 'checking', [status]);


  const onSubmit = (e) => {
    e.preventDefault();

    console.log({ email, password })
    dispatch( checkingAuthentication() );
  }

  const onGoogleSignIn = () => {
    dispatch( startGoogleSignIn() );
  }

  const onFacebookSignIn = () => {
    console.log('onFacebookSignIn');
  }


  return (<>
        <form 
      className="w-full 
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
      <ButtonPrimary title="Ingresar" type='submit' />
    </form>

    <div className="w-full px-4 my-8
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
        <p className="text-sm text-primary-500 font-medium" >Regístrese aquí</p>
      </div>

    </div>
  </>

  )
}
