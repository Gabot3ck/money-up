import { FormLogin } from "../../app/components/forms/FormLogin";
import { AuthLayoutPage } from "../layout/AuthLayoutPage";



export const LoginPage = () => {

  return (
    <AuthLayoutPage >

      <div className="w-full px-4 mt-4 mb-12" >
        <h3 className="w-full font-medium text-xl text-start mb-2" >Iniciar sesión</h3>

        <p className="text-base" >Te ayudamos a lograr tus metas de la manera <br /> más facil y sencilla.</p>
      </div>

      <FormLogin />

    </AuthLayoutPage>
  )
}
