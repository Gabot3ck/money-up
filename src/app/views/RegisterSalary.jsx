import { FormRegisterSalary } from "../components/forms/FormRegisterSalary"


export const RegisterSalary = () => {
  
  
  return (<>
    <div className="w-full px-4 py-2 h-full
                    flex flex-col justify-start items-center " >
      <div className=" w-full px-4 mt-4 mb-20 ">
        <h3 className="w-full font-medium text-xl text-start mb-2" >Registrar sueldo</h3>

        <p className="text-base" >¿Cuál es su sueldo mensual actual?</p>
      </div>

      <FormRegisterSalary />
    </div>
    
  </>)
}
