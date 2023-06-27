import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import { ButtonPrimary } from "../../../ui/components/buttons";
import { validateEmail, validateName, validatePassword } from "../../helpers";
import { MessageErrorInputForm, MessageErrorFirebase } from "../";
import { validateConfirmPassword } from "../../helpers/validateConfirmPassword";
import { startCreatingUserWithEmailPassword } from "../../../store/auth";



const formData = {
  email: '',
  password: '',
  confirmPassword: '',
  displayName: '',
}


export const FormRegister = () => {

  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector( state => state.auth );

  const isCheckingAuthentication = useMemo( () => status === 'checking', [status] );

  const { displayName, email, password, confirmPassword, onInputChange, formState } = useForm(formData);

  const [ nameValited, setNameValited ] = useState(false);
  const [ errorName, setErrorName ] = useState('');
  const [ mailValited, setMailValited ] = useState(false);
  const [ errorEmail, setErrorEmail ] = useState('');
  const [ passwordValited, setPasswordValited ] = useState(false);
  const [ errorPassword, setErrorPassword ] = useState('');
  const [ passConfirmValited, setPassConfirmValited ] = useState(false);
  const [ errorPassConfirm, setErrorPassConfirm ] = useState('');


  const onSubmit = (e) => {
    e.preventDefault();

    if(nameValited &&
      mailValited &&
      passwordValited &&
      passConfirmValited ) {

        dispatch( startCreatingUserWithEmailPassword(formState) );

    } else {
      !nameValited && setErrorName('Debe ingresar un nombre');
      !mailValited && setErrorEmail('Debe ingresar un email');
      !passwordValited && setErrorPassword('Debe ingresar una contraseña');
      !passConfirmValited && setErrorPassConfirm('Debe confirmar contraseña');
    }

  }

  return (
    <form
      onSubmit={ onSubmit }
      className="w-full md:w-3/4 max-w-[500px]
                flex px-4 flex-col justify-center items-center gap-8" 
    >

      <div className="w-full" >
        <input
          className={`w-full h-10 rounded py-2 px-4 
                    border-2  border-primary-300 focus:border-primary-500 focus:ring-primary-500 focus:outline-none
                    font-medium
                    bg-primary-300 placeholder-gray-500
                    ${ errorName ? ' border-red-500 focus:border-red-500 focus:ring-red-500' : '' }`}
          type="text" 
          placeholder="Nombre"
          name="displayName"
          value={ displayName }
          onChange={ onInputChange }
          onBlur={ (e) => validateName(e, setNameValited, setErrorName) }
        />
        <MessageErrorInputForm errorMessage={ errorName } />
      </div>


      <div className="w-full" >
        <input
          className={`w-full h-10 rounded py-2 px-4 
                    border-2  border-primary-300 focus:border-primary-500 focus:ring-primary-500 focus:outline-none
                    font-medium
                    bg-primary-300 placeholder-gray-500
                    ${ errorEmail ? ' border-red-500 focus:border-red-500 focus:ring-red-500' : '' }`}
          type="email" 
          placeholder="Email"
          name="email"
          value={ email }
          onChange={ onInputChange }
          onBlur={ (e) => validateEmail(e, setMailValited, setErrorEmail) }
        />
        <MessageErrorInputForm errorMessage={ errorEmail } />
      </div>


      <div className="w-full" >
        <input
          className={`w-full h-10 rounded py-2 px-4 
                    border-2  border-primary-300 focus:border-primary-500 focus:ring-primary-500 focus:outline-none
                    font-medium
                    bg-primary-300 placeholder-gray-500
                    ${ errorPassword ? ' border-red-500 focus:border-red-500 focus:ring-red-500' : '' }`}
          type="password" 
          placeholder="Contraseña"
          name="password"
          value={ password }
          onChange={ onInputChange }
          onBlur={ (e) => validatePassword(e, setPasswordValited, setErrorPassword) }
        />
        <MessageErrorInputForm errorMessage={ errorPassword } />
      </div>


      <div className="w-full" >
        <input
          className={`w-full h-10 rounded py-2 px-4 
                    border-2  border-primary-300 focus:border-primary-500 focus:ring-primary-500 focus:outline-none
                    font-medium
                    bg-primary-300 placeholder-gray-500
                    ${ errorPassConfirm ? ' border-red-500 focus:border-red-500 focus:ring-red-500' : '' }`}
          type="password" 
          placeholder="Confirmar Contraseña"
          name="confirmPassword"
          value={ confirmPassword }
          onChange={ onInputChange }
          onBlur={ (e) => validateConfirmPassword(e, setPassConfirmValited, setErrorPassConfirm, password) }
        />
        <MessageErrorInputForm errorMessage={ errorPassConfirm } />
      </div>

      <MessageErrorFirebase errorMessage={ errorMessage } />

      <ButtonPrimary 
        title="Registrarme" 
        type='submit' 
        disabled= { isCheckingAuthentication }
      />
    </form>
  )
}
