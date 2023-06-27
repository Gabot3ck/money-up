import { FormLogin } from "../../app/components/forms/FormLogin";
import { AuthLayoutPage } from "../layout/AuthLayoutPage";



export const LoginPage = () => {

  return (
    <AuthLayoutPage >

      <div className="px-4 mt-4 mb-12
                      w-full md:w-3/4 max-w-[500px]" 
      >
        <h3 className="w-full font-medium text-xl text-start mb-2" >Iniciar sesión</h3>

        <p className="w-[320px] md:w-full text-base" >
          Te ayudamos a lograr tus metas de la manera más facil y sencilla.
        </p>
      </div>

      <FormLogin />

    </AuthLayoutPage>
  )
}
