

export const ButtonPrimary = ( { title = 'Registrar' } ) => {


  return (
    
    <button 
      className="w-full sm:max-w-[160px] h-[40px]
                text-xs sm:text-base text-dark-500
                bg-primary-500  rounded-full 
                hover:bg-primary-400 
                transition-colors duration-300 ease-out" 
    >
      { title }
    </button>
  )
}
