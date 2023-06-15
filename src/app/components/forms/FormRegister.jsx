import { useForm } from "../../../hooks/useForm";
import { ButtonPrimary } from "../../../ui/components/buttons"


const formData = {
  email: 'contacto@ebgchile.cl',
  password: '123456',
  confirmPassword: '4657',
  name: 'Contacto EBG',
}


export const FormRegister = () => {

  const { name, email, password, confirmPassword, onInputChange, formState } = useForm(formData);

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(formState)
  }



  return (
    <form
      onSubmit={ onSubmit }
      className="w-full 
                flex px-4 flex-col justify-center items-center gap-8" 
    >
      <input
        className="w-full h-10 rounded py-2 px-4 
                  border-2  border-primary-300 focus:border-primary-500 focus:ring-primary-500 focus:outline-none
                  font-medium
                  bg-primary-300 placeholder-gray-500"
        type="text" 
        placeholder="Nombre"
        name="name"
        value={ name }
        onChange={ onInputChange }
      />

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

      <input
        className="w-full h-10 rounded py-2 px-4 
                  border-2  border-primary-300 focus:border-primary-500 focus:ring-primary-500 focus:outline-none
                  font-medium
                  bg-primary-300 placeholder-gray-500"
        type="password" 
        placeholder="Confirmar Contraseña"
        name="confirmPassword"
        value={ confirmPassword }
        onChange={ onInputChange }
      />

      <ButtonPrimary title="Registrarme" type='submit' />
    </form>
  )
}
