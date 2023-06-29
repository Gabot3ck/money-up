

export const ButtonFooter = ( { icon, text } ) => {
  return (
    <div className=" w-[90px] h-full 
                    flex flex-col justify-center items-center" 
    >
      <span className="text-xl" >
        { icon }
      </span>

      <span className="text-xs" >
        { text }
      </span>
    </div>
  )
}
