

export const ButtonPrimary = ( { title } ) => {


  return (
    
    <button 
      className="w-full sm:max-w-[160px] h-[40px]
                text-xs sm:text-base
                bg-green-600  rounded-full 
                hover:bg-green-500 
                transition-colors duration-300 ease-out" 
    >
      { title }
    </button>
  )
}
