import { FormLogin } from "../../app/components/forms/FormLogin";
import { OrOfButtons } from "../../ui/components/OrOfButtons";
import { ButtonSecondary } from "../../ui/components/buttons/ButtonSecondary";
import { AuthLayoutPage } from "../layout/AuthLayoutPage";
import { FaGoogle, FaFacebook } from "react-icons/fa";


export const LoginPage = () => {


  return (
    <AuthLayoutPage >

    <div className="w-full px-4 mt-4 mb-12" >
      <h3 className="w-full font-medium text-xl text-start mb-2" >Iniciar sesión</h3>

      <p className="text-base" >Te ayudamos a lograr tus metas de la manera <br /> más facil y sencilla.</p>
    </div>

    <FormLogin />

    <div className="w-full px-4 my-8
                    flex flex-col gap-8 items-center justify-center " 
    >
      <OrOfButtons />

      <ButtonSecondary
        icon={ <FaGoogle /> }
        title={'Ingresar con Google'}
      />

      <ButtonSecondary
        icon={ <FaFacebook /> }
        title={'Ingresar con Facebook'}
      />

      <div className="w-full flex items-center justify-center gap-3 mt-6">
        <p className="text-sm" >¿No está registrado?</p>
        <p className="text-sm text-primary-500 font-medium" >Regístrese aquí</p>
      </div>

    </div>
      
    </AuthLayoutPage>
  )
}
