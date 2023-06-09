

export const ButtonPrimary = ( { title } ) => {


  return (
    
    <button 
      className="w-full  bg-green-600 h-[40px] sm:max-w-[160px]  rounded-full text-xs md:text-base
      hover:bg-green-500 transition-colors duration-300 ease-out" >
      { title }
    </button>
  )
}
