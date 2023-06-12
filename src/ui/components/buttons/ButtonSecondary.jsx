

export const ButtonSecondary = ( { icon, title } ) => {
  return (
    <button 
      className="w-full sm:max-w-[320px] h-[40px] 
                flex items-center justify-center 
                text-primary-500 text-sm sm:text-base
                border  border-primary-500 rounded-full
                bg-transparent
                hover:text-primary-400  hover:border-primary-400
                transition-colors duration-300 ease-out" 
      >
      <span className="w-[40%] pr-5  sm:w-[20%] flex justify-end " >
        { icon }
      </span>

      <span className="w-[55%] sm:w-[60%] flex justify-start" >
        { title }
      </span>
    </button>
  )
}
