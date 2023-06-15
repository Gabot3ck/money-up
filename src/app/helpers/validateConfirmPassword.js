

export const validateConfirmPassword = (e, setValited, setError, password) => {
  const valueInput = e.target.value;
  

  if( valueInput.trim() !== "" ){
      if( password !== valueInput ){
          setValited(false);
          setError("La contraseña no coincide");
      } else {
          setValited(true);
          setError('');
      }
  } else {
      setValited(false);
      setError("Debe confirmar contraseña");
  }
}
