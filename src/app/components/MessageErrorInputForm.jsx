

export const MessageErrorInputForm = ( { errorMessage }) => {
  return (
    <span className=' text-alert-500 text-sm font-medium'>
          { errorMessage !== "" ? errorMessage : "" }
        </span>
  )
}
