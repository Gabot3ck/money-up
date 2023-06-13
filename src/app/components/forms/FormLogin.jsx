import { ButtonPrimary } from "../../../ui/components/buttons/ButtonPrimary"


export const FormLogin = () => {


  return (
    <form className="w-full 
                    flex px-4 flex-col justify-center items-center gap-8" 
    >
      <input
        className="w-full h-10 rounded py-2 px-4 
                  border-2  border-primary-300 focus:border-primary-500 focus:ring-primary-500 focus:outline-none
                  font-medium
                  bg-primary-300 placeholder-gray-500"
        type="email" 
        placeholder="Email"
      />
      <input
        className="w-full h-10 rounded py-2 px-4 
                  border-2  border-primary-300 focus:border-primary-500 focus:ring-primary-500 focus:outline-none
                  font-medium
                  bg-primary-300 placeholder-gray-500"
        type="password" 
        placeholder="Contraseña"
      />
      <ButtonPrimary title="Ingresar" type='submit' />
    </form>
  )
}
