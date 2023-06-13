import { FaDollarSign } from "react-icons/fa"
import { ButtonPrimary } from "../../../ui/components/buttons"


export const FormRegisterSalary = () => {


  return (
    <form className=" w-full 
                      flex px-4 flex-col justify-center items-center gap-8"
    >
      <div className="w-full p-3 h-[120px] mb-20
                      flex justify-center items-center
                      bg-white shadow-xl" 
      >
        <span className="w-[40%] pr-2 flex justify-end gap-8 items-center" >
          CLP
          <FaDollarSign />
        </span>

        <input
          className=" w-[60%] h-10 rounded py-2 px-4
                      border-2  border-slate-200 focus:border-primary-500 focus:ring-primary-500 focus:outline-none"
          type="text" 
        />
      </div>

      <ButtonPrimary title="Continuar" />
    </form>
  )
}
