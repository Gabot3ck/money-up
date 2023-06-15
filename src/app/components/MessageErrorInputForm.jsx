

export const MessageErrorInputForm = ( { messageError }) => {
  return (
    <span className=' text-alert-500 text-sm font-medium'>
          { messageError !== "" ? messageError : "" }
        </span>
  )
}
