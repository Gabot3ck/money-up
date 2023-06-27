

export const ButtonPrimary = ( { title = 'Registrar', isChecking= false } ) => {


  return (
    
    <button
      disabled= { isChecking }
      className="w-full  h-[40px]
                text-sm sm:text-base text-dark-500 font-semibold
                bg-primary-500  rounded-full 
                hover:bg-primary-400 
                transition-colors duration-300 ease-out" 
    >
      { title }
    </button>
  )
}
