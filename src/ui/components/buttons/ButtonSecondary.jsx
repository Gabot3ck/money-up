

export const ButtonSecondary = ( { icon, title, onClick, disabled } ) => {
  return (
    <button
      disabled={ disabled }
      onClick={ onClick }
      className="w-full h-[40px] 
                flex items-center justify-center 
                text-primary-500 text-sm sm:text-base
                border  border-primary-500 rounded-full
                bg-transparent
                hover:text-primary-400  hover:border-primary-400
                transition-colors duration-300 ease-out" 
      >
      <span className="w-[40%] pr-5  sm:w-[40%] flex justify-end " >
        { icon }
      </span>

      <span className="w-[55%] sm:w-[60%] flex justify-start" >
        { title }
      </span>
    </button>
  )
}
