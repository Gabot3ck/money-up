import { useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { ButtonPrimary } from "../../../ui/components/buttons"
import { validateEmail, validateName, validatePassword } from "../../helpers";
import { MessageErrorInputForm } from "../MessageErrorInputForm";
import { validateConfirmPassword } from "../../helpers/validateConfirmPassword";


const formData = {
  email: 'contacto@ebgchile.cl',
  password: '123456',
  confirmPassword: '4657',
  name: 'Contacto EBG',
}


export const FormRegister = () => {

  const { name, email, password, confirmPassword, onInputChange, formState } = useForm(formData);

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

    mailValited ? console.log(formState) : console.log('error')
  }


  return (
    <form
      onSubmit={ onSubmit }
      className="w-full 
                flex px-4 flex-col justify-center items-center gap-8" 
    >

      <div className="w-full" >
        <input
          className={`w-full h-10 rounded py-2 px-4 
                    border-2  border-primary-300 focus:border-primary-500 focus:ring-primary-500 focus:outline-none
                    font-medium
                    bg-primary-300 placeholder-gray-500
                    ${ errorName ? ' border-alert-500 focus:border-alert-500 focus:ring-alert-500' : '' }`}
          type="text" 
          placeholder="Nombre"
          name="name"
          value={ name }
          onChange={ onInputChange }
          onBlur={ (e) => validateName(e, setNameValited, setErrorName) }
        />
        <MessageErrorInputForm messageError={ errorName } />
      </div>


      <div className="w-full" >
        <input
          className={`w-full h-10 rounded py-2 px-4 
                    border-2  border-primary-300 focus:border-primary-500 focus:ring-primary-500 focus:outline-none
                    font-medium
                    bg-primary-300 placeholder-gray-500
                    ${ errorEmail ? ' border-alert-500 focus:border-alert-500 focus:ring-alert-500' : '' }`}
          type="email" 
          placeholder="Email"
          name="email"
          value={ email }
          onChange={ onInputChange }
          onBlur={ (e) => validateEmail(e, setMailValited, setErrorEmail) }
        />
        <MessageErrorInputForm messageError={ errorEmail } />
      </div>


      <div className="w-full" >
        <input
          className={`w-full h-10 rounded py-2 px-4 
                    border-2  border-primary-300 focus:border-primary-500 focus:ring-primary-500 focus:outline-none
                    font-medium
                    bg-primary-300 placeholder-gray-500
                    ${ errorPassword ? ' border-alert-500 focus:border-alert-500 focus:ring-alert-500' : '' }`}
          type="password" 
          placeholder="Contraseña"
          name="password"
          value={ password }
          onChange={ onInputChange }
          onBlur={ (e) => validatePassword(e, setPasswordValited, setErrorPassword) }
        />
        <MessageErrorInputForm messageError={ errorPassword } />
      </div>


      <div className="w-full" >
        <input
          className={`w-full h-10 rounded py-2 px-4 
                    border-2  border-primary-300 focus:border-primary-500 focus:ring-primary-500 focus:outline-none
                    font-medium
                    bg-primary-300 placeholder-gray-500
                    ${ errorPassConfirm ? ' border-alert-500 focus:border-alert-500 focus:ring-alert-500' : '' }`}
          type="password" 
          placeholder="Confirmar Contraseña"
          name="confirmPassword"
          value={ confirmPassword }
          onChange={ onInputChange }
          onBlur={ (e) => validateConfirmPassword(e, setPassConfirmValited, setErrorPassConfirm, password) }
        />
        <MessageErrorInputForm messageError={ errorPassConfirm } />
      </div>

      <ButtonPrimary title="Registrarme" type='submit' />
    </form>
  )
}
