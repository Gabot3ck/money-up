

export const ButtonSecondary = ( { title } ) => {
  return (
    <button 
      className="w-full sm:max-w-[320px] h-[40px]       
                text-green-600 text-xs md:text-base
                border  border-green-600 rounded-full
                bg-transparent
                hover:text-green-500  hover:border-green-500
                transition-colors duration-300 ease-out" 
      >
      { title }
    </button>
  )
}
