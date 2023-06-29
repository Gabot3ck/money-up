import { BiCalendar } from "react-icons/bi";
import { TfiDashboard } from "react-icons/tfi";
import { ButtonFooter } from "./buttons/ButtonFooter";
import { MdAddCircle } from "react-icons/md";

export const FooterMain = () => {


  return (
    <div 
      className="w-full h-12
                  bg-primary-500" 
    >
      <div
        className="mx-auto
                  max-w-screen-lg h-full
                  text-light-500 
                  flex items-center justify-between"
      >
        <ButtonFooter 
          icon= { <BiCalendar /> }
          text="Calendario"
        />

        <span className="text-xs h-full flex items-end pb-1" >
          Agregar movimientos
        </span>

        {/* <ButtonFooter 
          icon= { <MdAddCircle /> }
          text="Agregar movimientos"
        /> */}
        
        <ButtonFooter 
          icon= { <TfiDashboard /> }
          text="Dashboard"
        />

        <div className="absolute bottom-0
                        w-10 h-10
                        flex justify-center items-center
                        text-primary-500 
                        rounded-full bg-white"
        style={{left:'calc(50% - 20px)'}}>
          <span className="text-4xl">
            <MdAddCircle />
          </span>
        </div>
        
      </div>
      
    </div>
  )
}
